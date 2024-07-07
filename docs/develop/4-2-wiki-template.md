---
title: LoM-wiki 公開組件
description: Wiki 公開共用組件說明
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

## 分頁組件

`Tabs` 提供屬性如以下：

-   `position`：設定分頁表的位置
    -   `top` <Badge type="warning" text="默認值" /> ：設定分頁表在上方
    -   `bottom`：設定分頁表在下方

`Tab` 提供屬性如以下：

-   `title` <Badge type="danger" text="必填" /> ：設定分頁籤的文字

```Markdown
<Tabs>
    <Tab title="分頁1">
        我是分頁1的內容
    </Tab>
    <Tab title="分頁2">
        我是分頁2的內容<br>
        我會換行
    </Tab>
</Tabs>
```

**效果：**

<Tabs>
    <Tab title="分頁1">
        我是分頁1的內容
    </Tab>
    <Tab title="分頁2">
        我是分頁2的內容<br>
        我會換行
    </Tab>
</Tabs>

## Icon 懶人組件

目前提供少部分 Icon 與語法示例如下

```
<BadendIcon :size='`medium`'>我是文字1</BadendIcon>
<BadendIcon :size='`small`'>我是文字2</BadendIcon>
<BadendIcon>我是文字3</BadendIcon>
```

**效果：**  
<BadendIcon :size='`medium`'>我是文字 1</BadendIcon>  
<BadendIcon :size='`small`'>我是文字 2</BadendIcon>  
<BadendIcon>我是文字 3</BadendIcon>

---

```
<Girl0Icon :size='`medium`'>我是文字4</Girl0Icon>
<Girl0Icon :size='`small`'>我是文字5</Girl0Icon>
<Girl0Icon>我是文字6</Girl0Icon>
```

**效果：**  
<Girl0Icon :size='`medium`'>我是文字 4</Girl0Icon>  
<Girl0Icon :size='`small`'>我是文字 5</Girl0Icon>  
<Girl0Icon>我是文字 6</Girl0Icon>

---

### Icon 懶人組件使用事例

|                           語法                           | 效果                                               |                     說明                      |
| :------------------------------------------------------: | :------------------------------------------------- | :-------------------------------------------: |
| `` <BadendIcon :size="`medium`">我是文字</BadendIcon> `` | <BadendIcon :size="`medium`">我是文字</BadendIcon> |                 顯示中型 Icon                 |
| `` <BadendIcon :size="`small`">我是文字</BadendIcon> ``  | <BadendIcon :size="`small`">我是文字</BadendIcon>  |                 顯示小型 Icon                 |
|           `<BadendIcon>我是文字</BadendIcon>`            | <BadendIcon>我是文字</BadendIcon>                  |        採用預設大小, 預設為"\`small\`"        |
|               `<BadendIcon></BadendIcon>`                | <BadendIcon></BadendIcon>                          | 不寫任何文字，採用預設大小, 預設為"\`small\`" |

可用屬性寫法

| 屬性名稱 | 值                          | default     |
| :------- | :-------------------------- | :---------- |
| size     | "\`medium\`" \| "\`small\`" | "\`small\`" |

目前已可用組件名稱如下:

-   `<BadendIcon>` : <BadendIcon>生死簿 (飲茶躺)</BadendIcon>
-   `<Girl0Icon>` : <Girl0Icon>小師妹頭像</Girl0Icon>
-   `<Girl1Icon>` : <Girl1Icon>瑞杏頭像</Girl1Icon>
-   `<Girl2Icon>` : <Girl2Icon>葉雲裳頭像</Girl2Icon>
-   `<Girl3Icon>` : <Girl3Icon>虞小梅頭像</Girl3Icon>
-   `<Girl4Icon>` : <Girl4Icon>上官瑩頭像</Girl4Icon>
-   `<Girl5Icon>` : <Girl5Icon>夏侯蘭頭像</Girl5Icon>
-   `<Girl6Icon>` : <Girl6Icon>郁竹頭像</Girl6Icon>
-   `<Girl7Icon>` : <Girl7Icon>魏菊頭像</Girl7Icon>
-   `<Girl8Icon>` : <Girl8Icon>龍湘頭像</Girl8Icon>

## Markdown 外部解析工具

用來主動解析被 html 包住的內容  
除了換行還是只能使用 `<br>` 以外，其他的 Markdown 都可以使用

```Markdown
<div>
    ~~我是純HTML格式~~
</div>
<div>
    <MarkdownWrapper>
        ~~我是在HTML中，使用MarkdownWrapper框起來的格式~~
    </MarkdownWrapper>
</div>
```

**效果：**

<div>
    ~~我是純HTML格式~~
</div>
<div>
    <MarkdownWrapper>
        ~~我是在HTML中，使用MarkdownWrapper框起來的格式~~
    </MarkdownWrapper>
</div>
