---
title: Character Page Template
description: Template for developing character pages.
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - dev
    - develop
    - developer
    - development
    - markdown
    - collaboration
    - example
    - template
---

# {{ $frontmatter.title }}

```markdown
---
title: Character Name
description: Brief description of the character
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - character
    - faction
    - playable female character
---

# {{ $frontmatter.title }}

<ChTabs position="bottom">
    <ChTab title="Tab 1">
        <!-- <Ch
        src='ImageURL' 
        position='right'
        :animation=true /> -->
        <!-- <ChName nameZh='Chinese Name' nameEn='English Name' position='right' /> -->
        <!-- <ChTable :table="[[1,2],[3,4,5]]"/> -->
    </ChTab>
    <ChTab title="Tab 2">
    </ChTab>
</ChTabs>

<InfoList>
    <Info title="Details One" open=true>
        Details content one
    </Info>
</InfoList>

<br>

Markdown text content

<Tabs>
    <Tab title="Biography One">
        Biography one content
    </Tab>
    <Tab title="Biography Two">
        Biography two content
    </Tab>
    <Tab title="Biography Three">
        Biography three content
    </Tab>
    <Tab title="Biography Four">
        Biography four content
    </Tab>
</Tabs>
```