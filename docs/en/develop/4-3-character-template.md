---
title: Usage of Character Biography Components
description: Explanation of components related to character pages
aside: true
outline: [2, 4]
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

<br><br>

<div style="text-align: center;">
  <img src="/images/characters/girl_8/icon_drumstick.webp" style="display: block; margin: 0 auto;" />
  <p>Special thanks to Long Xiang for being the model on this page</p>
</div>

<br><br>

This page mainly lists the components that can be used when editing character biography pages.  
Once you are familiar with them, consider using these components on other pages as well.

<br>

Similar to the previous [LoM-wiki public components](/develop/4-2-wiki-template.html), this content is split into a separate explanation due to its length.

## Character Information Box Component

### ChTab Character Tabs

`ChTabs` provides the following attributes:

1.  `position`: Set the position of the component

    -   `top` <Badge type="warning" text="Default" />: Set the component at the top
    -   `bottom`: Set the component at the bottom

`ChTab` provides the following attributes:

1.  `title` <Badge type="danger" text="Required" />: Set the text of the tab

**Effect:**

<ChTabs>
    <ChTab title="Tab 1">
    </ChTab>
    <ChTab title="Tab 2">
    </ChTab>
</ChTabs>

::: tip Source Code

```Markdown
<ChTabs>
    <ChTab title="Tab 1">
    </ChTab>
    <ChTab title="Tab 2">
    </ChTab>
</ChTabs>
```

:::

<br>

In this component, you cannot directly insert text. It currently provides three sub-components:

<br>

---

<br>

#### Ch Character Background

`Ch` provides the following attributes:

1.  `src` <Badge type="danger" text="Required" />: Set the URL of the background image file
2.  `position`: Set the position of the component

    -   `left` <Badge type="warning" text="Default" />: Set the component on the left
    -   `center`: Set the component in the center
    -   `right`: Set the component on the right

3.  `:animation`: Enable image animation when switching

**Effect:**

<ChTabs>
    <ChTab title="First Page">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="Animated Image Switch">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: tip Source Code

```Markdown
<ChTabs>
    <ChTab title="First Page">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="Animated Image Switch">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

:::

<br>

---

<br>

#### ChName Name Box

Note: There are no restrictions on the content that can be entered in the name box.

`ChName` provides the following attributes:

-   `nameZh`: Set the Chinese name
-   `nameEn`: Set the English name
-   `position`: Set the position of the component
    -   `left` <Badge type="warning" text="Default" />: Set the component on the left
    -   `center`: Set the component in the center
    -   `right`: Set the component on the right

**Effect:**

<ChTabs>
    <ChTab title="Long Xiang">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
    </ChTab>
</ChTabs>

::: tip Source Code

```Markdown
<ChTabs>
    <ChTab title="Long Xiang">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
  </ChTab>
</ChTabs>
```

:::

<br>

---

<br>

#### ChTable Character Information Box

This component has two usage methods; here is a simple explanation first.

`ChTable` provides the following attributes:

1.  `position`: Set the position of the component

    -   `left` <Badge type="warning" text="Default" />: Set the component on the left
    -   `right`: Set the component on the right

2.  `:table`: Set the content inside the table, represented by a two-dimensional array

**Effect:**

<ChTabs>
    <ChTab title="Table Example">
        <ChTable
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns'],
            ['A row can have only one column'],
            ['You','Can','Also','Split','Into','Multiple','Columns'],
            ['They all support `Markdown`'],
            ['~~Strikethrough~~'],
            ['Or line<br>break'],
            ['But line breaks must use `<br>`'],
            ['Because text in arrays cannot directly line break in Markdown'],
            ['If the content is too long, you can scroll down'],
            ['Tables designed in this way<br>The first column of each row is fixed in dark color'],
            ['For further customization<br>We need to use advanced writing']
        ]"/>
    </ChTab>
    <ChTab title="Table Example 2">
        <ChTable position='right'
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns']
        ]"/>
    </ChTab>
</ChTabs>

::: tip Source Code

```Markdown
<ChTabs>
    <ChTab title="Table Example">
        <ChTable
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns'],
            ['A row can have only one column'],
            ['You','Can','Also','Split','Into','Multiple','Columns'],
            ['They all support `Markdown`'],
            ['~~Strikethrough~~'],
            ['Or line<br>break'],
            ['But line breaks must use `<br>`'],
            ['Because text in arrays cannot directly line break in Markdown'],
            ['If the content is too long, you can scroll down'],
            ['Tables designed in this way<br>The first column of each row is fixed in dark color'],
            ['For further customization<br>We need to use advanced writing']
        ]"/>
    </ChTab>
    <ChTab title="Table Example 2">
        <ChTable position='right'
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns']
        ]"/>
    </ChTab>
