---
title: LoM-wiki 公開コンポーネント
description: Wiki の公開共有コンポーネント説明
aside: true
outline: [2, 3]
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

## タブコンポーネント

`Tabs` は以下の属性を提供します：

1.  `position`：タブ表のサイズを設定します

    -   `top` <Badge type="warning" text="デフォルト値" /> ：タブ表を上に配置
    -   `bottom`：タブ表を下に配置

`Tab` は以下の属性を提供します：

1.  `title` <Badge type="danger" text="必須" /> ：タブのテキストを設定

<br>

<Tabs>
    <Tab title="タブ1">
        これはタブ1のコンテンツです
    </Tab>
    <Tab title="タブ2">
        これはタブ2のコンテンツです<br>
        改行します
    </Tab>
</Tabs>

<br>

::: details ソースコード

```markdown
<Tabs>
    <Tab title="タブ1">
        これはタブ1のコンテンツです
    </Tab>
    <Tab title="タブ2">
        これはタブ2のコンテンツです<br>
        改行します
    </Tab>
</Tabs>
```

:::

## キャラクター Icon 手抜きコンポーネント

現在、いくつかの Icon と構文例を提供しています

`<BadendIcon>` リンクはデフォルトで生死簿にジャンプし、:no で番号を指定できます。  
現在の一部は生死簿の詳細ページにジャンプしており、リリースされたページが増えるにつれて、  
BadendIcon は自動的にますます多くの詳細ページをインポートします。

<br>

<BadendIcon :size='`medium`'>テキスト 1</BadendIcon>  
<BadendIcon :size='`small`'>テキスト 2</BadendIcon>  
<BadendIcon>テキスト 3</BadendIcon>
<BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon>

<br>

::: details ソースコード

```markdown
<BadendIcon :size='`medium`'>テキスト 1</BadendIcon>
<BadendIcon :size='`small`'>テキスト 2</BadendIcon>
<BadendIcon>テキスト 3</BadendIcon>
<BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon>
```

:::

---

`<Girl[0-8]Icon>` リンクはデフォルトでキャラクター列傳ページにジャンプし、詳細は[夢境の想い人](/ja/people/dream-sweetheart.html)を参照してください

small(小型) 画像は 32 px × 32 px で、  
medium(中型) 画像は 100 px × 100 px です。  
汗青書のサイズは例外です：
small(小型) 画像は 38 px × 44 px で、  
medium(中型) 画像は 76 px × 88 px です。

<br>

<Girl0Icon :size='`medium`'>テキスト 4</Girl0Icon>  
<Girl0Icon :size='`small`'>テキスト 5</Girl0Icon>  
<Girl0Icon>テキスト 6</Girl0Icon>

<br>

::: details ソースコード

```markdown
<Girl0Icon :size='`medium`'>テキスト 4</Girl0Icon>
<Girl0Icon :size='`small`'>テキスト 5</Girl0Icon>
<Girl0Icon>テキスト 6</Girl0Icon>
```

:::

---

### キャラクター Icon 手抜きコンポーネント使用例

|                           構文                           | 効果                                                    |                         説明                          |
| :------------------------------------------------------: | :------------------------------------------------------ | :---------------------------------------------------: |
| `` <BadendIcon :size="`medium`">テキスト</BadendIcon> `` | <BadendIcon :size="`medium`">テキスト</BadendIcon>      |                     中型 Icon を表示                     |
| `` <BadendIcon :size="`small`">テキスト</BadendIcon> ``  | <BadendIcon :size="`small`">テキスト</BadendIcon>       |                     小型 Icon を表示                     |
|           `<BadendIcon>テキスト</BadendIcon>`            | <BadendIcon>テキスト</BadendIcon>                       |            デフォルトサイズを使用、デフォルトは「`small`」            |
|               `<BadendIcon></BadendIcon>`                | <BadendIcon></BadendIcon>                               |     テキストなし、デフォルトサイズを使用、デフォルトは「`small`」     |
| `<BadendIcon :no="30">生死簿30『清理門戶』</BadendIcon>` | <BadendIcon :no="30">生死簿 30『清理門戶』</BadendIcon> | no は生死簿の番号にリンクします。使用しない場合は生死簿の先頭にジャンプします。 |

