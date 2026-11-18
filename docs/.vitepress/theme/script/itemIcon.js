import { withBase } from "vitepress";

// 道具圖示的檔名規則，給 ItemIcon 與各種列表共用：
//   圖示　docs/public/images/items/${type}s/item_${type}_${no}.webp
//   底框　docs/public/images/generic/background/icon_item_back_3.webp
export function itemIconSrc(type, no) {
    return withBase(`/images/items/${type}s/item_${type}_${no}.webp`);
}

export function itemIconBack() {
    return withBase("/images/generic/background/icon_item_back_3.webp");
}
