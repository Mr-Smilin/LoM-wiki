---
title: 江湖快報ページモジュール説明
description:
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

[公式アップデートページ](/ja/develop/1-start.html)

## アップデート説明

現在の公式アップデートページは github に直接対応する .md ファイルがありません。  
現在のメカニズムは wiki をビルドする際に、  
`vitepress` の `include` 機能を使用して、  
複数の .md ファイルをそのページに導入し、  
以下は自動生成される news.md テンプレートの例です。

```
--- // [!code --]
title: 公式アップデート // [!code --]
tags: // [!code --]
  - news // [!code --]
  - 新聞 // [!code --]
  - ゲームアップデート // [!code --]
  - アップデート // [!code --]
--- // [!code --]
// [!code --]
# {{ $frontmatter.title }} // [!code --]
<!--@include: @/other/news/{日付}-{順序}-{md摘要}.md-->
<!--@include: @/other/news/20240628-03-demoUpdate.md-->
<!--@include: @/other/news/20240628-02-release.md-->
<!--@include: @/other/news/20240628-01-release.md-->
<!--@include: @/other/news/20240627-01-release.md-->
```

## 命名方法

命名ルールは以下の通りです。日付は「8 桁の数字」で、例：`20240708`  
順序は「2 桁の数字」で、例：`01`、`02`、`03`... その日の何番目の情報かを表します。  
(`release`、`demoUpdate` がどちらであるかに関わらず、同じものと見なされます。ファイルが何個あるかに応じて直接数字を追加します)  
md 摘要は短い説明で、例：`release`、`demoUpdate` など。  
その後、これら 3 つの情報を `-` で接続して、  
最終的に .md で終わります。

こんな感じです：`20240628-02-release.md` または `20240628-01-demoUpdate.md`。

```
@/other/news/{日付}-{順序}-{md摘要}.md
```

## 使用方法

次に `@/other/news/20240705-02-demoUpdate.md` を例として、  
このアップデート後、このモジュールは直接 news.md に導入されるため、  
毎回更新のたびに  
タイトルと記事の tag や title などを追加する必要がなく、  
これらはすべて直接再利用できます。  
上記の「赤色部分」は再度 .md に記述する必要がありません。

具体的には、  
公式アップデートを追加する必要がある場合、  
まず .md ファイルを作成し、命名形式に従い、`docs/other/news/` の下に配置してください。  
アップデート内容を書き終えたら `npm run build` を実行してください。

```
## [試玩版更新 v2.1.4](https://store.steampowered.com/news/app/1859910/view/4267805297667980568?l=tchinese)

発表日時
2024 年 7 月 5 日 金曜日

機能調整

ゲームセーブパスを以下に調整
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\Save`


正式版がある場合、ハードディスク上の DEMO バージョンを起動したい場合は、セーブファイルをバックアップしてください。

正式版のセーブファイルパス。これは Steam クラウドセーブ同期データフォルダです
`%userprofile%\AppData\LocalLow\Obb Studio\Mortal\{SteamId}`

Steam ID の検索方法：
プロフィール -> アカウント詳細 -> アカウント名の下

```
