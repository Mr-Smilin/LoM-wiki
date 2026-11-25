---
title: 結縁攻略ページテンプレート
description: 結縁攻略ページ開発時に参照できるテンプレート。
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

```markdown
---
title: キャラクター名結縁攻略
description: キャラクター名結縁攻略
aside: false
outline: [2, 3]
sidebar: false
borderless: true
pageClass: pursuit
tags:
    - 結婚
    - 成親
    - キャラクター名
---

# {{ $frontmatter.title }}

<p align="center"><img src="/images/characters/キャラクターフォルダ/画像名.webp" style="width:300px"></p>

## 結縁必要条件

<table>

<tr>
<td>番号</td>
<td>時期</td>
<td>イベント</td>
<td>内容</td>
<td>推奨および備考</td>
</tr>

<tr>
<td>1</td>
<td>三年目五月上旬</td>
<td><MarkdownWrapper>[イベント名](/ja/event/simple/イベントページ)</MarkdownWrapper></td>
<td>発生条件、選択すべき選択肢</td>
<td>補足説明</td>
</tr>

<tr>
<td>2</td>
<td>三年目六月中旬</td>
<td><MarkdownWrapper>[イベント名](/ja/event/simple/イベントページ)</MarkdownWrapper></td>
<td>発生条件、選択すべき選択肢</td>
<td></td>
</tr>

</table>

## 結縁後に変化するイベント

<table>

<tr>
<td>番号</td>
<td>時期</td>
<td>イベント</td>
<td>変化内容</td>
<td>備考</td>
</tr>

<tr>
<td>1</td>
<td>四年目一月上旬</td>
<td><MarkdownWrapper>[イベント名](/ja/event/simple/イベントページ)</MarkdownWrapper></td>
<td>結縁後にイベントがどう変わるか</td>
<td></td>
</tr>

</table>

## 備考

その他の補足。
```

## テーブルの書き方

フロントマターの `pageClass: pursuit` を指定すると、結縁攻略専用のテーブルレイアウトが適用されます：

-   コンテンツ領域の最大幅は 1200px で中央揃えになり、どのページでも列幅が統一されます。
-   「時期」と「イベント」は Web ページ上で同じ列に縦並びで表示され、時期が上の小文字、イベントが下に配置されます。
-   モバイル画面（画面幅 768px 未満）では、テーブルの各行が 1 枚のカードとして表示されます。

そのため、テーブルを書く際は以下の点に注意してください：

-   各行は左から順に「番号」「時期」「イベント」「内容」「備考」の 5 列で記述します。
-   1 行目はヘッダー行です。モバイルのカード表示ではヘッダーは非表示となり、「内容」「備考」の 2 セルの前に見出しラベルが自動付与されます。
-   内容のないセルは空（`<td></td>`）にしておくと、モバイル表示では非表示になります。
-   1 行目がちょうど 5 列のテーブルにのみこのレイアウトが適用され、同じページ内の別の列数のテーブルは通常のテーブル表示のままになります。
-   PC 上でモバイル表示を確認したい場合は、ブラウザのウィンドウ幅を 768px 未満に狭めるか、ブラウザの開発者ツール（F12）のモバイルモードを使用してください。
