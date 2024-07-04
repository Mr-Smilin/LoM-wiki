---
title: Markdown 基本知識
description: 本文會列出與傳統 `Markdown` 不同，額外支援的撰寫格式。
outline: [2, 3]
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

本頁將提供給你協作時模板，  
以及最低限度的基礎教學，  
獻給每一位喜愛活俠、熱情貢獻的你。

## 可直接使用的模板
:::info
模板直接到該路徑 "複製"、"貼上" 到 "你想要的位置"， "更名" 後即可使用，
:::
:::danger
請勿直接"修改"、"刪除"、"重命名"、"移動"頁面模板，以免其他人使用上出現意外。
:::
### Markdown 頁面模板
[Markdown 頁面模板](/develop/template.md)  
路徑: `docs/develop/template.md`

### Markdown 頁面乾淨模板
[Markdown 頁面乾淨模板](/develop/clean-template.md)  
路徑: `docs/develop/clean-template.md`

## 寫在學習之前
```
你不用全部學完，也可以開始貢獻你的力量。  

你不用很厲害才能開始，但你開始了就會慢慢變得厲害。
```

## 參與項目建議知識 (建議補齊順序)
1. Html or md(markdown)擇一使用   
Html 學習資源：[W3C Html](https://www.w3schools.com/html/default.asp)  
md 學習資源：[Markdown 語法說明](https://markdown.tw)

::: tip
寫複雜的表格很可能html, md兩者都會同時使用，<br>
若寫簡單表格的話二者擇一使用即可。<br>
我們將完善、簡化此入門門檻，但這需要時間開發，<br>
希望能讓更多人能夠快速上手。
:::

2. (optional)CSS, Javascript, Vue.js, RWD概念  
CSS 學習資源：[W3C CSS](https://www.w3schools.com/css/default.asp)  
Javascript 學習資源：[MDN Web Docs](https://www.w3schools.com/js/)  
Vue.js 學習資源：[Vue.js 官方文件](https://cn.vuejs.org/)  

::: warning
此項基本皆為前端技術，不熟悉的話可以先略過。<br>
:::

RWD 學習資源：[W3C Responsive Web Design - Introduction](https://www.w3schools.com/css/css_rwd_intro.asp)
::: info
RWD 為響應式網頁設計， <br>
基本概念為在佈局時需要同時考慮桌機、手機、平板等不同裝置的顯示效果。
:::

3. vitepress 框架開發相關知識
ref: 
+ [rumtime API](https://vitepress.dev/reference/runtime-api#runtime-api)  
+ [Prev Next Links](https://vitepress.dev/reference/default-theme-prev-next-links)
+ [vitepress 官方文件](https://vitepress.dev/)
::: info
此項目可以使用的部分為 runtime API 與 Prev Next Links, <br>
其他部分有興趣可以慢慢看官方文件
:::

## Markdown 基本知識

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

本站頁面都是 `.md` 檔，也就是使用 `Markdown` 進行撰寫

關於 `Markdown` 的基本知識，網路上教學眾多  
對於第一次接觸 Markdown 的人，建議參考[這篇文章](https://markdown.tw)

本文會列出與傳統 `Markdown` 不同，  
額外支援的撰寫格式。

## .md 文件模板
### .md 文件頭說明 

```
---
title: 你的標題
description: 此份文件的描述
aside: false | true   //是否顯示右側導航列
outline: [2, 3]
sidebar: false | true  //是否顯示左側側邊欄
borderless: true | false  //是否有邊框
tags:
  - tag1
  - tag2
  - tag3
---

# {{ $frontmatter.title }}
```
首先當要創建頁面時，新建一個 `.md` 檔在 `docs` 底下，  
請依您的需求放入對應的資料夾(若不清楚請參考資料夾結構說明)   <!-- TODO: 待補資料夾結構說明 -->  
檔名務必是純英文、半形數字跟`-`組成, 例如 
```
example-page.md
```
此檔名在wiki中不會對外顯示

-   `title`  
    填入你的標題(可以是中文, 英文與數字)，此標題會對外顯示。   
    透過runtime API自動取得並顯示在`# {{ $frontmatter.title }}`的位置。  

-   `description`  
    用來描述此頁面的內容(不對外顯示)。  

-   `tag`  
    用來指定您創作文章的特性，可以有多個類別，也可以超過3個。
    一般來說`tag`是在不確定目標時輔助搜尋使用, 所以建議別打太長。

-   `aside: false`  
    默認為 `true`，設成 `false` 可以讓右側的標題導覽消失，  
    覺得頁面不夠大的時候可以加上這一行。

-   `outline: [2, 3]`  
    決定右側標題導覽要抓取的標題區間，
    默認為 2，也就是只抓前綴為 `##` 的標題到導覽  
    如範例設定 [2, 3]，則會將 `###` 的標題放在 `##` 底下。  
    本頁就有開啟此選項, 如右側的導覽。

-   `sidebar: false`  
    默認為 `true`，設成 `false` 可以讓左側的側邊欄消失，  
    覺得頁面不夠大的時候可以加上這一行。

-   `borderless: true` <Badge type="warning" text="自定義" />  
    默認為 `false`，設成 `true` 可以讓文章的寬度呈現無邊界樣式，  
    搭配上面的 `aside` 跟 `sidebar` 可以最大程度的拉伸內容，  
    內容如果會變化的話，寬度也會動態改變。

::: warning
除此以外的表頭屬性，可參考[官方文檔](https://vitepress.dev/zh/reference/default-theme-home-page)
:::

### .md 文件頭範例
```
---
title: 人物列傳-唐默鈴(小師妹)
description: 描述小師妹的人物故事、與展示小師妹的圖片、特點、癖好等。
aside: false
outline: [2, 3]
sidebar: true
borderless: true
tags:
  - 唐門
  - 可攻略女角
  - girl0
  - 矮
  - 內向
  - 天下第一
  - 官方內定預設女主角
---

# {{ $frontmatter.title }}
```

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


### 標題
標題只會使用兩種 ##, ###, 依序表示 H2, H3等級標題。  
且前須有空行、換行，標題後必須空一格，才會被認為是標題，否則會被視為一般文字。
```markdown

## 二級標題

### 三級標題
```
效果：

## 二級標題

### 三級標題

### 純文字塊(內建可複製)
純文字塊與反引號有高度關聯。  
其中可複製的文字塊，會在頭尾加上3個反引號(\`\`\`)，方便複製。  
`markdown`用來提示開發者，現在使用的是md檔案，建議加上。  

<pre><code>```markdown
  純文字塊(內建可複製)
```</code></pre>

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

::: warning
若確認有上傳圖片到正確位置，卻顯示不出來，那應該是給的路徑有問題。  
請給出上傳目標位置的圖片路徑，確認是否有上傳成功後再發問。
:::

```
### Markdown 頁面模板
[Markdown 頁面模板](/develop/template.md)
路徑: `docs/develop/template.md`

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
