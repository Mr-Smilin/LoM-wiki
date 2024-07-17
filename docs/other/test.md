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
