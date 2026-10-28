---
title: 如何在本地運行本 wiki
description: 本專案使用 `node` 版本為 `18.18.1`，有編輯權限可直接 `pull` 專案`
tags:
    - dev
    - develop
    - developer
    - 開發
    - 協作
    - npm
---

# 如何在本地端預覽修改結果

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

::: warning 💡 注意
本文檔面向有基本編程能力的開發人員  
對於部分基本概念會略過，請注意
:::

## <高級者說明>

本專案使用 `node` 版本為 `18.18.1`  
有編輯權限可直接 `pull` 專案，  
發 PR 請先`fork`

`clone` 至本地後，運行以下指令

```
npm install
npm run build
npm run dev
```

順利的話，即可在 `localhost:5173` 看到網站，進行編輯。

往後執行只需執行 `npm run dev`

::: warning 💡 注意
協作專案，`push`檔案前請務必先`pull`一次，檢查是否存在更新的版本！
:::

## <菜雞版說明>

(1)點擊右上角圖案進入 github 頁面  
![](/images/develop/3-run-local/菜雞預覽教學01.webp)  
(2)把 source code 下載到電腦中隨便找個地方解壓縮  
![](/images/develop/3-run-local/菜雞預覽教學02.webp)  
(3)下載並安裝[NPM](https://nodejs.org/dist/v18.18.1/node-v18.18.1-x64.msi)與[GIT](https://git-scm.com/downloads)  
(4)於 source code 資料夾路徑輸入 CMD，會跳出該路徑的命令提示字元  
![](/images/develop/3-run-local/菜雞預覽教學03.webp)  
(5)依序輸入 npm install 與 npm run dev  
![](/images/develop/3-run-local/菜雞預覽教學04.webp)  
(6)在瀏覽器網址輸入 `localhost:5173/LoM-wiki/`
![](/images/develop/3-run-local/菜雞預覽教學05.webp)  
(7)完成以上步驟後即可即時預覽儲存後的所有修改結果

## <菜鷄版説明2>

上文中的 `npm run dev` 會啓用熱更新，導致頁面瀏覽性能表現不佳。

如果無需修改wiki文檔，僅以以閲讀參考為目的，可以使用以下方式瀏覽：

```
npm run docs:preview
```
執行成功後，打開 `localhost:4173/LoM-wiki/` 即可瀏覽。

它的代價是，每次wiki更新後，需要重新執行 `npm run build` 命令。

有鑒於此，我們可以對本地部署流程進行調整，盡量降低這個副作用。

這裏假定您已經遵循上一節第(3)步的説明，下載並安裝了 [GIT](https://git-scm.com/downloads) 。  

### 1. 克隆專案

隨便找一個地方，用來存儲專案，並按照上一節第(4)步的説明，啓動命令提示字元。

然後輸入：

```
git clone https://github.com/Mr-Smilin/LoM-wiki
```
這會將專案下載到本地。

這時，這個命令提示字元可以關閉了。

### 2. 創建新分支

進入專案的根目錄，啓動新的命令提示字元，輸入：

```
git switch -c local-view
```
專案原來的分支(主分支)是 `main` ，執行以上命令後，將會創建並切換到一個名爲 `local-view` 的分支。

::: details 驗證分支
你可以用 `git branch --show-current` 命令來驗證當前分支。
如果當前分支不是 `local-view`, 可以使用 `git checkout local-view` 來切換過來。
:::

命令提示字元不要關，我們還有用。

### 3. 安裝 `bun`

專案原本使用 `npm` + `node.js` 開發，如果是貢獻wiki，我們要遵循此原則，但對於本地瀏覽而言，我們可以用 `bun` 來替代它們，以獲取更好的性能。

在命令提示字元中輸入如下命令，即可安裝 `bun` ：

```
powershell -c "irm bun.sh/install.ps1 | iex"
```
當進度條跑滿，安裝完畢後，關掉所有的終端窗口，以專案根目錄為起點，啓動命令提示字元，輸入以下命令：

```
bun --version
```
輸出版本號説明安裝成功。

### 4. 修改檔案

用任意支持 `Utf-8` 的文本編輯器打開專案根目錄下的 `package.json` 檔案。

如無意外，將看到這樣的内容：

```
  "scripts": {
    "dev": "npm run docs:dev",
    "build": "npm run docs:build",
    "docs:dev": "node ./tools/buildSimplifiedChinese.js && node ./tools/buildLocalePageManifest.js && node ./tools/buildWikiLinkIndex.js && vitepress dev docs",
    "docs:build": "node ./tools/buildNewsList.js && node ./tools/buildBadendList.js && node ./tools/buildSimplifiedChinese.js && node ./tools/checkSimplifiedChinese.js && node ./tools/buildLocalePageManifest.js && node ./tools/buildContributors.js && node ./tools/buildWikiLinkIndex.js && node ./tools/buildConvertToWebp.js && node --max-old-space-size=8192 ./node_modules/vitepress/bin/vitepress.js build docs",
    "docs:preview": "vitepress preview docs --port 4173",
    "check:zh-hans": "node ./tools/buildSimplifiedChinese.js && node ./tools/checkSimplifiedChinese.js"
  },
