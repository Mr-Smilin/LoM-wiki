---
title: Markdown 基本知識 & 頁面模板
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

# Markdown 基本知識 & 頁面模板

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

本站頁面都是 `.md` 檔，也就是使用 `Markdown` 進行撰寫

關於 `Markdown` 的基本知識，網路上教學眾多  
對於第一次接觸 Markdown 的人，建議參考[這篇文章](https://markdown.tw)

本文會列出與傳統 `Markdown` 不同，  
額外支援的撰寫格式。

## .md 模板

```
---
title:
tags:
---

# 標題
```

首先當要創建頁面時，新建一個 `.md` 檔在 `docs` 底下  
檔名務必是純英文跟`-`組成

兩個 `---` 中間有 `title` 跟 `tags`，  
`title` 請跟 #標題 中的 標題使用同樣的字串，  
`tags` 用來標記這篇文章主要提供哪些內容，  
例如人物列傳，會有人物的介紹，可能還會細部分類他的故事，甚至時間軸  
那`tags`就可以是人物，故事，時間軸

```
tags:
  - 人物
  - 故事
  - 時間軸
```

這樣子去做撰寫。

除了這兩個參數以外，還有其他比較常用到的參數

-   `aside: false`  
    默認為 `true`，設成 `false` 可以讓右側的標題導覽消失，  
    覺得頁面不夠大的時候可以加上這一行。

-   `outline: [2, 3]`
    決定右側標題導覽要抓取的標題區間，
    默認為 2，也就是只抓前綴為 `##` 的標題到導覽  
    如範例設定 [2, 3]，則會將 `###` 的標題放在 `##` 底下。

-   `sidebar: false`
    默認為 `true`，設成 `false` 可以讓左側的側邊欄消失，  
    覺得頁面不夠大的時候可以加上這一行。

除此以外的表頭屬性，可參考[官方文檔](https://vitepress.dev/zh/reference/default-theme-home-page)

## vitepress 的自訂 markdown

**格式**

```md
::: info
這是消息盒子
:::

::: tip
這是提示盒子
:::

::: tip 改名
這是改變標題的提示盒子  
此處列出的所有盒子都可以改變標題喔！
:::

::: warning
這是警告盒子
:::

::: danger
這是危險盒子
:::

::: details
這是可以收納折疊的盒子
:::
```

**結果**

::: info
這是消息盒子
:::

::: tip
這是提示盒子
:::

::: tip 改名
這是改變標題的提示盒子  
此處列出的所有盒子都可以改變標題喔！
:::

::: warning
這是警告盒子
:::

::: danger
這是危險盒子
:::

::: details
這是可以收納折疊的盒子
:::

## HTML5

我們可以在 `.md` 檔中使用 `HTML5` 的語法  
比如說， `Markdown` 的表格是長這樣的

```
| ID | 姓名  |
|----|-----|
| 1  | 微笑A |
| 2  | 微笑B |
```

這個表格可以替換成 `HTML` 如以下

```
<table>
    <tr>
        <td>ID</td>
        <td>姓名</td>
    </tr>
    <tr>
        <td>1</td>
        <td>微笑A</td>
    </tr>
    <tr>
        <td>2</td>
        <td>微笑B</td>
    </tr>
</table>
```

當資料量增加時，  
相比起 `Markdown` 原本的表格，`HTML` 的表格格式更易於維護。

## 外部工具

-   [線上轉換 Excel 為 Markdown 或 Html 表格的工具](https://tableconvert.com/zh-tw/excel-to-html)  
    對複雜的表格格式不起做用，但在搬運資料時很有用。
