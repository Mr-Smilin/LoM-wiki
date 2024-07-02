---
outline: [2, 3]
---

# 如何開始協作 LoM-wiki

::: tip 💡 注意
這裡是編輯 wiki 資料相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

## 第一步 - 建立 Github 帳戶

本站建立於 Github 上，仰賴 Github Page 的便利性，實現長期 wiki 站點架設

也因此，如果想要編輯本站文檔，需要持有 Github 帳戶。

- 請至 http://github.com 建立帳戶，需要輸入 使用者名稱 / 信箱 / 密碼
- 填寫完送出後，會有帳號方案選擇，請選擇 free(免費)
- 之後到信箱收驗證信，到此帳戶創建完畢

::: details 如果要求必須綁定二階段驗證
請在手機安裝 `Authenticator`  
到 https://github.com/settings/security 這個頁面，  
選擇 `Authenticator app`，按照指示完成綁定動作。
:::

## 第二步 - 獲得協作權限(非必要)

[聯絡我](mailto:lion31lion31@gmail.com)，提供你建立 Github 的信箱  
由我這邊開啟協作權限

有沒有權限差異在於

- 可以從文檔下方的 `在 Github 上編輯此頁面` 進行調整
- 更新文檔的操作不需要經過驗證
- 可以驗證來自非協作者的提交

## 第三步 - 編輯文檔

::: info 💡 歡迎補充
編輯文檔有很多方式，可能有缺漏，歡迎在留言處提供。
:::

### 在 Github 中直接編輯

::: warning 💡 注意
此方法需要先完成第二點
:::

透過文檔下方的 `在 Github 上編輯此頁面` 進行調整

![](/images/1-1-devlep-start/01.jpg)

![操作示意圖](/images/1-1-devlep-start/02.jpg)

可以點擊圖片放大

使用 Github 原生的文檔編輯器進行調整，  
左上是模式切換，預設`Edit`編輯模式，  
`Preview` 可以在存檔前，預先檢視修改後的結果。

![操作示意圖2](/images/1-1-devlep-start/03.jpg)

都完成後點擊右上角的`Commit changes`，  
彈出的視窗也點擊`Commit changes`，完成單文檔的編輯。

### 本地編輯

::: warning 💡 注意
此條例預設面向 `Git` 小白  
使用方法偏向土法煉鋼，  
提供遇到錯誤時，萬無一失的處理辦法  
原本就有一定 `Git` 知識的程序猿請按照習慣的方式進行本地作業。
:::

點擊本站右上的圖標，會跳轉至專案首頁

![](/images/1-1-devlep-start/04.jpg)

點選綠色的`Code`按鈕，`Download ZIP`  
就會將本 wiki 整包下載至電腦內，  
找個方便開發的地方整理好，進行解壓縮。

![](/images/1-1-devlep-start/05.jpg)

進入專案的 `docs` 資料夾，所有的 `wiki` 編輯都在此處增改

- 目錄下的 `.md` 檔對應 wiki 條例，可從網站網址尋找對應名稱  
  ::: details 網址示意圖
  ![](/images/1-1-devlep-start/06.jpg)
  :::
- `en` 資料夾內存放英文版本的同名 wiki 檔案，維護時可協助新增修改
- `public` 存放靜態資源，例如需要上傳圖檔，請將圖檔按照 `public/{md檔名}/{圖檔}.{副檔名}`的形式擺放
- `.vitepress` 為本專案的設定檔，請務必在閱讀[設定檔項目說明]()後再進行調整
