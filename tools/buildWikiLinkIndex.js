const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

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
          const relativePath = path.relative(docsDir, fullPath);
          linkIndex[data.title] = relativePath.replace(/\.md$/, ".html");
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
