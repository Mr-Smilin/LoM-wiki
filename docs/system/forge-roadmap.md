---
title: 鍛冶場、煉丹房開發路線圖
description: 鍛冶場、煉丹房開發路線圖與各項目數值
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
- 點開發樹上的項目，可展開該項目的數值表、獲得方式與備註。
- 卡片與連線顏色代表開發階層：第一階綠色、第二階橘色、第三階紅色。

<!-- 資料在 .vitepress/theme/data/forge/<category>.js，新增、修改項目只要改資料檔（檔案開頭有說明） -->

## 鍛冶場 - 裝備 - 武器
<ForgeRoot category="weapon" />

## 鍛冶場 - 裝備 - 防具
<ForgeRoot category="armor" />

## 鍛冶場 - 暗器 - 平射
<ForgeRoot category="dart" />

## 鍛冶場 - 暗器 - 拋射
<ForgeRoot category="throw" />

## 鍛冶場 - 暗器 - 陷阱
<ForgeRoot category="trap" />

## 煉丹房 - 毒藥
<ForgeRoot category="poison" />

## 煉丹房 - 靈丹
<ForgeRoot category="medicine" />

## 備註
- 取消開發項目時，退回已投資的鍛造／煉丹點數 90%、銀兩 90%。
- 項目解鎖後，若取消並再回頭開發時，不需再滿足解鎖條件的等級。但項目需正確，如護心鏡仍需唐門制服處於開發中。
- 已獲得的項目才能解鎖，若未獲得，即便滿足開發條件，也不會在未來獲得時直接解鎖。
- 本條目資料參考[活俠傳資料彙總](https://docs.google.com/spreadsheets/d/10wN_Kfusr5ipzXVzvNewsPHmn3HNCNUtqME26t94I4o)、[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)、[活俠傳事件分岐資料庫](https://mortal-web-database.vercel.app/)撰寫。
