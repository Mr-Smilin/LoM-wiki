---
title: 官方更新頁面模塊說明
description:
aside: true
outline: [2, 4]
sidebar: true
borderless: false
tags:
    - dev
    - develop
    - developer
    - 開發
    - markdown
    - 協作
    - example
    - template
---

# {{ $frontmatter.title }}

[官方更新頁](/develop/1-start.html)

## 更新說明

目前的官方更新頁面在 github 並沒有直接對應於一個.md 檔案,  
目前的機制採用 build wiki 時,  
利用 `vitepress` 的 `include` 功能,  
將一個個的.md 檔案引入到該頁面中,  
以下為自動產生的 news.md 範本示例。

```
--- // [!code --]
title: 官方更新 // [!code --]
tags: // [!code --]
  - news // [!code --]
  - 新聞 // [!code --]
  - 遊戲更新 // [!code --]
  - 更新 // [!code --]
--- // [!code --]
// [!code --]
# {{ $frontmatter.title }} // [!code --]
<!--@include: @/other/news/{日期}-{次序}-{md摘要}.md-->
<!--@include: @/other/news/20240628-03-demoUpdate.md-->
<!--@include: @/other/news/20240628-02-release.md-->
<!--@include: @/other/news/20240628-01-release.md-->
<!--@include: @/other/news/20240627-01-release.md-->
```

## 如何命名

命名規則如下, 日期為`8碼數字`, 如`20240708`  
次序為`2碼數字`, 如`01`, `02`, `03`... 用來表示當天的第幾則資訊  
(不管是哪一種分類都視為同樣, 有幾個檔案就直接加數字就可以了。)  
md 摘要為一個分類 key, 共四種:

| key | 中文標籤 | 用於 | 對應 Steam 標籤 |
|---|---|---|---|
| `release` | 遊戲更新 | 正式版例行版本/修正更新 | `patchnotes` |
| `demoUpdate` | 試玩版更新 | DEMO/試玩版更新 | (試玩版時期, 現已結束) |
| `majorUpdate` | 重大更新 | 具名大型更新**正式上線**時 (如《崆峒神威》) | 無專屬標籤, 手動指定 |
| `announce` | 公告/新聞 | 非版本更新的一切: PV、預告、活動、聲明 | 無標籤 |

自動抓取時 (`node tools/fetchNews.js`) 只能靠 Steam 標籤分類, 而 Steam 只有 `patchnotes` 與「無標籤」兩種, 所以自動化只會產出 `release` 或 `announce`。  
`majorUpdate` / `demoUpdate` 沒有對應標籤, 需在 merge 前手動把檔名 suffix 改掉。

然後將這三個資訊以`-`連接起來,  
最終以.md 結尾。

像是這樣: `20240628-02-release.md` 或 `20240628-01-demoUpdate.md` 都是可以的。

```
@/other/news/{日期}-{次序}-{md摘要}.md
```

## 如何使用

接著以 `@/other/news/20240705-02-demoUpdate.md`為例,  
本次更新以後, 會將此模塊直接引入到 news.md 中,  
因此不需要在每一次更新的時候,  
都要新增標題與文章 tag, title 等,  
那些都可以直接重複使用,  
上述`紅色部分`不需要再次寫入.md 中。

具體而言,  
若您需要新增官方更新,  
請先建立一個.md 檔, 依照命名格式,放在 `docs/other/news/` 底下  
寫完更新內容後執行 `npm run build` 就可以了。

```
## [試玩版更新 v2.1.4](https://store.steampowered.com/news/app/1859910/view/4267805297667980568?l=tchinese)

發表時間
2024 年 7 月 5 日 週五

功能調整

遊戲存檔路徑調整為
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\Save`


已有正式版的玩家，若要啟動硬碟中的DEMO版本，請先進行存檔備份

正式版本的存檔路徑，它是Steam雲端存檔同步的資料夾
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\{SteamId}`

如何查找你的SteamId：
個人檔案->帳戶詳細資料->帳戶名稱的下方
```

## 半自動抓取(尚未排程時的補償辦法)

目前**沒有**任何排程或 GitHub Action 會自動抓 Steam 新聞,  
所以在「自動化上線」之前,請用 `tools/fetchNews.js` 手動抓取當作補償辦法。

它會抓活俠傳 Steam 新聞,依分類產出符合上述格式的草稿檔到 `docs/other/news/`。

### 用法

```bash
node tools/fetchNews.js --selftest   # 純函式回歸測試, 印 "selftest OK" 即正常
node tools/fetchNews.js --dry-run    # 只列出會產生哪些檔, 不寫入
node tools/fetchNews.js              # 實際產出草稿檔
```

產完草稿後 → **人工檢查/微調內容** → 需要時把檔名 suffix 改成 `demoUpdate` / `majorUpdate` → `npm run build`。

### 運作方式

- **來源**：Steam RSS(`?l=tchinese`)提供正確的 view 連結、繁中標題、發表日期;
  Steam JSON API 提供 `tags` 與內文。兩者以同一個 unix `date` 對接
  (RSS 的 gid 才是正確連結,JSON API 的 gid 不同,不能用來組連結)。
- **分類**：只看 Steam 標籤 —— `patchnotes` → `release`,其餘 → `announce`。
  `demoUpdate` / `majorUpdate` 沒有對應標籤,需依上表判斷後手動改檔名 suffix。
- **去重**：掃現有檔案的 `/view/{gid}`,已存在就跳過(重複執行安全)。
- **排版**：自動套用本頁的舊風格(每行結尾兩個空格硬換行);
  `release` 另外把 Steam 的 `調整`/`修正` 標題改成 `功能調整`/`功能修正`。
- **防呆**：RSS 解析到 0 則會直接報錯(避免 feed 格式改變時靜默當成「沒有新聞」);
  某則對不到 API 內文時會 warn 提醒該篇 body 需手補。

::: warning 注意
產出為**草稿**,BBCode→markdown 為近似轉換,發表日期取 Steam 發布時間(未必等於內文標註的更新日),請 merge 前人工確認。
:::
