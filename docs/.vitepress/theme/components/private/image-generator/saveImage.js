// 圖片產生器共用: DOM 轉 JPEG 檔 + 依平台存檔 (由 ImageDownloadButton.vue 使用)。
// 不用 dom-to-image: 新版 Chrome 的 computed style 會列出 CSS 自訂屬性, VitePress 的
// --vp-icon-* 內含未跳脫的 "<svg", 會讓它組出的 SVG 解析失敗; 且它會嵌入全站 130+ 個字型 (36MB)。
import { toJpeg } from 'html-to-image';
import { saveAs } from 'file-saver';
import { withBase } from 'vitepress';

// iPadOS 會偽裝成 Mac, 以觸控點數辨識
const isIOS = () => /iP(hone|ad|od)/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

// 圖上只用到思源宋體 Bold, 只嵌這一個; 掛載時先預載, 點擊後才不會等太久而讓 iOS 失去手勢
let fontCss;
export function prepareFont() {
    fontCss ??= fetch(withBase('/font/SourceHanSerifTW-Bold.otf'))
        .then((r) => r.blob())
        .then((blob) => new Promise((resolve) => {
            const fr = new FileReader();
            fr.onload = () => resolve(`@font-face{font-family:'SourceHanSerifTW-Bold';src:url(${fr.result}) format('opentype');}`);
            fr.readAsDataURL(blob);
        }))
        .catch(() => ''); // 字型載不到就用系統字, 不擋產圖
    return fontCss;
}

// 把 node 以 scale 倍率輸出成 JPEG File。node 背景須不透明 (JPEG 無透明)。
export async function nodeToJpegFile(node, width, height, scale, filename) {
    const dataUrl = await toJpeg(node, {
        quality: 0.95,
        width,
        height,
        pixelRatio: scale,
        style: { transform: 'none' }, // 預覽用的縮放不帶進輸出
        fontEmbedCSS: await prepareFont(),
    });
    const blob = await (await fetch(dataUrl)).blob();
    return new File([blob], filename, { type: 'image/jpeg' });
}

// iOS(含 iPadOS) Safari 不支援程式化下載 blob, 改用 Web Share 讓使用者存到「照片/檔案」;
// 桌機/Android 用 saveAs 直接下載 (桌機 canShare 也可能為 true, 故限縮到 iOS)。
// 產圖太久失去使用者手勢時 share 會丟 NotAllowedError, 由呼叫端提供第二次點擊。
export async function saveFile(file) {
    if (isIOS() && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file] });
    } else {
        saveAs(file, file.name);
    }
}
