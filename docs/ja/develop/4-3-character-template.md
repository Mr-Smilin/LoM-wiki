---
title: 人物列伝コンポーネント
description: キャラクターページ関連コンポーネント説明
aside: true
outline: [2, 4]
sidebar: true
borderless: false
tags:
    - dev
    - develop
    - developer
    - 開発
    - markdown
    - 協作
    - example
    - template
---

# {{ $frontmatter.title }}

<br><br>

<div style="text-align: center;">
  <img src="/images/characters/girl_8/icon_drumstick.webp" style="display: block; margin: 0 auto;" />
  <p>龍湘がこのページのモデルを務めていただき、ありがとうございます。</p>
</div>

<br><br>

このページはキャラクター列伝ページの編集時に使用できるコンポーネントをリストアップしています。  
**習熟後**、これらのコンポーネントは他のページでも適切に使用できます。

<br>

前のページ [LoM-wiki 公開コンポーネント](/ja/develop/4-2-wiki-template.html) に似ていますが、  
コンテンツが多いため、別ページに分けて説明しています。

## キャラクター情報ボックスコンポーネント

### ChTab キャラクターページング

`ChTabs` は以下の属性を提供します：

1.  `position`：コンポーネントの位置を設定します

    -   `top` <Badge type="warning" text="デフォルト値" /> ：コンポーネントを上に設定
    -   `bottom`：コンポーネントを下に設定

`ChTab` は以下の属性を提供します：

1.  `title` <Badge type="danger" text="必須" /> ：ページタブのテキストを設定

**効果：**

<ChTabs>
    <ChTab title="ページ1">
    </ChTab>
    <ChTab title="ページ2">
    </ChTab>
</ChTabs>

::: details ソースコード

```Markdown
<ChTabs>
    <ChTab title="ページ1">
    </ChTab>
    <ChTab title="ページ2">
    </ChTab>
</ChTabs>
```

:::

<br>

このコンポーネント内には直接テキストを配置できません。現在、3 つの補助コンポーネントを提供しています：

<br>

---

<br>

#### Ch キャラクター背景

`Ch` は以下の属性を提供します：

1.  `src` <Badge type="danger" text="必須" /> ：背景画像ファイルの url を設定
2.  `position`：コンポーネントの位置を設定します

    -   `left` <Badge type="warning" text="デフォルト値" /> ：コンポーネントを左に設定
    -   `center`：コンポーネントを中央に設定
    -   `right`：コンポーネントを右に設定

3.  `:animation`：切り替え時に画像アニメーションを有効にするか

**効果：**

<ChTabs>
    <ChTab title="最初のページ">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="画像の切り替えにアニメーション読み込みがあります">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: details ソースコード

```Markdown
<ChTabs>
    <ChTab title="最初のページ">
        <Ch
        src='/images/characters/girl_8/normal.webp'
        position='right'/>
    </ChTab>
    <ChTab title="画像の切り替えにアニメーション読み込みがあります">
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

#### ChName 名前ボックス

注釈：名前ボックスに名前だけを入力するルールはありません。

`ChName` は以下の属性を提供します：

-   `nameZh`：中国語の名前を設定
-   `nameEn`：英語の名前を設定
-   `position`：コンポーネントの位置を設定します
    -   `left` <Badge type="warning" text="デフォルト値" /> ：コンポーネントを左に設定
    -   `center`：コンポーネントを中央に設定
    -   `right`：コンポーネントを右に設定

**効果：**

<ChTabs>
    <ChTab title="龍湘">
        <ChName position='right'
        nameZh='龍湘'
        nameEn='Long Xiang'/>
    </ChTab>
</ChTabs>

::: details ソースコード

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

#### ChTable キャラクター情報ボックス

このコンポーネントには 2 つの使用方法があります。ここではシンプルな使用法について説明します。

`ChTable` は以下の属性を提供します：

1.  `position`：コンポーネントの位置を設定します

    -   `left` <Badge type="warning" text="デフォルト値" /> ：コンポーネントを左に設定
    -   `right`：コンポーネントを右に設定

2.  `:table`：テーブル内のコンテンツを設定します。2 次元配列で行と列を表します。

**効果：**

<ChTabs>
    <ChTab title="テーブルです">
        <ChTable
        :table="[
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか'],
            ['1列だけの行'],
            ['複','数','列','に','分','け','ら','れ','ます'],
            ['すべて `Markdown` をサポートしています'],
            ['~~打消し線~~'],
            ['または<br>改行'],
            ['ただし改行は`<br>`を使う必要があります'],
            ['配列内のテキストは md で直接改行できないため'],
            ['コンテンツが多すぎる場合はスクロール可能'],
            ['この方法で設計されたテーブル<br>各行の最初の列は常に濃い色です'],
            ['さらなる設計が必要な場合は<br>高度な書き方を使う必要があります']
        ]"/>
    </ChTab>
    <ChTab title="テーブル2です">
        <ChTable position='right'
        :table="[
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか']
        ]"/>
    </ChTab>
</ChTabs>

::: details ソースコード

```Markdown
<ChTabs>
    <ChTab title="テーブルです">
        <ChTable
        :table="[
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか'],
            ['1列だけの行'],
            ['複','数','列','に','分','け','ら','れ','ます'],
            ['すべて `Markdown` をサポートしています'],
            ['~~打消し線~~'],
            ['または<br>改行'],
            ['ただし改行は`<br>`を使う必要があります'],
            ['配列内のテキストは md で直接改行できないため'],
            ['コンテンツが多すぎる場合はスクロール可能'],
            ['この方法で設計されたテーブル<br>各行の最初の列は常に濃い色です'],
            ['さらなる設計が必要な場合は<br>高度な書き方を使う必要があります']
        ]"/>
    </ChTab>
    <ChTab title="テーブル2です">
        <ChTable position='right'
        :table="[
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか']
        ]"/>
    </ChTab>
