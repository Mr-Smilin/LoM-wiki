---
title: 角色頁面模板
description: 開發角色頁面可參考的模板。
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
title: 角色名稱
description: 角色簡述
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - 人物
    - 所屬陣營
    - 可攻略女角
---

# {{ $frontmatter.title }}

<ChTabs position="bottom">
    <ChTab title="分頁1">
        <!-- <ChBg
        src='圖片Url' 
        position='right'
        animation=true /> -->
        <!-- <ChName nameZh='中文姓名' nameEn='English Name' position='right' /> -->
        <!-- <ChTable :table="[[1,2],[3,4,5]]"/> -->
    </ChTab>
    <ChTab title="分頁2">
    </ChTab>
</ChTabs>

<InfoList>
    <Info title="詳細資料一" open=true>
        詳細資料內容一
    </Info>
</InfoList>

<br>

MD 檔文字內容

<Tabs>
    <Tab title="列傳一">
        列傳一內容
    </Tab>
    <Tab title="列傳二">
        列傳二內容
    </Tab>
    <Tab title="列傳三">
        列傳三內容
    </Tab>
    <Tab title="列傳四">
        列傳四內容
    </Tab>
</Tabs>
```
