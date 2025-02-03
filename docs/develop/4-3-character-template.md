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
  <img src="/images/characters/girl_8/icon_drumstick.webp" style="display: block; margin: 0 auto;" />
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

**效果：**

<ChTabs>
    <ChTab title="分頁1">
    </ChTab>
    <ChTab title="分頁2">
    </ChTab>
</ChTabs>

::: details 原始碼

```Markdown
<ChTabs>
    <ChTab title="分頁1">
    </ChTab>
    <ChTab title="分頁2">
    </ChTab>
</ChTabs>
```

:::

<br>

該元件中不可直接放入文字，他目前提供三種次級組件：

<br>

---

<br>

#### Ch 背景人物

`Ch` 提供屬性如以下：

1.  `src` <Badge type="danger" text="必填" /> ：設定做為背景圖片檔的 url
2.  `position`：設定組件位置

    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `center`：設定組件在中間
    -   `right`：設定組件在右邊

3.  `:animation`：切換時是否啟用圖片動畫

**效果：**

<ChTabs>
    <ChTab title="我是第一頁">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="切換我的圖片有動畫載入">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: details 原始碼

```Markdown
<ChTabs>
    <ChTab title="我是第一頁">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="切換我的圖片有動畫載入">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

:::

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

**效果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
    </ChTab>
</ChTabs>

::: details 原始碼

```Markdown
<ChTabs>
    <ChTab title="龍湘">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
  </ChTab>
</ChTabs>
```

:::

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

::: details 原始碼

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

:::

<br>

---

<br>

#### 結果

將組件組合起來後

**效果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <Ch
        src='/images/characters/girl_8/normal.webp'
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
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: details 原始碼

```markdown
<ChTabs>
    <ChTab title="龍湘">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'
        position='right'/>
        <Ch
        src='/images/characters/girl_8/normal.webp'
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
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>
```

:::

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

::: details 原始碼

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

<br>

---

### 集成組件

與上述組件相同，都是放在 `<ChTab>` 內  
與上述組件不同，單獨佔據一個版面，不建議組合使用。

<br>

#### ChMeet 相遇圖

`ChMeet` 提供屬性如以下：

1. `src` <Badge type="danger" text="必填" /> ：設定人物立繪的 url
2. `nameTitle` ：設定人物的稱謂
3. `nameMain` <Badge type="danger" text="必填" /> ：設定人物名稱
4. `desc` ：設定簡介/初識文本
5. `:animation` ：切換時是否啟用動畫

<ChTabs position="bottom">
	<ChTab title="龍湘">
        <ChMeet 
			src='/images/characters/girl_8/normal.webp' 
			nameMain='龍湘'
			desc='師承錦香宮，劍法精絕的清麗佳人。<br>踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。'
			:animation=true
		/>
    </ChTab>
	<ChTab title="無動畫版">
        <ChMeet 
			src='/images/characters/girl_0/normal.webp' 
			nameTitle='小師妹'
			nameMain='唐默鈴'
			desc='芳名默鈴，唐門掌門獨生愛女，宛如森林小動物般的少女，性情淡漠，身繫七串從來不響的鈴噹。<br>興趣是摺紙。'
			:animation=false
		/>
    </ChTab>
</ChTabs>

::: details 原始碼

```Markdown

<ChTabs position="bottom">
	<ChTab title="龍湘">
        <ChMeet
			src='/images/characters/girl_8/normal.webp'
			nameMain='龍湘'
			desc='師承錦香宮，劍法精絕的清麗佳人。<br>踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。'
			:animation=true
		/>
    </ChTab>
	<ChTab title="無動畫版">
        <ChMeet
			src='/images/characters/girl_0/normal.webp'
			nameTitle='小師妹'
			nameMain='唐默鈴'
			desc='芳名默鈴，唐門掌門獨生愛女，宛如森林小動物般的少女，性情淡漠，身繫七串從來不響的鈴噹。<br>興趣是摺紙。'
			:animation=false
		/>
    </ChTab>
</ChTabs>


```

:::
