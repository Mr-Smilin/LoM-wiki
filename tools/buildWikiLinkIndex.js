const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// 各 locale 的页面可能存在同名 frontmatter title (例如繁简字形相同的标题)，
// 因此索引值按 locale 分组: { [title]: { root: "...", "zh-hans": "...", ... } }。
// WikiLink 组件查表时优先取当前 locale 的页面，缺失时回退 root。
function localeOf(relativePath) {
  if (relativePath.startsWith("en/")) return "en";
  if (relativePath.startsWith("ja/")) return "ja";
  if (relativePath.startsWith("zh-hans/")) return "zh-hans";
  return "root";
}

function buildWikiLinkIndex(docsDir) {
  const linkIndex = {};

  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (path.extname(file) === ".md") {
        const content = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(content);

        if (data.title) {
          const relativePath = path
            .relative(docsDir, fullPath)
            .replace(/\\/g, "/");
          const locale = localeOf(relativePath);
          if (!linkIndex[data.title]) {
            linkIndex[data.title] = {};
          }
          linkIndex[data.title][locale] = relativePath.replace(
            /\.md$/,
            ".html"
          );
        }
      }
    }
  }

  traverseDirectory(docsDir);
  return linkIndex;
}

const projectRoot = path.resolve(__dirname, "..");

const docsDir = path.join(projectRoot, "docs");
const outputDir = path.join(
  projectRoot,
  "docs",
  ".vitepress",
  "theme",
  "script"
);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const linkIndex = buildWikiLinkIndex(docsDir);

const outputContent = `export default ${JSON.stringify(linkIndex, null, 2)};`;
fs.writeFileSync(path.join(outputDir, "wikiLinkIndex.js"), outputContent);

console.log("Wiki link index has been generated successfully.");
