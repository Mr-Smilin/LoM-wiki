---
title: キャラクターページテンプレート
description: キャラクターページ開発時に参照できるテンプレート。
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - dev
    - develop
    - developer
    - 開発
    - markdown
    - 協作
    - example
    - template
---

# {{ $frontmatter.title }}

```markdown
---
title: キャラクター名
description: キャラクター概要
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - 人物
    - 所属陣営
    - 可攻略女角
---

# {{ $frontmatter.title }}

<ChTabs position="bottom">
    <ChTab title="ページ1">
        <!-- <Ch
        src='画像 Url' 
        position='right'
        :animation=true /> -->
        <!-- <ChName nameZh='中国語名' nameEn='English Name' position='right' /> -->
        <!-- <ChTable :table="[[1,2],[3,4,5]]"/> -->
    </ChTab>
    <ChTab title="ページ2">
    </ChTab>
</ChTabs>

<InfoList>
    <Info title="詳細情報1" open=true>
        詳細情報内容1
    </Info>
</InfoList>

<br>

Markdown テキストコンテンツ

<Tabs>
    <Tab title="列傳1">
        列傳1 コンテンツ
    </Tab>
    <Tab title="列傳2">
        列傳2 コンテンツ
    </Tab>
    <Tab title="列傳3">
        列傳3 コンテンツ
    </Tab>
    <Tab title="列傳4">
        列傳4 コンテンツ
    </Tab>
</Tabs>
```
