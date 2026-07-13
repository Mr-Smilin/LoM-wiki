---
title: 指令
description: 戰你娘親
aside: true
outline: [2, 3]
sidebar: true
borderless: false
pageClass: guide-page
tags:
    - 指南
    - 教學
    - guide
    - 入坑
    - 開始
    - 對戰
    - 介面說明
    - 戰鬥介面
    - UI說明
    - battle_ui
    - 戰鬥指令
    - 指令
    - combat

---

## {{ $frontmatter.title }}

<img class='guide-img' src='/images/Engagement/BattleCommand.webp' alt='指令'>

### 指令對戰規則
<br>
對戰時會有 5 種指令，分別為：嘴攻、捅人、備揍、暗器、絕招。<br>
對方亦會使用此 5 種指令，以下所說的內容對雙方皆適用。<br>

### 兩方出招優先度判定
* **捅人**<br>
    優先度高於嘴攻<br>
    有機率失敗，但就算失敗也會打斷對方嘴攻<br>
* **暗器**<br>
  優先度高於嘴攻、捅人<br>
  有機率失敗，失敗的話對方嘴攻、捅人會繼續執行<br>
* **嘴攻**<br>
  優先度高於備揍、絕招<br>
  成功時會降低絕招命中率與大幅降低傷害<br>
  嘴攻互嘴無優先度差別，嘴力高者贏<br>
* **絕招**<br>
  優先度高於捅人、暗器<br>
  必定成功<br>

各項指令會依「性情」影響獲得氣量，詳細請看人物狀態一欄。<br>

---
### 嘴攻
<div style="margin-top: 5px;"></div>
成功可吸取對方氣（吸取範圍待確認），且會令對手依「修養」判定是否憤怒。<br>
憤怒情況下只可捅人，如氣不夠捅人當回合閒置，恢復15氣並造成虛脫。<br>
<img class='guide-img' src='/images/Engagement/Mad.webp' alt='憤怒'>
<img class='guide-img' src='/images/Engagement/Exhaustion.webp' alt='虛脫'><div style="margin-top: 5px;"></div>

* **修養影響憤怒機率：**<br>
　　瘋狂—暴躁—中庸—沉著—君子<br>
　　高機率————————低機率<br>

### 捅人
<div style="margin-top: 5px;"></div>
即一般攻擊，但成功後依「性情」可能造成膽怯。<br>
<img class='guide-img' src='/images/Engagement/Fearful.webp' alt='膽怯'><div style="margin-top: 5px;"></div>

* **性情影響膽怯機率：** <br>
　　懦夫—謹慎—中庸—勇敢—莽夫<br>
　　高機率————————不膽怯<br>

### 備揍
<div style="margin-top: 5px;"></div>
即防禦，減少傷害，且根據「性情」恢復氣量，詳細請看人物狀態一欄。<br>
採取備揍還是有機率迴避攻擊。<br>

### 暗器
<div style="margin-top: 5px;"></div>
暗器命中可額外造成血毒、神經毒的累積，詳細請看人物狀態一欄。<br>
<img class='guide-img' src='/images/Engagement/PoisonGauge.webp' alt='毒素累積'><div style="margin-top: 5px;"></div>
被暗器命中一方依「性情」可獲得附加狀態「迎難而上」或「提防暗器」1回合。<br>

* **迎難而上：捅人不會被暗器阻止行動**<br>
　　性情為「莽夫」「勇敢」，被暗器命中會獲得「迎難而上」<br>
　　擁有「憤怒」者，被暗器命中會獲得「迎難而上」<br>
* **提防暗器：有機率抵擋暗器攻擊，成功發動時視為暗器命中但傷害 0**<br>
　　性情為「中庸」「謹慎」「懦夫」，被暗器命中獲得「提防暗器 LV1-3」<br>
　　已擁有「蠻勇」技能，被暗器命中不會再擁有「提防暗器」。<br>

### 絕招
<div style="margin-top: 5px;"></div>
根據氣量、狀態會分別達到境界一、二、三。<br>
境界等級影響傷害、減傷、特殊技能施放、絕招對撞。<br>
<img class='guide-img' src='/images/Engagement/StateLevel.webp' alt='境界'><div style="margin-top: 5px;"></div>