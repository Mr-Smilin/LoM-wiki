---
title: 人物列傳組件用法
description: 人物頁面相關組件說明
aside: true
outline: [2, 4]
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

<br><br>

<div style="text-align: center;">
  <img src="/images/characters/girl_8/icon_drumstick.png" style="display: block; margin: 0 auto;" />
  <p>感謝龍湘擔任本頁展示用模特</p>
</div>

<br><br>

本頁主要列出編輯角色列傳頁面時，可以使用的組件  
**熟悉後**，這些組件在其他頁面也可以斟酌使用

<br>

與上一篇[LoM-wiki 公開組件](/develop/4-2-wiki-template.html) 類似
內容較多所以拆出一篇講解。

## 角色資訊框組件

### ChTab 角色分頁

`ChTabs` 提供屬性如以下：

1.  `position`：設定組件位置

    -   `top` <Badge type="warning" text="默認值" /> ：設定組件在上方
    -   `bottom`：設定組件在下方

`ChTab` 提供屬性如以下：

1.  `title` <Badge type="danger" text="必填" /> ：設定分頁籤的文字

```Markdown
<ChTabs>
    <ChTab title="分頁1">
    </ChTab>
    <ChTab title="分頁2">
    </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="分頁1">
    </ChTab>
    <ChTab title="分頁2">
    </ChTab>
</ChTabs>

<br>

該元件中不可直接放入文字，他目前提供三種次級組件：

<br>

---

<br>

#### ChBg 背景圖片

`ChBg` 提供屬性如以下：

1.  `src` <Badge type="danger" text="必填" /> ：設定做為背景圖片檔的 url
2.  `position`：設定組件位置

    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `center`：設定組件在中間
    -   `right`：設定組件在右邊

3.  `:animation`：切換時是否啟用圖片動畫

```Markdown
<ChTabs>
    <ChTab title="我是第一頁">
        <ChBg
        src='/images/characters/girl_8/normal.png'
        position='right'/>
    </ChTab>
    <ChTab title="切換我的圖片有動畫載入">
        <ChBg
        src='/images/characters/girl_8/girl8_drumstick.png'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="我是第一頁">
        <ChBg
        src='/images/characters/girl_8/normal.png'
        position='right'/>
    </ChTab>
    <ChTab title="切換我的圖片有動畫載入">
        <ChBg
        src='/images/characters/girl_8/girl8_drumstick.png'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

<br>

---

<br>

#### ChName 姓名框

註：姓名框沒有規範只能填姓名

`ChName` 提供屬性如以下：

-   `nameZh`：設定中文姓名
-   `nameEn`：設定英文姓名
-   `position`：設定組件位置
    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `center`：設定組件在中間
    -   `right`：設定組件在右邊

```Markdown
<ChTabs>
    <ChTab title="龍湘">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
  </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
    </ChTab>
</ChTabs>

<br>

---

<br>

#### ChTable 角色資訊框

該組件有兩種使用方式，這邊先以簡易用法說明

`ChTable` 提供屬性如以下：

1.  `position`：設定組件位置

    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `right`：設定組件在右邊

2.  `:table`：設定表格內的內容，以二維陣列代表行列

```Markdown
<ChTabs>
    <ChTab title="我是表格">
        <ChTable
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧'],
            ['一行可以只有一欄'],
            ['也','可','以','分','好','幾','欄'],
            ['他們都支援 `Markdown`'],
            ['~~刪除線~~'],
            ['或是<br>換行'],
            ['喔不過換行必須使用`<br>`'],
            ['因為陣列中的文字在md不能直接換行'],
            ['內容過多的話可以往下捲動'],
            ['使用這個方式設計的表格<br>每一行的第一欄固定是深色'],
            ['如果需要進一步設計<br>我們需要使用進階寫法']
        ]"/>
    </ChTab>
    <ChTab title="我是表格2">
        <ChTable position='right'
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧']
        ]"/>
    </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="我是表格">
        <ChTable
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧'],
            ['一行可以只有一欄'],
            ['也','可','以','分','好','幾','欄'],
            ['他們都支援 `Markdown`'],
            ['~~刪除線~~'],
            ['或是<br>換行'],
            ['喔不過換行必須使用`<br>`'],
            ['因為陣列中的文字在md不能直接換行'],
            ['內容過多的話可以往下捲動'],
            ['使用這個方式設計的表格<br>每一行的第一欄固定是深色'],
            ['如果需要進一步設計<br>我們需要使用進階寫法']
        ]"/>
    </ChTab>
    <ChTab title="我是表格2">
        <ChTable position='right'
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧']
        ]"/>
    </ChTab>
</ChTabs>

<br>

---

<br>

#### 結果

將組件組合起來後

