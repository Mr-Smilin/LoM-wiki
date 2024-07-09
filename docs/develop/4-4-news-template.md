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
(不管是`release`、`demoUpdate`都視為同樣, 有幾個檔案就直接加數字就可以了。)  
md 摘要為一個簡短的描述, 如`release`, `demoUpdate`...等。  
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
