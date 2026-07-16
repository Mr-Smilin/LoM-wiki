---
title: 人物状態
description: 人物状態
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
    - 人物状態
    - status
    - 戦闘スキル
    - 気量
    - 血毒
    - 神経毒
    - 毒

---

## {{ $frontmatter.title }}

<img class='guide-img' src='/images/engagement/status.webp' alt='人物状態'>
<br>
このエリアには、血量、気量、境界レベル、血毒、神経毒、対戦中に発生した弱体化状態が表示されます。<br>
以下の説明の内容は敵我双方に適用されます。<br>

<hr />

### 血毒、神経毒
暗器が命中すると、相手のこれら2つの毒性が増加し、各ターンの終わりに相手の抗毒・抗麻の値が減少します。<br>
毒性の蓄積状況に応じて3つの異なるステージがあります。<br>
マウスを蓄積バーの上に移動して値を確認できます。<br>
蓄積 50→LV1、100→LV2、150→LV3<br>

* **血毒：現在の血量に基づいて計算**<br>
　　LV1：毎ターン血の5％を消費<br>
　　LV2：毎ターン血の10％と気の3％を消費<br>
　　LV3：ターン終了後に血の50％を消費し、その後毒性は0にリセット<br>
* **神経毒：**<br>
　　LV1：弁舌、軽功-10％、20%確率で行動失敗<br>
　　LV2：弁舌、軽功、攻撃、防御-15％、40%確率で行動失敗<br>
　　LV3：100%確率で行動失敗、受けるダメージは3倍、その後毒性は0にリセット<br>
　　
<hr />

### 気量
すべての戦闘コマンドは気量を消費し、現在のターンで気量がコマンドを実行できない場合、そのターンは待機になります。<br>
毎ターン「性情」に基づいて気量が回復し、攻撃を受けても気が回復します。回避の成否は問いません。<br>
「性情」はまた各コマンドの気量消費、攻撃を受けた時の気量回復、絶招の気量消費に影響します。<br>
嘴攻の成功は相手の気量を奪います。気量を計算する際はこの点に特に注意してください。<br>

* **攻撃を受けた時の気量回復優先度判定（命中の成否に関係なく）**<br>
　　第1優先度：絶招。一方が絶招を使うと、双方は「攻撃を受けた時の気量回復」がなくなります<br>
　　第2優先度：備揍。備揍を出して攻撃を受けた場合、「備揍回気」を回復<br>
　　第3優先度：捅人・暗器を受けた場合。捅人または暗器を受けた時に異なる気量を回復<br> 

<hr />

### 性情が気量数値に影響
例：趙活(蛮勇)、現在の気量17；対石幫主(蛮勇)、現在の気量10<br>
　　趙活が捅人で石幫主の嘴攻に対抗し、捅人が命中。<br>
　　趙活(蛮勇)捅人-5、次のターン回復7、最終+2、次のターン気量は19。<br>
　　対石幫主(蛮勇)嘴攻-3、捅人を受ける+4、次のターン回復7、最終+8、次のターン気量は18。<br>
　　
<div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
    <table border="1" style="border-collapse: collapse; width: auto; text-align: center;">
        <thead>
            <tr>
                <th style="padding: 10px 15px;"></th>
                <th style="padding: 10px 15px;">蛮勇</th>
                <th style="padding: 10px 15px;">勇敢</th>
                <th style="padding: 10px 15px;">中庸</th>
                <th style="padding: 10px 15px;">慎重</th>
                <th style="padding: 10px 15px;">臆病</th>
            </tr>
        </thead>
        <tbody style="text-align: center;">
            <tr>
                <th style="padding: 8px 15px;">嘴攻</th>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
                <td style="text-align: center; padding: 8px 15px;">-1</td>
                <td style="text-align: center; padding: 8px 15px;">0</td>
                <td style="text-align: center; padding: 8px 15px;">2</td>
                <td style="text-align: center; padding: 8px 15px;">3</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">捅人</th>
                <td style="text-align: center; padding: 8px 15px;">-5</td>
                <td style="text-align: center; padding: 8px 15px;">-6</td>
                <td style="text-align: center; padding: 8px 15px;">-7</td>
                <td style="text-align: center; padding: 8px 15px;">-7</td>
                <td style="text-align: center; padding: 8px 15px;">-8</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">備揍</th>
                <td style="text-align: center; padding: 8px 15px;">-6</td>
                <td style="text-align: center; padding: 8px 15px;">-4</td>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
                <td style="text-align: center; padding: 8px 15px;">-2</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">暗器</th>
                <td style="text-align: center; padding: 8px 15px;">-10</td>
                <td style="text-align: center; padding: 8px 15px;">-7</td>
                <td style="text-align: center; padding: 8px 15px;">-7</td>
                <td style="text-align: center; padding: 8px 15px;">-5</td>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">絶招境界1<br>絶招境界2<br>絶招境界3</th>
                <td style="text-align: center; padding: 8px 15px;">-30<br>-50<br>-72</td>
                <td style="text-align: center; padding: 8px 15px;">-32<br>-48<br>-60</td>
                <td style="text-align: center; padding: 8px 15px;">-36<br>-50<br>-60</td>
                <td style="text-align: center; padding: 8px 15px;">-38<br>-50<br>-58</td>
                <td style="text-align: center; padding: 8px 15px;">-40<br>-52<br>-60</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">毎ターン気量回復</th>
                <td style="text-align: center; padding: 8px 15px;">+7</td>
                <td style="text-align: center; padding: 8px 15px;">+6</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
                <td style="text-align: center; padding: 8px 15px;">+4</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">捅人を受けた時の気量回復</th>
                <td style="text-align: center; padding: 8px 15px;">+4</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+0</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">暗器を受けた時の気量回復</th>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+0</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">備揍時の気量回復</th>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
            </tr>
        </tbody>
    </table>
</div>
