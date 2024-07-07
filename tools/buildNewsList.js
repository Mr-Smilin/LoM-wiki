const fs = require("fs");

const TARGET_NEWS_PATH = "./docs/other/news";
// TARGET FILE TEMPLATE <!--@include: @/other/news/[fileName]-->
const GENERATE_PREFIX = "<!--@include: @/other/news/";
const GENERATE_SUFFIX = "-->";
// using news1.md to exp.
const SAVE_MARKDOWN_PATH = "./docs/other/news2.md";

try {
    fs.rm("./docs/other/news1.md");
    fs.readdir(TARGET_NEWS_PATH, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            // unset files extension not .md
            files = files.filter(file => file.slice(-3) === ".md");

            // sort by file name
            files.sort((a, b) => {
                const fileA = a.toUpperCase(); // ignore upper and lowercase
                const fileB = b.toUpperCase(); // ignore upper and lowercase
                if (fileA < fileB) {
                    return 1;
                }
                if (fileA > fileB) {
                    return -1;
                }
                return 0;
            });

            // add prefix GENERATE_PREFIX to files
            // form: <!--@include: @/other/news/[fileName]-->
            files = files.map(file => GENERATE_PREFIX + file + GENERATE_SUFFIX);

            // console.log(files);

            const MARKDOWN_HEAD = "---\n" +
                "title: 官方更新\n" +
                "tags:\n" +
                "  - news\n" +
                "  - 新聞\n" +
                "  - 遊戲更新\n" +
                "  - 更新\n" +
                "---\n" +
                "\n" +
                "# {{ $frontmatter.title }}\n" +
                "\n"

            // write data to replace the md file
            fs.writeFileSync(SAVE_MARKDOWN_PATH, MARKDOWN_HEAD + files.join("\n"), "utf8");
        }
    });
} catch (err) {
    console.error(err);
}