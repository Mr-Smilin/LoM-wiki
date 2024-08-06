---
title: LoM-wiki 公開組件
description: Wiki 公開共用組件說明
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - dev
    - develop
    - developer
    - 開發
    - markdown
    - 協作
    - example
    - template
---

# {{ $frontmatter.title }}

## Tab 分頁組件

`Tabs` 提供屬性如以下：

1.  `position`：設定分頁表的位置

    -   `top` <Badge type="warning" text="默認值" /> ：設定分頁表在上方
    -   `bottom`：設定分頁表在下方

`Tab` 提供屬性如以下：

1.  `title` <Badge type="danger" text="必填" /> ：設定分頁籤的文字

<br>

<Tabs>
    <Tab title="分頁1">
        我是分頁1的內容
    </Tab>
    <Tab title="分頁2">
        我是分頁2的內容<br>
        我會換行
    </Tab>
</Tabs>

<br>

::: details 原始碼

```markdown
<Tabs>
    <Tab title="分頁1">
        我是分頁1的內容
    </Tab>
    <Tab title="分頁2">
        我是分頁2的內容<br>
        我會換行
    </Tab>
</Tabs>
```

:::

## 人物 Icon 懶人組件

目前提供少部分 Icon 與語法示例如下

`<BadendIcon>`連結預設會跳入生死簿, 可用 :no 指定跳入編號。

<br>

<BadendIcon :size='`medium`'>我是文字 1</BadendIcon>  
<BadendIcon :size='`small`'>我是文字 2</BadendIcon>  
<BadendIcon>我是文字 3</BadendIcon>
<BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon>

<br>

::: details 原始碼

```markdown
<BadendIcon :size='`medium`'>我是文字 1</BadendIcon>
<BadendIcon :size='`small`'>我是文字 2</BadendIcon>
<BadendIcon>我是文字 3</BadendIcon>
<BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon>
```

:::

---

`<Girl[0-8]Icon>`連結預設會跳入人物列傳頁面，詳情參考[夢境心上人](/people/dream-sweetheart.html)

small(小型)圖案為 32 px _ 32 px,  
medium(中型) 圖案 100 px _ 100 px。
汗青書的尺寸為例外：
small(小型)圖案為 38 px _ 44 px,  
medium(中型) 圖案 76 px _ 88 px。

<br>

<Girl0Icon :size='`medium`'>我是文字 4</Girl0Icon>  
<Girl0Icon :size='`small`'>我是文字 5</Girl0Icon>  
<Girl0Icon>我是文字 6</Girl0Icon>

<br>

::: details 原始碼

```markdown
<Girl0Icon :size='`medium`'>我是文字 4</Girl0Icon>
<Girl0Icon :size='`small`'>我是文字 5</Girl0Icon>
<Girl0Icon>我是文字 6</Girl0Icon>
```

:::

---

### 人物 Icon 懶人組件使用示例

|                           語法                           | 效果                                                    |                        說明                         |
| :------------------------------------------------------: | :------------------------------------------------------ | :-------------------------------------------------: |
| `` <BadendIcon :size="`medium`">我是文字</BadendIcon> `` | <BadendIcon :size="`medium`">我是文字</BadendIcon>      |                    顯示中型 Icon                    |
| `` <BadendIcon :size="`small`">我是文字</BadendIcon> ``  | <BadendIcon :size="`small`">我是文字</BadendIcon>       |                    顯示小型 Icon                    |
|           `<BadendIcon>我是文字</BadendIcon>`            | <BadendIcon>我是文字</BadendIcon>                       |           採用預設大小, 預設為"\`small\`"           |
|               `<BadendIcon></BadendIcon>`                | <BadendIcon></BadendIcon>                               |    不寫任何文字，採用預設大小, 預設為"\`small\`"    |
| `<BadendIcon :no="30">生死簿30『清理門戶』</BadendIcon>` | <BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon> | no 用來連結生死簿的編號, 不使用則會跳到該頁最上面。 |

### 可用屬性寫法

| 屬性名稱 | 值                          | default     |
| :------- | :-------------------------- | :---------- |
| size     | "\`medium\`" \| "\`small\`" | "\`small\`" |
| no       | 0 <= no <= 90               | 0           |

### 目前已可用組件：