</ChTabs>
```

:::

<br>

---

<br>

#### 結果

コンポーネントを組み合わせた場合

**効果：**

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
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか'],
            ['1列だけの行'],
            ['複','数','列','に','分','け','ら','れ','ます'],
            ['すべて `Markdown` をサポートしています'],
            ['~~打消し線~~'],
            ['または<br>改行'],
            ['ただし改行は`<br>`を使う必要があります'],
            ['配列内のテキストは md で直接改行できないため'],
            ['コンテンツが多すぎる場合はスクロール可能'],
            ['この方法で設計されたテーブル<br>各行の最初の列は常に濃い色です'],
            ['さらなる設計が必要な場合は<br>高度な書き方を使う必要があります']
        ]"/>
    </ChTab>
    <ChTab title="焼き鳥を食べる">
        <Ch
        src='/images/characters/girl_8/girl8_drumstick.webp'
        position='center'
        :animation=true />
    </ChTab>
</ChTabs>

::: details ソースコード

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
            ['1行1列目','1行2列目'],
            ['2行1列目','行列を間違えていないか'],
            ['1列だけの行'],
            ['複','数','列','に','分','け','ら','れ','ます'],
            ['すべて `Markdown` をサポートしています'],
            ['~~打消し線~~'],
            ['または<br>改行'],
            ['ただし改行は`<br>`を使う必要があります'],
            ['配列内のテキストは md で直接改行できないため'],
            ['コンテンツが多すぎる場合はスクロール可能'],
            ['この方法で設計されたテーブル<br>各行の最初の列は常に濃い色です'],
            ['さらなる設計が必要な場合は<br>高度な書き方を使う必要があります']
        ]"/>
    </ChTab>
    <ChTab title="焼き鳥を食べる">
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

#### 追加

::: details ChTable 高度な使用法

<br>

<Badge type="warning" text="ヒント" />  
`ChTable` に `:table` 属性が存在する場合、この使用法は無効です。

<br><br>

#### ChTr キャラクター情報ボックス

`ChTr` が提供する属性は...  
現在、`ChTr` にはカスタマイズされた属性がありません。

<br>

#### ChTd キャラクター情報ボックス

`ChTd` は以下の属性を提供します：

-   `isTitle`：このフィールドがタイトルかどうかを設定
    -   `true`：タイトル行スタイルを設定
    -   `false`：データ行スタイルを設定
-   `position`：テキストの位置を設定
    -   `left` <Badge type="warning" text="デフォルト値" /> ：テキストを左に設定
    -   `center`：テキストを中央に設定
    -   `right`：テキストを右に設定

:::

**高度な使用法の効果：**

**効果：**

<ChTabs>
    <ChTab title="テーブルです">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    1行1列目
                </ChTd>
                <ChTd>
                    1行2列目
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    2行1列目
                </ChTd>
                <ChTd>
                    行列を間違えていないか
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    1列だけの行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    複
                </ChTd>
                <ChTd position='center'>
                    数
                </ChTd>
                <ChTd position='center'>
                    列
                </ChTd>
                <ChTd position='center'>
                    に
                </ChTd>
                <ChTd position='center'>
                    分
                </ChTd>
                <ChTd position='center'>
                    け
                </ChTd>
                <ChTd position='center'>
                    ら
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    すべて `Markdown` をサポートしています
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~打消し線~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    または<br>
                    改行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    ただし改行は`<br>`を使う必要があります
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    配列内のテキストは md で直接改行できないため
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    コンテンツが多すぎる場合はスクロール可能
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    この方法で設計されたテーブル<br>
                    タイトル行かどうかを自分で設定できます
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="テーブル2です">
        <ChTable>
            <ChTr>
                <ChTd>
                    1行1列目
                </ChTd>
                <ChTd>
                    1行2列目
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    2行1列目
                </ChTd>
                <ChTd>
                    行列を間違えていないか
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>

::: details ソースコード

```Markdown
<ChTabs>
    <ChTab title="テーブルです">
        <ChTable position='right'>
            <ChTr>
                <ChTd isTitle=true>
                    1行1列目
                </ChTd>
                <ChTd>
                    1行2列目
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    2行1列目
                </ChTd>
                <ChTd>
                    行列を間違えていないか
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    1列だけの行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    複
                </ChTd>
                <ChTd position='center'>
                    数
                </ChTd>
                <ChTd position='center'>
                    列
                </ChTd>
                <ChTd position='center'>
                    に
                </ChTd>
                <ChTd position='center'>
                    分
                </ChTd>
                <ChTd position='center'>
                    け
                </ChTd>
                <ChTd position='center'>
                    ら
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    すべて `Markdown` をサポートしています
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    ~~打消し線~~
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true>
                    または<br>
                    改行
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    ただし改行は`< br>`を使う必要があります
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    配列内のテキストは md で直接改行できないため
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd isTitle=true position='right'>
                    コンテンツが多すぎる場合はスクロール可能
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd position='center'>
                    この方法で設計されたテーブル<br>
                    タイトル行かどうかを自分で設定できます
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
    <ChTab title="テーブル2です">
        <ChTable>
            <ChTr>
                <ChTd>
                    1行1列目
                </ChTd>
                <ChTd>
                    1行2列目
                </ChTd>
            </ChTr>
            <ChTr>
                <ChTd>
                    2行1列目
                </ChTd>
                <ChTd>
                    行列を間違えていないか
                </ChTd>
            </ChTr>
        </ChTable>
    </ChTab>