### 利用可能な属性の記述方法

| 属性名 | 値                          | デフォルト     |
| :------- | :-------------------------- | :---------- |
| size     | "`medium`" \| "`small`" | "`small`" |
| no       | 0 <= no <= 90               | 0           |

### 現在利用可能なコンポーネント

-   `<BadendIcon>` : <BadendIcon>生死簿 (バッドエンド)</BadendIcon>、一部のデフォルトクリックは生死簿のメインページの対応位置にジャンプし、一部は詳細ページにジャンプします。
-   `<EndIcon>` : <EndIcon>汗青書</EndIcon>、no を指定しない場合、デフォルトクリックで汗青書リストにジャンプします。
-   `<EndIcon no="49">` : <EndIcon no="49">汗青書 49：喪家之犬</EndIcon>、no を追加すると指定された番号の汗青書にジャンプします。

以下のキャラクター アバターはデフォルトでキャラクター列傳ページにジャンプします：

-   `<Girl0Icon>` : <Girl0Icon>小師妹アバター</Girl0Icon>
-   `<Girl1Icon>` : <Girl1Icon>瑞杏アバター</Girl1Icon>
-   `<Girl2Icon>` : <Girl2Icon>葉雲裳アバター</Girl2Icon>
-   `<Girl3Icon>` : <Girl3Icon>虞小梅アバター</Girl3Icon>
-   `<Girl4Icon>` : <Girl4Icon>上官螢アバター</Girl4Icon>
-   `<Girl5Icon>` : <Girl5Icon>夏侯蘭アバター</Girl5Icon>
-   `<Girl6Icon>` : <Girl6Icon>郁竹アバター</Girl6Icon>
-   `<Girl7Icon>` : <Girl7Icon>魏菊アバター</Girl7Icon>
-   `<Girl8Icon>` : <Girl8Icon>龍湘アバター</Girl8Icon>

## アイテム Icon 手抜きコンポーネント

現在、いくつかの Icon と構文例を提供しており、`BookItemIcon` を例とします。  
以下の利用可能なコンポーネントのいずれかで置き換えることができます。`no` と「アイテム使用タイプ」が対応していればよいです。  
キャラクター Icon との違いは背景が追加されており、  
さらに、このコンポーネントが使用する画像には「特定の位置への配置」が対応しています。

`<BookItemIcon>` はデフォルトでリンク機能があり、クリックすると対応する情報ページにジャンプします。  
さらに、デフォルト画像は small(小型、100 px × 100 px) です；  
medium は中型(200 px × 200 px) です；  
`:size` で大きさを設定できます。  
needLink = false のとき、画像をクリックすると画像ズーム機能が有効になります。  
`no` のみ必須です。

<br>

<BookItemIcon :no="6001">テキスト</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">テキスト 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">テキスト 2</BookItemIcon>

<br>

::: details ソースコード

```markdown
<BookItemIcon :no="6001">テキスト</BookItemIcon>
<BookItemIcon :needLink="false" :no="6001">テキスト 1</BookItemIcon>
<BookItemIcon :size="`medium`" :no="6001">テキスト 2</BookItemIcon>
```

:::

### 利用可能な属性の記述方法

`type` はコンポーネント名に既に含まれているため、別途設定する必要はありません。
| 属性名 | 値 | デフォルト | 必須 |
| :------- |:----------------------------|:------------|:--------|
| no | 異なるアイテムに異なる値 | - |○ |
| size | "`medium`" \| "`small`" | "`small`" | × |
| needLink | true \| false | true |× |

### 現在利用可能なコンポーネント(各コンポーネントは異なるアイテムタイプを表します)：

-   `<BookItemIcon>` : 武学書籍(book)、
-   `<FoodItemIcon>` : 食物(food)、
-   `<NewspaperItemIcon>` : 江湖快報(newspaper)、
-   `<SpecialItemIcon>` : 特殊道具(special)、
-   `<TeaItemIcon>` : 茶水(tea)、
-   `<WineItemIcon>` : 酒(wine)、

### 対応する配置パス形式

