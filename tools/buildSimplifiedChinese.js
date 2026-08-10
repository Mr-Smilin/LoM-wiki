// 以繁體中文 root 文档为源，自动生成简体中文 locale (docs/zh-hans/)。
//
// 与 buildLocalePageManifest.js 等其它生成物一样，docs/zh-hans/ 整体为生成物，禁止手编辑。
// 每次运行先全量删除再重新生成，因此源页面删除后不会残留失效页面，可重复运行且结果稳定。
//
// 转换规则:
// - 使用 OpenCC (opencc-js) 的 tw2sp 方案 (台湾繁体 → 大陆简体 + 常用词汇)，
//   例如 資訊→信息、設定→设置、儲存→保存；游戏专名只做字形转换 (活俠傳→活侠传)。
// - code fence 按语言处理: markdown/无语言示例块转换中文文本 (教学示例与 clean-* 模板
//   的主体内容), 其它语言 (bash/js 等) 转换注释与字符串中的中文; 两类都保护 URL、
//   链接目标与路径 token，ASCII 标识符/组件名不受转换影响。
// - 行内代码中的中文同样转换 (多为界面文案示例)，其中的 URL 保持原样。
// - YAML frontmatter 逐行处理: 链接系 key (link/href/src/url) 的值只走 transformUrl，
//   其余行按普通文本转换 (key 名与路径均为 ASCII，不受转换影响)。
// - 简体页面是构建生成物，不具有独立 Git 源文件，因此统一关闭 editLink、lastUpdated
//   与 Nolebase Git Changelog；浏览器标题后缀改为简体「活侠传wiki」。
// - 站内绝对链接 (如 /event/badends) 若目标页面在 root 文档中实际存在，则重写为
//   /zh-hans/ 前缀; 外链、mailto、/images|/font|/json 等 public 资产、
//   /en|/ja 链接与相对链接保持不变。
// - URL 的路径部分永远不转换 (文件名/图片名保持繁体原名)，锚点部分跟随标题文字转换。
// - 文件名与目录结构保持与 root 一致 (仅转换文件内容)，因此相对链接与锚点无需改名。

const fs = require("fs");
const path = require("path");
const OpenCC = require("opencc-js");

const ROOT = path.resolve(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const OUT_DIR = path.join(DOCS, "zh-hans");
const LOCALE_PREFIX = "/zh-hans";

// 不作为源文档遍历的目录 (其它 locale / VitePress 配置 / 静态资产)
const EXCLUDE_DIRS = new Set(["en", "ja", "zh-hans", ".vitepress", "public"]);

// 台湾繁体 → 大陆简体 (含词汇转换, 等价 tw2sp)
const openccConvert = OpenCC.Converter({ from: "twp", to: "cn" });

// OpenCC 未覆盖的台湾惯用异体字, 追加一层替换 (姪→侄 等)
const VARIANTS = require("./zhHansVariantMap");
const VARIANT_RE = new RegExp(`[${Object.keys(VARIANTS).join("")}]`, "g");
const convert = (text) => openccConvert(text).replace(VARIANT_RE, (ch) => VARIANTS[ch]);

// docs/public/ 下的静态资产前缀 (如 /images/ /font/ /json/) 不做链接重写
const ASSET_PREFIXES = fs
    .readdirSync(path.join(DOCS, "public"))
    .map((name) => `/${name}/`);

// 与 config.mjs 的 markdown.container 全局标签一致的简体版
const CONTAINER_LABELS = {
    tip: "💡提示",
    warning: "⚠️警告",
    danger: "☢️危险",
    info: "📃内容",
    details: "📖详细内容",
};

// 简体镜像页的派生内容标记。源页面若显式设置这些字段，也由生成规则覆盖，避免
// 指向不存在的 docs/zh-hans Git 文件或显示错误的 Git 更新时间/历史。
const GENERATED_FRONTMATTER = [
    "editLink: false",
    "lastUpdated: false",
    "gitChangelog: false",
    'titleTemplate: "活侠传wiki"',
];
const GENERATED_FRONTMATTER_KEYS = /^(?:editLink|lastUpdated|gitChangelog|titleTemplate):\s*/;

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
// 锚点部分跟随转换后的标题文字转换; 站内已存在页面加 /zh-hans 前缀
function transformUrl(url) {
    if (!url || /^(?:https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(url)) {
        return url;
    }
    if (/^\/(?:en|ja|zh-hans)(?:\/|$)/.test(url)) return url; // 已带 locale 前缀
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

// 转换非 code fence 行; inline code 段中的中文也转换 (多为界面文案/示例文字),
// 但其中的 URL 保持原样 (config.mjs 等 ASCII 标识符不受转换影响)
// 链接参照定义 ([label]: url) 的 URL 走 transformUrl; 脚注定义 ([^n]: 正文) 不在此列, 按普通文本处理
function transformInline(line) {
    // VitePress include 指令: <!--@include: @/path.md--> 目标为 root 页面时改指 zh-hans 镜像,
    // 否则简体页面会把繁体原文 include 进来 (江湖快报正文即属此类)
    const inc = line.match(/^(\s*<!--\s*@include:\s*)@(\/[^\s>{]+)((?:\{[^}]*\})?\s*-->\s*)$/);
    if (inc) {
        if (pageExists(inc[2])) return `${inc[1]}@/zh-hans${inc[2]}${inc[3]}`;
        return line;
    }
    // 无自定义标题的 container 指令补上简体标签 (全局 container 标签为繁体且无法按 locale 配置)
    const container = line.match(/^(\s*:::\s*)(tip|warning|danger|info|details)\s*$/i);
    if (container) {
        const label = CONTAINER_LABELS[container[2].toLowerCase()];
        return `${container[1]}${container[2].toLowerCase()} ${label}`;
    }
    const refDef = line.match(/^(\s{0,3}\[(?!\^)[^\]]+\]:[ \t]*)(\S+)(\s*)$/);
    if (refDef) return refDef[1] + transformUrl(refDef[2]) + refDef[3];
    return line
        .split(/(`+[^`]*?`+)/g)
        .map((seg, i) => (i % 2 === 1 ? convertInlineCode(seg) : transformTextWithLinks(seg)))
        .join("");
}

// 行内代码: 转换其中的中文字形, URL 保持原样
function convertInlineCode(seg) {
    return seg
        .split(/(https?:\/\/[^\s`]+)/g)
        .map((part, i) => (i % 2 === 1 ? part : convert(part)))
        .join("");
}

