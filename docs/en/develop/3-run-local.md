---
title: How to Run this Wiki Locally
description: This project uses `node` version `18.18.1`, with editing permissions you can directly `pull` the project.
tags:
    - dev
    - develop
    - developer
    - development
    - collaboration
    - npm
---

# How to Preview Changes Locally

::: tip 💡 Note
This section provides basic knowledge related to editing the wiki.  
For game data queries, please refer to other pages.
:::

::: warning 💡 Note
This document is aimed at developers with basic programming skills  
Some basic concepts will be skipped, please be aware.
:::

### Advanced Instructions

This project uses `node` version `18.18.1`  
With editing permissions, you can directly `pull` the project,  
Before submitting a PR, please `fork`

After cloning to your local machine, run the following commands

```
npm install
npm run build
npm run dev
```

If everything goes smoothly, you can see the website at `localhost:5173` for editing.

For future runs, simply execute `npm run dev`

::: warning 💡 Note
For collaborative projects, before `pushing` files, be sure to `pull` once to check for any updated versions!
:::

### Beginner Instructions

(1) Click on the icon in the top right corner to go to the GitHub page  
![](/images/develop/3-run-local/菜雞預覽教學01.webp)  
(2) Download the source code to your computer and extract it to any location  
![](/images/develop/3-run-local/菜雞預覽教學02.webp)  
(3) Download and install [NPM](https://nodejs.org/dist/v18.18.1/node-v18.18.1-x64.msi) and [GIT](https://git-scm.com/downloads)  
(4) Enter CMD in the source code folder path, which will open the command prompt for that path  
![](/images/develop/3-run-local/菜雞預覽教學03.webp)  
(5) Enter npm install and npm run dev sequentially  
![](/images/develop/3-run-local/菜雞預覽教學04.webp)  
(6) Enter `localhost:5173/LoM-wiki/` in the browser address bar  
![](/images/develop/3-run-local/菜雞預覽教學05.webp)  
(7) After completing the above steps, you can instantly preview all saved modifications.
