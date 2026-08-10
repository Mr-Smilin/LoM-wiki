const OpenCC = require("opencc-js");
const convert = OpenCC.Converter({ from: "twp", to: "cn" });
const candidates = "姪妳牠牀凜啣毘覈蹟卽旣佈嚐牆粵竝尅搥撲閒谿鷄獃娛嬤麽裏穫穗藴蘊慾愾悶吒屛佇彷彿";
for (const ch of candidates) {
    const c = convert(ch);
    if (c === ch) console.log("PASS-THROUGH:", ch);
}
