---
title: 対戦コマンド
description: 混戦
aside: true
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - ガイド
    - guide
    - 入門
    - スタート
    - 対戦
    - インターフェース説明
    - 戦闘インターフェース
    - UI説明
    - battle_ui
    - 戦闘コマンド
    - コマンド
    - combat

---

## {{ $frontmatter.title }}

<img class='guide-img' src='/images/engagement/battle-commands.webp' alt='戦闘コマンド'>

### コマンド対戦ルール
<br>
対戦時には5種類のコマンドがあります：口功 (嘴攻)、攻撃 (捅人)、防御 (備揍)、暗器、絶招。<br>
相手も同じ5種類のコマンドを使用し、以下の内容は双方に適用されます。<br>

### 両者の出招優先度判定
* **攻撃**<br>
    優先度が口功より高い<br>
    失敗する可能性がありますが、失敗してもスキを突いて相手の口功を中断します<br>
* **暗器**<br>
  優先度が口功、攻撃より高い<br>
  失敗する可能性があり、失敗した場合は相手の口功、攻撃は継続します<br>
* **口功**<br>
  優先度が防御、絶招より高い<br>
  成功時は絶招の命中率を低下させ、ダメージを大幅に低下させます<br>
  口功同士の場合は優先度の差はなく、弁舌の高い方が勝ちます<br>
* **絶招**<br>
  優先度が攻撃、暗器より高い<br>
  口功以外には必ず成功します<br>

各コマンドは「性情」に応じて気量を獲得し、詳細は人物状態の欄を参照してください。<br>

---
### 口功
<div style="margin-top: 5px;"></div>
成功時に相手の気を吸収でき（吸収範囲は不明）、また相手が「修養」に応じて怒るかどうかを判定します。<br>
怒った状態では攻撃のみが使用でき、気が不足して攻撃が使えない場合、ターンは待機状態になり、15気を回復して虚脱状態になります。<br>
<img class='guide-img' src='/images/engagement/mad.webp' alt='怒り'>
<img class='guide-img' src='/images/engagement/exhaustion.webp' alt='虚脱'><div style="margin-top: 5px;"></div>

* **修養が怒りの確率に影響：**<br>
　　狂気—暴躁—中庸—沈着—君子<br>
　　高確率————————低確率<br>

### 攻撃
<div style="margin-top: 5px;"></div>
通常の攻撃ですが、成功後は「性情」に応じて恐怖を引き起こす可能性があります。<br>
<img class='guide-img' src='/images/engagement/fearful.webp' alt='恐怖'><div style="margin-top: 5px;"></div>

* **性情が恐怖の確率に影響：** <br>
　　臆病—慎重—中庸—勇敢—蛮勇<br>
　　高確率————————恐怖なし<br>

### 防御
<div style="margin-top: 5px;"></div>
防御することでダメージを減らし、「性情」に応じて気量を回復します。詳細は人物状態の欄を参照してください。<br>
防御を選択しても攻撃を回避する確率があります。<br>

### 暗器
<div style="margin-top: 5px;"></div>
暗器が命中すると、毒血、神経毒の蓄積を追加で引き起こします。詳細は人物状態の欄を参照してください。<br>
<img class='guide-img' src='/images/engagement/poison-gauge.webp' alt='毒素蓄積'><div style="margin-top: 5px;"></div>
暗器に命中した側は「性情」に応じて、1ターン「挑戦姿勢」または「暗器回避」の追加状態を得ます。<br>

* **挑戦姿勢：攻撃が暗器により行動を阻止されません**<br>
　　性情が「蛮勇」「勇敢」の場合、暗器命中時に「挑戦姿勢」を獲得<br>
　　「怒り」を持つ者が暗器命中時に「挑戦姿勢」を獲得<br>
* **暗器回避：暗器攻撃を抵御する可能性があり、成功時は暗器命中だがダメージは0と見なされます**<br>
　　性情が「中庸」「慎重」「臆病」の場合、暗器命中時に「暗器回避 LV1-3」を獲得<br>
　　すでに「蛮勇」スキルを持っている場合、暗器命中時に「暗器回避」を持ちません。<br>

### 絶招
<div style="margin-top: 5px;"></div>
気量と状態に応じて、それぞれ境界1、2、3に達します。<br>
境界レベルはダメージ、被ダメージ軽減、スキル発動、絶招の衝突に影響します。<br>
<img class='guide-img' src='/images/engagement/state-level.webp' alt='境界'><div style="margin-top: 5px;"></div>