```
docs/public/images/items/${type}s/item_${type}_${no}.webp
```

ここで、`${type}` はアイテムタイプです。例：`book`、`food`、`special`、`tea`、`wine`；  
`${no}` はアイテム番号です。

例えば、武学書籍(book) 番号 6001、画像パスは `docs/public/images/items/books/item_book_6001.webp`。  
特殊道具(special) 番号 2003、画像パスは `docs/public/images/items/specials/item_special_2003.webp`

::: warning
使用前に画像ファイルが存在するか確認してください。存在しない場合は、指定されたパスにアップロードしてください。  
アイテムの分類が不確定な場合は、画像の解析元の名前を主にしてください。
:::

## 心相 Icon 手抜きコンポーネント

<MoodIcon :mood="`high`">テキスト</MoodIcon>  
<MoodIcon :mood="`good`">テキスト 1</MoodIcon>  
<MoodIcon >テキスト 2</MoodIcon>  
<MoodIcon :mood="`normal`">テキスト 3</MoodIcon>  
<MoodIcon :mood="`low`">テキスト 4</MoodIcon>  
<MoodIcon :mood="`bad`">テキスト 5</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`medium`">テキスト 6</MoodIcon>  
<MoodIcon :mood="`bad`" :size="`small`">テキスト 7</MoodIcon>

<br>

::: details ソースコード

```markdown
<MoodIcon :mood="`high`">テキスト</MoodIcon>
<MoodIcon :mood="`good`">テキスト 1/MoodIcon>
<MoodIcon >テキスト 2</MoodIcon>
<MoodIcon :mood="`normal`">テキスト 3</MoodIcon>
<MoodIcon :mood="`low`">テキスト 4</MoodIcon>
<MoodIcon :mood="`bad`">テキスト 5</MoodIcon>
<MoodIcon :mood="`bad`" :size="`medium`">テキスト 6</MoodIcon>
<MoodIcon :mood="`bad`" :size="`small`">テキスト 7</MoodIcon>
```

:::

### 利用可能な属性の記述方法

| 属性名 | 値                                                                 | デフォルト      | 必須 |
| :------- | :----------------------------------------------------------------- | :----------- | :------ |
| size     | "`medium`" \| "`small`"                                        | "`small`"  | × |
| mood     | "`high`" \| "`good`" \| "`normal`" \| "`low`" \| "`bad`" | "`normal`" | × |

## Markdown 外部解析ツール

HTML に含まれたコンテンツを主動的に解析するために使用されます。  
改行の場合を除き `<br>` のみを使用できます。その他の Markdown はすべて使用できます。

<br>

<div>
    ~~純粋な HTML 形式~~
</div>
<div>
    <MarkdownWrapper>
        ~~HTML 内に MarkdownWrapper で囲まれた形式~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||ネタバレ対策テキストにも対応||
    </MarkdownWrapper>
</div>

<br>

::: details ソースコード

```Markdown
<div>
    ~~純粋な HTML 形式~~
</div>
<div>
    <MarkdownWrapper>
        ~~HTML 内に MarkdownWrapper で囲まれた形式~~
    </MarkdownWrapper>
</div>
<div>
    <MarkdownWrapper>
        ||ネタバレ対策テキストにも対応||
    </MarkdownWrapper>
</div>
```

:::

## BTable 並べ替え表

表に並べ替え機能を追加します  
外側の `<table>` を `<BTable>` に変更するだけです  
最初の行 `<td>` がタイトルとなり、`文字列`、`Markdown`、`HTML` を渡すことができます  
その他の行 `<td>` が表データとなり、`文字列`、`Markdown`、`HTML`、`Component` を渡すことができます

<br>

`BTable` は以下の属性を提供します：

1.  `:horizontal`：表を水平表示に変換します

    -   `true`：水平に変換
    -   `false` <Badge type="warning" text="デフォルト値" /> ：水平に変換しない

2.  `:unsearch`：表検索機能を制御します

    -   `true`：検索を閉じる
    -   `false` <Badge type="warning" text="デフォルト値" /> ：検索を開く

