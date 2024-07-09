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

-   `position`：設定分頁表的位置
    -   `top` <Badge type="warning" text="默認值" /> ：設定分頁表在上方
    -   `bottom`：設定分頁表在下方

`Tab` 提供屬性如以下：

-   `title` <Badge type="danger" text="必填" /> ：設定分頁籤的文字

```Markdown
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

**效果：**

<Tabs>
    <Tab title="分頁1">
        我是分頁1的內容
    </Tab>
    <Tab title="分頁2">
        我是分頁2的內容<br>
        我會換行
    </Tab>
</Tabs>

## 人物 Icon 懶人組件

目前提供少部分 Icon 與語法示例如下

```
<BadendIcon :size='`medium`'>我是文字1</BadendIcon>
<BadendIcon :size='`small`'>我是文字2</BadendIcon>
<BadendIcon>我是文字3</BadendIcon>
<BadendIcon :no="30">生死簿30『清理門戶』</BadendIcon>
```

`<BadendIcon>`連結預設會跳入生死簿, 可用 :no 指定跳入編號。

**效果：**  
<BadendIcon :size='`medium`'>我是文字 1</BadendIcon>  
<BadendIcon :size='`small`'>我是文字 2</BadendIcon>  
<BadendIcon>我是文字 3</BadendIcon>
<BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon>

---

`<Girl[0-8]Icon>`連結預設會跳入人物列傳頁面，詳情參考[夢境心上人](/people/dream-sweetheart.html)

```
<Girl0Icon :size='`medium`'>我是文字4</Girl0Icon>
<Girl0Icon :size='`small`'>我是文字5</Girl0Icon>
<Girl0Icon>我是文字6</Girl0Icon>
```
small(小型)圖案為32 px * 32 px,  
medium(中型) 圖案100 px * 100 px。
**效果：**  
<Girl0Icon :size='`medium`'>我是文字 4</Girl0Icon>  
<Girl0Icon :size='`small`'>我是文字 5</Girl0Icon>  
<Girl0Icon>我是文字 6</Girl0Icon>

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
與人物Icon的差別在於多了一個背景，  
此外，此組件使用的圖片有對應`特定位置擺放`。

```
<BookItemIcon :no="6001">我是文字</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">我是文字1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">我是文字2</BookItemIcon>
```

`<BookItemIcon>`預設有連結, 點擊會跳入對應資訊頁面,  
此外, 預設圖案為small(小型, 100 px * 100 px);  
medium為中型(200 px * 200 px);  
可透過 `:size` 設定大小。  
若needLink = false時, 點擊圖片則會啟用圖片放大。  
僅有`no`為必填值。  

**效果：**  
<BookItemIcon :no="6001">我是文字</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">我是文字1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">我是文字2</BookItemIcon>

### 可用屬性寫法  
因 `type` 已包含在組件名稱中，故不需額外設定。
| 屬性名稱 | 值                           | default     | require |
| :------- |:----------------------------|:------------|:--------|
| no       | 根據不同的物品有不同的值        | -           |o        |
| size     | "\`medium\`" \| "\`small\`" | "\`small\`" | x       | 
| needLink | true \| false               | true        |x        |

### 目前已可用組件(每一組件代表不同的物品類型)：
-   `<BookItemIcon>` : 武學書籍(book), 
-   `<FoodItemIcon>` : 食物(food),
-   `<NewspaperItemIcon>` : 江湖快報(newspaper),
-   `<SpecialItemIcon>` : 特殊道具(special),
-   `<TeaItemIcon>` : 茶水(tea),
-   `<WineItemIcon>` : 酒(wine),
### 對應擺放路徑格式
```
docs/public/images/${type}s/item_${type}_${no}.png
```
其中 `${type}` 為物品類型，如 `book`、`food`、`special`、`tea`、`wine`；  
`${no}` 為物品編號。  

舉例而言 武學書籍(book) 編號為 6001, 圖片路徑為  `docs/public/images/books/item_book_6001.png`,  
特殊道具(special) 編號為2003, 圖片路徑為 `docs/public/images/specials/item_special_2003.png`

::: warning
使用前請先確認是否該圖檔案存在，若不存在，請一並上傳至指定路徑。  
若不確定物品的分類，請以圖片解包原名為主
:::
## Markdown 外部解析工具

用來主動解析被 html 包住的內容  
除了換行還是只能使用 `<br>` 以外，其他的 Markdown 都可以使用

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

**效果：**

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

## BTable 排序表格

替表格加上排序效果  
將外層的 `<table>` 換成 `<BTable>` 即可

-   `:unsortable`：於第一行使用可控制排序
    -   `true`：關閉排序
    -   `false` <Badge type="warning" text="默認值" /> ：開啟排序

```Markdown
<BTable>
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
    <td>Wilson</td>
  </tr>
</BTable>
```

**效果：**

<BTable>
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
    <td>Wilson</td>
  </tr>
</BTable>

### BTable 進階用法

<br>

`BTable` 內的 `<tr>` `<td>` 屬性皆會保留

```Markdown
<BTable>
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

**效果：**

<BTable>
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

除了原始 HTML 表格，另外接受 `Attribute` 方式帶入

-   `:field` <Badge type="danger" text="必填" /> ：設定 table 的標題欄位
-   `:table` <Badge type="danger" text="必填" /> ：設定 table 的內容

```Markdown
<BTable
  :field="[{
      key: 'age',
      label: '年齡'
    },{
      key: 'first_name',
      label: '姓'
    },{
      key: 'last_name',
      label: '名',
      unsortable: true
    }
    ]"
  :table="[{
    age: '40',
    first_name: 'Dickerson',
    last_name: 'Macdonald',
    _attributes: { style: 'background-color: #f0f0f0; color: black;' },
    _cellAttributes: {
    first_name: { style: 'color: red;' }
    }
    },
    { age: '21', first_name: 'Larsen', last_name: 'Shaw' }
  ]"
/>

```

<BTable
  :field="[{
      key: 'age',
      label: '年齡'
    },{
      key: 'first_name',
      label: '姓'
    },{
      key: 'last_name',
      label: '名',
      unsortable: true
    }
    ]"
  :table="[{
    age: '40',
    first_name: 'Dickerson',
    last_name: 'Macdonald',
    _attributes: { style: 'background-color: #f0f0f0; color: black;' },
    _cellAttributes: {
    first_name: { style: 'color: red;' }
    }
    },
    { age: '21', first_name: 'Larsen', last_name: 'Shaw' }
  ]"
/>
