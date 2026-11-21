---
title: 結緣攻略頁面模板
description: 開發結緣攻略頁面可參考的模板。
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

```markdown
---
title: 角色名稱結緣攻略
description: 角色名稱結緣攻略
aside: false
outline: [2, 3]
sidebar: false
borderless: true
pageClass: pursuit
tags:
    - 結婚
    - 成親
    - 角色名稱
---

# {{ $frontmatter.title }}

<p align="center"><img src="/images/characters/角色資料夾/圖片名稱.webp" style="width:300px"></p>

## 結緣必要條件

<table>

<tr>
<td>編號</td>
<td>時間</td>
<td>事件</td>
<td>內容</td>
<td>建議及備註</td>
</tr>

<tr>
<td>1</td>
<td>第三年五月上旬</td>
<td><MarkdownWrapper>[事件名稱](/event/simple/事件頁)</MarkdownWrapper></td>
<td>觸發條件、要選的選項</td>
<td>補充說明</td>
</tr>

<tr>
<td>2</td>
<td>第三年六月中旬</td>
<td><MarkdownWrapper>[事件名稱](/event/simple/事件頁)</MarkdownWrapper></td>
<td>觸發條件、要選的選項</td>
<td></td>
</tr>

</table>

## 結緣後改變的事件

<table>

<tr>
<td>編號</td>
<td>時間</td>
<td>事件</td>
<td>改變內容</td>
<td>備註</td>
</tr>

<tr>
<td>1</td>
<td>第四年一月上旬</td>
<td><MarkdownWrapper>[事件名稱](/event/simple/事件頁)</MarkdownWrapper></td>
<td>結緣之後事件有什麼不同</td>
<td></td>
</tr>

</table>

## 備註

其他補充。
```

## 表格的寫法

文件頭的 `pageClass: pursuit` 會套用結緣攻略專用的表格版面：

-   內容區最寬 1200px 置中，每一頁的欄寬都一樣。
-   「時間」和「事件」在網頁上疊成同一欄，時間小字在上、事件在下。
-   手機上（螢幕寬度小於 768px）表格的每一列排成一張卡片。

所以寫表格時：

-   每一列照順序寫五格：編號、時間、事件、內容、備註。
-   第一列是表頭。手機卡片上不顯示表頭，「內容」「備註」兩格前面會自動補上小標。
-   沒有內容的格子留空（`<td></td>`），手機上不會顯示。
-   只有第一列剛好五格的表會套用這個版面；同一頁其他欄數的表維持一般表格。
-   電腦上要看手機的樣子，把瀏覽器視窗拉窄到 768px 以下，或用瀏覽器開發者工具（F12）的手機模式。
