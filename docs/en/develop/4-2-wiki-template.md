---
title: LoM-wiki Public Components
description: Description of Wiki Public Shared Components
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

## Tab Component

`Tabs` provides the following properties:

1. `position`: Set the position of the tab bar

    - `top` <Badge type="warning" text="Default" />: Set the tab bar at the top
    - `bottom`: Set the tab bar at the bottom

`Tab` provides the following properties:

1. `title` <Badge type="danger" text="Required" />: Set the text of the tab

<br>

<Tabs>
    <Tab title="Tab 1">
        Content of Tab 1
    </Tab>
    <Tab title="Tab 2">
        Content of Tab 2<br>
        I will break the line
    </Tab>
</Tabs>

<br>

::: details Source Code

```markdown
<Tabs>
    <Tab title="Tab 1">
        Content of Tab 1
    </Tab>
    <Tab title="Tab 2">
        Content of Tab 2<br>
        I will break the line
    </Tab>
</Tabs>
```

:::

## Character Icon Component

Currently provides a few icons and syntax examples

`<BadendIcon>` link defaults to the Book of Life, can specify a number with :no.  
Some will jump to detailed pages of the Book of Life as more pages are released,  
BadendIcon will automatically link to more detailed pages.

<br>

<BadendIcon :size='`medium`'>Text 1</BadendIcon>  
<BadendIcon :size='`small`'>Text 2</BadendIcon>  
<BadendIcon>Text 3</BadendIcon>
<BadendIcon :no="30">Book of Life 30 'Clearing the Door'</BadendIcon>

<br>

::: details Source Code

```markdown
<BadendIcon :size='`medium`'>Text 1</BadendIcon>
<BadendIcon :size='`small`'>Text 2</BadendIcon>
<BadendIcon>Text 3</BadendIcon>
<BadendIcon :no="30">Book of Life 30 'Clearing the Door'</BadendIcon>
```

:::

---

`<Girl[0-8]Icon>` link defaults to the character biography page, see [Dream Sweetheart](/people/dream-sweetheart.html) for details

The small icon is 32 px _ 32 px,  
the medium icon is 100 px _ 100 px.  
Historical book sizes are an exception:  
the small icon is 38 px _ 44 px,  
the medium icon is 76 px _ 88 px.

<br>

<Girl0Icon :size='`medium`'>Text 4</Girl0Icon>  
<Girl0Icon :size='`small`'>Text 5</Girl0Icon>  
<Girl0Icon>Text 6</Girl0Icon>

<br>

::: details Source Code

```markdown
<Girl0Icon :size='`medium`'>Text 4</Girl0Icon>
<Girl0Icon :size='`small`'>Text 5</Girl0Icon>
<Girl0Icon>Text 6</Girl0Icon>
```

:::

---

### Character Icon Component Usage Examples

|                                 Syntax                                  | Result                                                                | Description                                                                                              |
| :---------------------------------------------------------------------: | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
|          `` <BadendIcon :size="`medium`">Text</BadendIcon> ``           | <BadendIcon :size="`medium`">Text</BadendIcon>                        | Display medium-sized Icon                                                                                |
|           `` <BadendIcon :size="`small`">Text</BadendIcon> ``           | <BadendIcon :size="`small`">Text</BadendIcon>                         | Display small-sized Icon                                                                                 |
|                     `<BadendIcon>Text</BadendIcon>`                     | <BadendIcon>Text</BadendIcon>                                         | Default size, default is "`small`"                                                                       |
|                       `<BadendIcon></BadendIcon>`                       | <BadendIcon></BadendIcon>                                             | Display with default size, default is "`small`"                                                          |
| `<BadendIcon :no="30">Book of Life 30 'Clearing the Door'</BadendIcon>` | <BadendIcon :no="30">Book of Life 30 'Clearing the Door'</BadendIcon> | no is used to link to the Book of Life number, if not used, it will jump to the top of the Book of Life. |

### Available Property Syntax

| Property Name | Value                   | Default   |
| :------------ | :---------------------- | :-------- |
| size          | "`medium`" \| "`small`" | "`small`" |
| no            | 0 <= no <= 90           | 0         |

### Currently Available Components

-   `<BadendIcon>` : <BadendIcon>Book of Life (Tea Lying)</BadendIcon>, some default clicks will jump to the corresponding position on the Book of Life homepage, and some will jump to the detailed page.
-   `<EndIcon>` : <EndIcon>Historical Book</EndIcon>, no given, default click will jump to the Historical Book list.
-   `<EndIcon no="49">` : <EndIcon no="49">Historical Book 49: The Dog of the Bereaved Family</EndIcon>, adding no will jump to the specified Historical Book number.

