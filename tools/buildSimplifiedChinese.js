// 以繁體中文 root 文档为源，自动生成简体中文 locale (docs/zh-cn/)。
//
// 与 buildLocalePageManifest.js 等其它生成物一样，docs/zh-cn/ 整体为生成物，禁止手编辑。
// 每次运行先全量删除再重新生成，因此源页面删除后不会残留失效页面，可重复运行且结果稳定。
//
// 转换规则:
// - 使用 OpenCC (opencc-js) 的 tw2sp 方案 (台湾繁体 → 大陆简体 + 常用词汇)，
//   例如 資訊→信息、設定→设置、儲存→保存；游戏专名只做字形转换 (活俠傳→活侠传)。
// - 保护 code fence 与 inline code，不转换其中内容。
// - YAML frontmatter 逐行处理: 链接系 key (link/href/src/url) 的值只走 transformUrl，
//   其余行按普通文本转换 (key 名与路径均为 ASCII，不受转换影响)。
// - 站内绝对链接 (如 /event/badends) 若目标页面在 root 文档中实际存在，则重写为
//   /zh-cn/ 前缀; 外链、mailto、/images|/font|/json 等 public 资产、
//   /en|/ja 链接与相对链接保持不变。
// - URL 的路径部分永远不转换 (文件名/图片名保持繁体原名)，锚点部分跟随标题文字转换。
// - 文件名与目录结构保持与 root 一致 (仅转换文件内容)，因此相对链接与锚点无需改名。

const fs = require("fs");
const path = require("path");
const OpenCC = require("opencc-js");

const ROOT = path.resolve(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const OUT_DIR = path.join(DOCS, "zh-cn");
const LOCALE_PREFIX = "/zh-cn";

// 不作为源文档遍历的目录 (其它 locale / VitePress 配置 / 静态资产)
const EXCLUDE_DIRS = new Set(["en", "ja", "zh-cn", ".vitepress", "public"]);

// 台湾繁体 → 大陆简体 (含词汇转换, 等价 tw2sp)
const convert = OpenCC.Converter({ from: "twp", to: "cn" });

// docs/public/ 下的静态资产前缀 (如 /images/ /font/ /json/) 不做链接重写
const ASSET_PREFIXES = fs
    .readdirSync(path.join(DOCS, "public"))
    .map((name) => `/${name}/`);

// 收集源文档文件列表 (相对 docs/ 的路径, 统一为 / 分隔)
function collectSourceFiles() {
    const files = [];
    const walk = (dir, rel) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const entryRel = rel ? `${rel}/${entry.name}` : entry.name;
            if (entry.isDirectory()) {
                walk(path.join(dir, entry.name), entryRel);
            } else {
                files.push(entryRel);
            }
        }
    };
    for (const entry of fs.readdirSync(DOCS, { withFileTypes: true })) {
        if (EXCLUDE_DIRS.has(entry.name)) continue;
        if (entry.isDirectory()) {
            walk(path.join(DOCS, entry.name), entry.name);
        } else {
            files.push(entry.name);
        }
    }
    return files;
}

// 由源 md 文件建立「实际存在的页面路径」集合, 供链接重写时判定站内页面
const pageRoutes = new Set();
function buildPageSet(files) {
    for (const rel of files) {
        if (!rel.endsWith(".md")) continue;
        const noExt = `/${rel.slice(0, -".md".length)}`;
        pageRoutes.add(noExt);
        pageRoutes.add(`${noExt}.md`);
        pageRoutes.add(`${noExt}.html`);
        if (noExt.endsWith("/index")) {
            const dir = noExt.slice(0, -"/index".length);
            if (dir) {
                pageRoutes.add(dir);
                pageRoutes.add(`${dir}/`);
            } else {
                pageRoutes.add("/");
            }
        }
    }
}

function pageExists(urlPath) {
    if (pageRoutes.has(urlPath)) return true;
    const stripped = urlPath.replace(/\/+$/, "");
    return (
        pageRoutes.has(stripped) ||
        pageRoutes.has(`${stripped}/index`) ||
        pageRoutes.has(`${stripped}/index.md`) ||
        pageRoutes.has(`${stripped}/index.html`)
    );
}

