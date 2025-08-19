---
title: Official Update Page Module Description
description:
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

[Official Update Page](/develop/1-start.html)

## Update Description

The current official update page does not directly correspond to a .md file on GitHub.  
The current mechanism uses the build wiki to include individual .md files into the page  
by utilizing the `include` feature of `vitepress`.  
Below is an automatically generated example of the news.md template.

```
--- // [!code --]
title: Official Update // [!code --]
tags: // [!code --]
  - news // [!code --]
  - news // [!code --]
  - game update // [!code --]
  - update // [!code --]
--- // [!code --]
// [!code --]
# {{ $frontmatter.title }} // [!code --]
<!--@include: @/other/news/{date}-{order}-{md summary}.md-->
<!--@include: @/other/news/20240628-03-demoUpdate.md-->
<!--@include: @/other/news/20240628-02-release.md-->
<!--@include: @/other/news/20240628-01-release.md-->
<!--@include: @/other/news/20240627-01-release.md-->
```

## Naming Convention

The naming convention is as follows: the date is an `8-digit number`, such as `20240708`,  
the order is a `2-digit number`, such as `01`, `02`, `03`, etc., indicating the sequence of information for the day  
(both `release` and `demoUpdate` are considered the same, just add numbers for each file).  
The md summary is a brief description, such as `release`, `demoUpdate`, etc.  
Then connect these three pieces of information with `-`,  
and end with .md.

For example: `20240628-02-release.md` or `20240628-01-demoUpdate.md` are both acceptable.

```
@/other/news/{date}-{order}-{md summary}.md
```

## How to Use

Taking `@/other/news/20240705-02-demoUpdate.md` as an example,  
after this update, this module will be directly included in news.md,  
so there is no need to add titles, article tags, title, etc.,  
every time there is an update.  
Those can be reused directly,  
the `red part` mentioned above does not need to be written into the .md file again.

Specifically,  
if you need to add an official update,  
first create a .md file according to the naming format, place it under `docs/other/news/`,  
write the update content, and then run `npm run build`.

```
## [Demo Version Update v2.1.4](https://store.steampowered.com/news/app/1859910/view/4267805297667980568?l=tchinese)

Published on
Friday, July 5, 2024

Feature Adjustments

Adjusted game save path to
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\Save`

For players with the official version, if you want to run the DEMO version from the hard drive, please backup your save files first.

The save path for the official version is the folder for Steam cloud save synchronization
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\{SteamId}`

How to find your SteamId:
Profile->Account Details->Below Account Name
```