```
我們將它替換爲以下内容：

```
  "scripts": {
    "dev": "bun run docs:dev",
    "build": "bun run docs:build",
    "preview": "bun run docs:preview",
    "docs:dev": "bun ./tools/buildLocalePageManifest.js && bun ./tools/buildWikiLinkIndex.js && vitepress dev docs",
    "docs:build": "bun ./tools/buildBadendList.js && bun ./tools/buildLocalePageManifest.js && bun ./tools/buildWikiLinkIndex.js && bun ./node_modules/vitepress/bin/vitepress.js build docs",
    "docs:preview": "vitepress preview docs --port 4173"
  },
```
::: details 這裏修改了什麽？
  - 用 `bun` 命令取代 `npm` 和 `node` 命令。
  - 移除了本地查攻略用不到的功能（新聞，貢獻者，繁簡轉換等）。
  - 簡化 `preview` 脚本的調用。
:::

::: details  驗證
如果你願意，可以用 `git status` 命令驗證這次操作的後果，如無意外會有如下輸出：
```
On branch local-view
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")
```
這表示git已經發現了我們對 `package.json` 的修改。
:::

保存後，我們要告诉git接受這些修改：

```
git add .
```
不要忘記上面末尾的 `.` ，這表示接受全部修改。

::: details  驗證
`git status` 輸出如下：
```
On branch local-view
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   package.json
```
這表示 `package.json` 的修改已被接受。
:::

最後，我們提交修改到本地：

```
git commit -m "更新 package.json ：執行指令，簡化依賴，用bun取代npm和node.js"
```
::: details  驗證
`git status` 輸出如下：
```
On branch local-view
nothing to commit, working tree clean
```
這表示修改提交成功。
:::

這也是傳統的git倉庫專案修改流程。

::: warning 注意
本節對於專案中檔案的修改，僅用於本地閲讀wiki，不要嘗試 `push` 或 `PR` 到上游倉庫。
:::

### 5. 執行，部署，更新

到目前爲止，我們的 “瀏覽專屬專案” 和環境已經配置完畢。

同 `npm` 一樣，我們在命令提示字元中，先使用 `bun install` 命令安裝依賴，再通過 `bun run build` 命令構建專案。

你會發現這兩個命令的執行時間有了不少的提升，而構建完成後，我們就可以使用 `bun run preview` 來啓動網站，瀏覽攻略了。

實際上，在 `bun` 的改進下，即便使用 `bun run dev` 来浏览頁面，速度上也比之前要快一些。

當上游倉庫更新后，我們需要更新進行更新。

新建分支的好處在於，即便上游倉庫更新了檔案，只要 `package.json` 沒有變化，我們就不用重複下載，或者重複編輯這個檔案。

首先我們要切換到 `main` 分支：

```
git checkout main
```
第二步，拉取：

```
git pull
```
第三步，切換回我們的分支：

```
git checkout local-view
```
第四步，更新分支：

```
git merge main --no-edit
```

此時我們執行 `bun run dev`，可以在保證操作體感的同時，熱更新檔案。

不過筆者自己，則寧願稍微多花一點時間，通過 `bun run build` + `bun run preview` 來部署，以獲取最高的流暢度。

### 6. 自動化

我寫了兩個指令碼，來自動化更新操作。

::: details 以 `bun run dev` 的方式執行
```
@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

