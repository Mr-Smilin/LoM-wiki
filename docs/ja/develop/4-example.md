---
title: 基礎知識
description: 基本的な Markdown の知識
outline: [2, 3]
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

このページはあなたに協力する際のテンプレートを提供し、  
同時に最低限の基礎教育を提供しています。  
カッキョウデンを愛する、熱心に貢献するすべての人へ。

## 直接使用できるテンプレート

:::info
テンプレートを直接そのパスから「コピー」し、「貼り付け」を「希望する場所」に、「名前変更」してから使用してください。
:::
:::danger
テンプレートページを直接「変更」、「削除」、「名前変更」、「移動」しないでください。他のユーザーの使用に支障が出る可能性があります。
:::

### Markdown クリーンテンプレート

[Markdown クリーンテンプレート](/ja/develop/clean-template.md)  
パス：`docs/develop/clean-template.md`

### キャラクターページテンプレート

[キャラクターページテンプレート](/ja/develop/clean-character-template.md)  
パス：`docs/develop/clean-character-template.md`

## プロジェクト参加推奨知識（推奨補足順序）

1. Html または md(markdown) どちらか一つを選択  
   Html 学習リソース：[W3C Html](https://www.w3schools.com/html/default.asp)  
   md 学習リソース：[Markdown 構文説明](https://markdown.tw)

::: tip  
複雑なテーブルを書く場合は、html と md の両方を同時に使用する可能性が高いです。<br>
シンプルなテーブルを書く場合は、どちらか一つを選択して使用できます。<br>
私たちは入門のハードルを完善・簡素化する予定ですが、これには時間の開発が必要です。<br>
より多くの人々がすぐに習得できるようになることを願っています。
:::

2. (optional)CSS、Javascript、Vue.js、RWD 概念  
   CSS 学習リソース：[W3C CSS](https://www.w3schools.com/css/default.asp)  
   Javascript 学習リソース：[MDN Web Docs](https://www.w3schools.com/js/)  
   Vue.js 学習リソース：[Vue.js 公式ドキュメント](https://cn.vuejs.org/)

::: warning
このアイテムは基本的にフロントエンド技術です。不慣れな場合は先にスキップできます。<br>
:::

RWD 学習リソース：[W3C レスポンシブ Web デザイン - 入門](https://www.w3schools.com/css/css_rwd_intro.asp)

::: info
RWD はレスポンシブ Web デザインです。<br>
基本的な概念は、レイアウト時にデスクトップ、携帯電話、タブレットなど、異なるデバイスの表示効果を考慮する必要があるということです。
:::

3. vitepress フレームワーク開発関連知識
   ref：

-   [rumtime API](https://vitepress.dev/reference/runtime-api#runtime-api)
-   [前のページ 次のページリンク](https://vitepress.dev/reference/default-theme-prev-next-links)
-   [vitepress 公式ドキュメント](https://vitepress.dev/)

    ::: info  
    このプロジェクトで使用できる部分は runtime API と前のページ次のページリンクです。  
    他の部分に興味がある場合は、公式ドキュメントをゆっくり見ることができます。  
    :::
