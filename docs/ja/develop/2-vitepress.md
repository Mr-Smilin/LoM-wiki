---
title: 設定ファイル項目説明
description: ここでは主に `.vitepress` フォルダ内の、編集が必要になる可能性がある内容のポイントについて説明します。
tags:
    - dev
    - develop
    - developer
    - 開発
    - 協作
---

# 設定ファイル項目説明

::: tip 💡 注意
ここでは wiki 編集に関連する基礎知識を提供しています。  
ゲームデータの検索についてはその他のページをご覧ください。
:::

本サイトは `VitePress` を使用して開発されています。  
詳細については [公式ドキュメント](https://vitepress.dev/guide/what-is-vitepress)で学ぶことができます。

ここでは主に `.vitepress` フォルダ内の、  
編集が必要になる可能性がある内容のポイントについて説明します。

![](/images/develop/2-vitepress/01.webp)

-   `config.mjs` 主に調整が必要な設定ファイルです。左側のメニューとサイトの主な設定に影響します。
-   `theme` 本サイトのカスタマイズされたスタイル / ツールです。一定の知識がある場合にのみ操作してください。

## メニューの調整

![](/images/develop/2-vitepress/02.webp)

`config.mjs` の `themeConfig.sidebar` で修正してください。

```
{
	text: "ここはカテゴリタイトル",
	items: [
        { text: "これはそのカテゴリの最初の記事です", link: "/私はmd ファイル名称" },
        { text: "これはそのカテゴリの2番目の記事です", link: "/私はmd ファイル名称" }
    ],
},
```

`themeConfig.sidebar.text` は存在しない場合があります（タイトルなし）。  
詳細については、本サイトの左側のメニューと実際のデータを比較してください。

## CSS カスタマイズ

シンプル CSS は `.vitepress/theme/styles/style.css` で直接追加・修正できます。

大幅な変更が必要な場合は、アーキテクチャに慣れた後、  
別途 css ファイルを作成してインポートしてください。