3.  `:tags`：検索タグを設定します(`unsearch` = `true` の場合は無効)

    -   `text` <Badge type="danger" text="必須" /> ：タグテキスト
    -   `icon`：タグ icon

4.  `searchMode`：検索タイプを設定します

    -   `and` <Badge type="warning" text="デフォルト値" /> ：交差検索
    -   `or`：結合検索

5.  `:stickyHeader`：表ヘッダーをピン留めするか設定します
    -   `true`：ピン留めを有効化
    -   `false` <Badge type="warning" text="デフォルト値" /> ：ピン留めを閉じる

最初の行 (タイトル) `td` は以下の属性を提供します：

1.  `:unsortable`：フィールドソートを制御します

    -   `true`：ソートを閉じる
    -   `false` <Badge type="warning" text="デフォルト値" /> ：ソートを開く

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

::: details ソースコード

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
    <td :unsortable=true>last_name</td> // この行はソートしません
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

`BTable` 内の `<tr>` `<td>` 属性はすべて保持されます

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

::: details ソースコード

```Markdown
<BTable :unsearch=true>
  <tr>
    <td>age</td>
    <td :unsortable=true>first_name</td> // この行はソートしません
    <td>last_name</td>
  </tr>
  <tr style='background-color: #f0f0f0; color: black;'> // タイトル以外の tr は属性を設定できます
    <td>40</td>
    <td style='color: red;'>Dickerson</td> // td も可能です
    <td>Macdonald</td>
  </tr>
</BTable>
```

:::

## InfoList 詳細情報コンポーネント

サイドバーのスペースを占有するコンポーネント。  
通常の使用法は `<InfoList>` の下に他のテキストやコンポーネントを追加して、同じ行の残りのスペースを埋めることです

`InfoList` は以下の属性を提供します：

1.  `position`：コンポーネントの位置を設定します

    -   `left`：コンポーネントを左に設定
    -   `right` <Badge type="warning" text="デフォルト値" /> ：コンポーネントを右に設定
    -   `none`：浮遊効果を閉じる

`Info` は以下の属性を提供します：

1.  `title` <Badge type="danger" text="必須" /> ：詳細内容のタイトルテキストを設定
2.  `:open`：デフォルトで展開するかどうか

知識科学：  
浮遊要素が長すぎて、全ページオブジェクトと競合する場合は、  
`<div style="clear:both;"></div>` で制限できます。

<br>

<InfoList position="left">
  <Info title="列傳一" :open=true>
      錦香宮に師事し、剣法精妙な美しき佳人。<br>
      父の足跡をたどって進み、四方で俠を行いたいと願う。<br>
      しかし、世事に疎いため、意外に簡単に騙される。
  </Info>
  <Info title="列傳二">
    父の記憶は今ほんのわずかだ。<br>
    遠い記憶では、彼は彼女の小さな頭を撫でて、<br>
    微笑んで出かけたが、二度と帰ってこなかった。<br>
    その後、錦香宮の温夫人が彼女を迎えに来て門下に入れてくれた。<br><br>   
    人づてに聞いて、初めて父が武林の伝説であることを知った。<br>
    悲しくもあり誇りでもあり、父の足跡をたどって、<br>
    故人を訪ねて、より多くの亡き父の物語を集め、これで懐かしむ。<br><br>
    一身の剣法はすべて家伝の秘笈から得たもので、龍淵七訣の中では特に剣法に巧みで、<br>
    小さい頃からとり木の剣で人剣合一の奥義を悟り、気づかぬまま、<br>
    今でも自分が本当に高手かどうか明確でない。
  </Info>
</InfoList>
<br>
テスト文字です。テスト文字です。テスト文字です。テスト文字です。<br>  
テスト文字です。テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br>   
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
テスト文字です。<br> 
<div style="clear:both;"></div>
<br>

::: details ソースコード