set "REMOTE=origin"
set "MAIN_BRANCH=main"
set "LOCAL_BRANCH=local-view"
set "MERGE_LOG=%temp%\loMgit_merge_output.txt"

echo.
echo ========================================
echo  開始同步流程：%MAIN_BRANCH% ^> %LOCAL_BRANCH%
echo ========================================

echo.
echo [1/4] 正在切換到 %MAIN_BRANCH% 分支...
git checkout %MAIN_BRANCH%
if !errorlevel! neq 0 goto :error

echo.
echo [2/4] 正在拉取遠端變動...
git pull %REMOTE% %MAIN_BRANCH%
if !errorlevel! neq 0 goto :error

echo.
echo [3/4] 正在切換到 %LOCAL_BRANCH% 分支...
git checkout %LOCAL_BRANCH%
if !errorlevel! neq 0 goto :error

echo.
echo [4/4] 正在合併 %MAIN_BRANCH% 變動...
git merge %MAIN_BRANCH% --no-edit > "%MERGE_LOG%" 2>&1
set "MERGE_ERR=!errorlevel!"
set "NEED_INSTALL=0"

findstr /C:"CONFLICT (content): Merge conflict in package.json" "%MERGE_LOG%" > nul
if !errorlevel! equ 0 (
    echo.
    echo [!] 檢測到 package.json 存在合併衝突，保留本地版本（--ours）...
    git checkout --ours package.json > nul 2>&1
    git add package.json > nul 2>&1
    git commit --no-edit > nul 2>&1
    if !errorlevel! neq 0 (
        echo [x] 解決 package.json 衝突後提交失敗，可能存在其他未處理衝突。
        set "MERGE_ERR=1"
    ) else (
        echo [√] package.json 衝突已自動解決。
        set "NEED_INSTALL=1"
        set "MERGE_ERR=0"
    )
)

if !MERGE_ERR! neq 0 (
    echo.
    echo [x] 合併失敗，詳細日誌如下：
    echo ----------------------------------------
    type "%MERGE_LOG%"
    echo ----------------------------------------
    echo [i] 請手動解決衝突後重新運行腳本。
    goto :error
)

if !NEED_INSTALL! equ 1 (
    echo.
    echo [!] package.json 有變動，正在更新依賴...
    call bun install
    if !errorlevel! neq 0 goto :error
)

if exist "%MERGE_LOG%" del "%MERGE_LOG%" > nul 2>&1
echo.
echo [完成] 正在啓動 dev 服務...
call bun run dev
pause
exit /b 0

:error
echo.
echo ========================================
echo  [x] 工作流執行出錯！
echo ========================================
if exist "%MERGE_LOG%" (
    echo.
    echo 合併日誌：
    echo ----------------------------------------
    type "%MERGE_LOG%"
    echo ----------------------------------------
    del "%MERGE_LOG%" > nul 2>&1
)
pause
exit /b 1
```
:::

::: details 以 `bun run build` + `bun run preview` 的方式執行
```
@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

set "REMOTE=origin"
set "MAIN_BRANCH=main"
set "LOCAL_BRANCH=local-view"
set "MERGE_LOG=%temp%\loMgit_merge_output.txt"

echo.
echo ========================================
echo  開始同步流程：%MAIN_BRANCH% ^> %LOCAL_BRANCH%
echo ========================================

echo.
echo [1/5] 正在切換到 %MAIN_BRANCH% 分支...
git checkout %MAIN_BRANCH%
if !errorlevel! neq 0 goto :error

echo.
echo [2/5] 正在拉取遠端變動...
for /f "tokens=*" %%i in ('git rev-parse HEAD') do set beforeSHA=%%i
git pull %REMOTE% %MAIN_BRANCH%
if !errorlevel! neq 0 goto :error
for /f "tokens=*" %%i in ('git rev-parse HEAD') do set afterSHA=%%i

