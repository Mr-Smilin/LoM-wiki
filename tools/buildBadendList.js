// This script is used to generate the news list in the news.md file
const fs = require("fs");
const TARGET_NEWS_PATH = "./docs/event/badends";
// using news1.md to exp.
const SAVE_MARKDOWN_PATH = "./docs/public/json/badend_list.json";

try {
    fs.readdir(TARGET_NEWS_PATH, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            // unset files extension not .md
            files = files.filter(file => file.match(/badend-\d{1,2}\.md/)).map(file =>file.replace(/badend-|\.md/g, ""));

            // write data to replace the md file
            fs.writeFileSync(SAVE_MARKDOWN_PATH, "[" + files.join(", ") + "]", "utf8");
        }
    });
} catch (err) {
    console.error(err);
}