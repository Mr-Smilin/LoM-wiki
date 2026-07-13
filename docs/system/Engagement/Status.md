---
title: 人物狀態
description: 人物狀態
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
    - 人物狀態
    - status
    - 戰鬥技能
    - 氣量
    - 血毒
    - 神經毒
    - 毒

---

## {{ $frontmatter.title }}

<img class='guide-img' src='/images/Engagement/Status.webp' alt='人物狀態'>
<br>
此區塊會顯示血量、氣量、境界等級、血毒、神經毒、對戰中產生的削弱狀態。<br>
以下說明的內容對敵我雙方皆適用。<br>

<hr />

### 血毒、神經毒
暗器命中對方會增加此兩種毒性，且於每回合結束時減去對手的抗毒抗麻數值，<br>
會根據毒性累積的情況而有三種不同的階段，<br>
滑鼠移至累積槽可確認數值。<br>
累積 50→LV1、100→LV2、150→LV3<br>

* **血毒：根據當下血量計算**<br>
　　LV1：每回合損耗5％的血<br>
　　LV2：每回合損耗10％的血及3％的氣<br>
　　LV3：回合結束後損耗50％的血，之後毒性歸 0<br>
* **神經毒：**<br>
　　LV1：嘴力、輕功-10％，20%機率行動失敗<br>
　　LV2：嘴力、輕功、攻擊、防禦-15％，40%機率行動失敗<br>
　　LV3：100%機率行動失敗，受到傷害為3倍，之後毒性歸 0<br>
　　
<hr />

### 氣量
所有戰鬥指令皆需耗費氣量，如當回合氣量無法執行任何指令，則當回合閒置。<br>
每回合依據「性情」回復氣量，且被攻擊亦會回復氣，不論迴避與否。<br>
「性情」亦會影響各指令消耗氣量，被攻擊回復氣量，絕招消耗氣量。<br>
嘴攻成功會奪走對方氣量，計算氣量時請特別注意此點。<br>

* **受攻擊回氣優先度判定（不受命中與否影響）**<br>
　　第一優先：絕招，任一方使用絕招，雙方都不會有「被攻擊回氣」<br>
　　第二優先：備揍，使出備揍且受到攻擊，恢復「備揍回氣」<br>
　　第三優先：被捅人、被暗器，根據被捅人或被暗器回復不同氣量<br> 

<hr />

### 性情影響氣量數值
例：趙活(莽夫)，當下氣量17；對石幫主(莽夫)，當下氣量10<br>
　　趙活捅人對石幫主嘴攻，且捅人命中。<br>
　　趙活(莽夫)捅人-5，下回合回復7，最終+2，下回合氣量為19。<br>
　　對石幫主(莽夫)嘴攻-3，被捅+4，下回合回復7，最終+8，下回合氣量為18。<br>
　　
<div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
    <table border="1" style="border-collapse: collapse; width: auto; text-align: center;">
        <thead>
            <tr>
                <th style="padding: 10px 15px;"></th>
                <th style="padding: 10px 15px;">莽夫</th>
                <th style="padding: 10px 15px;">勇敢</th>
                <th style="padding: 10px 15px;">中庸</th>
                <th style="padding: 10px 15px;">謹慎</th>
                <th style="padding: 10px 15px;">懦夫</th>
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
                <th style="padding: 8px 15px;">絕招境界一<br>絕招境界二<br>絕招境界三</th>
                <td style="text-align: center; padding: 8px 15px;">-30<br>-50<br>-72</td>
                <td style="text-align: center; padding: 8px 15px;">-32<br>-48<br>-60</td>
                <td style="text-align: center; padding: 8px 15px;">-36<br>-50<br>-60</td>
                <td style="text-align: center; padding: 8px 15px;">-38<br>-50<br>-58</td>
                <td style="text-align: center; padding: 8px 15px;">-40<br>-52<br>-60</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">每回合回氣</th>
                <td style="text-align: center; padding: 8px 15px;">+7</td>
                <td style="text-align: center; padding: 8px 15px;">+6</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
                <td style="text-align: center; padding: 8px 15px;">+4</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">被捅回氣</th>
                <td style="text-align: center; padding: 8px 15px;">+4</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+0</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">被暗器回氣</th>
                <td style="text-align: center; padding: 8px 15px;">-3</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+0</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
            </tr>
            <tr>
                <th style="padding: 8px 15px;">備揍回氣</th>
                <td style="text-align: center; padding: 8px 15px;">+1</td>
                <td style="text-align: center; padding: 8px 15px;">+2</td>
                <td style="text-align: center; padding: 8px 15px;">+3</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
                <td style="text-align: center; padding: 8px 15px;">+5</td>
            </tr>
        </tbody>
    </table>
</div>