echo.
echo  拉取前 SHA: !beforeSHA!
echo  拉取後 SHA: !afterSHA!

if "!beforeSHA!"=="!afterSHA!" (
    echo.
    echo [i] 遠端無新提交，跳過合併與構建，直接啟動 preview。
    echo.
    echo [3/5] 正在切換到 %LOCAL_BRANCH% 分支...
    git checkout %LOCAL_BRANCH%
    if !errorlevel! neq 0 goto :error
    goto :finish
)

echo.
echo [3/5] 正在切換到 %LOCAL_BRANCH% 分支...
git checkout %LOCAL_BRANCH%
if !errorlevel! neq 0 goto :error

echo.
echo [4/5] 正在合併 %MAIN_BRANCH% 變動...
git merge %MAIN_BRANCH% --no-edit > "%MERGE_LOG%" 2>&1
set "MERGE_ERR=!errorlevel!"
set "NEED_INSTALL=0"

findstr /C:"CONFLICT (content): Merge conflict in package.json" "%MERGE_LOG%" > nul
if !errorlevel! equ 0 (
    echo.
    echo [!] 檢測到 package.json 存在合併衝突，保留本地版本（--ours）...
    git checkout --ours package.json > nul 2>&1
    git add package.json > nul 2>&1
    git commit --no-edit > nul 2>&1
    if !errorlevel! neq 0 (
        echo [x] 解決 package.json 衝突後提交失敗，可能存在其他未處理衝突。
        set "MERGE_ERR=1"
    ) else (
        echo [√] package.json 衝突已自動解決。
        set "NEED_INSTALL=1"
        set "MERGE_ERR=0"
    )
)

if !MERGE_ERR! neq 0 (
    echo.
    echo [x] 合併失敗，詳細日誌如下：
    echo ----------------------------------------
    type "%MERGE_LOG%"
    echo ----------------------------------------
    echo [i] 請手動解決衝突後重新運行腳本。
    goto :error
)

git diff !beforeSHA! !afterSHA! --name-only | findstr /C:"package.json" > nul
if !errorlevel! equ 0 (
    set "NEED_INSTALL=1"
)

if !NEED_INSTALL! equ 1 (
    echo.
    echo [!] package.json 有變動，正在更新依賴...
    call bun install
    if !errorlevel! neq 0 goto :error
)

echo.
echo [5/5] 正在構建頁面...
call bun run build
if !errorlevel! neq 0 goto :error

:finish
if exist "%MERGE_LOG%" del "%MERGE_LOG%" > nul 2>&1
echo.
echo [完成] 正在啓動 preview 服務...
call bun run preview
pause
exit /b 0

:error
echo.
echo ========================================
echo  [x] 工作流執行出錯！
echo ========================================
if exist "%MERGE_LOG%" (
    echo.
    echo 合併日誌：
    echo ----------------------------------------
    type "%MERGE_LOG%"
    echo ----------------------------------------
    del "%MERGE_LOG%" > nul 2>&1
)
pause
exit /b 1
```
:::

將上面的兩個指令碼分別複製到文本編輯器中，保存爲 `bat` 檔案，放在專案的根目錄下。

::: tip 注意
請確保此時的分支是 `local-view` 。
:::

然後，用文本編輯器打開根目錄下的 `git\info\exclude` 檔案，將保存的bat檔案的名稱每行一個添加到最下方。

筆者的兩個檔案分別叫做 `autoupdate-dev.bat` 以及 `autoupdate-preview.bat`， 所以可以直接寫成以下形式：

```
autoupdate-*.bat
```
這是爲了保證切換分支時，兩個檔案不會被移除，確保指令碼正常執行。

保存完成後，雙擊任意檔案，即可自動更新並打開服務。

::: warning
在上面的指令碼中，一旦 `package.json` 發生衝突，會强制以舊版的進行替換。
儘管理論上此檔案更新并不頻繁，但一旦發生衝突，建議需要手動檢查此檔案，進行合并或修復。
這樣才能確保穩定性。
:::