---
title: イベントページテンプレート
description: イベントページ (simple / detailed_description) 新規作成時に使用するテンプレートと記法規約。
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
    - event
---

# {{ $frontmatter.title }}

イベントページには2種類の型があります。用途に応じて選んでください。

| 型 | 置き場所 | 用途 |
| --- | --- | --- |
| 簡易表詳細 | `docs/ja/event/simple/` | 単発イベントの発動条件・選択肢・数値効果を1枚の表で示す |
| 詳細説明 | `docs/ja/event/detailed_description/` | 複数イベントが連なる区間や、分岐・経緯の説明が必要なもの |

## ファイル名の付け方

```
<年>-<月>-<順>-<イベント名>.md
例: 3-08-2-四師兄道別.md (第3年8月・その月の2番目)
```

-   番号は wiki 編集者の整理番号で、ゲーム内部の ID とは対応しません。
    作成時は前後の既存ページと番号が衝突しないか確認してください
    (simple と detailed_description で同じ番号を持つこと自体は可。例: `3-03-2-*`)。
-   イベント名は中国語名でも日本語名でも構いません
    ([よく使う書き方](/ja/develop/4-1-template)の命名節を参照)。

## 簡易表詳細 (simple) テンプレート

frontmatter → 見出し → すぐ `<Table class="timeline-table">` の構成にします。
**表の前に導入文や引用ブロックは置きません。** 前後イベントへの導線や補足は備考セルに書きます。

### frontmatter

ページ単位の設定なので表示例はありません。このままコピーして title だけ変えます。

```markdown
---
aside: false
borderless: true
title: イベント名
description: シナリオ簡易表詳細説明
outline: [2, 3]
tags:
    - detailed
    - event
---

# {{ $frontmatter.title }}
```

### 本文の表

以下は実際の表示です。数値効果の入った「選択肢のテキスト」に
マウスを載せる(スマホでは長押し)とツールチップが出ます。

<Table class="timeline-table">
    <tr class="timeline-header">
        <th>発動条件</th>
        <th>イベント内容</th>
        <th>備考</th>
    </tr>
	<tr>
		<td>
			発生時期・条件 (例: 第三年8月上旬・白天、メインシナリオで自動発生) <br>
		</td>
		<td>
			<MarkdownWrapper>
			イベントの流れを記述。キャラクター名は
			[唐惟元](/ja/people/characters/brother4) のようにリンクする <br>
			<br>
			👉選択：選択肢の見出し <br>
			<span title="性情-1、唐惟元+1、銀兩-100">「選択肢のテキスト」(条件があれば併記) </span> <br>
			「別の選択肢」 → イベント終了 <br>
			</MarkdownWrapper>
		</td>
		<td>
			補足事項 <br>
			TODO: 未確認事項はここに明記する <br>
		</td>
	</tr>
</table>

<br>

::: details ソースコード

```markdown
<Table class="timeline-table">
    <tr class="timeline-header">
        <th>発動条件</th>
        <th>イベント内容</th>
        <th>備考</th>
    </tr>
	<tr>
		<td>
			発生時期・条件 (例: 第三年8月上旬・白天、メインシナリオで自動発生) <br>
		</td>
		<td>
			<MarkdownWrapper>
			イベントの流れを記述。キャラクター名は
			[唐惟元](/ja/people/characters/brother4) のようにリンクする <br>
			<br>
			👉選択：選択肢の見出し <br>
			<span title="性情-1、唐惟元+1、銀兩-100">「選択肢のテキスト」(条件があれば併記) </span> <br>
			「別の選択肢」 → イベント終了 <br>
			</MarkdownWrapper>
		</td>
		<td>
			補足事項 <br>
			TODO: 未確認事項はここに明記する <br>
		</td>
	</tr>
</table>
```

:::

### 記法の約束

-   **数値効果はツールチップで**：`<span title="効果">対象テキスト</span>`。
    複数行になる場合は title 属性内で改行できます。

    <span title="性情-1、唐惟元+1、銀兩-100">「百文やる」(銀兩≧100限定) </span> ← 実際の表示 (マウスを載せる)

    ::: details ソースコード
    ```markdown
    <span title="性情-1、唐惟元+1、銀兩-100">「百文やる」(銀兩≧100限定) </span>
    ```
    :::

