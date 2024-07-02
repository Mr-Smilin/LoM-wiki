# 設定檔項目說明

::: tip 💡 注意
此處提供編輯 wiki 相關的基礎知識，  
有關遊戲資料查詢，請至其他頁面。
:::

本站使用 `VitePress` 進行開發  
詳細可參考 [官方文檔](https://vitepress.dev/zh/) 學習，

這邊主要講解 `.vitepress` 資料夾內，  
一些較常需要編輯的內容要點。

![](/images/1-2-devlep-vitepress/01.jpg)

- `config.mjs` 主要會需要調整的設定檔，影響左側目錄，以及站點的主要設定
- `theme` 本站的自定義樣式 / 工具，請在具備一定基礎知識的情況下操作

## 目錄調整

![](/images/1-2-devlep-vitepress/02.jpg)

請在 `config.mjs` 的 `themeConfig.sidebar` 修改

```
{
	text: "這裡是分類標題",
	items: [
        { text: "我是該分類下第一篇文章", link: "/我是md檔名稱" },
        { text: "我是該分類下第二篇文章", link: "/我是md檔名稱" }
    ],
},
```

`themeConfig.sidebar.text` 可不存在(沒有標題)，  
詳細可參照本站左側目錄與實際資料比對。

## CSS 美化

簡易 CSS 可直接在 `.vitepress/theme/styles/style.css` 進行增改

如果需要大量改動，請在熟悉架構後，  
另外建立 css 檔後接入。