```Markdown
<InfoList position="left">
  <Info title="列傳一" :open=true>
      錦香宮に師事し、剣法精妙な美しき佳人。<br>
      父の足跡をたどって進み、四方で俠を行いたいと願う。<br>
      しかし、世事に疎いため、意外に簡単に騙される。
  </Info>
  <Info title="列傳二">
    父の記憶は今ほんのわずかだ。<br>
    遠い記憶では、彼は彼女の小さな頭を撫でて、<br>
    微笑んで出かけたが、二度と帰ってこなかった。<br>
    その後、錦香宮の温夫人が彼女を迎えに来て門下に入れてくれた。<br><br>
    人づてに聞いて、初めて父が武林の伝説であることを知った。<br>
    悲しくもあり誇りでもあり、父の足跡をたどって、<br>
    故人を訪ねて、より多くの亡き父の物語を集め、これで懐かしむ。<br><br>
    一身の剣法はすべて家伝の秘笈から得たもので、龍淵七訣の中では特に剣法に巧みで、<br>
    小さい頃からとり木の剣で人剣合一の奥義を悟り、気づかぬまま、<br>
    今でも自分が本当に高手かどうか明確でない。
  </Info>
</InfoList>
テスト文字*n
<div style="clear:both;"></div>
```

:::

## wikilink

`[[]]` で囲まれたリンク。参照対象は `title` です

<br>

[[LoM-wiki 公開コンポーネント]]  
[[LoM-wiki 公開コンポーネント|カスタムテキスト]]  
[[LoM-wiki 公開コンポーネント#wikilink|指定アンカー]]  
[[LoM-wiki 公開コンポーネント|カスタムテキストに~~打消し線~~と<span style='color: red;'>HTML 構文</span>を書くことができます]]

<br>

::: details ソースコード

```markdown
[[LoM-wiki 公開コンポーネント]]  
[[LoM-wiki 公開コンポーネント|カスタムテキスト]]  
[[LoM-wiki 公開コンポーネント#wikilink|指定アンカー]]  
[[LoM-wiki 公開コンポーネント|カスタムテキストに~~打消し線~~と<span style='color: red;'>HTML 構文</span>を書くことができます]]
```

:::

## エンディングコンポーネント

```markdown
<EndBackground no=8 title="煮込まれた犬">
兔死狗烹，你這走狗已經沒有用了．用張<br>
大餅就能騙得你團團轉，可真划算．<br>
<br>
<br>
<!-- 註解：此行用於標示給編輯者使用，使用者是看不到的。用於提示此處有空行，因排版原因，請勿刪除 -->
</EndBackground>
```

<EndBackground no=8 title="煮込まれた犬">
兔死狗烹，你這走狗已經沒有用了．用張<br>
大餅就能騙得你團團轉，可真划算．<br>
<br>
<br>
<!-- 註解：此行用於標示給編輯者使用，使用者是看不到的。用於提示此處有空行，因排版原因，請勿刪除 -->
</EndBackground>

```markdown
<EndBackground no=0 title="対応する画像がない場合">
対応する画像がない場合<br>
対応する画像がない場合<br>
対応する画像がない場合<br>
<br>
</EndBackground>
```

<EndBackground no=0 title="対応する画像がない場合">
対応する画像がない場合<br>
対応する画像がない場合<br>
対応する画像がない場合<br>
<br>
</EndBackground>

### 利用可能な属性の記述方法

| 属性名 | 値       | デフォルト | 必須 |
| :------- | :------- | :------ | :------ |
| no       | 1~50     | × | × |
| title    | 通常のテキスト | × | × |

注釈：

1. エンディング説明は標記シンボルに直接配置されます。上記の例のように、この段落のテキスト「兔死狗烹、...可真划算．」の位置です。
2. 一部のエンディングには画像の共有がある場合があります。
3. この部分の表示はモバイル版と通常版に自動で分割されています。編集に異常があれば Discord に反映してください。
4. 現在、レイアウトを調整済みです。ほとんどの場合、ゲーム画面に対応しますが、  
   レイアウトの制限（またはゲーム自体のレイアウトの制限）により、わずかな差異が生じる場合があります。  
   誤差範囲内と考えられ、今後改善の機会があれば対応します。
5. テキストボックスの長さまたは幅が不足している場合は、自分で `<br>` 改行シンボルまたは「　」全角スペースを追加してください。  
   テキストの末尾に `<!-- このレイアウトの理由により、いくつかの空行と全角スペースが挿入されており、正当な理由なく削除しないでください。 -->` を追加してください。
