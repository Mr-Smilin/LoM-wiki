---
title: Markdown 頁面模板
description: 開發新頁面使用的模板。
aside: true
outline: [2, 3]
sidebar: false
borderless: true
tags:
    - tag1
    - tag2
    - tag3
    - tag4
    - tag5
---

# {{ $frontmatter.title }}

## 二級標題 1
### 三級標題 1.1
### 三級標題 1.2

## 二級標題 2   
### 三級標題 2.1
### 三級標題 2.2
### 三級標題 2.3

## Markdown 文章常用語法與效果節錄
::: info
此處只列出常用語法，更多語法請參考[官方文件](https://markdown.tw)
:::

### 換行
在一個句子最後打上兩個空白，即為markdown換行效果。  
(萬一不行, 可考慮html換行效果：`<br>`)

```markdown
這是第一行  
這是第二行
```
效果：  
這是第一行  
這是第二行

### 超連結

```markdown
[超連結顯示文字](超連結網址)
```
效果：  
[超連結顯示文字](超連結網址)

注：若使用本地檔案，請使用相對路徑。

### 純文字塊(內建可複製)
```markdown  
純文字塊(內建可複製)
```

效果:    
```markdown  
純文字塊(內建可複製)
```

使用時請去掉反斜線
### 行內純文字塊(無內建複製)
```markdown
 `行內純文字塊`
```
效果(行內):  
hello `行內純文字塊`test

### 圖片
```markdown
![趙活的圖片,完整路徑](https://i.imgur.com/WlPuE8U.png)
![龍湘大頭貼, 相對路徑](/images/characters/girl_8/icon_girl8.png)
```
效果：  
![趙活的圖片,完整路徑](https://i.imgur.com/WlPuE8U.png)
![龍湘大頭貼, 相對路徑](/images/characters/girl_8/icon_girl8.png)

注：本地圖片放在`docs/public`下時，網址請使用相對路徑。



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