// Markdown 示例代码块 (markdown/md/无语言): 转换中文文本,
// 链接/图片只转换可见标签, 目标地址与 HTML 属性值、URL 保持原样 (不加重写, 保持示例语义)
function convertExampleMarkdown(line) {
    const RE =
        /(!?\[[^\]]*\]\()([^)\s]+)(\s*(?:"[^"]*")?\))|(\b(?:href|src)="[^"]+")|(https?:\/\/[^\s)"'<]+)/g;
    let out = "";
    let last = 0;
    for (const m of line.matchAll(RE)) {
        out += convertWithInlineCode(line.slice(last, m.index));
        if (m[2] !== undefined) {
            const label = m[1].replace(/^(!?\[)([^\]]*)(\]\()$/, (a, p, t, s) => p + convert(t) + s);
            out += label + m[2] + m[3];
        } else {
            out += m[0];
        }
        last = m.index + m[0].length;
    }
    out += convertWithInlineCode(line.slice(last));
    return out;
}

function convertWithInlineCode(text) {
    return text
        .split(/(`+[^`]*?`+)/g)
        .map((seg, i) => (i % 2 === 1 ? convertInlineCode(seg) : convert(seg)))
        .join("");
}

// 代码示例块 (bash/js/vue 等): 转换中文 (注释与示例字符串),
// 但保护 URL 与路径 token (真实文件名/路径不可转换)
function convertCodeText(line) {
    const RE = /(https?:\/\/[^\s)"'<]+)|((?:~|\.{1,2})?\/[^\s"'`<>]+)/g;
    let out = "";
    let last = 0;
    for (const m of line.matchAll(RE)) {
        out += convert(line.slice(last, m.index));
        out += m[0];
        last = m.index + m[0].length;
    }
    out += convert(line.slice(last));
    return out;
}

// 逐行扫描处理 code fence:
// - 围栏行本身原样保留 (嵌套示例里长度 ≥ 外层才视为闭合, 支持 ```` 内嵌 ```)
// - markdown/md/无语言块按 Markdown 示例转换, 其它语言按代码示例转换
const MARKDOWN_FENCE_LANGS = new Set(["", "md", "markdown"]);
function transformBody(body) {
    const lines = body.split("\n");
    const out = [];
    let fence = null; // { marker, len, lang }
    for (const line of lines) {
        if (fence !== null) {
            const close = line.match(/^\s*(`{3,}|~{3,})\s*$/);
            if (close && close[1][0] === fence.marker && close[1].length >= fence.len) {
                fence = null;
                out.push(line);
                continue;
            }
            out.push(
                MARKDOWN_FENCE_LANGS.has(fence.lang)
                    ? convertExampleMarkdown(line)
                    : convertCodeText(line)
            );
            continue;
        }
        const open = line.match(/^\s*(`{3,}|~{3,})([^`]*)$/);
        if (open) {
            fence = {
                marker: open[1][0],
                len: open[1].length,
                lang: (open[2].trim().split(/\s+/)[0] || "").toLowerCase(),
            };
            out.push(line);
            continue;
        }
        out.push(transformInline(line));
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

function applyGeneratedFrontmatter(fm) {
    const base = fm
        .split("\n")
        .filter((line) => !GENERATED_FRONTMATTER_KEYS.test(line))
        .join("\n")
        .replace(/\n+$/, "");
    return [base, ...GENERATED_FRONTMATTER].filter(Boolean).join("\n");
}

// 镜像到 zh-hans 后文件比 root 深一级, 指向排除目录 (如 .vitepress) 的相对 import
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
    const body = fm ? content.slice(fm[0].length) : content;
    const convertedBody = fixRelativeImports(transformBody(body));
    const convertedFrontmatter = fm ? transformFrontmatter(fm[1]) : "";
    const generatedFrontmatter = applyGeneratedFrontmatter(convertedFrontmatter);
    return `---\n${generatedFrontmatter}\n---\n${convertedBody}`;
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
    console.log(`Simplified Chinese locale generated: ${count} files -> docs/zh-hans`);
}

main();
