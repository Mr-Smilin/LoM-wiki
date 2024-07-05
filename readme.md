<h1 align="center">
    <img width="120" height="120" src="docs/public/images/index/logo.png" alt=""><br>
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
3. 使用你順手的IDE編輯`./docs/<your-md-file-class>/<your-md-file-name>.md`
4. 存檔, 提交commit, 推送到`Github Pull Request`, 等待審核。
5. 審核通過後，合併到主分支，若部署成功，網站即會更新。
6. 上`活俠傳Wiki`看看你的貢獻有多棒！

## 檔案結構 | File Structure
本專案的檔案結構如下：
```
.
├── backup
│         └── en
├── docs
│         ├── characters
│         ├── develop
│         ├── en
│         ├── event
│         ├── mechanism
│         ├── other
│         ├── people
│         └── public
│             ├── images
│             │         ├── characters
│             │         ├── develop
│             │         ├── generic
│             │         └── index
│             └── json
├── node_modules
└── tools
```
### `./backup` 存放各版本的備份文件、模板文件等。  
`./backup/en` 存放國際版的備份文件、模板文件等。 

### `./docs` 存放各類別的文檔，md檔案、開發用的資料文件都會放在這裡。  
`./docs/characters` 存放人物列表及人物頁面。  
`./docs/develop` 存放開發文件，開發導覽、開發工具、開發規範等。  
`./docs/en` 英文版文檔。  
`./docs/event` 存放事件相關資料。  
`./docs/mechanism` 存放遊戲機制資料。  
`./docs/other` 存放其他類別的資料，如資料來源、官方更新資訊等。  
`./docs/people` 存放舊版人物資料，後續預計搬移到`./docs/characters`中。    

#### `./docs/public` 存放公共資源，如圖片、JSON檔案等。  
`./docs/public/images` 存放圖片  
`./docs/public/images/characters` 存放人物圖片  
`./docs/public/images/develop` 存放開發文件用圖片    
`./docs/public/images/generic` 存放一般用圖片  
`./docs/public/images/index` 存放首頁用圖片  
`./docs/public/json` 存放JSON檔案  

### `./node_modules` 存放npm模組, 一般為npm自行創建, 不會隨著你的commit提交, 也不會、不應讓你去修改它。  
### `./tools` 存放開發打包工具


## 國際化 | i18n

文檔支持繁體中文、English。

## 許可 | Licence

<details>
<summary>CC BY-NC-SA-4.0 Licence</summary>

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMr-Smilin%2FLoM-wiki.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FMr-Smilin%2FLoM-wiki?ref=badge_large&issueType=license)

</details>
