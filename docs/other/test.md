---
title: 測試用頁面
description: 展示特定語法教學
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - test
---

# {{ $frontmatter.title }}

## table

<table>
    <tr>
        <td>全文style</td>
        <td>局部style</td>
        <td>文字置中</td>
        <td>html原生摺疊</td>
        <td>傳統連結</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>點我展開~</summary>123</details></td>
        <td><MarkdownWrapper>[龍湘](/people/characters/girl8)</MarkdownWrapper></td>
        <td><MarkdownWrapper>[[龍湘]]</MarkdownWrapper></td>
    </tr>
</table>

::: details 原始碼

```markdown
<table>
    <tr>
        <td>全文style</td>
        <td>局部style</td>
        <td>文字置中</td>
        <td>html原生摺疊</td>
        <td>傳統連結</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style="color: red;">123</td>
        <td>1<span style="color: red;">23</span></td>
        <td style="text-align: center">123</td>
        <td>
            <details>
                <summary>點我展開~</summary>
                123
            </details>
        </td>
        <td><MarkdownWrapper>[龍湘](/people/characters/girl8)</MarkdownWrapper></td>
        <td><MarkdownWrapper>[[龍湘]]</MarkdownWrapper></td>
    </tr>
</table>
```

:::

## BTable

<BTable>
    <tr>
        <td>全文style</td>
        <td>局部style</td>
        <td>文字置中</td>
        <td>html原生摺疊</td>
        <td>傳統連結</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>點我展開~</summary>123</details></td>
        <td>[龍湘](/people/characters/girl8)</td>
        <td>[[龍湘]]</td>
    </tr>
</BTable>

::: details 原始碼

```markdown
<BTable>
    <tr>
        <td>全文style</td>
        <td>局部style</td>
        <td>文字置中</td>
        <td>html原生摺疊</td>
        <td>傳統連結</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style="color: red;">123</td>
        <td>1<span style="color: red;">23</span></td>
        <td style="text-align: center">123</td>
        <td>
            <details>
                <summary>點我展開~</summary>
                123
            </details>
        </td>
        <td>[龍湘](/people/characters/girl8)</td>
        <td>[[龍湘]]</td>
    </tr>
</BTable>
```

:::

## vitepress 原生摺疊組件

::: details
123  
456
:::

## 如果 Markdown 失效了可以試試看 MarkdownWrapper

<div>
    <MarkdownWrapper>
        1<br>
        2<br><br>
        3
        <span>123</span>
    </MarkdownWrapper>
</div>

::: details 原始碼

```markdown
<div>
    <MarkdownWrapper>
        1<br>
        2<br><br>
        3
        <span>123</span>
    </MarkdownWrapper>
</div>
```

:::

## 註腳

註腳 1[^1]  
註腳 2

[^1]: 註腳 1 定義
[^2]: 我沒有被使用所以看不到我
[^3]: ^2 被跳過所以我是 2 號

註腳 3[^3]  
二次引用註腳 1[^1]

::: details 原始碼

```
註腳 1[^1]
註腳 2

[^1]: 註腳 1 定義
[^2]: 我沒有被使用所以看不到我
[^3]: ^2 被跳過所以我是 2 號

註腳 3[^3]
二次引用註腳 1[^1]
```

:::

## wikiLink

[[測試用頁面]]  
[[測試用頁面|還是測試用頁面]]  
[[測試用頁面#vitepress-原生摺疊組件|還是測試用頁面但指定了錨點]]  
[[測試用頁面|還是測試用頁面但有~~Markdown語法~~跟<span style='color: red;'>HTML語法</span>]]

::: details 原始碼

```markdown
[[測試用頁面]]  
[[測試用頁面|還是測試用頁面]]  
[[測試用頁面#vitepress-原生摺疊組件|還是測試用頁面但指定了錨點]]  
[[測試用頁面|還是測試用頁面但有~~Markdown語法~~跟<span style='color: red;'>HTML語法</span>]]
```

:::

<ChTabs position="bottom">
  <ChTab title="龍湘">
    <Ch
      src='/images/characters/girl_8/normal.webp' 
      position='right'/>
    <ChName nameZh='龍湘' nameEn='Long Xiang' position='right' />
    <ChTable>
      <ChTr>
        <ChTd isTitle=true>
          性別
        </ChTd>
        <ChTd>
          女
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd isTitle=true>
          年齡
        </ChTd>
        <ChTd>
          不明，可能18上下
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd isTitle=true position='center'>
          稱號
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          湘姊、||錦香宮殺人魔||、||雞腿俠||、||丐幫的行走錢包||
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd isTitle=true position='center'>
          關係
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          龍淵(父親)
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>  
            溫夫人(師傅)
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          畫中仙(師姐)
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          趙活(臭弟)
        </ChTd>
      </ChTr>
    </ChTable>
  </ChTab>
  <ChTab title="debug">
    <ChMeet 
      src='/images/characters/girl_8/girl8_drumstick.webp' 
      nameTitle='小師妹'
      nameMain='唐默鈴'
      desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      :animation=true />
  </ChTab>
  <ChTab title="debug">
    <ChMeet 
      src='/images/characters/special6/normal.webp' 
      nameMain='龍湘'
      desc='師承錦香宮，劍法精絕的清麗佳人。<br>踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。'
      :animation=false />
  </ChTab>
  <ChTab title="戰鬥">
    <ChMeet 
      src='/images/characters/brother1/normal.webp' 
      nameMain='龍湘'
      desc='師承錦香宮，劍法精絕的清麗佳人。<br>踏著父親從前的足跡踽踽前行，嚮往能夠承其父志，行俠四方。'
      :animation=false />
  </ChTab>
</ChTabs>
