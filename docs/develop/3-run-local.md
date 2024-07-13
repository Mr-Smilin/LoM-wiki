---
title: 如何在本地運行本 wiki
description: 本專案使用 `node` 版本為 `18.18.1`，有編輯權限可直接 `pull` 專案`
tags:
    - dev
    - develop
    - developer
    - 開發
    - 協作
    - npm
---

# 如何在本地端預覽修改結果

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

::: warning 💡 注意
本文檔面向有基本編程能力的開發人員  
對於部分基本概念會略過，請注意
:::

### <高級者說明>

本專案使用 `node` 版本為 `18.18.1`  
有編輯權限可直接 `pull` 專案，  
發 PR 請先`fork`

`clone` 至本地後，運行以下指令

```
npm install
npm run dev
```

順利的話，即可在 `localhost:5173` 看到網站，進行編輯。

往後執行只需執行 `npm run dev`

::: warning 💡 注意
協作專案，`push`檔案前請務必先`pull`一次，檢查是否存在更新的版本！
:::

### <菜雞版說明>

(1)點擊右上角圖案進入 github 頁面  
![](/images/develop/3-run-local/菜雞預覽教學01.jpg)  
(2)把 source code 下載到電腦中隨便找個地方解壓縮  
![](/images/develop/3-run-local/菜雞預覽教學02.jpg)  
(3)下載並安裝[NPM](https://nodejs.org/dist/v18.18.1/node-v18.18.1-x64.msi)與[GIT](https://git-scm.com/downloads)  
(4)於 source code 資料夾路徑輸入 CMD，會跳出該路徑的命令提示字元  
![](/images/develop/3-run-local/菜雞預覽教學03.jpg)  
(5)依序輸入 npm install 與 npm run dev  
![](/images/develop/3-run-local/菜雞預覽教學04.jpg)  
(6)在瀏覽器網址輸入 `localhost:5173/LoM-wiki/`
![](/images/develop/3-run-local/菜雞預覽教學05.jpg)  
(7)完成以上步驟後即可即時預覽儲存後的所有修改結果
