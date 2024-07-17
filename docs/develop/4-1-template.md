---
title: Markdown 常見用法
description: Markdown 在 wiki 上常用格式整理。
aside: true
outline: [2, 3]
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

## .md 文件頭說明

```
---
title: 你的標題
description: 此份文件的描述
aside: false | true   //是否顯示右側導航列
outline: [2, 3]       // 導航列抓取標題深度
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
請依您的需求放入對應的資料夾(若不清楚請參考資料夾結構說明) <!-- TODO: 待補資料夾結構說明 -->  
檔名務必是純英文、半形數字跟`-`組成, 例如

```
example-page.md
```

此檔名在 wiki 中不會對外顯示

-   `title`  
    填入你的標題(可以是中文, 英文與數字)，此標題會對外顯示。  
    透過 runtime API 自動取得並顯示在`# {{ $frontmatter.title }}`的位置。

-   `description`  
    用來描述此頁面的內容(不對外顯示)。

-   `tag`  
    用來指定您創作文章的特性，可以有多個類別，也可以超過 3 個。
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

::: tip
除此以外的表頭屬性，可參考[官方文檔](https://vitepress.dev/zh/reference/default-theme-home-page)
:::

### .md 文件頭範例

```
---
title: 人物列傳-唐默鈴(小師妹)
description: 描述小師妹的人物故事、與展示小師妹的圖片、特點、癖好等。
aside: false // 關閉右側導覽列
outline: [2, 3] // 由於導覽列關閉了，該行無效
sidebar: true // 開啟左側側邊欄，如果該頁面有側邊欄會顯示
borderless: true // 內文寬度無邊界(但會被導覽列跟側邊欄擋住)
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

## Markdown 文章常用語法

::: info
此處只列出常用語法，更多語法請參考[官方文件](https://markdown.tw)
:::

### 換行

在一個句子最後打上兩個空白，即為 markdown 換行效果。  
(萬一不行, 可考慮 html 換行效果：`<br>`)

```markdown
這是第一行  
這是第二行
```

效果：  
這是第一行  
這是第二行

### 超連結

```markdown
wikilink  
[[龍湘]]  
內部連結  
[龍湘](/people/characters/girl8)  
外部連結  
[https://www.google.com](https://www.google.com)
```

**效果：**

wikilink  
[[龍湘]]  
內部連結  
[龍湘](/people/characters/girl8)  
外部連結  
[https://www.google.com](https://www.google.com)

### 標題

標題只會使用兩種 ##, ###, 依序表示 H2, H3 等級標題。  
且前須有空行、換行，標題後必須空一格，才會被認為是標題，否則會被視為一般文字。

```markdown
## 二級標題

### 三級標題
```

**效果：**

## 二級標題

### 三級標題

<br>

### 純文字塊(內建可複製)

純文字塊與反引號有高度關聯。  
其中可複製的文字塊，會在頭尾加上 3 個反引號(\`\`\`)，方便複製。  
`markdown`用來提示開發者，現在使用的是 md 檔案，建議加上。

<pre><code>```markdown
  純文字塊(內建可複製)
```</code></pre>

**效果：**

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

**效果：**  
![趙活的圖片,完整路徑](https://i.imgur.com/WlPuE8U.png)
![龍湘大頭貼, 相對路徑](/images/characters/girl_8/icon_girl8.png)

::: tip
注：本地圖片放在`docs/public`下時，網址請使用相對路徑。  
:::

::: warning
若確認有上傳圖片到正確位置，卻顯示不出來，通常是路徑有問題。  
請給出上傳目標位置的圖片路徑，確認是否有上傳成功後再發問。
:::

### 表格

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

**效果：**

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

當資料量增加時，  
相比起 `Markdown` 原本的表格，`HTML` 的表格格式更易於維護。

## vitepress 的自訂 markdown

### 消息盒子

```Markdown
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

**效果：**

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

## 外部工具

-   [線上轉換 Excel 為 Markdown 或 Html 表格的工具](https://tableconvert.com/zh-tw/excel-to-html)  
    對複雜的表格格式不起做用，但在搬運資料時很有用。
