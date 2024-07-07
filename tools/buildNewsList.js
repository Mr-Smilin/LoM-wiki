const fs = require("fs");

const TARGET_NEWS_PATH = "./docs/other/news";
const GENERATE_PREFIX = "@/docs/other/news";
const SAVE_PATH = "./docs/other/news/newsList.json";

try {
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
            files.map(file => GENERATE_PREFIX + "/" + file);

            // write prefixedFiles to SAVE_PATH
            fs.writeFileSync(SAVE_PATH, JSON.stringify(files, null, 4));
        }
    });
} catch (err) {
    console.error(err);
}