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
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>點我展開~</summary>123</details></td>
    </tr>
</table>

::: details 原始碼

```html
<table>
    <tr>
        <td>全文style</td>
        <td>局部style</td>
        <td>文字置中</td>
        <td>html原生摺疊</td>
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
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>點我展開~</summary>123</details></td>
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
