---
title: 隠しパラメータ一覧 (隱藏參數列表)
description: 隠しパラメータ一覧
aside: false
outline: [2, 3]
sidebar: false
borderless: true
tags:
    - parameters
    - system
---

# {{ $frontmatter.title }}

## 概要 {#簡介}
- ゲーム中には、ゲーム画面から直接確認できないパラメータが数多くある。
- この表では、その中でも特定のイベントに限らず汎用的に使われ、かつ値が単純な「はい/いいえ」ではないものを挙げ、読者の参照用とする。
- 特定のイベントに関わるパラメータの多くはイベントフラグ🚩であるため、該当するイベントの記事を参照。

## パラメータ一覧 {#参数列表}
<Table>
  <tr>
    <th style="text-align: center">名称</th>
    <th style="text-align: center">意味</th>
    <th style="text-align: center">作用</th>
    <th style="text-align: center">値の増減方法</th>
    <th style="text-align: center">備考</th>
  </tr>

  <tr>
    <td style="text-align: center" id="全武學點數">
      累計武学点数
    </td>
    <td>
      これまでに獲得した武学点数の合計
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: <MarkdownWrapper>[小師妹の比武招親 後半](/ja/event/simple/3-05-1-師妹招親後半)</MarkdownWrapper>での観戦時の講評</li>
      <li><MarkdownWrapper>[1回の修練で消費できる点数の上限が増加](https://www.pttweb.cc/bbs/C_Chat/M.1722466578.A.B4D)</MarkdownWrapper>(最高25、累計武学335で到達)</li>
      <li><MarkdownWrapper>[対決での気力の上限が増加](https://www.pttweb.cc/bbs/C_Chat/M.1785185363.A.B41)</MarkdownWrapper>(最高85、累計武学350で到達)</li>
      <li>対決で相手の意図を看破する確率が上がる可能性がある(要確認)</li>
    </td>
    <td>
      <li>ゲーム中で武学点数を獲得できるあらゆる手段</li>
      <li>天命継承システムでの武学への加点</li>
    </td>
    <td>
      <li>値は1回の消費上限からおおよそ推測できる</li>
    </td>
  </tr>

  <tr>
    <td style="text-align: center" id="全煉丹點數">
      累計煉丹点数
    </td>
    <td>
      これまでに獲得した煉丹点数の合計
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: 大師兄の治療(<MarkdownWrapper>[飛侠の帰還](/ja/event/detailed_description/4-02-2-飛俠歸來)</MarkdownWrapper>参照)の発生</li>
      <li>項目の解放に影響する。例: 唐門歯粉(<MarkdownWrapper>[門派施設一覧](/ja/system/facility)</MarkdownWrapper>参照)の開発</li>
      <li><MarkdownWrapper>[1回の煉丹で消費できる点数の上限が増加](https://www.pttweb.cc/bbs/C_Chat/M.1722466578.A.B4D)</MarkdownWrapper>(最高25、累計煉丹486で到達)</li>
    </td>
    <td>
      <li>ゲーム中で煉丹点数を獲得できるあらゆる手段</li>
      <li>天命継承システムでの煉丹への加点</li>
    </td>
    <td>
      <li>値は1回の消費上限からおおよそ推測できる</li>
    </td>
  </tr>

  <tr>
    <td style="text-align: center" id="全鍛造點數">
      累計鍛造点数
    </td>
    <td>
      これまでに獲得した鍛造点数の合計
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: <MarkdownWrapper>東西武林盟の会戦後に夏侯蘭の傘を修理する</MarkdownWrapper></li>
      <li>項目の解放に影響する。例: 変重石錘(<MarkdownWrapper>[門派施設一覧](/ja/system/facility)</MarkdownWrapper>参照)の開発</li>
      <li><MarkdownWrapper>[1回の鍛造で消費できる点数の上限が増加](https://www.pttweb.cc/bbs/C_Chat/M.1722466578.A.B4D)</MarkdownWrapper>(最高25、累計鍛造495で到達)</li>
    </td>
    <td>
      <li>ゲーム中で鍛造点数を獲得できるあらゆる手段</li>
      <li>天命継承システムでの鍛造への加点</li>
    </td>
    <td>
      <li>値は1回の消費上限からおおよそ推測できる</li>
    </td>
  </tr>

  <tr>
    <td style="text-align: center" id="廚藝">
      料理
    </td>
    <td>
      調理の腕前
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: <MarkdownWrapper>[この投稿が一例](https://www.pttweb.cc/bbs/C_Chat/M.1722353758.A.CBE)</MarkdownWrapper></li>
      <li><MarkdownWrapper>[養成コマンド](/ja/system/training/)</MarkdownWrapper>の厨房のランダムイベントの確率に影響する</li>
    </td>
    <td>
      <li>主に<MarkdownWrapper>[養成コマンド](/ja/system/training/)</MarkdownWrapper>の厨房の作業コマンドで増加する</li>
      <li>他のコマンドの調理イベントでも増加しうる。例: 後山修練での魚焼き</li>
      <li>シナリオで入手できる。例: <MarkdownWrapper>[唐門の財務改善](/ja/event/simple/1-08-1-唐門財務改善)</MarkdownWrapper>での調理器具の入手</li>
    </td>
    <td></td>
  </tr>

  <tr>
    <td style="text-align: center" id="變心">
      心変わり
    </td>
    <td>
      想い人に対する不誠実さの度合い
    </td>
    <td>
      <li>10点以上で心変わりの夢が発生し、夢の後は0に戻る</li>
      <li>シナリオ分岐に影響する。例: <MarkdownWrapper>[武林大会へ向かう](/ja/event/simple/3-09-1-前往武林大會)</MarkdownWrapper>時の会話</li>
    </td>
    <td>
      <li>主にシナリオで増減する</li>
      <li>一部の<MarkdownWrapper>[養成コマンド](/ja/system/training/)</MarkdownWrapper>で増減する。例: 男弟子房での折り紙</li>
    </td>
    <td>
      <li>
          心変わり点をいくつ増やすと心変わりの<br>
          夢が発生するかで、現在の値を推測できる(事前にセーブが必要)
      </li>
    </td>
  </tr>

  <tr>
    <td style="text-align: center" id="變心次數">
      心変わりの回数
    </td>
    <td>
      想い人を変更した回数
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: 大師兄からの評価(<MarkdownWrapper>[臥雲崗見物](/ja/event/simple/3-01-3-圍觀臥雲崗)</MarkdownWrapper>参照)</li>
    </td>
    <td>
      <li>心変わりの夢の中で想い人を変更すると増加する</li>
    </td>
    <td></td>
  </tr>

  <tr>
    <td style="text-align: center" id="門派好感">
      門派好感
    </td>
    <td>
      各大勢力への好感度
    </td>
    <td>
      <li>シナリオ分岐に影響する。例: <MarkdownWrapper>[武林大会編](/ja/event/detailed_description/3-08-2-武林大會)</MarkdownWrapper>での各派の投票における天命補正値</li>
    </td>
    <td>
      <li>シナリオで増減する。例: <MarkdownWrapper>[武林大会へ向かう](/ja/event/simple/3-09-1-前往武林大會)</MarkdownWrapper>時の泥教の待ち伏せイベント</li>
      <li><MarkdownWrapper>[養成コマンド](/ja/system/training/)</MarkdownWrapper>で増減する。例: 唐門留学生のイベント</li>
    </td>
    <td></td>
  </tr>

</table>

## 備考 {#備註}
- 値は存在するが現時点では作用のない隠しパラメータ: 娘化、足技、奇門、軟兵器、長物、内功など。