-   `<BadendIcon>` : <BadendIcon>生死簿 (飲茶躺)</BadendIcon>, 預設點擊會跳到生死簿。
-   `<EndIcon>` : <EndIcon>汗青書</EndIcon>, 不給no, 預設點擊會跳到汗青書列表。
-   `<EndIcon no="49">` : <EndIcon no="49">汗青書49：喪家之犬</EndIcon>, 新增no會跳到指定編號的汗青書。

以下人物頭像預設會跳到人物列傳頁面：

-   `<Girl0Icon>` : <Girl0Icon>小師妹頭像</Girl0Icon>
-   `<Girl1Icon>` : <Girl1Icon>瑞杏頭像</Girl1Icon>
-   `<Girl2Icon>` : <Girl2Icon>葉雲裳頭像</Girl2Icon>
-   `<Girl3Icon>` : <Girl3Icon>虞小梅頭像</Girl3Icon>
-   `<Girl4Icon>` : <Girl4Icon>上官瑩頭像</Girl4Icon>
-   `<Girl5Icon>` : <Girl5Icon>夏侯蘭頭像</Girl5Icon>
-   `<Girl6Icon>` : <Girl6Icon>郁竹頭像</Girl6Icon>
-   `<Girl7Icon>` : <Girl7Icon>魏菊頭像</Girl7Icon>
-   `<Girl8Icon>` : <Girl8Icon>龍湘頭像</Girl8Icon>

## 物品 Icon 懶人組件

目前提供少部分 Icon 與語法示例如下, 以`BookItemIcon`為例,  
可替換下面已可用組件任一, 只要求`no`有及`物品使用類型`對應即可  
與人物 Icon 的差別在於多了一個背景，  
此外，此組件使用的圖片有對應`特定位置擺放`。

`<BookItemIcon>`預設有連結, 點擊會跳入對應資訊頁面,  
此外, 預設圖案為 small(小型, 100 px _ 100 px);  
medium 為中型(200 px _ 200 px);  
可透過 `:size` 設定大小。  
若 needLink = false 時, 點擊圖片則會啟用圖片放大。  
僅有`no`為必填值。

<br>

<BookItemIcon :no="6001">我是文字</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">我是文字 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">我是文字 2</BookItemIcon>

<br>

::: details 原始碼

```markdown
<BookItemIcon :no="6001">我是文字</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">我是文字 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">我是文字 2</BookItemIcon>
```

:::

### 可用屬性寫法

因 `type` 已包含在組件名稱中，故不需額外設定。
| 屬性名稱 | 值 | default | require |
| :------- |:----------------------------|:------------|:--------|
| no | 根據不同的物品有不同的值 | - |o |
| size | "\`medium\`" \| "\`small\`" | "\`small\`" | x |
| needLink | true \| false | true |x |

### 目前已可用組件(每一組件代表不同的物品類型)：

-   `<BookItemIcon>` : 武學書籍(book),
-   `<FoodItemIcon>` : 食物(food),
-   `<NewspaperItemIcon>` : 江湖快報(newspaper),
-   `<SpecialItemIcon>` : 特殊道具(special),
-   `<TeaItemIcon>` : 茶水(tea),
-   `<WineItemIcon>` : 酒(wine),

### 對應擺放路徑格式

```
docs/public/images/items/${type}s/item_${type}_${no}.png
```

其中 `${type}` 為物品類型，如 `book`、`food`、`special`、`tea`、`wine`；  
`${no}` 為物品編號。

舉例而言 武學書籍(book) 編號為 6001, 圖片路徑為 `docs/public/images/items/books/item_book_6001.png`,  
特殊道具(special) 編號為 2003, 圖片路徑為 `docs/public/images/items/specials/item_special_2003.png`

::: warning
使用前請先確認是否該圖檔案存在，若不存在，請一並上傳至指定路徑。  
若不確定物品的分類，請以圖片解包原名為主
:::

## 心相 Icon 懶人組件

<MoodIcon :mood="`high`">我是文字</MoodIcon>  
<MoodIcon :mood="`good`">我是文字 1</MoodIcon>  
<MoodIcon >我是文字 2</MoodIcon>  
<MoodIcon :mood="`normal`">我是文字 3</MoodIcon>  
<MoodIcon :mood="`low`">我是文字 4</MoodIcon>  
<MoodIcon :mood="`bad`">我是文字 5</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`medium`">我是文字 6</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`small`">我是文字 7</MoodIcon>

