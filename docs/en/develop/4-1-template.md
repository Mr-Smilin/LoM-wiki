---
title: Common Usage of Markdown
description: Common formatting used in wiki with Markdown.
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

## Explanation of .md File Header

```
---
title: Your Title
description: Description of this document
aside: false | true   // Whether to display the right sidebar
outline: [2, 3]       // Depth of headings for the sidebar
sidebar: false | true  // Whether to display the left sidebar
borderless: true | false  // Whether to have borders
tags:
  - tag1
  - tag2
  - tag3
---

# {{ $frontmatter.title }}
```

To create a new page, start by creating a `.md` file under the `docs` directory,  
and place it in the corresponding folder based on your needs (refer to the `/readme.md` folder structure guide if unsure).  
Except for events under `/docs/event` that may have difficult-to-translate English names,  
you can name them in the format `ChineseName.md`,  
while all other file names must be in pure English, with alphanumeric characters and `-`,  
for example

```
example-page.md
```

This filename will not be displayed in the wiki.

-   `title`  
    Enter your title (can be in Chinese, English, or numbers), which will be displayed externally.  
    Automatically retrieved through the runtime API and displayed in `# {{ $frontmatter.title }}`.

-   `description`  
    Used to describe the content of the page (not displayed externally).

-   `tag`  
    Used to specify the characteristics of your article, can have multiple categories, and can exceed 3.  
    Tags are generally used for search assistance when the target is uncertain, so it is recommended not to make them too long.

-   `aside: false`  
    Default is `true`, setting it to `false` will make the right sidebar navigation disappear,  
    useful when the page feels too small.

-   `outline: [2, 3]`  
    Determines the heading range to be captured for the right sidebar navigation,  
    default is 2, which means only headings prefixed with `##` will be included in the navigation.  
    If set to [2, 3] as in the example, headings prefixed with `###` will be placed under `##`.  
    This page has this option enabled, as seen in the right sidebar navigation.

-   `sidebar: false`  
    Default is `true`, setting it to `false` will make the left sidebar disappear,  
    useful when the page feels too small.

-   `borderless: true` <Badge type="warning" text="Custom" />  
    Default is `false`, setting it to `true` will make the content width borderless,  
    combined with `aside` and `sidebar` above, it can stretch the content to the maximum,  
    and if the content changes, the width will dynamically adjust.

::: tip
For other frontmatter attributes, refer to the [official documentation](https://vitepress.dev/reference/default-theme-home-page)
:::

### Example of .md File Header

```
---
title: Character Biography - Tang Moling (Junior Martial Sister)
description: Describes the character story of Junior Martial Sister and showcases her image, characteristics, quirks, etc.
aside: false // Disables the right sidebar navigation
outline: [2, 3] // This line is invalid since the navigation bar is disabled
sidebar: true // Enables the left sidebar, will display if the page has a sidebar
borderless: true // Content width is borderless (but will be blocked by the navigation bar and sidebar)
tags:
  - Tang Sect
  - Playable female character
  - girl0
  - Short
  - Introverted
  - Number one in the world
  - Officially designated default female protagonist
---

# {{ $frontmatter.title }}
```

## Common Markdown Syntax in Articles

::: info
Only common syntax is listed here, for more syntax, refer to the [official documentation](https://markdown.tw)
:::

### Line Breaks

To create a line break in Markdown, add two spaces at the end of a sentence.  
(If this doesn't work, consider using the HTML line break effect: `<br>`)

<br>

This is the first line  
This is the second line

<br>

::: details Source Code

```markdown
This is the first line  
This is the second line
```

:::

---

### Hyperlinks

<br>

wikilink  
[[Long Xiang]]  
Internal link  
[Long Xiang](/people/characters/girl8)  
External link  
[https://www.google.com](https://www.google.com)

<br>

::: details Source Code

```markdown
wikilink  
[[Long Xiang]]  
Internal link  
[Long Xiang](/people/characters/girl8)  
External link  
[https://www.google.com](https://www.google.com)
```

:::

<br>

Note: [About wikilink](https://en.wikipedia.org/wiki/Help:Link)

---

### Headings

Headings are represented by ##, ###, indicating H2, H3 level headings.  
There must be a blank line and line break before the heading, and a space after the heading for it to be recognized as a heading; otherwise, it will be treated as normal text.

```markdown
## Second-level Heading

### Third-level Heading
```

---

### Code Blocks (Copyable)

Code blocks are closely related to backticks.  
Copyable code blocks are enclosed with 3 backticks (\`\`\`) at the beginning and end for easy copying.  
`markdown` is used to indicate to developers that the file being used is an md file, it is recommended to include it.

<br>

```markdown
Copyable code block
```

<br>

::: details Source Code

````markdown
<pre><code>```markdown
  Copyable code block
```</code></pre>
````

:::

---

### Inline Code Blocks (Non-copyable)

<br>

hello `inline code block` test

<br>

::: details Source Code

```markdown
`inline code block`
```

:::

---

### Images

<br>

![Image of Zhao Huo, full path](https://i.imgur.com/WlPuE8U.png)
![Long Xiang profile picture, relative path](/images/characters/girl_8/icon_girl8.webp)

<br>

::: details Source Code

```markdown
![Image of Zhao Huo, full path](https://i.imgur.com/WlPuE8U.png)
![Long Xiang profile picture, relative path](/images/characters/girl_8/icon_girl8.webp)
```

:::

::: tip
Note: When placing local images under `docs/public`, use relative paths for URLs.
:::

::: warning
If you have uploaded an image to the correct location but it doesn't display, it's usually due to a path issue.  
Provide the image path of the upload target location to confirm if it was successfully uploaded before asking for help.
:::

---

### Tables

<br>

<table>
    <tr>
        <td>ID</td>
        <td>Name</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Smile A</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Smile B</td>
    </tr>
</table>

::: details Source Code

In `.md` files, we can use `HTML5` syntax  
For example, `Markdown` tables look like this

```
| ID | Name  |
|----|-----|
| 1  | Smile A |
| 2  | Smile B |
```

This table can be replaced with `HTML` as follows

```
<table>
    <tr>
        <td>ID</td>
        <td>Name</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Smile A</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Smile B</td>
    </tr>
</table>
```

:::

As the amount of data increases,  
compared to the original `Markdown` table, the `HTML` table format is easier to maintain.

## Custom Markdown in VitePress

### Message Boxes

```Markdown
::: info
This is an info box
:::

::: tip
This is a tip box
:::

::: tip Rename
This is a tip box with a changed title  
All boxes listed here can have their titles changed!
:::

::: warning
This is a warning box
:::

::: danger
This is a danger box
:::

::: details
This is a collapsible box
:::
```

**Result:**

::: info
This is an info box
:::

::: tip
This is a tip box
:::

::: tip Rename
This is a tip box with a changed title  
All boxes listed here can have their titles changed!
:::

::: warning
This is a warning box
:::

::: danger
This is a danger box
:::

::: details
This is a collapsible box
:::

## External Tools

-   [Online tool to convert Excel to Markdown or HTML tables](https://tableconvert.com/zh-tw/excel-to-html)  
    Not effective for complex table formats, but useful for transferring data.
