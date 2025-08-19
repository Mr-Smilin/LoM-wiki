---
title: Configuration File Description
description: This section mainly explains some key points that need to be edited in the `.vitepress` folder.
tags:
    - dev
    - develop
    - developer
    - development
    - collaboration
---

# Configuration File Description

::: tip 💡 Note
This provides basic knowledge related to editing the wiki.  
For game data queries, please refer to other pages.
:::

This site is developed using `VitePress`.  
For more details, refer to the [official documentation](https://vitepress.dev/).

Here, we mainly explain some key points that need to be edited in the `.vitepress` folder.

![](/images/develop/2-vitepress/01.webp)

-   `config.mjs` is the main configuration file that needs adjustment, affecting the left sidebar and the main settings of the site.
-   `theme` contains custom styles/tools for this site, please operate with a certain level of knowledge.

## Directory Adjustment

![](/images/develop/2-vitepress/02.webp)

Please modify `themeConfig.sidebar` in `config.mjs`

```
{
	text: "Category Title Here",
	items: [
        { text: "First Article in this Category", link: "/filename-of-md" },
        { text: "Second Article in this Category", link: "/filename-of-md" }
    ],
},
```

`themeConfig.sidebar.text` can be omitted (no title),  
For details, refer to the comparison between the left sidebar of this site and the actual data.

## CSS Styling

Simple CSS changes can be made directly in `.vitepress/theme/styles/style.css`.

If extensive modifications are needed, after familiarizing yourself with the structure,  
create a separate CSS file for integration.