The following character avatars will default to the character biography page:

-   `<Girl0Icon>` : <Girl0Icon>Little Junior Sister Avatar</Girl0Icon>
-   `<Girl1Icon>` : <Girl1Icon>Rui Xing Avatar</Girl1Icon>
-   `<Girl2Icon>` : <Girl2Icon>Ye Yunshang Avatar</Girl2Icon>
-   `<Girl3Icon>` : <Girl3Icon>Yu Xiaomei Avatar</Girl3Icon>
-   `<Girl4Icon>` : <Girl4Icon>Shangguan Ying Avatar</Girl4Icon>
-   `<Girl5Icon>` : <Girl5Icon>Xiahou Lan Avatar</Girl5Icon>
-   `<Girl6Icon>` : <Girl6Icon>Yu Zhu Avatar</Girl6Icon>
-   `<Girl7Icon>` : <Girl7Icon>Wei Ju Avatar</Girl7Icon>
-   `<Girl8Icon>` : <Girl8Icon>Long Xiang Avatar</Girl8Icon>

## Item Icon Component

Currently provides a few icons and syntax examples, using `BookItemIcon` as an example,  
can replace with any available component below, as long as `no` and `item type` correspond,  
different from character icons in that it has a background,  
also, this component uses images with corresponding `specific placements`.

`<BookItemIcon>` has a default link, clicking will jump to the corresponding information page,  
the default icon size is small (100 px _ 100 px);  
medium is medium-sized (200 px _ 200 px);  
size can be set through `:size`.  
When needLink = false, clicking the image will enable image zoom.  
Only `no` is a required value.

<br>

<BookItemIcon :no="6001">Text</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">Text 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">Text 2</BookItemIcon>

<br>

::: details Source Code

```markdown
<BookItemIcon :no="6001">Text</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">Text 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">Text 2</BookItemIcon>
```

:::

### Available Property Syntax

Since `type` is already included in the component name, no additional settings are needed.
| Property Name | Value | Default | Required |
| :------------ | :-------------------------- | :------------ | :-------- |
| no | Different values for different items | - | ✔ |
| size | "`medium`" \| "`small`" | "`small`" | ❌ |
| needLink | true \| false | true | ❌ |

### Currently Available Components (each component represents a different item type):

-   `<BookItemIcon>` : Martial Arts Books (book),
-   `<FoodItemIcon>` : Food (food),
-   `<NewspaperItemIcon>` : Jianghu News (newspaper),
-   `<SpecialItemIcon>` : Special Items (special),
-   `<TeaItemIcon>` : Tea (tea),
-   `<WineItemIcon>` : Wine (wine),

### Corresponding Placement Path Format

```
docs/public/images/items/${type}s/item_${type}_${no}.webp
```

Where `${type}` is the item type, such as `book`, `food`, `special`, `tea`, `wine`;  
`${no}` is the item number.

For example, Martial Arts Books (book) number 6001, the image path is `docs/public/images/items/books/item_book_6001.webp`,  
Special Items (special) number 2003, the image path is `docs/public/images/items/specials/item_special_2003.webp`

::: warning
Before use, please ensure that the image file exists. If it does not exist, please upload it to the specified path.  
If unsure about the item category, please use the original name of the image.
:::

## Mood Icon Component

<MoodIcon :mood="`high`">Text</MoodIcon>  
<MoodIcon :mood="`good`">Text 1</MoodIcon>  
<MoodIcon >Text 2</MoodIcon>  
<MoodIcon :mood="`normal`">Text 3</MoodIcon>  
<MoodIcon :mood="`low`">Text 4</MoodIcon>  
<MoodIcon :mood="`bad`">Text 5</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`medium`">Text 6</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`small`">Text 7</MoodIcon>

<br>

::: details Source Code

```markdown
<MoodIcon :mood="`high`">Text</MoodIcon>
<MoodIcon :mood="`good`">Text 1/MoodIcon>
<MoodIcon >Text 2</MoodIcon>
<MoodIcon :mood="`normal`">Text 3</MoodIcon>
<MoodIcon :mood="`low`">Text 4</MoodIcon>
<MoodIcon :mood="`bad`">Text 5</MoodIcon>
<MoodIcon :mood="`bad`" :size="`medium`">Text 6</MoodIcon>
<MoodIcon :mood="`bad`" :size="`small`">Text 7</MoodIcon>
```