```markdown
<ChTabs>
    <ChTab title="龍湘">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <ChBg
        src='/images/characters/girl_8/normal.png'
        position='right'/>
        <ChTable
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧'],
            ['一行可以只有一欄'],
            ['也','可','以','分','好','幾','欄'],
            ['他們都支援 `Markdown`'],
            ['~~刪除線~~'],
            ['或是<br>換行'],
            ['喔不過換行必須使用`<br>`'],
            ['因為陣列中的文字在md不能直接換行'],
            ['內容過多的話可以往下捲動'],
            ['使用這個方式設計的表格<br>每一行的第一欄固定是深色'],
            ['如果需要進一步設計<br>我們需要使用進階寫法']
        ]"/>
    </ChTab>
    <ChTab title="吃雞腿">
        <ChBg
        src='/images/characters/girl_8/girl8_drumstick.png'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <ChBg
        src='/images/characters/girl_8/normal.png'
        position='right'/>
        <ChTable
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧'],
            ['一行可以只有一欄'],
            ['也','可','以','分','好','幾','欄'],
            ['他們都支援 `Markdown`'],
            ['~~刪除線~~'],
            ['或是<br>換行'],
            ['喔不過換行必須使用`<br>`'],
            ['因為陣列中的文字在md不能直接換行'],
            ['內容過多的話可以往下捲動'],
            ['使用這個方式設計的表格<br>每一行的第一欄固定是深色'],
            ['如果需要進一步設計<br>我們需要使用進階寫法']
        ]"/>
    </ChTab>
    <ChTab title="吃雞腿">
        <ChBg
        src='/images/characters/girl_8/girl8_drumstick.png'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

<br>

---

<br>

#### 額外

::: details ChTable 進階用法

<br>

<Badge type="warning" text="提示" />  
當 `ChTable` 存在 `:table` 屬性時，該用法無效。

<br><br>

#### ChTr 角色資訊框

`ChTr` 提供屬性如...  
沒有，目前 `ChTr` 沒有自定義屬性。

<br>

#### ChTd 角色資訊框

`ChTd` 提供屬性如以下：

-   `isTitle`：設定該欄是否為標題
    -   `true`：設定標題欄 style
    -   `false`：設定資料欄 style
-   `position`：設定文字位置
    -   `left` <Badge type="warning" text="默認值" /> ：設定文字在左邊
    -   `center`：設定文字在中間
    -   `right`：設定文字在右邊

```Markdown
<ChTabs>
    <ChTab title="我是表格">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    第一行第一列
                </ChTd>
                <ChTd>
                    第一行第二列
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    第二行第一列
                </ChTd>
                <ChTd>
                    應該沒搞錯行列吧
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    一行可以只有一欄
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    也
                </ChTd>
                <ChTd position='center'>
                    可
                </ChTd>
                <ChTd position='center'>
                    以
                </ChTd>
                <ChTd position='center'>
                    分
                </ChTd>
                <ChTd position='center'>
                    好
                </ChTd>
                <ChTd position='center'>
                    幾
                </ChTd>
                <ChTd position='center'>
                    欄
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    他們都支援 `Markdown`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~刪除線~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    或是<br>
                    換行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    喔不過換行必須使用`< br>`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    因為陣列中的文字在md不能直接換行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    內容過多的話可以往下捲動
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    使用這個方式設計的表格<br>
                    是否為標題欄可以自己設定
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="我是表格2">
        <ChTable>
            <ChTr>
                <ChTd>
                    第一行第一列
                </ChTd>
                <ChTd>
                    第一行第二列
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    第二行第一列
                </ChTd>
                <ChTd>
                    應該沒搞錯行列吧
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>
```

:::

**進階用法效果：**

**效果：**

<ChTabs>
    <ChTab title="我是表格">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    第一行第一列
                </ChTd>
                <ChTd>
                    第一行第二列
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    第二行第一列
                </ChTd>
                <ChTd>
                    應該沒搞錯行列吧
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    一行可以只有一欄
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    也
                </ChTd>
                <ChTd position='center'>
                    可
                </ChTd>
                <ChTd position='center'>
                    以
                </ChTd>
                <ChTd position='center'>
                    分
                </ChTd>
                <ChTd position='center'>
                    好
                </ChTd>
                <ChTd position='center'>
                    幾
                </ChTd>
                <ChTd position='center'>
                    欄
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    他們都支援 `Markdown`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~刪除線~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    或是<br>
                    換行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    喔不過換行必須使用`<br>`
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    因為陣列中的文字在md不能直接換行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    內容過多的話可以往下捲動
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    使用這個方式設計的表格<br>
                    是否為標題欄可以自己設定
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="我是表格2">
        <ChTable>
            <ChTr>
                <ChTd>
                    第一行第一列
                </ChTd>
                <ChTd>
                    第一行第二列
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    第二行第一列
                </ChTd>
                <ChTd>
                    應該沒搞錯行列吧
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>

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
