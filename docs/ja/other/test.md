---
title: テストページ
description: 特定の文法の使い方を説明
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - test
---

# {{ $frontmatter.title }}

## テーブル

<table>
    <tr>
        <td>全文style</td>
        <td>部分style</td>
        <td>テキスト中央配置</td>
        <td>HTML原生折りたたみ</td>
        <td>従来のリンク</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>クリックして展開~</summary>123</details></td>
        <td><MarkdownWrapper>[龍湘](/ja/people/characters/girl8)</MarkdownWrapper></td>
        <td><MarkdownWrapper>[[龍湘]]</MarkdownWrapper></td>
    </tr>
</table>

::: details ソースコード

```markdown
<table>
    <tr>
        <td>全文style</td>
        <td>部分style</td>
        <td>テキスト中央配置</td>
        <td>HTML原生折りたたみ</td>
        <td>従来のリンク</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style="color: red;">123</td>
        <td>1<span style="color: red;">23</span></td>
        <td style="text-align: center">123</td>
        <td>
            <details>
                <summary>クリックして展開~</summary>
                123
            </details>
        </td>
        <td><MarkdownWrapper>[龍湘](/ja/people/characters/girl8)</MarkdownWrapper></td>
        <td><MarkdownWrapper>[[龍湘]]</MarkdownWrapper></td>
    </tr>
</table>
```

:::

## BTable

<BTable>
    <tr>
        <td>全文style</td>
        <td>部分style</td>
        <td>テキスト中央配置</td>
        <td>HTML原生折りたたみ</td>
        <td>従来のリンク</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style='color: red;'>123</td>
        <td>1<span style='color: red;'>23</span></td>
        <td style='text-align: center'>123</td>
        <td><details><summary>クリックして展開~</summary>123</details></td>
        <td>[龍湘](/ja/people/characters/girl8)</td>
        <td>[[龍湘]]</td>
    </tr>
</BTable>

::: details ソースコード

```markdown
<BTable>
    <tr>
        <td>全文style</td>
        <td>部分style</td>
        <td>テキスト中央配置</td>
        <td>HTML原生折りたたみ</td>
        <td>従来のリンク</td>
        <td>wikiLinks</td>
    </tr>
    <tr>
        <td style="color: red;">123</td>
        <td>1<span style="color: red;">23</span></td>
        <td style="text-align: center">123</td>
        <td>
            <details>
                <summary>クリックして展開~</summary>
                123
            </details>
        </td>
        <td>[龍湘](/ja/people/characters/girl8)</td>
        <td>[[龍湘]]</td>
    </tr>
</BTable>
```

:::

## vitepress原生折りたたみコンポーネント

::: details
123  
456
:::

## Markdownが機能しない場合は MarkdownWrapper を試してみてください

<div>
    <MarkdownWrapper>
        1<br>
        2<br><br>
        3
        <span>123</span>
    </MarkdownWrapper>
</div>

::: details ソースコード

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

## 脚注

脚注1[^1]  
脚注2

[^1]: 脚注1の定義
[^2]: 私は使用されていないので見えません
[^3]: ^2はスキップされたので、私は2番です

脚注3[^3]  
脚注1の二次引用[^1]

::: details ソースコード

```
脚注1[^1]
脚注2

[^1]: 脚注1の定義
[^2]: 私は使用されていないので見えません
[^3]: ^2はスキップされたので、私は2番です

脚注3[^3]
脚注1の二次引用[^1]
```

:::

## wikiLink

[[テストページ]]  
[[テストページ|やっぱりテストページ]]  
[[テストページ#vitepressのネイティブ折りたたみコンポーネント|やっぱりテストページだけどアンカーを指定しました]]  
[[テストページ|やっぱりテストページですが~~Markdown構文~~と<span style='color: red;'>HTML構文</span>があります]]

::: details ソースコード

```markdown
[[テストページ]]  
[[テストページ|やっぱりテストページ]]  
[[テストページ#vitepressのネイティブ折りたたみコンポーネント|やっぱりテストページだけどアンカーを指定しました]]  
[[テストページ|やっぱりテストページですが~~Markdown構文~~と<span style='color: red;'>HTML構文</span>があります]]
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
          年齢
        </ChTd>
        <ChTd>
          不明、18前後の可能性
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd isTitle=true position='center'>
          称号
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          湘姐、||錦香派殺人鬼||、||チキンレッグ侠||、||丐幫の移動財布||
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd isTitle=true position='center'>
          関係
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          龍淵(父親)
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>  
            温夫人(師傅)
        </ChTd>
      </ChTr>
      <ChTr>
        <ChTd position='center'>
          絵の中の仙(師姐)
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
      desc='錦香派の門下で、剣法が秀でた清らかで美しい女性。<br>父親の足跡をたどって歩みを進め、四方で義侠を行いたいと願う。'
      :animation=false />
  </ChTab>
  <ChTab title="戦闘">
    <ChMeet 
      src='/images/characters/brother1/normal.webp' 
      nameMain='龍湘'
      desc='錦香派の門下で、剣法が秀でた清らかで美しい女性。<br>父親の足跡をたどって歩みを進め、四方で義侠を行いたいと願う。'
      :animation=false />
  </ChTab>
</ChTabs>
