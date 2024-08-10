// This script is used to generate the news list in the news.md file
const fs = require("fs");
const TARGET_NEWS_PATH = "./docs/other/news";
// TARGET FILE TEMPLATE <!--@include: @/other/news/[fileName]-->
const GENERATE_PREFIX = "<!--@include: @/other/news/";
const GENERATE_SUFFIX = "-->";
// using news1.md to exp.
const SAVE_MARKDOWN_PATH = "./docs/other/news.md";
const MONTH_HEAD_TEMPLATE = "# 江湖快報 {year}年 {month}月號";

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

            let outputArray = [];
            let year = "";
            let month = "";

            for (let i = 0; i < files.length; i++) {
                let fileName = files[i];
                // classify by year and month
                if (year !== fileName.slice(0, 4) || month !== fileName.slice(4, 6)) {
                    year = fileName.slice(0, 4);
                    month = fileName.slice(4, 6);
                    let yearWord = yearMapping(year);
                    let monthWord = monthMapping(month);
                    let montTitle = MONTH_HEAD_TEMPLATE.replace("{year}", yearWord).replace("{month}", monthWord);
                    outputArray.push(montTitle);
                }

                // add prefix GENERATE_PREFIX to files
                // form: <!--@include: @/other/news/[fileName]-->
                outputArray.push(GENERATE_PREFIX + fileName + GENERATE_SUFFIX);
            }

            const MARKDOWN_HEAD = "---\n" +
                "title: 江湖快報(官方更新)\n" +
                "tags:\n" +
                "  - news\n" +
                "  - 新聞\n" +
                "  - 遊戲更新\n" +
                "  - 更新\n" +
                "outline: [1, 2, 3]" +
                "gitChangelog: false\n" +
                "---\n" +
                "\n"

            // write data to replace the md file
            fs.writeFileSync(SAVE_MARKDOWN_PATH, MARKDOWN_HEAD + outputArray.join("\n"), "utf8");
        }
    });
} catch (err) {
    console.error(err);
}

function yearMapping(year) {
    let wordMapping = {
        "0": "〇",
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九"
    }

    let returnArray = [];
    for (let i = 0; i < year.length; i++) {
        returnArray[i] = wordMapping[year[i]]
    }
    return returnArray.join("");
}

function monthMapping(month) {
    let wordMapping = {
        "01": "一",
        "02": "二",
        "03": "三",
        "04": "四",
        "05": "五",
        "06": "六",
        "07": "七",
        "08": "八",
        "09": "九",
        "10": "十",
        "11": "十一",
        "12": "十二"
    }
    return wordMapping[month];
}