</ChTabs>
```

:::

<br>

---

<br>

#### Result

After combining the components

**Effect:**

<ChTabs>
    <ChTab title="Long Xiang">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
        <ChTable
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns'],
            ['A row can have only one column'],
            ['You','Can','Also','Split','Into','Multiple','Columns'],
            ['They all support `Markdown`'],
            ['~~Strikethrough~~'],
            ['Or line<br>break'],
            ['But line breaks must use `<br>`'],
            ['Because text in arrays cannot directly line break in Markdown'],
            ['If the content is too long, you can scroll down'],
            ['Tables designed in this way<br>The first column of each row is fixed in dark color'],
            ['For further customization<br>We need to use advanced writing']
        ]"/>
    </ChTab>
    <ChTab title="Eating Drumstick">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: tip Source Code

```markdown
<ChTabs>
    <ChTab title="Long Xiang">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
        <ChTable
        :table="[
            ['First row, first column','First row, second column'],
            ['Second row, first column','No mistakes in rows and columns'],
            ['A row can have only one column'],
            ['You','Can','Also','Split','Into','Multiple','Columns'],
            ['They all support `Markdown`'],
            ['~~Strikethrough~~'],
            ['Or line<br>break'],
            ['But line breaks must use `<br>`'],
            ['Because text in arrays cannot directly line break in Markdown'],
            ['If the content is too long, you can scroll down'],
            ['Tables designed in this way<br>The first column of each row is fixed in dark color'],
            ['For further customization<br>We need to use advanced writing']
        ]"/>
    </ChTab>
    <ChTab title="Eating Drumstick">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

:::

<br>

---

<br>

#### Additional

::: tip Advanced Usage of ChTable

<br>

<Badge type="warning" text="Tip" />  
This usage is invalid when the `ChTable` has the `:table` attribute.

<br><br>

#### ChTr Character Information Box

`ChTr` provides attributes such as...  
None, `ChTr` currently has no custom attributes.

<br>

#### ChTd Character Information Box

`ChTd` provides the following attributes:

-   `isTitle`: Set whether the column is a title
    -   `true`: Set the style of the title column
    -   `false`: Set the style of the data column
-   `position`: Set the text position
    -   `left` <Badge type="warning" text="Default" />: Set the text on the left
    -   `center`: Set the text in the center
    -   `right`: Set the text on the right

:::

**Advanced Usage Effect:**

**Effect:**

<ChTabs>
    <ChTab title="Table Example">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    First row, first column
                </ChTd>
                <ChTd>
                    First row, second column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    Second row, first column
                </ChTd>
                <ChTd>
                    No mistakes in rows and columns
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    A row can have only one column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    You
                </ChTd>
                <ChTd position='center'>
                    Can
                </ChTd>
                <ChTd position='center'>
                    Also
                </ChTd>
                <ChTd position='center'>
                    Split
                </ChTd>
                <ChTd position='center'>
                    Into
                </ChTd>
                <ChTd position='center'>
                    Multiple
                </ChTd>
                <ChTd position='center'>
                    Columns
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    They all support `Markdown`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~Strikethrough~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    Or line<br>
                    break
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    But line breaks must use `<br>`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    Because text in arrays cannot directly line break in Markdown
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    If the content is too long, you can scroll down
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    Tables designed in this way<br>
                    You can set whether it is a title column
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="Table Example 2">
        <ChTable>
            <ChTr>
                <ChTd>
                    First row, first column
                </ChTd>
                <ChTd>
                    First row, second column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    Second row, first column
                </ChTd>
                <ChTd>
                    No mistakes in rows and columns
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>

