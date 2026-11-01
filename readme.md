<h1 align="center">
    <img width="120" height="120" src="docs/public/images/index/logo.webp" alt=""><br>
    LoM-wiki
</h1>

<p align="center">
    <a href="https://github.com/Mr-Smilin/LoM-wiki"><img src="https://img.shields.io/badge/npm-18.18.1-blue?style=flat-square"></a>  
    <a href="https://github.com/Mr-Smilin/LoM-wiki/blob/main/License"><img src="https://img.shields.io/badge/license-CC_BY_NC_SA_4.0-green?style=flat-square"></a>  
    <a href="https://github.com/Mr-Smilin/LoM-wiki"><img src="https://img.shields.io/github/stars/Mr-Smilin/LoM-wiki?style=flat-square"></a>
</p>

## 開發 | Development

`clone` 至本地後，運行以下指令

```sh
npm install
npm run build
npm run dev
```

順利的話，即可在 `localhost:5173` 看到網站，進行編輯。

往後執行只需 `npm run dev`

## 快速開始 | Quick Start

1. 以下操作預設從本專案根目錄開始，若不是，請切換到該目錄。
2. 以下指令皆在終端機執行，執行複製`./backup/dev-clean-template.md`到`./docs/<your-md-file-class>/<your-md-file-name>.md`
    ```shell
    cp ./backup/dev-clean-template.md ./docs/<your-md-file-class>/<your-md-file-name>.md
    ```
