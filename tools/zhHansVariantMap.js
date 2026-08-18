// OpenCC tw2sp 未覆盖的台湾惯用异体字 → 大陆规范字形。
// buildSimplifiedChinese.js (生成时追加转换) 与 checkSimplifiedChinese.js (残留判定) 共用此表。
// 收录原则: 大陆《通用规范汉字表》不收的台湾惯用字形, 且在 root 文档中实际出现。
// 例如 師姪孫→师侄孙、妳→你 (大陆不区分性别第二人称)、牠→它 (大陆动物代词用「它」)。
module.exports = {
    姪: "侄",
    妳: "你",
    牠: "它",
    搥: "捶",
};