<br>

::: details 原始碼

```markdown
<MoodIcon :mood="`high`">我是文字</MoodIcon>
<MoodIcon :mood="`good`">我是文字 1/MoodIcon>
<MoodIcon >我是文字 2</MoodIcon>
<MoodIcon :mood="`normal`">我是文字 3</MoodIcon>
<MoodIcon :mood="`low`">我是文字 4</MoodIcon>
<MoodIcon :mood="`bad`">我是文字 5</MoodIcon>
<MoodIcon :mood="`bad`" :size="`medium`">我是文字 6</MoodIcon>
<MoodIcon :mood="`bad`" :size="`small`">我是文字 7</MoodIcon>
```

:::

### 可用屬性寫法

| 屬性名稱 | 值                                                                 | default      | require |
| :------- | :----------------------------------------------------------------- | :----------- | :------ |
| size     | "\`medium\`" \| "\`small\`"                                        | "\`small\`"  | x       |
| mood     | "\`high\`" \| "\`good\`" \| "\`normal\`" \| "\`low\`" \| "\`bad\`" | "\`normal\`" | x       |

## Markdown 外部解析工具

用來主動解析被 html 包住的內容  
除了換行還是只能使用 `<br>` 以外，其他的 Markdown 都可以使用

<br>

<div>
    ~~我是純HTML格式~~
</div>
<div>
    <MarkdownWrapper>
        ~~我是在HTML中，使用MarkdownWrapper框起來的格式~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||我還支援防劇透文字||
    </MarkdownWrapper>
</div>

<br>

::: details 原始碼

```Markdown
<div>
    ~~我是純HTML格式~~
</div>
<div>
    <MarkdownWrapper>
        ~~我是在HTML中，使用MarkdownWrapper框起來的格式~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||我還支援防劇透文字||
    </MarkdownWrapper>
</div>
```

:::

## BTable 排序表格

替表格加上排序效果  
將外層的 `<table>` 換成 `<BTable>` 即可  
第一行 `<td>` 做為標題，可傳入 `字串`、`Markdown`、`HTML`  
其他行 `<td>` 做為表格，可傳入 `字串`、`Markdown`、`HTML`、`Component`

<br>

`BTable` 提供屬性如以下：

1.  `:horizontal`：將表格轉為橫向顯示

    -   `true`：轉成橫向
    -   `false` <Badge type="warning" text="默認值" /> ：不轉成橫向

2.  `:unsearch`：控制表格搜尋功能

    -   `true`：關閉搜尋
    -   `false` <Badge type="warning" text="默認值" /> ：開啟搜尋

3.  `:tags`：設定搜尋標籤(當 `unsearch` = `true` 時無效)

    -   `text` <Badge type="danger" text="必填" /> ：標籤文字
    -   `icon`：標籤 icon

4.  `searchMode`：設定搜尋的類型

    -   `and` <Badge type="warning" text="默認值" /> ：交集查詢
    -   `or`：聯集查詢

5.  `:stickyHeader`：設定表頭凍結
    -   `true`：啟用凍結
    -   `false` <Badge type="warning" text="默認值" /> ：關閉凍結

第一行(標題) `td` 提供屬性如以下：

1.  `:unsortable`：控制欄位排序

    -   `true`：關閉排序
    -   `false` <Badge type="warning" text="默認值" /> ：開啟排序

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

::: details 原始碼

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
    <td :unsortable=true>last_name</td> // 此行不排序
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

`BTable` 內的 `<tr>` `<td>` 屬性皆會保留

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

::: details 原始碼

```Markdown
<BTable :unsearch=true>
  <tr>
    <td>age</td>
    <td :unsortable=true>first_name</td> // 此行不排序
    <td>last_name</td>
  </tr>
  <tr style='background-color: #f0f0f0; color: black;'> // 除標題外的 tr 可以設定屬性
    <td>40</td>
    <td style='color: red;'>Dickerson</td> // td 也可以
    <td>Macdonald</td>
  </tr>
</BTable>
```

:::

## InfoList 詳細資料組件

佔據側邊一段空間的組件，  
通常用法是在 `<InfoList>` 底下添加其他文字或是組件，填滿同列的剩餘空間