-   **行内の絵文字プレフィックス**：

    💬閒聊：「私の実力」 (会話)<br>
    👉選択：百文を払う (選択肢)<br>
    🎲天運：あなたの弁解は (ダイス判定。結果は 【\<50】説得失敗 / 【≧50】説得成功 の形式)<br>
    🆚戦：混戦：盗版撃退 (戦闘)

    ::: details ソースコード
    ```markdown
    💬閒聊：「私の実力」 (会話)<br>
    👉選択：百文を払う (選択肢)<br>
    🎲天運：あなたの弁解は (ダイス判定。結果は 【<50】説得失敗 / 【≧50】説得成功 の形式)<br>
    🆚戦：混戦：盗版撃退 (戦闘)
    ```
    :::

-   **リンクは `/ja/` 付きの絶対パス**で書きます (`/ja/people/characters/...`、
    `/ja/event/simple/...`)。リンク先のファイル名を確認してから張ること
    (キャラクターページのファイル名はゲーム内部 ID と一致しない場合があります)。
-   **`<td>` 内で Markdown リンクを使う場合は必ず `<MarkdownWrapper>` で囲む**：
    `<Table class="timeline-table">` 全体は改行を挟まない一続きの raw HTML ブロックとして
    扱われるため、`<MarkdownWrapper>` で囲まない Markdown リンク (`[テキスト](url)`) は
    リンクに変換されず `[テキスト](url)` という文字列のまま表示されてしまう
    ([Markdown 外部解析ツール](/ja/develop/4-2-wiki-template#markdown-外部解析ツール)節を参照)。
    リンクを含まない `<span title="...">` 等はこの制約を受けないため、`<td>` の内容全体を
    `<MarkdownWrapper>` で包めば安全。
-   **未確認のまま公開してよい**：完成度より存在を優先し、不明点は `TODO:` を付けて
    ページ内に明記します。
-   **ゲーム内部の ID・フラグ名・スクリプト名は書かない**：内部データ由来の識別子
    (ミッションID・フラグ名・ノード名など) は公開ページに載せず、編集者のローカルな
    調査メモにとどめます。ページには発生時期・条件・効果を日本語で要約した結果だけを
    書きます。

## 詳細説明 (detailed_description) テンプレート

frontmatter のキー順は[よく使う書き方](/ja/develop/4-1-template)の順に合わせます。
本文は `## 基本流程` から始め、カテゴリ・発生時期・発動条件を最初に示します。
前提イベントの説明が要る場合は、見出し直後に引用ブロック (`>`) を置けます。

### frontmatter

```markdown
---
title: イベント名 (原文名など)
description: このページが扱う範囲の説明
aside: true
outline: [2, 3]
sidebar: true
borderless: false
tags:
    - detailed
    - event
    - 関連キャラ名や原文名
---

# {{ $frontmatter.title }}
```

### 本文の冒頭部

「基本流程」節の冒頭は以下のように表示されます
(見出し `## 基本流程` はこのページの目次に混ざるため表示例から省いています)。

> 前提となるイベントや分岐条件の説明 (必要な場合のみ)。

**カテゴリ**：メインシナリオ<br>
**発生時期**：第三年11月<br>
**発動条件**：メイン進行で自動発生<br>

区間全体の流れを2〜3文で要約する。

TODO: スタブの場合はここで宣言する。

<br>

::: details ソースコード

```markdown
> 前提となるイベントや分岐条件の説明 (必要な場合のみ)。

## 基本流程

**カテゴリ**：メインシナリオ<br>
**発生時期**：第三年11月<br>
**発動条件**：メイン進行で自動発生<br>

区間全体の流れを2〜3文で要約する。

TODO: スタブの場合はここで宣言する。

## 各段階の見出し

段階ごとに ## を切り、必要なら段階内で簡易表と同じ
<Table class="timeline-table"> を使えます。

## 備考

-   補足事項や別イベントとの混同注意などを箇条書きで。
```

:::

## 公開後にやること

[シナリオ簡易表](/ja/event/story-simple-table)の該当月に項目があればリンク化、
無ければ項目を追加します。リンクは `<MarkdownWrapper>` 内の Markdown リンク
(`/ja/` プレフィックス付き) で書きます。以下は実際の表示です。

<Table class="timeline-table">
	<tr>
		<td>
			<MarkdownWrapper>
			<li>[四師兄の旅立ち](/ja/event/simple/3-08-2-四師兄道別)</li>
			</MarkdownWrapper>
		</td>
	</tr>
</table>

<br>

::: details ソースコード

```markdown
<td>
	<MarkdownWrapper>
	<li>[四師兄の旅立ち](/ja/event/simple/3-08-2-四師兄道別)</li>
	</MarkdownWrapper>
</td>
```

:::

コンポーネントの詳しい使い方は
[LoM-wiki 公開コンポーネント](/ja/develop/4-2-wiki-template)を参照してください。