</ChTabs>
```

:::

<br>

---

### 統合コンポーネント

上記のコンポーネントと同じ、すべて `<ChTab>` 内に配置されます。  
上記のコンポーネントと異なり、単独で 1 つのバージョンを占有し、組み合わせ使用は推奨されません。

<br>

#### ChMeet 相遇図

`ChMeet` は以下の属性を提供します：

1. `src` <Badge type="danger" text="必須" /> ：キャラクター立ち絵の url を設定
2. `nameTitle` ：キャラクターの敬称を設定
3. `nameMain` <Badge type="danger" text="必須" /> ：キャラクター名を設定
4. `desc` ：簡介 / 初識テキストを設定
5. `:animation` ：切り替え時にアニメーションを有効にするか

<ChTabs position="bottom">
	<ChTab title="龍湘">
        <ChMeet 
			src='/images/characters/girl_8/normal.webp' 
			nameMain='龍湘'
			desc='錦香宮に師事し、剣法精妙な美しき佳人。<br>父の足跡をたどって進み、四方で俠を行いたいと願う。'
			:animation=true
		/>
    </ChTab>
	<ChTab title="アニメーション無し版">
        <ChMeet 
			src='/images/characters/girl_0/normal.webp' 
			nameTitle='小師妹'
			nameMain='唐默鈴'
			desc='芳名默鈴、唐門掌門の一人娘、森の小動物のような少女。淡泊な性情、7 本の音を立てない鈴を身に着けている。<br>興味は折り紙。'
			:animation=false
		/>
    </ChTab>
</ChTabs>

::: details ソースコード

```Markdown

<ChTabs position="bottom">
	<ChTab title="龍湘">
        <ChMeet
			src='/images/characters/girl_8/normal.webp'
			nameMain='龍湘'
			desc='錦香宮に師事し、剣法精妙な美しき佳人。<br>父の足跡をたどって進み、四方で俠を行いたいと願う。'
			:animation=true
		/>
    </ChTab>
	<ChTab title="アニメーション無し版">
        <ChMeet
			src='/images/characters/girl_0/normal.webp'
			nameTitle='小師妹'
			nameMain='唐默鈴'
			desc='芳名默鈴、唐門掌門の一人娘、森の小動物のような少女。淡泊な性情、7 本の音を立てない鈴を身に着けている。<br>興味は折り紙。'
			:animation=false
		/>
    </ChTab>
</ChTabs>


```

:::