:::

### Available Property Syntax

| Property Name | Value                                                    | Default    | Required |
| :------------ | :------------------------------------------------------- | :--------- | :------- |
| size          | "`medium`" \| "`small`"                                  | "`small`"  | ❌       |
| mood          | "`high`" \| "`good`" \| "`normal`" \| "`low`" \| "`bad`" | "`normal`" | ❌       |

## Markdown External Parsing Tool

Used to actively parse content wrapped in html  
Except for line breaks, only `<br>` can be used, all other Markdown can be used

<br>

<div>
    ~~I am pure HTML format~~
</div>
<div>
    <MarkdownWrapper>
        ~~I am in HTML, wrapped in MarkdownWrapper~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||I also support spoiler text||
    </MarkdownWrapper>
</div>

<br>

::: details Source Code

```Markdown
<div>
    ~~I am pure HTML format~~
</div>
<div>
    <MarkdownWrapper>
        ~~I am in HTML, wrapped in MarkdownWrapper~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||I also support spoiler text||
    </MarkdownWrapper>
</div>
```

:::

## BTable Sortable Table

Adds sorting effect to the table  
Replace the outer `<table>` with `<BTable>`  
The first row `<td>` serves as the title, can pass in `string`, `Markdown`, `HTML`  
Other rows `<td>` serve as the table, can pass in `string`, `Markdown`, `HTML`, `Component`

<br>

`BTable` provides the following properties:

1. `:horizontal`: Convert the table to display horizontally

    - `true`: Convert to horizontal
    - `false` <Badge type="warning" text="Default" />: Do not convert to horizontal

2. `:unsearch`: Control table search function

    - `true`: Disable search
    - `false` <Badge type="warning" text="Default" />: Enable search

3. `:tags`: Set search tags (invalid when `unsearch` = `true`)

    - `text` <Badge type="danger" text="Required" />: Tag text
    - `icon`: Tag icon

4. `searchMode`: Set the search type

    - `and` <Badge type="warning" text="Default" />: Intersection query
    - `or`: Union query

5. `:stickyHeader`: Set the header to be sticky
    - `true`: Enable sticky
    - `false` <Badge type="warning" text="Default" />: Disable sticky

The first row (title) `td` provides the following properties:

1. `:unsortable`: Control column sorting

    - `true`: Disable sorting
    - `false` <Badge type="warning" text="Default" />: Enable sorting

<br>

<BTable :tags="[
  {
    text: '21',
  },
  {
    text: 'Shaw',
    icon: '🅰️'
  }
]">

  <tr>
    <td>age</td>
    <td>first_name</td>
    <td :unsortable=true>last_name</td>
  </tr>
  <tr>
    <td>40</td>
    <td>Dickerson</td>
    <td>Macdonald</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Larsen</td>
    <td>Shaw</td>
  </tr>
  <tr>
    <td>89</td>
    <td>Geneva</td>
    <td>Shaw</td>
  </tr>
</BTable>

<br>

::: details Source Code

```Markdown
<BTable :tags="[
  {
    text: '21',
  },
  {
    text: 'Shaw',
    icon: '🅰️'
  }
]">
  <tr>
    <td>age</td>
    <td>first_name</td>
    <td :unsortable=true>last_name</td> // This row is not sortable
  </tr>
  <tr>
    <td>40</td>
    <td>Dickerson</td>
    <td>Macdonald</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Larsen</td>
    <td>Shaw</td>
  </tr>
  <tr>
    <td>89</td>
    <td>Geneva</td>
    <td>Shaw</td>
  </tr>
</BTable>
```

:::

<br>

`BTable` preserves the attributes of `<tr>` `<td>` inside

<br>

<BTable :unsearch=true>
  <tr>
    <td>age</td>
    <td :unsortable=true>first_name</td>
    <td>last_name</td>
  </tr>
  <tr style='background-color: #f0f0f0; color: black;'>
    <td>40</td>
    <td style='color: red;'>Dickerson</td>
    <td>Macdonald</td>
  </tr>
</BTable>

<br>

::: details Source Code

```Markdown
<BTable :unsearch=true>
  <tr>
    <td>age</td>
    <td :unsortable=true>first_name</td> // This row is not sortable
    <td>last_name</td>
  </tr>
  <tr style='background-color: #f0f0f0; color: black;'> // Attributes can be set for tr other than the title
    <td>40</td>
    <td style='color: red;'>Dickerson</td> // td can also be set
    <td>Macdonald</td>
  </tr>
</BTable>
```