// 处理单个 URL: 路径部分保持原样 (繁体文件名/图片名不可转换)，
// 锚点部分跟随转换后的标题文字转换; 站内已存在页面加 /zh-cn 前缀
function transformUrl(url) {
    if (!url || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(url)) {
        return url;
    }
    if (/^\/(?:en|ja|zh-cn)(?:\/|$)/.test(url)) return url; // 已带 locale 前缀
    const m = url.match(/^([^?#]*)([?#][\s\S]*)?$/);
    const pathPart = m[1];
    let suffix = m[2] || "";
    const hashIdx = suffix.indexOf("#");
    if (hashIdx !== -1) {
        suffix = suffix.slice(0, hashIdx) + "#" + convert(suffix.slice(hashIdx + 1));
    }
    if (!pathPart) return suffix; // 纯锚点
    if (!pathPart.startsWith("/")) return pathPart + suffix; // 相对链接在镜像目录结构下原样有效
    if (ASSET_PREFIXES.some((prefix) => pathPart.startsWith(prefix))) {
        return pathPart + suffix;
    }
    if (!pageExists(pathPart)) return pathPart + suffix;
    return LOCALE_PREFIX + pathPart + suffix;
}

// 先切出行内链接/图片/HTML 属性中的 URL (路径不转换)，其余文本做繁简转换
function transformTextWithLinks(text) {
    const URL_RE =
        /(!?\[[^\]]*\]\()([^)\s]+)(\s*(?:"[^"]*")?\))|(\b(?:href|src)=")([^"]+)(")/g;
    let out = "";
    let last = 0;
    for (const m of text.matchAll(URL_RE)) {
        out += convert(text.slice(last, m.index));
        if (m[2] !== undefined) {
            // m[1] 为 ![label]( 或 [label]( 部分: label 是可见文字需要转换
            const label = m[1].replace(/^(!?\[)([^\]]*)(\]\()$/, (a, p, t, s) => p + convert(t) + s);
            out += label + transformUrl(m[2]) + m[3];
        } else {
            out += m[4] + transformUrl(m[5]) + m[6];
        }
        last = m.index + m[0].length;
    }
    out += convert(text.slice(last));
    return out;
}

// 转换非 code fence 行; inline code 段保持原样; 参照式链接定义的 URL 走 transformUrl
function transformInline(line) {
    const refDef = line.match(/^(\s{0,3}\[[^\]]+\]:[ \t]*)(\S+)(\s*)$/);
    if (refDef) return refDef[1] + transformUrl(refDef[2]) + refDef[3];
    return line
        .split(/(`+[^`]*?`+)/g)
        .map((seg, i) => (i % 2 === 1 ? seg : transformTextWithLinks(seg)))
        .join("");
}

// 逐行扫描, code fence (``` 或 ~~~) 内的行原样保留
function transformBody(body) {
    const lines = body.split("\n");
    const out = [];
    let fenceMarker = null;
    for (const line of lines) {
        const fence = line.match(/^\s*(`{3,}|~{3,})/);
        if (fence) {
            const marker = fence[1][0];
            if (fenceMarker === null) {
                fenceMarker = marker;
            } else if (marker === fenceMarker && /^\s*(`{3,}|~{3,})\s*$/.test(line)) {
                fenceMarker = null;
            }
            out.push(line);
            continue;
        }
        out.push(fenceMarker === null ? transformInline(line) : line);
    }
    return out.join("\n");
}

// frontmatter 逐行处理, 保持 YAML 结构与注释不变; 链接系 key 的值只走 transformUrl
function transformFrontmatter(fm) {
    return fm
        .split("\n")
        .map((line) => {
            const m = line.match(/^(\s*-?\s*(?:link|href|src|url):\s*)(\S+)(\s*)$/);
            if (m) return m[1] + transformUrl(m[2]) + m[3];
            return transformTextWithLinks(line);
        })
        .join("\n");
}

// 镜像到 zh-cn 后文件比 root 深一级, 指向排除目录 (如 .vitepress) 的相对 import
// 需要补一层 ../ (与 docs/en、docs/ja 中既有写法 './../.vitepress/...' 一致)
function fixRelativeImports(text) {
    return text.replace(
        /((?:import|export)\s[^'"]*from\s*|import\s*\(\s*)['"](\.{1,2}\/[^'"]+)['"]/g,
        (all, pre, importPath) => {
            const bare = importPath.replace(/^\.\//, "");
            const topDir = bare.split("/")[0];
            if (!EXCLUDE_DIRS.has(topDir)) return all;
            const fixed = importPath.startsWith("./")
                ? `./../${bare}`
                : `../${importPath}`;
            return `${pre}'${fixed}'`;
        }
    );
}

function transformMarkdown(content) {
    const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!fm) return fixRelativeImports(transformBody(content));
    const body = content.slice(fm[0].length);
    return `---\n${transformFrontmatter(fm[1])}\n---\n${fixRelativeImports(transformBody(body))}`;
}

function main() {
    const files = collectSourceFiles();
    buildPageSet(files);

    // 全量重建, 保证源页面删除后无残留
    fs.rmSync(OUT_DIR, { recursive: true, force: true });

    let count = 0;
    for (const rel of files) {
        const src = path.join(DOCS, ...rel.split("/"));
        const dest = path.join(OUT_DIR, ...rel.split("/"));
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        if (rel.endsWith(".md")) {
            fs.writeFileSync(dest, transformMarkdown(fs.readFileSync(src, "utf8")), "utf8");
        } else {
            fs.copyFileSync(src, dest);
        }
        count++;
    }
    console.log(`Simplified Chinese locale generated: ${count} files -> docs/zh-cn`);
}

main();