`InfoList` 提供屬性如以下：

1.  `position`：設定組件位置

    -   `left`：設定組件在左邊
    -   `right` <Badge type="warning" text="默認值" /> ：設定組件在右邊
    -   `none`：關閉浮動效果

`Info` 提供屬性如以下：

1.  `title` <Badge type="danger" text="必填" /> ：設定詳細內容的標題文字
2.  `open`：預設是否展開

<br>

<div style=" display: flex; width: 100%; height: 100%">
<InfoList position="left">
  <Info title="列傳一" open=true>
      師承錦香宮，劍法精絕的清麗佳人。<br>
      踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。<br>
      雖然如此，由於不諳世事，意外地容易受騙上當。
  </Info>
  <Info title="列傳二">
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
我是測試文字我是測試文字我是測試文字我是測試文字<br>  
我是測試文字我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br>   
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
我是測試文字<br> 
</div>

<br>

::: details 原始碼

```Markdown
<InfoList position="left">
  <Info title="列傳一" open=true>
      師承錦香宮，劍法精絕的清麗佳人。<br>
      踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。<br>
      雖然如此，由於不諳世事，意外地容易受騙上當。
  </Info>
  <Info title="列傳二">
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
我是測試文字*n
```

:::

## wikilink

使用 `[[]]` 包起來的連結，參照對象為 `title`

<br>

[[LoM-wiki 公開組件]]  
[[LoM-wiki 公開組件|自訂文字]]  
[[LoM-wiki 公開組件#wikilink|指定錨點]]  
[[LoM-wiki 公開組件|可以在自訂文字寫~~Markdown語法~~跟<span style='color: red;'>HTML語法</span>]]

<br>

::: details 原始碼

```markdown
[[LoM-wiki 公開組件]]  
[[LoM-wiki 公開組件|自訂文字]]  
[[LoM-wiki 公開組件#wikilink|指定錨點]]  
[[LoM-wiki 公開組件|可以在自訂文字寫~~Markdown語法~~跟<span style='color: red;'>HTML語法</span>]]
```

:::

## 結局組件
```markdown
<EndBackground no=8 title="被煮的狗">
兔死狗烹，你這走狗已經沒有用了．用張<br>
大餅就能騙得你團團轉，可真划算．<br>
<br>
<br>
<!-- 註解：此行用於標示給編輯者使用，使用者是看不到的。用於提示此處有空行，因排版原因，請勿刪除 -->
</EndBackground>
```

<EndBackground no=8 title="被煮的狗">
兔死狗烹，你這走狗已經沒有用了．用張<br>
大餅就能騙得你團團轉，可真划算．<br>
<br>
<br>
<!-- 註解：此行用於標示給編輯者使用，使用者是看不到的。用於提示此處有空行，因排版原因，請勿刪除 -->
</EndBackground>

```markdown
<EndBackground no=0 title="沒有對應圖片的情況">
沒有對應圖片的情況<br>
沒有對應圖片的情況<br>
沒有對應圖片的情況<br>
<br>
</EndBackground>
```

<EndBackground no=0 title="沒有對應圖片的情況">
沒有對應圖片的情況<br>
沒有對應圖片的情況<br>
沒有對應圖片的情況<br>
<br>
</EndBackground>

### 可用屬性寫法

| 屬性名稱  | 值    | default | require |
|:------|:-----|:--------| :------ |
| no    | 1~50 | x       | x       |
| title | 一般文字 | x       | x       |

註： 
1. 結局描述直接放在標記符中即可，如以上範例 `兔死狗烹，...可真划算．`此段文字的位置。
2. 部分結局可能會有圖片共用。
3. 此部分顯示自動分為行動裝置版本與一般版本、若有編輯上異常請於discord反饋。
4. 目前已經將排版調整過, 大部分的情況都能與遊戲的畫面相符，  
僅有少部分由於排版限制(或遊戲本身排版限制)，可能會有些許差異，  
應屬誤差範圍，將於之後有機會再次改進。
5. 若有文字方塊區不足長寬問題，請自行補充`<br>`換行符號或`　`全形空格。  
並於補充文字末尾加註`<!-- 此處因排版, 放入部分空行、全形空格, 無理由請勿移除 -->`