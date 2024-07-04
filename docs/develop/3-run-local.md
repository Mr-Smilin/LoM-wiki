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

# 如何在本地運行本 wiki

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

::: warning 💡 注意
本文檔面向有基本編程能力的開發人員  
對於部分基本概念會略過，請注意
:::

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