:::

## InfoList Detailed Data Component

Component that occupies a section of the sidebar,  
usually used to add other text or components under `<InfoList>`, filling the remaining space in the same row

`InfoList` provides the following properties:

1. `position`: Set the component position

    - `left`: Set the component on the left
    - `right` <Badge type="warning" text="Default" />: Set the component on the right
    - `none`: Disable floating effect

`Info` provides the following properties:

1. `title` <Badge type="danger" text="Required" />: Set the title text of the detailed content
2. `:open`: Default to expand

Fun fact:  
When the floating element is too long and competes for space with full-screen objects,  
you can use `<div style="clear:both;"></div>` to limit.

<br>

<InfoList position="left">
  <Info title="Biography 1" :open=true>
      A beautiful woman with exquisite swordsmanship, trained in the Jinxiang Palace.<br>
      Following in her father's footsteps, she aspires to fulfill his ambitions and travel the world as a knight-errant.<br>
      However, due to her lack of worldly knowledge, she is easily deceived.
  </Info>
  <Info title="Biography 2">
    對父親的記憶，如今很稀薄了。<br>
    遙遠記憶裡那一日，他摸摸她小腦袋瓜，<br>
    一笑出門去，便再也不曾回來。<br>
    後來錦香宮溫夫人才接了她去，收入門牆。<br><br>   
    輾轉聽人傳聞，才知道父親是武林傳奇，<br>
    既悲傷又驕傲，沿著父親的足跡，造訪故人，<br>
    想蒐集更多已故生父的故事，憑此懷念。<br><br>
    一身劍法皆得於家傳秘笈，龍淵七訣中，尤擅劍法，<br>
    自小便以雞腿為劍，悟出人劍合一的奧義而渾不自覺，<br>
    至今也不太清楚自己究竟算不算高手。
  </Info>
</InfoList>
<br>

[[LoM-wiki Public Components]]  
[[LoM-wiki Public Components|Custom Text]]  
[[LoM-wiki Public Components#wikilink|Specified Anchor]]  
[[LoM-wiki Public Components|You can write ~~Markdown syntax~~ and<span style='color: red;'>HTML syntax</span> in custom text]]

<br>

::: details Source Code

```markdown
[[LoM-wiki Public Components]]  
[[LoM-wiki Public Components|Custom Text]]  
[[LoM-wiki Public Components#wikilink|Specified Anchor]]  
[[LoM-wiki Public Components|You can write ~~Markdown syntax~~ and<span style='color: red;'>HTML syntax</span> in custom text]]
```

:::

## Ending Component

```markdown
<EndBackground no=8 title="Cooked Dog">
Rabbit dies, dog is cooked, you useless lapdog. A piece of cake can easily deceive you, quite a bargain.<br>
<br>
<br>
<!-- Note: This line is for editors to indicate the presence of blank lines, please do not delete for formatting reasons -->
</EndBackground>
```

<EndBackground no=8 title="Cooked Dog">
Rabbit dies, dog is cooked, you useless lapdog. A piece of cake can easily deceive you, quite a bargain.<br>
<br>
<br>
<!-- Note: This line is for editors to indicate the presence of blank lines, please do not delete for formatting reasons -->
</EndBackground>

```markdown
<EndBackground no=0 title="No Corresponding Image">
No corresponding image available<br>
No corresponding image available<br>
No corresponding image available<br>
<br>
</EndBackground>
```

<EndBackground no=0 title="No Corresponding Image">
No corresponding image available<br>
No corresponding image available<br>
No corresponding image available<br>
<br>
</EndBackground>

### Available Property Syntax

| Property Name | Value | Default | Required |
| :------------ | :---- | :------ | :------- |
| no            | 1~50  | x       | x        |
| title         | Text  | x       | x        |

Note:

1. The ending description should be directly placed within the tag, such as the text `Rabbit dies, ... quite a bargain.` in the example above.
2. Some endings may share images.
3. This section is automatically divided into mobile and regular versions. If there are any editing abnormalities, please provide feedback on Discord.
4. The layout has been adjusted, and in most cases, it should match the game's interface.  
   Only in a few cases, due to layout restrictions (or limitations of the game itself), there may be slight differences,  
   which should be within the margin of error and will be improved in the future.
5. If there are issues with text box dimensions, please add `<br>` line break symbols or `　` full-width spaces as needed.  
   Also, add a note at the end of the supplemented text `<!-- Due to formatting reasons, some blank lines and full-width spaces are added here, do not remove without reason -->`.