3. 使用你順手的 IDE 編輯`./docs/<your-md-file-class>/<your-md-file-name>.md`
4. 存檔, 提交 commit, 推送到`Github Pull Request`, 等待審核。
5. 審核通過後，合併到主分支，若部署成功，網站即會更新。
6. 上[活俠傳 Wiki](https://smilin.net/LoM-wiki/)看看你的貢獻有多棒！

## 檔案結構 | File Structure

本專案的檔案結構如下：

```
.
├── .github
│         ├── ISSUE_TEMPLATE
│         └── workflows
├── backup
│         └── en
├── docs
│         ├── .vitepress
│         │         └── theme
│         │                   ├── components
│         │                   ├── data
│         │                   ├── script
│         │                   └── styles
│         ├── develop
│         ├── en
│         ├── ja
│         ├── zh-hans                       (自動生成，不進 Git)
│         ├── event
│         │         ├── achievements
│         │         ├── badends
│         │         ├── detailed_description
│         │         ├── ends
│         │         ├── pursuit
│         │         ├── simple
│         │         └── stories
│         ├── other
│         │         ├── guide
│         │         │         └── mechanism
│         │         ├── image-generator
│         │         ├── news
│         │         ├── qna
│         │         └── test
│         ├── people
│         │         ├── characters
│         │         ├── factions
│         │         └── mobs
│         ├── public
│         │         ├── font
│         │         ├── images
│         │         │         ├── badends
│         │         │         ├── characters
│         │         │         │         ├── girl_0 ~ girl_8
│         │         │         │         └── ...
│         │         │         ├── collab
│         │         │         ├── develop
│         │         │         ├── engagement
│         │         │         ├── factions
│         │         │         ├── generic
│         │         │         │         ├── achievement_icon
│         │         │         │         ├── background
│         │         │         │         └── mood_icon
│         │         │         ├── guide
│         │         │         ├── index
│         │         │         ├── items
│         │         │         │         ├── books
│         │         │         │         ├── specials
│         │         │         │         └── ...
│         │         │         ├── mobs
│         │         │         ├── news
│         │         │         ├── qna
│         │         │         └── story-branch-timeline
│         │         └── json
│         └── system
│                   ├── books
│                   ├── engagement
│                   ├── items
│                   └── training
├── node_modules
└── tools
```

### `./.github` 存放 GitHub 設定

`./.github/ISSUE_TEMPLATE` Issue 範本。  
`./.github/workflows` GitHub Actions：`deploy.yml` 建置並部署到 GitHub Pages、`steam-news.yml` 每日抓 Steam 新聞產生江湖快報草稿、`algolia-scraper.yml` 每日更新 Algolia 搜尋索引。

### `./backup` 存放各版本的備份文件、模板文件等。

`./backup/en` 存放國際版的備份文件、模板文件等。

### `./docs` 存放各類別的文檔，md 檔案、開發用的資料文件都會放在這裡。

#### `./docs/.vitepress` VitePress 設定與自訂主題

`./docs/.vitepress/config.mjs` 站台設定（navbar、sidebar、多語系等）。  
`./docs/.vitepress/theme/components` Vue 元件，如人物頁、圖示、分頁、鍛冶場開發樹、圖片產生器等。  
`./docs/.vitepress/theme/data` 元件用資料檔，如 `eventSeries.js`、鍛冶場 / 煉丹房開發樹資料 `forge/`。  
`./docs/.vitepress/theme/script` 共用腳本，如語系路徑、WikiLink 索引等。  
`./docs/.vitepress/theme/styles` 自訂樣式。

#### 多語系目錄

`./docs/en` 英文版文檔。  
`./docs/ja` 日文版文檔。  
`./docs/zh-hans` 簡體中文版，由繁體中文 root 文檔自動生成，請勿手動編輯（詳見[國際化](#國際化--i18n)）。

其餘同 `navbar` 一級分類

人物 - `./docs/people` 存放人物類別資料，如心上人、稱號等。  
系統 - `./docs/system` 存放系統類別資料，如門派設施、秘笈列表等。  
事件 - `./docs/event` 存放事件類別資料，如主支線年表、生死簿等。  
其他 - `./docs/other` 存放其他類別資料，如官方更新、遊戲指南等。  
協助編輯 - `./docs/develop` 存放開發文件，開發導覽、開發工具、開發規範等。

二級分類同 `navbar` 子分類

`./docs/people/characters` 存放人物列表及人物頁面。  
`./docs/people/factions` 存放各門派、勢力頁面。  
`./docs/people/mobs` 存放江湖人士（路人、配角）頁面。  
`./docs/people/*.md` 單頁資料，如稱號列表 `title-list.md`、夢境心上人 `dream-sweetheart.md`。  
`./docs/system/books` 存放武學列表及武學頁面。  
`./docs/system/engagement` 存放戰鬥相關資料，如戰鬥指令、狀態、技能、介面說明。  
`./docs/system/items` 存放道具列表資料。  
`./docs/system/training` 存放養成指令頁面。  
`./docs/system/*.md` 單頁資料，如門派設施 `facility.md`、技能效果 `skill.md`、煉丹效果 `pills.md`、鍛冶場 / 煉丹房開發樹 `forge-roadmap.md`、商店、隱藏數值、彈珠台、原聲帶等。  
`./docs/event/achievements` 風雲史資料。  
`./docs/event/badends` 生死簿資料。  
`./docs/event/ends` 汗青書資料。  
`./docs/event/stories` 軼事奇聞整理。  
`./docs/event/pursuit` 結緣事件整理。  
`./docs/event/simple` 劇情事件（簡述）。  
`./docs/event/detailed_description` 劇情事件（詳述）。  
`./docs/event/*.md` 單頁資料，如主支線年表 `story-branch-timeline.md`、主支線簡易表格 `story-simple-table.md`、開幕前史年表 `pre-game-timeline.md`。  
`./docs/other/news` 存放官方更新資料（江湖快報）。  
`./docs/other/guide` 存放遊戲指南。  
`./docs/other/guide/mechanism` 存放遊戲機制資料。  
`./docs/other/image-generator` 汗青書、生死簿圖片產生器頁面。  
`./docs/other/qna` 官方問答、訪談整理。  
`./docs/other/test` 測試資料。  
`./docs/other/*.md` 單頁資料，如唐門圖書館 `lom-sheet.md`、大理段氏世系 `dali-duan-lineage.md`、測試用頁面 `test.md`；江湖快報 `news.md` 由 `tools/buildNewsList.js` 建置時生成，不進 Git。

#### `./docs/public` 存放公共資源，如圖片、字型、JSON 檔案等。

`./docs/public/font` 存放字型（圖片產生器使用）  
`./docs/public/images` 存放圖片  
`./docs/public/images/characters` 存放人物圖片(具體會再往下一層, 依據角色做分類)  
`./docs/public/images/badends` 存放生死簿圖片  
`./docs/public/images/develop` 存放開發文件用圖片  
`./docs/public/images/generic` 存放一般用圖片，如成就圖示、背景、心情圖示  
`./docs/public/images/index` 存放首頁用圖片  
`./docs/public/images/items` 存放物品圖片, 會依據類別做分類  
`./docs/public/images/factions`、`mobs`、`engagement`、`guide`、`news`、`qna`、`collab`、`story-branch-timeline` 存放對應頁面用圖片  
`./docs/public/json` 存放 JSON 檔案（`contributors.json`、`badend_list.json`、`badend_texts.json` 為建置時生成，不進 Git）

### `./node_modules` 存放 npm 模組, 一般為 npm 自行創建, 不會隨著你的 commit 提交, 也不會、不應讓你去修改它。

### `./tools` 存放開發打包工具

由 `npm run dev` / `npm run build` 自動執行，一般不需手動呼叫。

| 檔案 | 用途 |
|---|---|
| `buildSimplifiedChinese.js` | 由繁體 root 文檔生成 `docs/zh-hans/` |
| `checkSimplifiedChinese.js` | 檢查簡體頁面是否有繁體殘留 |
| `zhHansVariantMap.js` | 台灣慣用異體字對照表（上兩者共用） |
| `buildNewsList.js` | 產生官方更新列表 `docs/other/news.md` |
| `buildBadendList.js` | 產生生死簿列表資料 |
| `buildBadendTexts.js` | 產生生死簿圖片產生器的範本資料 |
| `buildLocalePageManifest.js` | 產生各語系已存在頁面清單，避免連到未翻譯頁 |
| `buildWikiLinkIndex.js` | 產生 WikiLink 標題索引 |
| `buildContributors.js` | 產生貢獻者名單 |
| `buildConvertToWebp.js` | 圖片轉 WebP |
| `fetchNews.js` | 抓 Steam 新聞產生江湖快報草稿（GitHub Actions 每日執行） |

## 國際化 | i18n

文檔支持繁體中文、简体中文、English、日本語。

简体中文以繁體中文 root 文檔作為唯一內容來源，建置或啟動開發伺服器前由 `tools/buildSimplifiedChinese.js` 自動產生至 `docs/zh-hans/`。`docs/zh-hans/` 是可重建的生成目錄，已加入 `.gitignore`，請勿直接編輯或提交其中檔案；若要修正文案或資料，請修改對應的繁體中文 root 文檔。

生成器會處理正文、frontmatter、Markdown/程式碼範例、Mermaid 文字、站內連結與 VitePress include，並使用 OpenCC 加上少量台灣慣用異體字對照產生符合中國大陸習慣的簡體內容。可執行：

```sh
npm run check:zh-hans
```

重新生成並檢查簡體頁面與主要共享 UI 中是否仍有可辨識的繁體殘留。由於 `docs/zh-hans/` 本身不進入 Git，生成頁面不建立獨立的 edit link、last updated 或 Git changelog；歷史與修改來源以對應的繁體 root 檔案為準。

## 許可 | Licence

<details>
<summary>CC BY-NC-SA-4.0 Licence</summary>

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMr-Smilin%2FLoM-wiki.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FMr-Smilin%2FLoM-wiki?ref=badge_large&issueType=license)

</details>
