---
title: 鍛冶場・煉丹房開発ロードマップ
description: 鍛冶場・煉丹房の開発ロードマップと各項目の数値
aside: true
outline: [2, 2]
sidebar: false
borderless: true
tags:
    - Forge Roadmap
    - forge roadmap
    - development
    - forge
    - pills
---

# {{ $frontmatter.title }}
- 開発ツリーの項目をクリックすると、その項目の数値表・入手方法・備考が開く。
- カードと線の色は開発の段階を表す：第1段階は緑、第2段階は橙、第3段階は赤。

<!-- 数値は .vitepress/theme/data/forge/<category>.js（繁中）、日本語の文字は data/forge/i18n/ja/ に置く -->

## 鍛冶場 - 装備 - 武器
<ForgeRoot category="weapon" />

## 鍛冶場 - 装備 - 防具
<ForgeRoot category="armor" />

## 鍛冶場 - 暗器 - 平射
<ForgeRoot category="dart" />

## 鍛冶場 - 暗器 - 投射
<ForgeRoot category="throw" />

## 鍛冶場 - 暗器 - 罠
<ForgeRoot category="trap" />

## 煉丹房 - 毒薬
<ForgeRoot category="poison" />

## 煉丹房 - 霊丹
<ForgeRoot category="medicine" />

## 備考
- 開発項目を取り消すと、投資済みの鍛造/煉丹ポイントの90%、銀両の90%が返却される。
- 項目を一度解放した後なら、取り消して開発し直す際に解放条件のレベルを再度満たす必要はない。ただし項目自体は正しく揃える必要があり、たとえば護心鏡は唐門制服が開発中であることを要する。
- 解放できるのは入手済みの項目だけで、未入手なら開発条件を満たしていても、将来入手した時点で自動的に解放されることはない。
- 本記事のデータは[活俠傳資料彙総](https://docs.google.com/spreadsheets/d/10wN_Kfusr5ipzXVzvNewsPHmn3HNCNUtqME26t94I4o)、[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)、[活俠傳事件分岐資料庫](https://mortal-web-database.vercel.app/)を参考に作成。
