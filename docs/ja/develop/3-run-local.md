---
title: ローカル実行 (上級)
description: 本プロジェクトは `node` バージョン `18.18.1` を使用しています。編集権限がある場合は直接 `pull` プロジェクトをしてください。
tags:
    - dev
    - develop
    - developer
    - 開発
    - 協作
    - npm
---

# ローカル実行 (上級)

::: tip 💡 注意
ここでは wiki 編集に関連する基礎知識を提供しています。  
ゲームデータの検索についてはその他のページをご覧ください。
:::

::: warning 💡 注意
このドキュメントは基本的なプログラミング能力がある開発者向けです。  
基本的な概念の一部は省略されているため、ご注意ください。
:::

## 上級者向け説明

本プロジェクトは `node` バージョン `18.18.1` を使用しています。  
編集権限がある場合は直接 `pull` プロジェクトをしてください。  
PR を送信する場合は先に `fork` してください。

`clone` してローカルに配置した後、以下のコマンドを実行してください。

```
npm install
npm run build
npm run dev
```

うまくいけば、`localhost:5173` でウェブサイトが表示され、編集できるようになります。

以降は `npm run dev` を実行するだけです。

::: warning 💡 注意
協力プロジェクトの場合、ファイルを `push` する前に必ず `pull` を実行して、より新しいバージョンが存在するかどうかを確認してください。
:::

## 初心者向け説明

(1) 右上のアイコンをクリックして github ページに入ります  
![](/images/develop/3-run-local/菜雞預覽教學01.webp)  
(2) ソースコードをコンピュータにダウンロードして、どこかに解凍します  
![](/images/develop/3-run-local/菜雞預覽教學02.webp)  
(3) [NPM](https://nodejs.org/dist/v18.18.1/node-v18.18.1-x64.msi) と [GIT](https://git-scm.com/downloads) をダウンロードしてインストールします  
(4) ソースコードフォルダのパスで CMD を入力し、そのパスのコマンドプロンプトが表示されます  
![](/images/develop/3-run-local/菜雞預覽教學03.webp)  
(5) 順番に npm install と npm run dev を入力します  
![](/images/develop/3-run-local/菜雞預覽教學04.webp)  
(6) ブラウザのアドレスバーに `localhost:5173/LoM-wiki/` を入力します  
![](/images/develop/3-run-local/菜雞預覽教學05.webp)  
(7) 上記の手順が完了すると、保存後にすべての変更をリアルタイムでプレビューできます。
