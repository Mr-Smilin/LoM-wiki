---
title: Markdown 角色資訊相關組件說明
description: for 角色頁面相關組件的說明
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

與上一篇[常見用法>LoM-wiki 的自訂語法](/develop/4-1-template.html#lom-wiki-的自訂語法) 類似
內容較多所以拆出一篇講解。

## 角色資訊框組件

### 角色分頁

`ChTabs` 提供屬性如以下：

-   `position`：設定組件位置
    -   `top` <Badge type="warning" text="默認值" /> ：設定組件在上方
    -   `bottom`：設定組件在下方

`ChTab` 提供屬性如以下：

-   `title` <Badge type="danger" text="必填" /> ：設定分頁籤的文字

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

#### 背景圖片

`ChBg` 提供屬性如以下：

-   `src` <Badge type="danger" text="必填" /> ：設定做為背景圖片檔的 url
-   `position`：設定組件位置
    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `center`：設定組件在中間
    -   `right`：設定組件在右邊
-   `anima`：切換時是否啟用圖片動畫

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
        anima=true />
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
        anima=true />
    </ChTab>
</ChTabs>

<br>

---

<br>

#### 姓名框

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
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'/>
  </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName
        nameZh='龍湘'
        nameEn='Long Xiang'/>
    </ChTab>
</ChTabs>

<br>

---

<br>

#### 角色資訊框

該組件有兩種使用方式，這邊先以簡易用法說明

`ChTable` 提供屬性如以下：

-   `position`：設定組件位置
    -   `left` <Badge type="warning" text="默認值" /> ：設定組件在左邊
    -   `right`：設定組件在右邊
-   `:table`：設定表格內的內容，以二維陣列代表行列

```Markdown
<ChTabs>
    <ChTab>
        <ChTable position='right'
        :table="[
            ["我是第一行第一列","我是第一行第二列"],
            ["我是第二行第一列","我應該沒搞錯行列吧"]
        ]"/>
    </ChTab>
</ChTabs>
```

**效果：**

<ChTabs>
    <ChTab title="我是表格">
        <ChTable position='right'
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
        <ChTable
        :table="[
            ['第一行第一列','第一行第二列'],
            ['第二行第一列','應該沒搞錯行列吧']
        ]"/>
    </ChTab>
</ChTabs>

::: details 進階用法

<br>

<Badge type="warning" text="提示" />  
當 `ChTable` 存在 `:table` 屬性時，該用法無效。

<br><br>

#### 角色資訊框 - TR

`ChTr` 提供屬性如...  
沒有，目前 `ChTr` 沒有自定義屬性。

<br>

#### 角色資訊框 - TD

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
                    <MarkdownWrapper>
                        使用 MarkdownWrapper 才會支援 `Markdown`
                    </MarkdownWrapper>
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    <MarkdownWrapper>
                        ~~刪除線~~
                    </MarkdownWrapper>
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
                    <MarkdownWrapper>
                        喔不過換行必須使用`< br>`
                    </MarkdownWrapper>
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
                    <MarkdownWrapper>
                        使用 MarkdownWrapper 才會支援 `Markdown`
                    </MarkdownWrapper>
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    <MarkdownWrapper>
                        ~~刪除線~~
                    </MarkdownWrapper>
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
                    <MarkdownWrapper>
                        喔不過換行必須使用`< br>`
                    </MarkdownWrapper>
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