::: tip Source Code

```Markdown
<ChTabs>
    <ChTab title="Table Example">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    First row, first column
                </ChTd>
                <ChTd>
                    First row, second column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    Second row, first column
                </ChTd>
                <ChTd>
                    No mistakes in rows and columns
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    A row can have only one column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    You
                </ChTd>
                <ChTd position='center'>
                    Can
                </ChTd>
                <ChTd position='center'>
                    Also
                </ChTd>
                <ChTd position='center'>
                    Split
                </ChTd>
                <ChTd position='center'>
                    Into
                </ChTd>
                <ChTd position='center'>
                    Multiple
                </ChTd>
                <ChTd position='center'>
                    Columns
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    They all support `Markdown`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~Strikethrough~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    Or line<br>
                    break
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    But line breaks must use `<br>`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    Because text in arrays cannot directly line break in Markdown
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    If the content is too long, you can scroll down
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    Tables designed in this way<br>
                    You can set whether it is a title column
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="Table Example 2">
        <ChTable>
            <ChTr>
                <ChTd>
                    First row, first column
                </ChTd>
                <ChTd>
                    First row, second column
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    Second row, first column
                </ChTd>
                <ChTd>
                    No mistakes in rows and columns
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>
```

:::
```

:::

<br>

---

### Integrated Components

Similar to the components above, they are all placed within `<ChTab>`  
Different from the above components, they occupy a separate layout and are not recommended to be used together.

<br>

#### ChMeet Encounter Image

`ChMeet` provides the following properties:

1. `src` <Badge type="danger" text="Required" />: Set the URL of the character's portrait
2. `nameTitle`: Set the title of the character
3. `nameMain` <Badge type="danger" text="Required" />: Set the name of the character
4. `desc`: Set the introduction/first meeting text
5. `:animation`: Enable animation when switching

<ChTabs position="bottom">
	<ChTab title="Long Xiang">
        <ChMeet 
			src='/images/characters/girl_8/normal.webp' 
			nameMain='Long Xiang'
			desc='A beautiful woman with exquisite swordsmanship, apprenticed to the Jinxiang Palace.<br>Following in her father's footsteps, she aspires to carry on his ambitions and travel the world as a knight-errant.'
			:animation=true
		/>
    </ChTab>
	<ChTab title="No Animation Version">
        <ChMeet 
			src='/images/characters/girl_0/normal.webp' 
			nameTitle='Junior Sister'
			nameMain='Tang Mo Ling'
			desc='Known as Mo Ling, the only beloved daughter of the Tang Clan's head, she is like a forest creature, with a cold demeanor and always carrying seven silent bells.<br>Her hobby is origami.'
			:animation=false
		/>
    </ChTab>
</ChTabs>

::: details Source Code

```Markdown

<ChTabs position="bottom">
	<ChTab title="Long Xiang">
        <ChMeet
			src='/images/characters/girl_8/normal.webp'
			nameMain='Long Xiang'
			desc='A beautiful woman with exquisite swordsmanship, apprenticed to the Jinxiang Palace.<br>Following in her father's footsteps, she aspires to carry on his ambitions and travel the world as a knight-errant.'
			:animation=true
		/>
    </ChTab>
	<ChTab title="No Animation Version">
        <ChMeet
			src='/images/characters/girl_0/normal.webp'
			nameTitle='Junior Sister'
			nameMain='Tang Mo Ling'
			desc='Known as Mo Ling, the only beloved daughter of the Tang Clan's head, she is like a forest creature, with a cold demeanor and always carrying seven silent bells.<br>Her hobby is origami.'
			:animation=false
		/>
    </ChTab>
</ChTabs>


```

:::
```