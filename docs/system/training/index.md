---
aside: false
borderless: true
title: 養成指令
tags:
  - develop
  - 養成
  - 事件
---

# {{ $frontmatter.title }}
<br>
本表列出大部分的養成指令隨機事件，建議透過搜尋功能篩選，撰寫原則請見備註。<br>


## 事件列表

<BTable
	:stickyHeader="true"
	:tags="[
{
text: '唐家大院',
},
{
text: '大門',
},
{
text: '崆峒',
},
{
text: '離家出走',
},
{
text: '青城',
},
{
text: '江陵圍城',
},
{
text: '雪山',
},
{
text: '錦香宮',
},
{
text: '道德+',
},
{
text: '葉雲裳好感+',
},
{
text: '六大派好感',
},
]"
>
	<tr>
		<td :unsortable="true" style="text-align: center">地點</td>
		<td :unsortable="true" style="text-align: center">指令</td>
		<td :unsortable="true" style="text-align: center">事件</td>
		<td :unsortable="true" style="text-align: center">貢獻</td>
		<td :unsortable="true" style="text-align: center">心相</td>
		<td :unsortable="true" style="text-align: center">
			<MoodIcon :mood="`normal`" /><br>            
            心相:<br>
            33~64<br>
            基礎效果
		</td>
		<td :unsortable="true" style="text-align: center">
            <MoodIcon :mood="`high`" /><br>            
            心相:<br>
            65~100<br>
            額外效果
		</td>
		<td :unsortable="true" style="text-align: center">
			<MoodIcon :mood="`bad`" /><br>            
            心相:<br>
            0~32<br>
            額外效果
		</td>
        <td :unsortable="true" style="text-align: center">機率權重</td>
		<td :unsortable="true" style="text-align: center">必要條件</td>
        <td :unsortable="true" style="text-align: center">備註</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>工作輕鬆</td>
		<td>11</td>
		<td>-12</td>
		<td>
            • 修養+1、處世-1、向心-1<br>
            • 非🚩無可救藥線: 唐中翎好感+1<br>
            • 🚩無可救藥線: 唐陞好感+1<br>            
        </td>
		<td>修養+1<br>處世+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>課外書籍</td>
		<td>11</td>
		<td>-12</td>
		<td>學問+2、處世-1、向心-1</td>
		<td>武學+2<br>鍛造+2<br>煉丹+2</td>
		<td>學問-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>	
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>打壞家具</td>
		<td>11</td>
		<td>-12</td>
		<td>
            • 處世-1、體力+1、武學+2、向心-2<br>
            • 非🚩無可救藥線: 唐中翎好感-1<br>
            • 🚩無可救藥線: 唐陞好感-1<br> 
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>偷懶馬虎</td>
		<td>11</td>
		<td>+18</td>
		<td>
            • 嘴力+1、處世+1、性情+1、道德-1、向心-1<br>
            • 非🚩無可救藥線: 唐中翎好感+2<br>
            • 🚩無可救藥線: 唐陞好感+2<br>            
        </td>
		<td>-</td>
		<td>嘴力-1</td>
		<td>
            • 基礎: 50<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>	
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>引發火災</td>
		<td>11</td>
		<td>-32</td>
		<td>
            • 銀兩-1000、處世+1、向心-2、命運+1<br>
            • 非🚩無可救藥線: 唐中翎好感-3<br>
            • 🚩無可救藥線: 唐陞好感-3<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>福韞論佛</td>
		<td>
            11<br>
            +5<br>
        </td>
		<td>-12</td>
		<td>
			• 學問+1<br>
            • 福韞好感+1、唐中翎好感+1<br>
		</td>
		<td>-</td>
		<td>學問-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩福韞在唐門<br>
            • 🚩掌門在唐門<br>
        </td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>
            三師兄與掌<br>
            門談論古今<br>
        </td>
		<td>11</td>
		<td>-12</td>
		<td>
			• 處世±2、性情±2、向心-1、學問+2、嘴力-1<br>
            • 唐中翎好感+1、唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>學問-1</td>
		<td>基礎: 25</td>
		<td>
            • 非🚩三師兄為代掌門<br>
            • 🚩掌門在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>一根甘蔗</td>
		<td>11</td>
		<td>+3</td>
		<td>
            • 向心-1、修養+1、處世-1、銀兩-50<br>
            • 唐惟元好感+1<br>
			• 獲得<MarkdownWrapper>[「甘蔗」](/system/items/)</MarkdownWrapper>+1
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩四師兄在唐門<br>
            • 🚩掌門在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>
            三師兄與你<br>
            談論古今<br>
        </td>
		<td>11</td>
		<td>-12</td>
		<td>
			• 處世±2、性情±2、向心-2、學問+2、嘴力-1<br>
            • 唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>學問-1</td>
		<td>基礎: 25</td>
		<td>
            • 🚩三師兄為代掌門<br>
            • 學問≥50<br>
        </td>
		<td>-</td>
	</tr>    
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>打坐療傷</td>
		<td>-</td>
		<td>-</td>
		<td>
            (本項非獨立事件，而是冥想事件的追加階段，見必要條件)<br>
            • 心相≥70: 🚩內傷痊癒+3<br>
            • 70＞心相≥30: 🚩內傷痊癒+2<br>
            • 心相＜30: 🚩內傷痊癒+1<br>
            • 若🚩內傷痊癒≥10: 解除「經脈閉塞」及「失魂落魄」
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 若有技能「經脈閉塞」或「失魂落魄」<br>
            • 且觸發的冥想事件有「打坐痊癒」效果<br>
            • 則進入此階段進行判斷<br>
        </td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>有點長進</td>
		<td>-</td>
		<td>-8</td>
		<td>
            • 修養+1、嘴力-1、內力+1<br>
            • 「打坐療傷」(見上方事件)<br>
        </td>
		<td>內力+1</td>
		<td>內力-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>清心靜坐</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 內力+2、嘴力-1、體力-1、抗毒+2、抗麻+2<br>
			• 修養+1、性情±1、處世±1<br>
            • 若🚩掌門在唐門: 唐中翎好感+1<br>
            • 「打坐療傷」(見上方事件)<br>
		</td>
		<td>-</td>
		<td>內力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>心浮氣躁</td>
		<td>-</td>
		<td>-20</td>
		<td>
            修養-1、處世-1、刀劍+1、鍛造+2、向心-5
        </td>
		<td>-</td>
		<td>刀劍-1</td>
		<td>
            • 基礎: 25<br>
            • 修養≤50: +5<br>
            • 修養≤25: +10<br>
            • 心相≤30: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>師弟玩火</td>
		<td>-</td>
		<td>-60</td>
		<td>
            內力-1、體力-1、向心-5、命運+1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>頗有感悟</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 修養+2、嘴力-2、內力+1、拳掌+1<br>
            • 性情±1、處世±1<br>
            • 「打坐療傷」(見上方事件)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎:25<br>
            • 心相≥70: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>	
	<tr>
		<td>唐家大院</td>
		<td>正心堂<br>冥想</td>
		<td>回想初心</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 修養+2、道德+2、嘴力-1<br>
            • 性情±2、處世±2<br>
            • 「打坐療傷」(見上方事件)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>    
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            接續挑柴隨機事件
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴<br>優先</td>
		<td>龍湘練劍</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 👉 讓她靜一靜: 接續挑柴隨機事件<br>
            • 👉 我來告訴你，用劍: 🆚對決龍湘<br>
            • 勝：武學+6，敗：武學+2、龍湘好感+1<br>
            • 若初次觸發，且曾觸發<MarkdownWrapper>[龍湘夜遊](/event/simple/3-09-3-龍湘夜遊)</MarkdownWrapper>: 接龍湘心事<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩和龍湘結緣<br>
            • 最早第三年十一月中旬<br>            
        </td>
		<td>
			• 龍湘心事為結緣龍湘必要事件<br>
            • <text style="color : red">待撰寫</text>: 龍湘心事事件<br>
		</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>穩健幹活</td>
		<td>13</td>
		<td>-20</td>
		<td>性情+1、體力+1、輕功+1</td>
		<td>輕功+1</td>
		<td>體力-1<br>輕功-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>扭傷腳</td>
		<td>13</td>
		<td>-31</td>
		<td>體力+1、輕功+1、性情+1</td>
		<td>-</td>
		<td>體力-1</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>大難不死</td>
		<td>13</td>
		<td>-60</td>
		<td>性情+1、命運+1、銀兩-1000</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>踏崩岩壁</td>
		<td>-</td>
		<td>-</td>
		<td>進入<MarkdownWrapper>[生死簿08:《我在唐門谷底》](/event/badends/#生死簿-No.8)</MarkdownWrapper></td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +30<br>
            • 心相≤10: +50<br>
            • 輕功≥50: -50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>抄捷徑</td>
		<td>13</td>
		<td>-5</td>
		<td>輕功+2、性情+1</td>
		<td>-</td>
		<td>輕功-1</td>
		<td>
            • 基礎: 25<br>
            • 輕功≥20: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>無敵號與<br>一團廢紙</td>
		<td>13<br>+10</td>
		<td>-20</td>
		<td>
            • 體力+1、武學+2<br>
            • 葉雲舟好感+1<br>
            • 觸發<MarkdownWrapper>[葉雲裳衝擊](/event/simple/1-08-1-葉雲裳衝擊)</MarkdownWrapper>事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩葉雲舟在唐門<br>
            • 🚩小師妹在唐門<br>
            • 已觸發<MarkdownWrapper>[師妹交友](/event/simple/1-08-2-師妹交友)</MarkdownWrapper><br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>
            • 可拿<MarkdownWrapper>[生死簿08:《我在唐門谷底》](/event/badends/#生死簿-No.8)</MarkdownWrapper><br>
		</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>利用陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 體力+1<br>
            • 李富貴好感+1<br>
            • 若🚩四師兄在唐門: 唐惟元好感+1<br>
            • 若🚩葉雲裳在唐門: 葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 曾🚩鬧市遇李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>誤踩陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
			👉包庇葉雲裳: 道德-1、處世-1、李富貴好感-2、葉雲裳好感+1<br>
			👉跟葉雲舟告狀: 道德+1、處世+1、李富貴好感+2、葉雲裳好感-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 曾🚩鬧市遇李富貴<br>
            • 🚩葉雲舟在唐門<br>
            • 🚩葉雲裳在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>挖礦</td>
		<td>13</td>
		<td>-20</td>
		<td>• 銀兩+500<br>
            • 處世+1、道德-1<br>
            • 李富貴好感+1<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 曾🚩鬧市遇李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>維修棧道</td>
		<td>13<br>+5</td>
		<td>-20</td>
		<td>
            • 體力+1、鍛造+5<br>
            • 唐陞好感+1</td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>登崖眺望</td>
		<td>-</td>
		<td>-20</td>
		<td>
			觸發<MarkdownWrapper>[後山推人](/event/simple/1-04-1-後山推人)</MarkdownWrapper>事件<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 第一年五月下旬以前<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>
            • 可拿<MarkdownWrapper>[生死簿02:《摔死》](/event/badends/#生死簿-No.2)</MarkdownWrapper><br>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>採藥</td>
		<td>13<br>+10</td>
		<td>-10</td>
		<td>
            • 煉丹+3<br>
            • 葉雲舟好感+1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>🚩葉雲舟在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>後山<br>挑柴</td>
		<td>路人俠</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 輕功+1<br>
            • 觸發🆚對決路人俠:<br>
            • 落敗: 進入<MarkdownWrapper>[生死簿09:《搞失蹤》](/event/badends/#生死簿-No.9)</MarkdownWrapper><br>
            • 獲勝: 👉放生: 道德+2、名聲+1。👉推下山谷: 道德-2。<br>
        </td>
		<td>-</td>
		<td>輕功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            • 路人俠是誰取決於遊戲時間:<br>
            • 第一年六月下以前<br>
            • 第一年十二月下以前<br>
            • 第二年六月下以前<br>
            • 第二年十二月下以前<br>
            • 第三年六月下以前<br>
            • 第四年六月下以前<br>
        </td>
	</tr>    
	<tr>
		<td>唐家大院</td>
		<td>後山<br>練武<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>接續練武隨機事件</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>練武<br>優先</td>
		<td>小師妹烤魚</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩葉雲裳在唐門:<br>
            👉 玩水時間: 心相+20、廚藝+1，唐默鈴好感+2、葉雲裳好感+2，心上人檢定:<br>
            • 心上人非葉雲裳且心上人非唐默鈴: 變心+3<br>
            👉 不能打亂計畫: 接續練武隨機事件<br>
            <br>
            🚩葉雲裳不在唐門:<br>
            👉 捉魚時間: 心相+20、廚藝+1、唐默鈴好感+2，心上人檢定:<br>
            • 心上人非唐默鈴: 變心+3<br>
            👉 不能打亂計畫: 檢定🚩和唐默鈴結緣: <br>
            • 沒有結緣: 接續練武隨機事件<br>
            • 有結緣: 武學+3、心相+5、唐默鈴好感+1，開啟修練介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩小師妹在唐門<br>
            • 無🚩關閉後山烤魚(<MarkdownWrapper>[後山安葬](/event/simple/3-01-3-後山安葬)</MarkdownWrapper>到<MarkdownWrapper>[一波暫平](/event/simple/3-02-1-一波暫平)</MarkdownWrapper>)<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>練武</td>
		<td>正常</td>
		<td>-</td>
		<td>-20</td>
		<td>武學+5，開啟修練介面</td>
		<td>武學+3</td>
		<td>-</td>
		<td>基礎: 100</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>後山<br>練武</td>
		<td>獨自烤魚</td>
		<td>-</td>
		<td>-5</td>
		<td>
            廚藝+1、變心-1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩小師妹不在唐門<br>
            • 心上人為唐默鈴<br>
            • 心相≤40<br>
        </td>
		<td>-</td>
	</tr>
     <tr>
		<td>唐家大院</td>
		<td>後山<br>練武</td>
		<td>小梅亂入</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 心上人為虞小梅: 虞小梅好感≥45，心相+30<br>
            • 心上人非虞小梅: 唐布衣好感＜40，對話差分<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 55</td>
		<td>
            • 🚩虞小梅在唐門<br>
            • 最晚第二年十二月下旬<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr>    
    <tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 無優先事件，接續打鐵隨機事件<br>
            • 隨機事件後，開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            無<MarkdownWrapper>[「兵器毀損」](/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>狀態
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵<br>優先</td>
		<td>修復兵器</td>
		<td>-</td>
		<td>-</td>
		<td>
            消除<MarkdownWrapper>[「兵器毀損」](/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>狀態。<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            有<MarkdownWrapper>[「兵器毀損」](/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>狀態
        </td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>滿意成果</td>
		<td>10</td>
		<td>-16</td>
		<td>鍛造+5</td>
		<td>鍛造+3</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>頭暈腦脹</td>
		<td>10</td>
		<td>-25</td>
		<td>
			• 修養-1、鍛造+5、名聲+1<br>
            • 若🚩四師兄在唐門: 銀兩+1000、唐惟元好感+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>心有雜念</td>
		<td>10</td>
		<td>-66</td>
		<td>鍛造+5、命運+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 處世≥60: +5<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>品質良好</td>
		<td>10</td>
		<td>-16</td>
		<td>鍛造+8、刀劍+1、修養-1</td>
		<td>-</td>
		<td>刀劍-1</td>
		<td>
            • 基礎: 25<br>
            • 心相≥50: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
    </tr>
	<tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>留學生想<br>偷窺秘方</td>
		<td>10</td>
		<td>-26</td>
		<td>
            • 修養-1、處世+1<br>
            • 🚩留學糾紛+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≤30: +20<br>
        </td>
		<td>
            • 最早第二年二月下旬<br>
            • 最晚第二年八月下旬<br>
            • 🚩留學糾紛≥0<br>
        </td>
		<td>
            若🚩留學糾紛≥5: <br>
            • 觸發<MarkdownWrapper>[留學生衝突](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>事件<br>
            • 事件後設置🚩留學糾紛=-1<br>
        </td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>鍛治場<br>打鐵</td>
		<td>留學生尊重</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 名聲+1、鍛造+5、銀兩+1000<br>
            • 六大派好感: 各有33%機率會+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最早第二年二月下旬<br>
            • 最晚第二年八月下旬<br>
            • 🚩<MarkdownWrapper>[留學糾紛=-1](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper><br>
        </td>
		<td>-</td>
	</tr>    
    <tr>
		<td>唐家大院</td>
		<td>講經堂<br>庶務</td>
		<td>大有學問</td>
		<td>12</td>
		<td>-16</td>
		<td>
            • 學問+1、修養+1<br>
            • 若性情＞20: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>學問+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>🚩三師兄在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>講經堂<br>庶務</td>
		<td>心煩意亂</td>
		<td>12<br>+5</td>
		<td>-16</td>
		<td>
            • 學問+1、體力-1<br>
            • 若性情＞20: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩三師兄在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>講經堂<br>庶務</td>
		<td>誘騙招募</td>
		<td>12</td>
		<td>-16</td>
		<td>
            道德-1、名聲+2、門人+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 道德＜20: +50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>  
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹<br>優先</td>
		<td>苦命葉雲舟</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉去幫葉雲舟: <br>
            • 處世+1、煉丹+3、刀劍+1<br>
            • 葉雲舟好感+2、唐錚好感-1<br>
            <br>
			👉不管葉雲舟:<br>
            • 接續煉丹隨機事件<br>
            • 新事件會再扣心相，但貢獻不再加<br>
		</td>
		<td>-</td>
		<td>👉去幫:<br>刀劍-1</td>
		<td>
            機率 40%
        </td>
		<td>
            • 🚩唐錚在唐門<br>
            • 🚩葉雲舟在唐門<br>
            • 未開啟🚩<MarkdownWrapper>[煉丹解毒](/event/simple/3-01-3-煉丹解毒)</MarkdownWrapper><br>
        </td>
		<td>
            <li>
                若未觸發此事件，或選擇👉不管: <br>
                隨機事件後，開啟煉丹介面<br>
            </li>
            <li>
                若開啟🚩煉丹解毒，<br>
                煉丹指令強制進入該事件
            </li>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>滿意成果</td>
		<td>10</td>
		<td>-16</td>
		<td>煉丹+5</td>
		<td>煉丹+3</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>簡化配方</td>
		<td>10</td>
		<td>-16</td>
		<td>煉丹+3、處世+1、向心+2、名聲-2</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 性情≥60: +5<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>異想天開</td>
		<td>10</td>
		<td>-16</td>
		<td>
            • 煉丹+10、抗毒+1、抗麻+1<br>
            • 道德-1、名聲-1、向心-5            
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 性情≥60: +5<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>狗血淋頭</td>
		<td>10</td>
		<td>-22</td>
		<td>
            • 煉丹+5、命運+1<br>
            • 唐錚好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相＜30: +40<br>
        </td>
		<td>🚩唐錚在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>觸類旁通</td>
		<td>10</td>
		<td>+10</td>
		<td>
            • 煉丹+8<br>
            • 若道德≥40: 道德-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≥70: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>全神貫注</td>
		<td>10</td>
		<td>-20</td>
		<td>
            • 煉丹+10、處世-1<br>
            • 唐錚好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 心相≥80: +40<br>
        </td>
		<td>🚩唐錚在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生壞壞</td>
		<td>10</td>
		<td>-21</td>
		<td>
            • 煉丹+5、向心-1、名聲-1<br>
            • 🚩留學糾紛+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最早第二年二月下旬<br>
            • 最晚第二年八月下旬<br>
            • 🚩留學糾紛≥0<br>
        </td>
		<td>
            若🚩留學糾紛≥5: <br>
            • 觸發<MarkdownWrapper>[留學生衝突](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>事件<br>
            • 事件後設置🚩留學糾紛=-1<br>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生友好</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 煉丹+5、學問+1<br>
            • 六大派好感: 各有33%機率會+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最早第二年二月下旬<br>
            • 最晚第二年八月下旬<br>
            • 🚩<MarkdownWrapper>[留學糾紛=-1](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper><br>
        </td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>小梅的復仇</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉不要這樣啦: 觸發對決<br>
            • 勝: 武學+2(全武學＜200)或+5(全武學＜120)，虞小梅好感-2<br>
            • 敗: 武學+2(全武學＜120)、向心+1<br>
            <br>
			👉我來幫妳:<br>
            • 道德-2<br>
            • 虞小梅好感+2、唐惟元好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最晚第二年十二月下旬<br>
            • 🚩小梅在唐門<br>
            • 一次性事件，不可重複觸發
        </td>
		<td>-</td>
	</tr> 
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>預算合理</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+1、向心+1<br>
            • 唐陞好感+1<br>
            • 若🚩四師兄在唐門: 唐惟元好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>胡椒粉</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+1、道德-1、向心-1、抗毒+3、抗麻+3<br>
            • 🚩大師兄在唐門: 唐布衣好感-1<br>
            • 🚩二師兄在唐門: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩四師兄在唐門: 唐惟元好感-1<br>
            • 🚩小師妹在唐門: 唐默鈴好感-1<br>
            • 🚩掌門在唐門: 唐中翎好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>狂放廚藝</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+3、向心-5、道德-1、命運+1<br>
            <br>
            非🚩無可救藥線:<br>
            • 🚩大師兄在唐門: 唐布衣好感-1<br>
            • 🚩二師兄在唐門: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩四師兄在唐門: 唐惟元好感-1<br>
            • 🚩小師妹在唐門: 唐默鈴好感-1<br>
            • 🚩掌門在唐門: 唐中翎好感-1<br>
            <br>
            🚩無可救藥線:<br>
            • 🚩掌門在唐門: 唐中翎好感-1<br>
            • 唐陞好感-1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 性情≥60: +5<br>
            • 處世≥60: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>掌門健康</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+1、向心+2、道德+1、處世+1<br>
            • 唐中翎好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>小師妹<br>愛吃的菜</td>
		<td>13</td>
		<td>-24</td>
		<td>
            廚藝+2、向心+5、銀兩-200
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩小師妹不在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>師妹代班</td>
		<td>13<br>-5</td>
		<td>-4</td>
		<td>
            • 🚩和唐默鈴結緣: 插圖差分<br>
            • 向心+2<br>
            • 唐默鈴好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 廚藝≥3: +10<br>
            • 廚藝≥10: +25<br>
        </td>
		<td>🚩小師妹在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>貪吃龍湘</td>
		<td>13</td>
		<td>-7</td>
		<td>
            • 廚藝+1、向心+1<br>
            • 龍湘好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 廚藝≥5: +10<br>
            • 廚藝≥10: +25<br>
        </td>
		<td>
            • 最早第三年十一月中旬<br>
            • 🚩龍湘在唐門
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>心血來潮</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+3、向心+3、銀兩-200<br>
            • 🚩大師兄在唐門: 唐布衣好感+1<br>
            • 🚩二師兄在唐門: 唐錚好感+1<br>
            • 唐陞好感+1<br>
            • 🚩四師兄在唐門: 唐惟元好感+1<br>
            • 🚩小師妹在唐門: 唐默鈴好感+1<br>
            • 🚩掌門在唐門: 唐中翎好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 性情≥60: +5<br>
            • 廚藝≥5: +10<br>
            • 廚藝≥10: +25<br>
        </td>
		<td>-</td>
		<td>觸發不檢定銀兩</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>茶肆果子</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 已建設茶肆: 名聲+1、門派資產+100、設置🚩茶肆添加小梅果子<br>
            • 未建設茶肆: 門派資產+300<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 第二年十二月下旬以前<br>
            • 🚩虞小梅在唐門<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>🚩茶肆添加小梅果子: 目前無作用</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>伙房<br>掌廚</td>
		<td>晁和假請客</td>
		<td>13</td>
		<td>-9</td>
		<td>觸發<MarkdownWrapper>[晁和請客](/event/simple/1-08-3-晁和搞鬼事件集)</MarkdownWrapper>事件</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 最晚第二年十二月下旬以前<br>
            • 🚩晁和在唐門<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>枯燥工作</td>
		<td>12</td>
		<td>-12</td>
		<td>體力+1、向心+1</td>
		<td>體力+1</td>
		<td>體力-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>收拾善後</td>
		<td>12</td>
		<td>-25</td>
		<td>煉丹+10</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>脫手鏢</td>
		<td>12</td>
		<td>-62</td>
		<td>
            • 輕功-1、命運+1<br>
            • 獲得<MarkdownWrapper>[茅台酒](/system/items/)</MarkdownWrapper>x1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>洗刷污漬</td>
		<td>12</td>
		<td>-12</td>
		<td>
            • 體力+1、向心+2、性情-1<br>
            • 唐陞好感+1<br>
            • 🚩小師妹在唐門: 唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>
            • 基礎: 25<br>
            • 性情≤50: +5<br>
            • 性情≤25: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>    
	<tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>揮灑汗水</td>
		<td>12</td>
		<td>-2</td>
		<td>體力+1、向心+3、處世+1</td>
		<td>-</td>
		<td>體力-1</td>
		<td>
            • 基礎: 25<br>
            • 向心≥50: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>練功場<br>團練<br>優先</td>
		<td>小梅切磋</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉先不要: 接續團練隨機事件<br>
            <br>
            👉好啊: 觸發🆚戰小梅:<br>
            • 勝: 武學+4、虞小梅好感+1<br>
            • 負: 若全武學＜120，武學+2。向心+1、心相-15。<br>
		</td>
		<td>武學+2</td>
		<td>-</td>
		<td>機率 50%</td>
		<td>
            • 最晚第二年十二月下旬<br>
            • 🚩虞小梅在唐門<br>
        </td>
		<td>
            • 若未觸發此事件，接續團練隨機事件<br>
            • 初次對戰有對話差分<br>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>三師兄帶操</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、武學+2、向心+2<br>
            • 唐陞好感+1<br>
        </td>
		<td>武學+2</td>
		<td>體力-1<br>內力-1</td>
		<td>基礎: 30</td>
		<td>🚩三師兄在唐門</td>
        <td>-</td>		
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>二師兄帶操</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、向心+1、門人-1<br>
            • 唐錚好感+1</td>
		<td>煉丹+2<br></td>
		<td>體力-1<br>內力-1</td>
		<td>基礎: 30</td>
		<td>🚩二師兄在唐門</td>
		<td><MarkdownWrapper>[運功療傷](/event/simple/1-05-1-運功療傷)</MarkdownWrapper>前置條件</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>四師兄帶操</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 體力+1、武學+1、向心+3<br>
            • 唐惟元好感+1<br>
        </td>
		<td>武學+2</td>
		<td>體力-1</td>
		<td>基礎: 30</td>
		<td>🚩四師兄在唐門</td>
        <td>-</td>		
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>大師兄帶操</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 道德-1、體力-1、向心+2<br>
            • 唐布衣好感+1<br>
            • 🚩掌門在唐門: 唐中翎好感-1<br>
        </td>
		<td>
            心相≥80:<br>
            學問+1<br>
            輕功+1<br>
        </td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩大師兄在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>流彈誤傷</td>
		<td>-</td>
		<td>-66</td>
		<td>命運+1、暗器+1、武學+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>小師妹出沒</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、武學+2、向心-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>武學+2</td>
		<td>體力-1<br>內力-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩小師妹在唐門<br>
            • 🚩三師兄在唐門<br>
        </td>
        <td>-</td>		
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>掌門指點</td>
		<td>-</td>
		<td>-15</td>
		<td>
			• 體力+1、內力+1、輕功+1<br>
            • 向心+1、名聲+1、武學+3<br>
            • 唐中翎好感+1<br>
		</td>
		<td>武學+2</td>
		<td>體力-1</td>
		<td>基礎: 10</td>
		<td>🚩掌門在唐門</td>
		<td><MarkdownWrapper>[掌門不能動](/event/simple/2-12-3-唐門內戰)</MarkdownWrapper>: 算🚩不在</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>留學生<br>擅自練功</td>
		<td>-</td>
		<td>-21</td>
		<td>
            • 名聲-1、武學+1、向心+1<br>
            • 🚩留學糾紛+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最早第二年三月上旬<br>
            • 最晚第二年八月中旬<br>
            • 🚩留學糾紛≥0<br>
        </td>
		<td>
            若🚩留學糾紛≥5: <br>
            • 觸發<MarkdownWrapper>[留學生衝突](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>事件<br>
            • 事件後設置🚩留學糾紛=-1<br>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>留學生<br>推擠</td>
		<td>-</td>
		<td>-16</td>
		<td>
			• 名聲-2、向心+1、武學+1<br>
            • 🚩留學糾紛+2<br>
            • 六大派好感各-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 🚩留學糾紛≥1: +30<br>
        </td>
		<td>
            • 最早第二年三月上旬<br>
            • 最晚第二年八月中旬<br>
            • 🚩留學糾紛≥0<br>
        </td>
		<td>
            若🚩留學糾紛≥5: <br>
            • 觸發<MarkdownWrapper>[留學生衝突](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>事件<br>
            • 事件後設置🚩留學糾紛=-1<br>
        </td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>留學弟子<br>超團結</td>
		<td>-</td>
		<td>-16</td>
		<td>
			• 體力+1、內力+1、名聲+1、向心+1<br>
            • 戰役門人血量+2、武學+1<br>
            • 六大派好感: 各有33%機率+1<br>
		</td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 20</td>
		<td>
            • 最早第二年三月上旬<br>
            • 最晚第二年八月中旬<br>
            • 🚩<MarkdownWrapper>[留學糾紛=-1](/event/simple/2-03-1-留學生衝突)</MarkdownWrapper><br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>趙活帶操<br>感慨</td>
		<td>10</td>
		<td>-26</td>
		<td>名聲+1、性情+1、武學+3</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩大師兄不在唐門<br>
            • 🚩二師兄不在唐門<br>
            • 🚩三師兄為代掌門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>趙活帶操<br>奇葩師弟</td>
		<td>10</td>
		<td>-36</td>
		<td>性情+3、修養-1、向心-2、命運+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 修養≤25: +20<br>
        </td>
        <td>
            • 🚩大師兄不在唐門<br>
            • 🚩二師兄不在唐門<br>
            • 🚩三師兄為代掌門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>練功場<br>團練</td>
		<td>大師兄<br>蹴鞠</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 向心+2、體力+1<br>
            • 唐布衣好感+1、唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>
            • 基礎: 20<br>
            • 修養≤25: +20<br>
        </td>
		<td>
            • 🚩大師兄在唐門<br>
            • 🚩小師妹在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>女弟子房<br>埋伏</td>
		<td>吊起來打</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 道德-2、性情-1、輕功+1、命運+1<br>
            • 未🚩和唐默鈴結緣: 唐默鈴好感-1<br>
            • 唐布衣好感+1、劉顎好感+1<br>
        </td>
		<td>-</td>
		<td>輕功-1</td>
		<td>基礎: 20</td>
		<td>🚩小師妹在唐門</td>
		<td>-</td>
	</tr>                
	<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>埋伏</td>
		<td>開窗擊墜</td>
		<td>-</td>
		<td>+50</td>
		<td>進入<MarkdownWrapper>[生死簿02:《摔死》](/event/badends/#生死簿-No.2)</MarkdownWrapper></td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 3<br>
            • 輕功≥30: -3<br>
        </td>
		<td>🚩小師妹在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>女弟子房<br>埋伏</td>
		<td>無可譴責</td>
		<td>-</td>
		<td>+80</td>
		<td>道德-2、性情-1、輕功+1</td>
		<td>-</td>
		<td>輕功-1</td>
		<td>
            • 基礎: 30<br>
            • 輕功≥20: +10<br>
        </td>
		<td>🚩小師妹在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折紙鶴</td>
		<td>一絲暖意</td>
		<td>-</td>
		<td>+80</td>
		<td>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 60</td>
		<td>
            • 最早第三年五月上旬<br>
            • 🚩小師妹不在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折紙鶴</td>
		<td>揉成一團</td>
		<td>-</td>
		<td>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≤30: +20<br>
        </td>
		<td>
            • 最早第三年五月上旬<br>
            • 🚩小師妹不在唐門<br>
        </td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折紙鶴</td>
		<td>踏向深谷</td>
		<td>-</td>
		<td>-</td>
		<td>進入<MarkdownWrapper>[生死簿08:《我在唐門谷底》](/event/badends/#生死簿-No.8)</MarkdownWrapper></td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最早第三年五月上旬<br>
            • 🚩小師妹不在唐門<br>
            • 心相≤15<br>
        </td>
		<td>-</td>
	</tr>  
    <tr>
		<td>唐家大院</td>
		<td>男弟子房<br>賭博</td>		
		<td>賭博</td>
        <td>-</td>
		<td>+20</td>
		<td>
            觸發🎲天命(上限99):<br>
            •【≥50 發財】: 心相+40、銀兩+1000、向心-2<br>
            •【＜50 輸錢】: 心相-10、銀兩-500、向心+5<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>銀兩≥500</td>
		<td>-</td>
	</tr><tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>睡了一覺</td>
		<td>-</td>
		<td>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>畏懼人間</td>
		<td>-</td>
		<td>-15</td>
		<td>性情-5</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩大師兄不在唐門<br>
            • 🚩二師兄不在唐門<br>
            • 🚩掌門不在唐門<br>
            • 🚩小師妹不在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>學大師兄</td>
		<td>-</td>
		<td>+50</td>
		<td>向心+10、處世+5、修養-5</td>
		<td>輕功+2<br>暗器+2</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 最早第三年十月上旬<br>
            • 🚩大師兄不在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>福韞講法</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 向心+1、學問+1<br>
            • 福韞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>🚩福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>福韞淨化<br>四師兄</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀兩+100<br>
            • 福蘊好感+1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩福韞在唐門<br>
            • 🚩四師兄在唐門<br>
        </td>
		<td>-</td>
	</tr>                
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
			接續外出指令選單
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>小梅亂入</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 跑步:<br>
            • 體力+1、輕功+1、虞小梅好感+1<br>
            • 心上人為虞小梅: 心相+20<br>
            • 心上人非虞小梅: 變心+1<br>
			<br>
            👉 辦正事: <br>
            • 處世+1、虞小梅好感-1<br>
            • 接續外出指令選單<br>
		</td>
		<td>
            心相≥80:<br>
            👉 跑步:<br>
            體力+1<br>
            輕功+1<br>
            虞小梅<br>
            好感+1
        </td>
		<td>
            👉 跑步:<br>
            體力-1<br>
        </td>
		<td>基礎: 35</td>
		<td>
            • 最晚第二年十二月下旬<br>
            • 🚩虞小梅在唐門<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>我有帶秘笈</td>
		<td>-</td>
		<td>-</td>
		<td>
			• 本事件觸發次數不同: 對話差分<br>
            • 接續外出指令選單<br> 
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 35</td>
		<td>
            • 最晚第二年十月下旬<br>
            • 🚩晁和在唐門<br>
            • 最多觸發三次<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>龍湘遭竊</td>
		<td>-</td>
		<td>-</td>
		<td>
			觸發<MarkdownWrapper>[龍湘遭竊](/event/simple/1-09-2-龍湘遭竊)</MarkdownWrapper>事件<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最晚第二年五月下旬<br>
            • 曾觸發<MarkdownWrapper>[四師兄抓公差](/event/simple/1-09-2-四師兄抓公差)</MarkdownWrapper><br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>姜記肉包</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 排隊買(需銀兩＞500):<br>
            • 學問-1、銀兩-500、獲得<MarkdownWrapper>[姜記肉包](/system/items/)</MarkdownWrapper>x1<br>
            <br>
            👉 浪費光陰:<br>
            • 設置🚩外出遇到龍湘<br>
            • 接續外出指令選單<br>
            <br>
            👉 砸店(需道德＜40且性情≥60):<br>
            • 道德-2，觸發🆚戰江湖拳師<br>
            • 敗: <MarkdownWrapper>[生死簿86:《被肉包噎死》](/event/badends/#生死簿-No.86)</MarkdownWrapper><br>
            • 勝: 武學+4、銀兩+1000、名聲+2、獲得姜記肉包x5，上官螢好感-3、唐中翎好感-3、宋悲好感-2、丐幫好感+2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩龍湘在唐門</td>
		<td>
            🚩外出遇到龍湘:<br>
            影響本行動後續<br>
            可否觸發龍湘事件<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>李富貴<br>跑腿</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉指路: <br>
            • 李富貴好感+1<br>
            • 設置🚩外出遇到李富貴<br>
            • 接續外出指令選單<br>
            <br>
            👉帶你去: <br>
            • 道德+1、銀兩+200<br>
            <br>
            👉黑店(🚩需四師兄在唐門): <br>
            • 道德-1、銀兩+500<br>
            • 唐惟元好感+1、李富貴好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩李富貴在唐門</td>
		<td>
            🚩外出遇到李富貴:<br>
            影響本行動後續<br>
            可否觸發李富貴事件<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>李富貴<br>喝涼水</td>
		<td>-</td>
		<td>-</td>
		<td>
            銀兩＜100:<br>
            • 設置🚩外出遇到李富貴<br>
            • 接續外出指令選單<br>
            <br>
            銀兩≧100: 觸發選項:<br>
            <br>
            👉無視:<br>
            • 設置🚩外出遇到李富貴<br>
            • 接續外出指令選單<br>
            <br>
            👉喝給他看:<br>
            • 道德-1、修養-1、處世+1、銀兩-100、心相+30<br>
            • 李富貴好感-1、丐幫好感-1<br>
            <br>
            👉請客(需銀兩≧200):<br>
            • 道德+1、處世+2、銀兩-200<br>
            • 李富貴好感＜12: 心相+20、李富貴好感+2<br>
            • 李富貴好感≧12: 心相+10、李富貴好感+2<br>
            • 李富貴好感≧20，且無<MarkdownWrapper>[阿摩搪牆拳](/system/books/book_4040)</MarkdownWrapper>: 獲得該秘笈<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩李富貴在唐門</td>
		<td>
            🚩外出遇到李富貴:<br>
            影響本行動後續<br>
            可否觸發李富貴事件<br>
        </td>
	</tr>                
    <tr>
		<td>大門</td>
		<td>外出<br>優先</td>
		<td>福韞<br>強制淨化</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 性情≤40: 對話差分<br>
            • 道德+1、學問+1、福韞好感+1<br>
            • 取消🚩揍過福韞<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩福韞在唐門<br>
            • 曾🚩揍過福韞<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>不多不少</td>
		<td>16</td>
		<td>-15</td>
		<td>銀兩+1000、嘴力+1、名聲+1</td>
		<td>嘴力+1<br>名聲+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>包袱被割</td>
		<td>16<br>-10</td>
		<td>-30</td>
		<td>
            • 銀兩-1000、唐惟元好感-1<br>
            • 第二次觸發: 獲得秘笈<MarkdownWrapper>[《江湖鬼蜮錄》](/books/book_8005)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩四師兄在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>賭博輸光</td>
		<td>16<br>-10</td>
		<td>-65</td>
		<td>
            • 銀兩-2500、修養-2、性情-2、處世+2、命運+1<br>
            • 唐惟元好感-2<br>
            <br>            
            第二次觸發時:<br>
            • 若時間＞第二年十二月下旬: 結束事件<br>
            • 若時間≤第二年十二月下旬: 接<MarkdownWrapper>[龍湘霸王餐](/event/simple/1-04-1-龍湘霸王餐)</MarkdownWrapper>事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤0: +50<br>
        </td>
		<td>
            • 銀兩≧3000<br>
            • 🚩四師兄在唐門<br>
            • 最多只能觸發兩次<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>爭相搶購</td>
		<td>16</td>
		<td>-15</td>
		<td>
            • 銀兩+1500、門派資產+100<br>
            • 道德-1、性情+1、處世-1、嘴力+1<br> 
            • 🚩行商成功次數+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 嘴力≥20: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>滿載而歸</td>
		<td>16</td>
		<td>-15</td>
		<td>
            • 銀兩+2000、門派資產+150<br>
            • 道德-2、性情+1、處世-2、嘴力+2<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 嘴力≥30: +5<br>
            • 嘴力≥80: +5<br>
            • 嘴力≥90: +5<br>
            • 道德＜40: +20<br>
        </td>
		<td>🚩行商成功次數≥2</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>行商</td>
		<td>長途行商</td>
		<td>16</td>
		<td>-25</td>
		<td>
            • 銀兩+3000、門派資產+200<br>
            • 體力+2、行動次數-1<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 嘴力≥30: +5<br>
            • 嘴力≥80: +5<br>
            • 嘴力≥90: +5<br>
            • 道德≥60: +20<br>
        </td>
		<td>行動次數≥2</td>
		<td>共扣行動次數2</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>逛街舒心</td>
		<td>-</td>
		<td>+20</td>
		<td>處世+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>包袱被割</td>
		<td>-20</td>
		<td>-20</td>
		<td>性情-1、名聲+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>飛石尋釁</td>
		<td>-</td>
		<td>-</td>
		<td>
			觸發🎲天命(上限99、輕功補正):<br>
            【≥60 迴避】: 心相+20、名聲+1、飛石幫好感-1，事件結束<br>
            【＜60 打架】: 觸發 🆚戰飛石幫，檢定勝負:<br>            
            <br>
            敗: 銀兩-1000、心相-30<br>
            <br>
            勝: 武學+2(全武學≤110)，觸發選項:<br>
            • 👉放了: 道德+1、修養+1、處世+1、飛石幫好感+1<br>
            • 👉工錢歸我: 道德-1、性情+1、處世+1、銀兩+250、飛石幫好感-1<br>
            • 👉亂刀捅死: 道德-3、修養-2、名聲+2、宋悲好感-1、飛石幫好感-3、飛石幫向心-2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>未🚩與飛石幫和解</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>何方妖孽</td>
		<td>-</td>
		<td>-</td>
		<td>
			🆚戰錦香弟子:<br>
            敗: 進入<MarkdownWrapper>[生死簿17:《含冤莫白》](/badends/#生死簿-No.17)</MarkdownWrapper><br>
            勝：武學+4(全武學≤150)或+2(全武學＞150)，觸發選項:<br>
            👉 冷靜點: 道德+1、修養+1、名聲+1、錦香宮好感+1<br>
			👉 想跟我成親: 道德-1、性情+1、修養-1、嘴力+1、變心+1<br>
			👉 無情殺害: 道德-3、修養-2、性情+2、名聲-2、錦香宮好感-4、龍湘好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 給錢作善事: 銀兩-100、修養+1、性情-1、處世+1<br>
			<br>
            👉 雙倍錢我砸: 🆚戰江湖拳師:<br>
            • 敗: 銀兩-200、名聲-2、性情-1<br>
			• 勝: 武學+2(未知條件)，觸發選項:<br>
            • 👉 饒過: 名聲+1、門人+1<br>
			• 👉 謀殺: 道德-3、修養-3、性情+2、處世-2、銀兩-200<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀兩≥200</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>丐幫搶菜</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩設置和丐幫搶菜次數+1，觸發戰役⚔️戰丐幫:<br>
            • 敗: 心相-10、向心+1、丐幫好感+1、丐幫向心+1<br>
            • 勝: 武學+2、名聲-1、修養-1、心相+10、向心+1、門派資產-100、丐幫好感+1、丐幫向心-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>填飽舒心</td>
		<td>-</td>
		<td>+30</td>
		<td>銀兩-100</td>
		<td>體力+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀兩≥200</td>
		<td>心相判定在加心相之後</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>摺紙藝人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀兩-200<br>
            • 唐默鈴好感+2
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 銀兩≥200<br>
            • 🚩小師妹在唐門<br>
        </td>
		<td>心相判定在加心相之後</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>茶肆吃麵</td>
		<td>-</td>
		<td>+20</td>
		<td>學問+1、銀兩-100</td>
		<td>學問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀兩≥200</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>贈送蔬果</td>
		<td>-</td>
		<td>+40</td>
		<td>向心+5、門派資產+500、銀兩+500</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>門派規模≥4</td>
		<td>目前無法滿足條件</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>女俠戰龍湘</td>
		<td>-</td>
		<td>-10</td>
		<td>性情-1、武學+2、刀劍+1</td>
		<td>-</td>
		<td>刀劍-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩外出遇到龍湘<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>山賊戰龍湘</td>
		<td>-</td>
		<td>-</td>
		<td>
            檢定🚩與龍湘姊弟相稱:<br>
            • 是: 武學+1、心相+6、廚藝+1、龍湘好感+2<br>
            • 否: 武學+1、銀兩+500、體力+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>
            是: <br>廚藝-1<br>
            否: <br>體力-1<br>
        </td>
		<td>基礎: 15</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩外出遇到龍湘<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>龍湘打客人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀兩-500<br>
            • 龍湘好感+1<br>
            • 🚩龍湘被開除+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩外出遇到龍湘<br>
            • 🚩龍湘被開除≠-1<br>
            • 銀兩≥500<br>            
        </td>
		<td>
            目前似乎無機制可<br>
            設置🚩龍湘被開除=-1<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>龍湘算錯帳</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀兩-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩外出遇到龍湘<br>
            • 🚩龍湘被開除≠-1<br>
            • 銀兩≥500<br>            
        </td>
		<td>
            目前似乎無機制可<br>
            設置🚩龍湘被開除=-1<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>龍湘燒廚房</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀兩-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩外出遇到龍湘<br>
            • 🚩龍湘被開除≠-1<br>
            • 銀兩≥500<br>            
        </td>
		<td>
            目前似乎無機制可<br>
            設置🚩龍湘被開除=-1<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>檢定技能<MarkdownWrapper>[醫術](/system/skill)</MarkdownWrapper>等級≥2:<br>
            • 是: 李富貴好感+2<br>
            • 否: 性情-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 未🚩外出遇到李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>弄蛇成功</td>
		<td>-</td>
		<td>+30</td>
		<td>
            李富貴好感≥20，且無秘笈<MarkdownWrapper>[《蛇形拳》](/system/books/book_4008)</MarkdownWrapper>: 獲得該秘笈<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 未🚩外出遇到李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>弄蛇失敗</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發對決 🆚戰蛇:<br>
            • 敗: 進入<MarkdownWrapper>[生死簿88《被賣藝人的毒蛇咬死》](/event/badends/#生死簿-No.88)</MarkdownWrapper><br>
            • 勝: 抗毒+1、抗麻+1、名聲+1、心相-10、李富貴好感+1、丐幫好感+1<br>
        </td>
		<td>-</td>
		<td>勝: <br>抗毒-1<br>抗麻-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 未🚩外出遇到李富貴<br>
        </td>
		<td>
            具體對戰的蛇取決於遊戲時間:<br>
            • 第一年十二月下旬以前<br>
            • 第二年十二月下旬以前<br>
            • 第四年五月上旬以前<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>弄蛇大成功</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 李富貴好感+1<br>
            • 無秘笈<MarkdownWrapper>[《蓮花落》](/system/books/book_7001)</MarkdownWrapper>: 獲得該秘笈<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≥60: +20<br>
            • 處世≥60: +10<br>
        </td>
		<td>
            • 🚩李富貴在唐門<br>
            • 未🚩外出遇到李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>釣魚</td>
		<td>-</td>
		<td>+20</td>
		<td>李富貴好感+1、樊嘯天好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩李富貴在唐門<br>
            • 未🚩外出遇到李富貴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>偶遇福韞</td>
		<td>-</td>
		<td>-</td>
		<td>
            道德＞40: 道德+1、學問+1、福韞好感+1<br>
            道德≤40: 觸發選項:<br>
            <br>
            👉 不給: <br>
            • 道德-1、處世+1、福韞好感-1、嵩山派好感-1，🆚戰福韞<br>
            • 敗: 銀兩-200<br>
            • 勝: 武學+4、設置🚩揍過福韞<br>
            <br>
            👉 給你(需銀兩≥10): <br>
            • 道德+1、學問+1、銀兩-10、福韞好感+1<br>
            • 複合檢定(不符才會接下一個檢定):<br>
            • <MarkdownWrapper>[佛學](/system/skill)</MarkdownWrapper>等級=0，且無秘笈<MarkdownWrapper>[《羅漢拳譜》](/system/books/book_6001)</MarkdownWrapper>: 獲得之<br>
            • 佛學等級≥1，且道德≥60，且無秘笈<MarkdownWrapper>[《金剛腿》](/system/books/book_4001)</MarkdownWrapper>: 獲得之<br>
            • 佛學等級≥2，且道德≥60，且福韞好感≥10，且無秘笈<MarkdownWrapper>[《金鐘罩》](/system/books/book_1030)</MarkdownWrapper>: 獲得之<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩福韞在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>帶小師妹<br>下山認路</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩-200、唐默鈴好感+1<br>
            • 心上人為唐默鈴: 心相+30<br>
            • 心上人非唐默鈴: 變心+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 道德≥50: +10<br>
            • 道德≥60: +10<br>
        </td>
		<td>
            • 銀兩≥200<br>
            • 唐中翎好感≥20<br>
            • 🚩小師妹在唐門<br>            
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>小師妹<br>得意洋洋</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 唐默鈴好感+1<br>
            • 心上人為唐默鈴: 心相+30<br>
            • 心上人非唐默鈴: 變心+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩和唐默鈴結緣</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>混世魔王</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩-500、葉雲裳好感+1<br>
            • 心上人為葉雲裳: 心相+30<br>
            • 心上人非葉雲裳: 心相-30、變心+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀兩≥2000: +30<br>
        </td>
		<td>
            • 銀兩≥500<br>
            • 🚩葉雲裳在唐門<br>            
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>鬧市<br>逛街</td>
		<td>監護人</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩-500、唐默鈴好感+1、葉雲裳好感+1<br>
            • 心上人為葉雲裳: 心相+30<br>
            • 心上人非葉雲裳: 變心+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀兩≥2000: +30<br>
        </td>
		<td>
            • 銀兩≥500<br>
            • 🚩小師妹在唐門<br> 
            • 🚩葉雲裳在唐門<br>            
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩外堡點數+1<br>
            • 接續外堡隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家<br>優先</td>
		<td>龍湘與福韞</td>
		<td>10</td>
		<td>-12</td>
		<td>
            🚩外堡點數+1，觸發選項:
            <br>
            👉「救不了，但願意共苦」:<br>
            • 性情+1、修養+1、心相-5<br>
            • 龍湘好感+2、福韞好感+1<br>
            • 心上人非龍湘: 變心+1<br>
            <br>
            👉「救不了，逃」:<br>
            • 性情-1<br>
            • 設置🚩外堡遇到龍湘<br>
            • 設置🚩外堡遇到福韞<br>
            • 接續外堡隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 🚩福韞在唐門<br>
        </td>
		<td>
            🚩外出遇到龍湘/福韞:<br>
            影響本行動後續<br>
            可否觸發龍湘/福韞事件<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>死皮賴臉</td>
		<td>10</td>
		<td>-12</td>
		<td>
            對決 🆚戰路人俠<br>
            <br>
            敗: 檢定🚩二師兄在唐門:<br>
            • 在: 心相-25、貢獻-20、性情-1、唐中翎好感-1、唐錚好感-1<br>
            • 不在: 心相-25、貢獻-20、性情-2<br>
            <br>
            勝: 觸發選項:<br>
            👉 滾: 道德-2、修養-1、銀兩+200、門派資產+10<br>
            👉 先賒著: 道德+1、處世+1、貢獻-20、門派資產-10、唐陞好感+1。若🚩掌門在唐門: 唐中翎好感+1。<br>
        </td>
		<td>-</td>
        <td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>住戶打群架</td>
		<td>10</td>
		<td>-12</td>
		<td>
            觸發戰役⚔️: 勝負無關，武學+2、門派資產-50。<br>
            🚩小師妹在唐門: 銀兩+200、門派資產+30、🚩外堡點數+2<br>
            <br>
            🚩葉雲裳在唐門: 接以下<br>
            • 門派資產+20、🚩外堡點數+2<br>
            • 🚩上官螢在唐門: 上官螢好感+1<br>
            • 🚩魏菊在唐門: 魏菊好感+1<br>
            • 🚩虞小梅在唐門: 虞小梅好感+1<br>
            • 🚩郁竹在唐門: 郁竹好感+1<br>
            • 🚩龍湘在唐門: 龍湘好感+1<br>
            • 🚩葉雲舟在唐門: 葉雲舟好感+1<br>
            • 心相-15、抗毒+1、葉雲裳好感+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>收到租金</td>
		<td>10<br>+6</td>
		<td>-12</td>
		<td>門派資產+50</td>
		<td>門派資<br>產+50</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≥60: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>打掃環境</td>
		<td>10</td>
		<td>-12</td>
		<td>
            🚩上官螢在唐門: 上官螢好感+1<br>
            🚩魏菊在唐門: 魏菊好感+1<br>
            🚩虞小梅在唐門: 虞小梅好感+1<br>
            🚩郁竹在唐門: 郁竹好感+1<br>
            🚩龍湘在唐門: 龍湘好感+1<br>
            🚩葉雲舟在唐門: 葉雲舟好感+1<br>
            🚩李富貴在唐門: 李富貴好感+1<br>
            🚩福韞在唐門: 福韞好感+1<br>
        </td>
		<td>有觸發<br>的好感<br>再+1</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>孝敬唐門</td>
		<td>10<br>+6</td>
		<td>-2</td>
		<td>名聲+2、銀兩+500、門派資產+500</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 名聲≥20: +30</td>
		<td>-</td>
		<td>
            欲<MarkdownWrapper>[上官螢入住外堡](/event/simple/1-08-1-唐門財務改善)</MarkdownWrapper><br>
            ，刷此事件最快<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>-8</td>
		<td>
            • 學問+1、修養+1<br>
            • 福韞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            🚩福韞在唐門<br>
            未🚩外堡遇到福韞<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>福韞與<br>葉雲舟</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 學問+1、修養+1<br>
            • 福韞好感+1、葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            🚩葉雲舟在唐門<br>
            🚩福韞在唐門<br>
            未🚩外堡遇到福韞<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>福韞與<br>葉雲裳</td>
		<td>10</td>
		<td>-6</td>
		<td>
            • 修養-1<br>
            • 葉雲裳好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            🚩葉雲裳在唐門<br>
            🚩福韞在唐門<br>
            未🚩外堡遇到福韞<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>苦命葉雲舟</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 名聲+2<br>
            • 葉雲舟好感+2、葉雲裳好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩葉雲舟在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟削劍</td>
		<td>10</td>
		<td>-12</td>
		<td>
            刀劍+1，檢定本事件觸發次數(含本次):<br>
            • 初次觸發: 對話差分<br>
            • 二次觸發: 對話差分<br>
            • 三次以上: 觸發選項:<br>
            <br>
            👉 我也要: 檢定未知條件:<br>
            • 未知條件: 獲得「失敗木劍」+1<br>
            • 未知條件: 獲得「木劍」+1<br>
            • 未知條件: 獲得「聽雲木劍」+1<br>
            • 名聲-1、處世+1、道德-1<br>
            <br>
            👉 幫忙: <br>
            • 處世-1、修養+1、鍛造+2<br>
            • 葉雲舟好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>葉雲舟在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟教劍</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 刀劍+1、武學+5<br>
            • 葉雲舟好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩葉雲舟在唐門<br>
            • 觸發「葉雲舟削劍」5次以上<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩茶肆點數+1<br>
            • 接續茶肆隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>目前茶肆無其他優先事件</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>茶水太燙</td>
		<td>10</td>
		<td>-32</td>
		<td>
            • 學問+1、修養+1，觸發選項:<br>
            👉 息事寧人: 修養+1、名聲-1、🚩茶肆點數+1<br>
            👉 揍他: 修養-1，觸發 🆚戰路人俠<br>
            <br>
            敗: <MarkdownWrapper>[生死簿18:《被燙死》](/event/badends/#生死簿-No.18)</MarkdownWrapper><br>
            <br>
            勝: 觸發選項:<br>
            👉 呵涼再喝: 嘴力+1、處世-1、銀兩+200<br>
            👉 茶錢一百倍: 道德-1、修養-1、處世+1、名聲-1、門派資產+10、🚩茶肆點數+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>店前打鬥</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 學問+1、修養+1，觸發⚔️混戰<br>
            • 勝敗無關，心相+15、武學+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>飛石找碴</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 學問+1、修養+1，觸發戰役 ⚔️戰飛石幫<br>
            • 勝敗無關，名聲+1、武學+2、銀兩+200<br>
            • 門派資產+10、飛石幫好感-1、飛石幫向心-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>未🚩與飛石幫和解</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>丐幫尋釁</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 學問+1、修養+1，觸發戰役 ⚔️戰丐幫<br>
            • 勝敗無關，武學+2、丐幫向心-1，觸發選項:<br>
            <br>
            👉 下回別來(需銀兩≥500):<br>
            • 修養+1、道德+1、銀兩-500<br>
            • 🚩茶肆點數+2、丐幫好感-1<br>
            <br>
            👉 滾燙熱茶:<br>
            • 修養-1、道德-1、名聲+2、向心+1<br>
            • 丐幫好感-2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>請你吃瓜</td>
		<td>10</td>
		<td>+18</td>
		<td>
			• 學問+1、修養+1<br>
            • 銀兩-100、向心+1<br>
            • 處世+3、修養±1、性情±1<br>            
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≥60: +30<br>
        </td>
		<td>銀兩≥100</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>午後小雨</td>
		<td>10</td>
		<td>+18</td>
		<td>
			• 學問+1、修養+1<br>
            • 修養+3、向心+1、性情±1<br>            
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≥60: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>魏菊茶匠</td>
		<td>10</td>
		<td>-12</td>
		<td>
			• 學問+1、修養+1<br>
            • 學問+2、修養+2、名聲+3、門派資產+10<br>
            • 魏菊好感+1、🚩茶肆點數+2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 魏菊好感≥15: +10<br>
            • 魏菊≥20: +10<br>
        </td>
		<td>🚩魏菊在唐門</td>
		<td>目前(v1.0.5000.13)<br>版本中無法觸發<br></td>
	</tr>                
	<tr>
		<td>大門</td>
		<td>茶肆<br>茶博士</td>
		<td>龍湘點茶</td>
		<td>10</td>
		<td>-10</td>
		<td>
			• 學問+1、修養+1<br>
            • 名聲+1、門派資產+20、龍湘好感+1<br>
            • 心上人非龍湘: 變心+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩龍湘在唐門</td>
		<td>-</td>
	</tr>	
	<tr>
		<td>大門</td>
		<td>藥鋪<br>坐診<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩藥鋪點數+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>見備註</td>
		<td>-</td>
		<td>
            機率取決於可否觸<br>
            發「葉雲舟煎藥」<br>
        </td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診<br>優先</td>
		<td>葉雲舟煎藥</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩藥鋪點數+1，觸發選項:<br>
            <br>
            👉 指點葉雲舟: <br>
            • 道德+1、修養+1、葉雲舟好感+2<br>
            • 處世≤40: 對話差分<br>
            • 設置🚩觸發葉雲舟煎藥俠<br>
            <br>
            👉 做自己的事: <br>
            • 接續藥鋪隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>機率 40%</td>
		<td>🚩葉雲舟在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>帶水果報恩</td>
		<td>10</td>
		<td>+8</td>
		<td>
            向心+1、道德+1、銀兩+200<br>
        </td>
		<td>門派資<br>產+10</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>一致認同</td>
		<td>10</td>
		<td>-2</td>
		<td>
            • 煉丹+5、道德+1、銀兩+100<br>
            • 🚩二師兄在唐門: 唐錚好感+1<br>
        </td>
		<td>二師兄<br>在唐門:<br>唐錚好<br>感+1<br></td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治公子哥</td>
		<td>10</td>
		<td>-32</td>
		<td>名聲+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治黑狗</td>
		<td>10</td>
		<td>-2</td>
		<td>
			• 道德≥60: 道德+1、樊嘯天好感+1<br>
            • 道德＜60: 體力-1、心相-40<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>醫療糾紛</td>
		<td>10</td>
		<td>-</td>
		<td>
            👉 不認錯: 道德-2、嘴力+1、名聲-1、處世+1、心相-12、🚩藥鋪點數-1<br>
            <br>
            👉 善言相勸: 道德+1、嘴力+1、修養+1、處世-1、心相-62、🚩被關次數+1<br>
            <br>
            👉 息事寧人(需銀兩≥500): 銀兩-500、性情-1、處世-1、心相-32、🚩藥鋪點數+1<br>
        </td>
		<td>-</td>
		<td>若嘴力<br>+1:<br>嘴力-1</td>
		<td>
            • 基礎: 10<br>
            • 心相≤30: +30
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治妓女</td>
		<td>10<br>+20</td>
		<td>-52</td>
		<td>
            • 道德+1<br>
            • 🚩大師兄在唐門: 唐布衣好感+1<br>
            • 錦香宮好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>無償治老人</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩老人留書＜2</td>
		<td>🚩老人留書: 現版本<br>(v1.0.5000.13)無法增加</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>無償治瞎子</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩瞎子留書＜2</td>
		<td>🚩瞎子留書: 現版本<br>(v1.0.5000.13)無法增加</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>無償治瘸子</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩瘸子留書＜2</td>
		<td>🚩瘸子留書: 現版本<br>(v1.0.5000.13)無法增加</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>富人<br>投桃報李</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+2、銀兩+500、門派資產+50</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>飛石幫患者</td>
		<td>10</td>
		<td>-12</td>
		<td>
			👉 勸回來: 道德+1、向心-1、貢獻-10、飛石幫好感+1、飛石幫向心+1<br>
            <br>
            👉 隨你便: 向心+1、飛石幫向心-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>未🚩與飛石幫和解</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>藥鋪<br>坐診</td>
		<td>丐幫弟子<br>求診</td>
		<td>10</td>
		<td>-12</td>
		<td>
			👉 管你去死: 道德-1、修養-1、向心+1、丐幫向心-1<br>
            <br>
            👉 一言為定: 道德+1、向心-1、貢獻-10、丐幫好感+1、丐幫向心+1、🚩藥鋪點數-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>義田<br>耕耘<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩義田點數+1<br>
            • 接續義田隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>目前義田無其他優先事件</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>義田<br>耕耘</td>
		<td>踏實努力</td>
		<td>12</td>
		<td>-12</td>
		<td>體力+1、性情±1、處世±1、修養±1</td>
		<td>體力+1</td>
		<td>體力-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>義田<br>耕耘</td>
		<td>剷掉<br>魏菊白菜</td>
		<td>12</td>
		<td>-12</td>
		<td>
            • 向心+2、貢獻+15、性情+1<br>
            • 魏菊好感-2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩魏菊在唐門</td>
		<td>現(v1.0.5000.13)<br>版本無法觸發</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>義田<br>耕耘</td>
		<td>魏菊<br>一起耕田</td>
		<td>12</td>
		<td>+18</td>
		<td>
            • 體力+1、修養+1、魏菊好感+1<br>
            • 魏菊好感≥15: 學問+1、修養+1<br>
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 10</td>
		<td>🚩魏菊在唐門</td>
		<td>現(v1.0.5000.13)<br>版本無法觸發</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>溫泉<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩溫泉點數+1<br>
            • 接續溫泉隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>目前溫泉無其他優先事件</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>溫泉</td>
		<td>疲勞<br>一掃而空</td>
		<td>-</td>
		<td>+15<br>+55</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>溫泉</td>
		<td>師兄弟偷窺</td>
		<td>-</td>
		<td>+15<br>+15</td>
		<td>
			👉 讓我看: <br>
            • <MarkdownWrapper>[生死簿69:《自找死路》](/event/badends/#生死簿-No.69)</MarkdownWrapper><br>
            <br>
            👉 快住手:<br>
            • 道德+1、向心-3、貢獻-10<br>
            • 🚩小師妹在唐門: 唐默鈴好感+1<br>
            • 🚩葉雲裳在唐門: 葉雲裳好感+1<br>
            • 🚩上官螢在唐門: 上官螢好感+1<br>
            • 🚩魏菊在唐門: 魏菊好感+1<br>
            • 🚩虞小梅在唐門: 虞小梅好感+1<br>
            • 🚩郁竹在唐門: 郁竹好感+1<br>
            • 🚩龍湘在唐門: 龍湘好感+1<br>
            <br>
			👉 有蛇: <br>
            • 道德+1、嘴力+1、處世+1、向心-1<br>
		</td>
		<td>-</td>
		<td>👉有蛇:<br>嘴力-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>溫泉</td>
		<td>涼棚垮了</td>
		<td>-</td>
		<td>+15</td>
		<td><MarkdownWrapper>[生死簿70:《溺死》](/event/badends/#生死簿-No.70)</MarkdownWrapper></td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>大門</td>
		<td>溫泉</td>
		<td>龍湘泡溫泉</td>
		<td>-</td>
		<td>+15<br>+35</td>
		<td>修養+1、龍湘好感+3</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>🚩和龍湘結緣</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>無所事事</td>
		<td>-</td>
		<td>+20<br>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>有人張望</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 性情≤40: 性情+2<br>
            • 性情＞40: 處世+2、性情-2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>小梅破門</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 心相+20<br>
            • 心上人為虞小梅: 心相+40、輕功+2、虞小梅好感+1、崆峒派好感-1<br>
            • 心上人非虞小梅: 心相+20、輕功+1、虞小梅好感+1、崆峒派好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 虞小梅好感≥15: +25<br>
        </td>
		<td>觸發過<MarkdownWrapper>[鶴手出遊](/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper></td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>聚眾嘲笑</td>
		<td>-</td>
		<td>+20</td>
		<td>
            觸發<MarkdownWrapper>[「窩居衝突」](/event/simple/2-03-1-窩居衝突)</MarkdownWrapper>事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相＜60: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 若性情≤40且銀兩＜500: 設置🚩不花錢<br>
            • 若性情＞40且銀兩＜100: 設置🚩不花錢<br>
            <br>
            • 若🚩不花錢: 關閉逛街指令<br>
            • 若無🚩不花錢: 接續逛街隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>別於蜀中</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀兩-100<br>
            • 學問+2、處世+2、崆峒派好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>小梅同行</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀兩-100、銀兩-300、處世+1、性情+1<br>
            • 虞小梅好感+2、崆峒派好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 虞小梅好感≥15: +20<br>
        </td>
		<td>觸發過<MarkdownWrapper>[鶴手出遊](/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper></td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>鐵拳巷<br>購物</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀兩-100、銀兩-300、鍛造+5<br>
            • 郁竹好感+1、崆峒派好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 郁竹好感≥15: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>                
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>偶遇<br>四師兄</td>
		<td>-</td>
		<td>+100</td>
		<td>
            • 銀兩-100、唐惟元好感+1<br>
            • 開啟商店介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 唐惟元好感≥20: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 若銀兩＜2000: 關閉賭場指令<br>
            • 若銀兩≥2000: 接續賭場隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 道德-1、處世+1、修養-1<br>
            • 銀兩-1000、命運+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 50<br>
            • 心相≤60: +25<br>
            • 心相≤30: +25<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場</td>
		<td>小賺一把</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 道德-1、處世+1、修養-1<br>
            • 銀兩+1000，設置🚩崆峒賭場贏錢+1<br>
            • 若🚩崆峒賭場贏錢≥5: 觸發<MarkdownWrapper>[崆峒搶劫](/event/simple/2-03-1-崆峒搶劫)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≥60: +25<br>
            • 心相≥90: +25<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 道德-1、處世+1、修養-1<br>
            • 銀兩+3000，設置🚩崆峒賭場贏錢+3<br>
            • 若🚩崆峒賭場贏錢≥5: 觸發<MarkdownWrapper>[崆峒搶劫](/event/simple/2-03-1-崆峒搶劫)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≥90: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>無色廣場<br>擂台</td>
		<td>擂台比試</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 若初次參加: 聽取說明，依處世對話差分(≤40、≥60)<br>
            <br>
            決定對手，觸發🎲天命(上限99):<br>
            • 【＜33 丐幫弟子】、【＜66 江湖拳師】、【≥66 路人俠】<br>
            • 🚩擂台積分，決定對手強度: ＜4(弱)、＜8(中)、≥8(強)<br>
            <br>
            敗: <MarkdownWrapper>[生死簿14:《活活打死》](/event/badends/badend-14)</MarkdownWrapper><br>
            <br>
            勝: <br>
            • 基礎效果: 武學+2、性情+1、銀兩+500、🚩擂台積分+1<br>
            • 檢定崆峒留學門派: 輕功+1(飛天)，暗器+1(奪魄)，拳掌+1(玄功)，體力+1(鐵拳)<br>
            • 🚩擂台積分＞3: 檢定崆峒留學門派: 刀劍+1(飛天)，內力+1(奪魄)，學問+1及嘴力+1(玄功)，鍛造+4(鐵拳)<br>
            • 🚩擂台積分＞5: 武學+2<br>
            • 🚩擂台積分＞7: 武學+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>對應門派<br>修練<br>優先</td>
		<td>小梅跑步</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉 無視: 性情-1、虞小梅好感-2，接續對應門派修練事件<br>
            <br>
            👉 追上去: 接續小梅跑步隨機事件<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>機率: <br>(虞小梅好感+1)/101</td>
		<td>觸發過<MarkdownWrapper>[鶴手出遊](/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper></td>
		<td>若未觸發此事件，接續修練事件<br></td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>對應門派<br>修練</td>
		<td>修練</td>
		<td>-</td>
		<td>-20</td>
		<td>
            武學+6，檢定崆峒留學門派:<br>
            • 飛天: 輕功+1<br>
            • 奪魄: 暗器+1<br>
            • 玄功: 拳掌+1<br>
            • 鐵拳: 體力+1<br>
            <br>
            開啟修練介面<br>
        </td>
		<td>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>遭遇情敵</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 輕功+1<br>
            • 觸發對決🆚，對決對象(機率權重): 鐵拳弟子(10)、奪魄弟子(10)、飛天弟子(10)<br>
            <br>
            敗: <MarkdownWrapper>[生死簿16:《被情敵殺死》](/event/badends/badend-16)</MarkdownWrapper><br>
            <br>
            勝: 武學+4，設置🚩小梅追求者挑戰+1，觸發選項:<br>
            👉 放生: 修養+1、道德+1、處世-1、名聲+1<br>
            👉 推下樓梯: 性情+1、道德-2、處世+1、虞小梅好感+1<br>
        </td>
		<td>-</td>
		<td>輕功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            🚩小梅追求者挑戰:<br>
            目前沒什麼用<br>
        </td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>不擇手段</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 輕功+1<br>
            • 道德-2、修養-1、處世+1<br>
            • 虞小梅好感+2<br>
        </td>
		<td>-</td>
		<td>輕功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>奪魄森林<br>迷路</td>
		<td>-</td>
		<td>-40</td>
		<td>
            嘴力+1、道德-1、名聲-1、命運+1 <br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>實力懸殊</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 體力+2、輕功+2<br>
            • 虞小梅好感+1<br>
        </td>
		<td>-</td>
		<td>體力-1<br>輕功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>心相檢定在加心相之後</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>燒烤山味</td>
		<td>-</td>
		<td>+50</td>
		<td>
            • 體力+1、銀兩-200<br>
            • 虞小梅好感+2 <br>
            • 🚩和小梅吃燒烤+1<br>
        </td>
		<td>-</td>
		<td>體力-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            • 心相檢定在加心相之後<br>
            • 🚩和小梅吃燒烤: 目前沒用<br>
        </td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>狀態絕佳</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 體力+2、輕功+2<br>
            • 虞小梅好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≥60: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>英俊少俠</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 體力+1、輕功+1<br>
            • 虞小梅好感+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>大仙下凡</td>
		<td>-</td>
		<td>+15</td>
		<td>
            • 學問-1、🚩修仙次數+1<br>
            • 若🚩修仙次數≥5: 解鎖<MarkdownWrapper>[風雲史02:《煩人修仙》](/event/achievements/#風雲史-No.02)</MarkdownWrapper><br>
            • 進入<MarkdownWrapper>[生死簿15:《自食惡果》](/event/badends/badend-15)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +15<br>
            • 嘴力≥20: +15<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>略有小成</td>
		<td>-</td>
		<td>+35</td>
		<td>
            • 學問-1、🚩修仙次數+1<br>
            • 抗毒+1、抗麻+1、輕功+1、內力+1、嘴力-1<br>
            • 修養-1、道德-1、性情+1、處世+1<br>
            • 虞小梅好感-1<br>
            • 若🚩修仙次數≥5: 解鎖<MarkdownWrapper>[風雲史02:《煩人修仙》](/event/achievements/#風雲史-No.02)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 嘴力＜15: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>氣功平山</td>
		<td>-</td>
		<td>+45</td>
		<td>
            • 學問-1、🚩修仙次數+1<br>
            • 嘴力+1、內力+1、名聲+2、學問-1<br>
            • 修養-1、道德-1、性情+1、處世+1<br>
            • 虞小梅好感-2、崆峒派好感+2<br>
            • 若🚩修仙次數≥5: 解鎖<MarkdownWrapper>[風雲史02:《煩人修仙》](/event/achievements/#風雲史-No.02)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 嘴力≥15: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>唐門祖師</td>
		<td>-</td>
		<td>+35</td>
		<td>
            • 學問-1、🚩修仙次數+1<br>
            • 嘴力+2、名聲+2、暗器+1、學問-1<br>
            • 修養-1、道德-2、性情+1、處世+1<br>
            • 虞小梅好感-2、唐中翎好感-1、崆峒派好感+2<br>
            • 若🚩修仙次數≥5: 解鎖<MarkdownWrapper>[風雲史02:《煩人修仙》](/event/achievements/#風雲史-No.02)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 嘴力≥15: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>皇室血統</td>
		<td>-</td>
		<td>+35</td>
		<td>
            • 學問-1、🚩修仙次數+1<br>
            • 嘴力+3、名聲+3、學問-1<br>
            • 修養-2、道德-3、性情+2、處世+1<br>
            • 虞小梅好感-2、唐中翎好感-2、唐默鈴好感-2、崆峒派好感+3<br>
            • 若🚩修仙次數≥5: 解鎖<MarkdownWrapper>[風雲史02:《煩人修仙》](/event/achievements/#風雲史-No.02)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 嘴力≥20: +20<br>
            • 道德＜40: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練<br>優先</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            接續奪魄森林修練指令<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練<br>優先</td>
		<td>一次性<br>優先事件集</td>
		<td>-</td>
		<td>-</td>
		<td>
            以下為一次性優先事件及觸發條件:<br>
            • <MarkdownWrapper>[飛俠武功](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>: 已觸發<MarkdownWrapper>[昔日同伴](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper><br>
            • <MarkdownWrapper>[助你收心](/event/simple/2-04-1-助你收心)</MarkdownWrapper>: 已觸發<MarkdownWrapper>[何故覷探](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper><br>
            • <MarkdownWrapper>[修繕樹屋](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>: 夏侯蘭好感≥20<br>
            • <MarkdownWrapper>[鐵傘秘密](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>: 夏侯蘭好感≥20<br>
            • <MarkdownWrapper>[蘭字由來](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>: 夏侯蘭好感≥15<br>
            • <MarkdownWrapper>[雪山始末](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>: 夏侯蘭好感≥30，且🚩<MarkdownWrapper>[可聊雪山始末](/event/simple/2-04-1-助你收心)</MarkdownWrapper><br>
            <br>
            除「助你收心」會結束行動之外，其他事件結束後皆接續奪魄森林修練指令<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>各事件皆<br>基礎: 50</td>
		<td>
            <br>
        </td>
		<td>因一次性事件性質相似<br>集合為同一項目</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>藉口一堆</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 武學+2<br>
            • 嘴力+2、夏侯蘭好感-1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤50: +10<br>
        </td>
		<td>-</td>
		<td>兩次後觸發<MarkdownWrapper>[何故覷探](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper></td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>亂打一氣</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 武學+2<br>
            • 命運+1、夏侯蘭+2<br> 
            • 心上人非夏侯蘭: 變心+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>鋤草功</td>
		<td>-</td>
		<td>0</td>
		<td>
            • 武學+2<br>
            • 體力+2、刀劍+1、夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≥50: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>不置可否</td>
		<td>-</td>
		<td>-5</td>
		<td>
            • 武學+2<br>
            • 武學+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 40<br>
            • 心相≤30: +20<br>
        </td>
		<td>-</td>
		<td>兩次後觸發<MarkdownWrapper>[昔日同伴](/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper></td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 武學+2<br>
            • 武學+5、刀劍+2<br>
            • 夏侯蘭好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: -25<br>
            • 心相≤60: -10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 武學+2<br>
            • 武學+5、拳掌+1<br>
            • 夏侯蘭好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: -25<br>
            • 心相≤60: -10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>必殺心得</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 武學+2<br>
            • 武學+4、拳掌+2、刀劍+2<br>
            • 夏侯蘭好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤40: -10<br>
            • 心相≤80: -10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>滿意成果</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10<br>
            • 郁竹好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>頭暈腦脹</td>
		<td>-</td>
		<td>-21</td>
		<td>
            • 鍛造+5、修養-1、名聲+1<br>
            • 郁竹好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 50<br>
            • 心相≤60: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>無能手藝</td>
		<td>-</td>
		<td>-26</td>
		<td>
            鍛造+5、命運+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +75<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>熟能生巧</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、修養-1<br>
            • 郁竹好感+1<br>            
        </td>
		<td>鍛造+5<br>暗器+1</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>靈光乍現</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、修養-1、處世-1、名聲+1<br>
            • 郁竹好感+2<br>
        </td>
		<td>鍛造+8<br>暗器+2</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>神工附體</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、修養-1、體力-2、內力-2、名聲+3<br>
            • 鍛造+5、暗器+1<br>
            • 郁竹好感+3<br>
        </td>
		<td>鍛造+5<br>暗器+2</td>
		<td>鍛造-5<br>暗器-1</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>傳奇小說</td>
		<td>-</td>
		<td>+20</td>
		<td>
            第四次觸發: 額外劇情<br>
        </td>
		<td>學問+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>吟誦詩詞</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 學問+1、魏菊好感+1<br>
            • 第三次觸發: 額外劇情，魏菊好感+2<br>
        </td>
		<td>學問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>傑出文章</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 學問+2、處世-1<br>
            • 第三次觸發: 額外劇情，魏菊好感+5<br>
        </td>
		<td>學問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋<br>優先</td>
		<td>棋力判斷</td>
		<td>-</td>
		<td>-</td>
		<td>
            檢定「棋力」=學問x2+修養x2+<MarkdownWrapper>[戰術](/system/skill)</MarkdownWrapper>等級x44:<br>
            • 棋力＜250: 設置🚩棋力低<br>
            • 棋力＜650: 設置🚩棋力中<br>
            • 棋力≧650: 設置🚩棋力高<br>
            <br>
            接續奪魄峰下棋隨機事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>難分難解<br>惜敗</td>
		<td>-</td>
		<td>-22</td>
		<td>
            • 武學+2<br>
            • 學問+1、修養+1、銀兩-100、武學+2<br>
        </td>
		<td>武學+2</td>
		<td>武學-2</td>
		<td>基礎: 40</td>
		<td>🚩棋力低</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>苦苦求活</td>
		<td>-</td>
		<td>-32</td>
		<td>
            • 武學+2<br>
            • 學問+2、性情-1、修養-1、銀兩-100<br>
            • 武學+2<br>
        </td>
		<td>武學+2</td>
		<td>武學-2<br>學問-1</td>
		<td>基礎: 20</td>
		<td>🚩棋力低</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>難分難解<br>險勝</td>
		<td>-</td>
		<td>+8</td>
		<td>
            • 武學+2<br>
            • 學問+1、性情-1、銀兩+100<br>
            • 武學+2、學問+1<br>
        </td>
		<td>武學+2</td>
		<td>武學-2<br>學問-1</td>
		<td>基礎: 40</td>
		<td>🚩棋力低</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>周旋<br>略遜一籌</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武學+2<br>
            • 性情-1、學問+1、武學+2<br>
            • 武學+2<br>
        </td>
		<td>武學+2</td>
		<td>武學-2</td>
		<td>
            • 基礎: 35<br>
            • 心相≤30: +50<br>
        </td>
		<td>🚩棋力中</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>不費<br>吹灰之力</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武學+2<br>
            • 性情+2、修養-1、銀兩+100<br>
            • 武學+2<br>
        </td>
		<td>武學+2</td>
		<td>武學-2</td>
		<td>基礎: 30</td>
		<td>🚩棋力中</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>捉住破綻<br>勝出</td>
		<td>-</td>
		<td>-2</td>
		<td>
            • 武學+2<br>
            • 性情+1、學問+2、銀兩+100<br>
        </td>
		<td>武學+4</td>
		<td>-</td>
		<td>基礎: 35</td>
		<td>🚩棋力中</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>徹底擊潰</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武學+2<br>
            • 道德-1、名聲+1、銀兩+100<br>
            • 武學+2<br>
        </td>
		<td>武學+2<br>名聲+1</td>
		<td>武學-2</td>
		<td>基礎: 30</td>
		<td>🚩棋力高</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>俐落擊敗</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武學+2<br>
            • 修養-1、名聲+1、銀兩+100<br>
            • 武學+2、名聲+1<br>
        </td>
		<td>武學+2<br>名聲+1</td>
		<td>武學-2<br>名聲-1</td>
		<td>基礎: 50</td>
		<td>🚩棋力高</td>
		<td>心相檢定在扣心相之前</td>
	</tr>
    <tr>
		<td>江陵圍城</td>
		<td>指令選單</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            除下列「上街消遣」事件外，其餘請見<MarkdownWrapper>[南宮作客事件集](/event/simple/2-09-1-南宮作客事件集)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>江陵圍城</td>
		<td>上街消遣</td>
		<td>鬧市逛街</td>
		<td>-</td>
		<td>+40</td>
		<td>修養+1、銀兩-200</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>銀兩≥200</td>
		<td>-</td>
	</tr>
    <tr>
		<td>江陵圍城</td>
		<td>上街消遣</td>
		<td>心曠神怡</td>
		<td>-</td>
		<td>+30</td>
		<td>體力+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>江陵圍城</td>
		<td>上街消遣</td>
		<td>有礙觀瞻</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉再說一次: 🆚戰江湖拳師<br>
            • 敗: 修養-1、名聲-1、銀兩-200、心相-20<br>
            • 勝: 修養-1、性情+1、處世+1、名聲+1、武學+2、銀兩-100、南宮家好感-1<br>
            <br>
            👉息事寧人: 心相-10、修養+1、處世-1、性情-1<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>銀兩≥200</td>
		<td>-</td>
	</tr>
    <tr>
		<td>江陵圍城</td>
		<td>上街消遣</td>
		<td>不由分說</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發🆚戰峨嵋弟子<br>
            <br>
            敗: 心相-30、南宮家好感+1、行動次數再-1<br>
            <br>
            勝: 觸發選項:<br>
            👉 送交官府: 武學+2、修養+1、性情-1、名聲-1、宋悲好感+1<br>
            👉 城外棄置: 道德-2、修養-1、處世+1、名聲+1<br>
            👉 請他喝酒: 心相+30，銀兩檢定:<br>
            • 銀兩＜800: 道德-1、處世+1、名聲-1、南宮家好感-1<br>
            • 銀兩≧800: 心相-10、名聲+1、處世+1、道德+1、銀兩-800<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>釣魚</td>
		<td>收穫不佳</td>
		<td>-</td>
		<td>+20</td>
		<td>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>釣魚</td>
		<td>女式衣裙</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發🆚戰江湖拳師<br>
            <br>
            敗: 心相-30、命運+1、🚩被關次數+1<br>
            <br>
            勝: 觸發選項:<br>
            👉 按進河裡: 道德-3、性情+1、修養-1、銀兩+500<br>
            👉 真的不是我: 道德+1、修養+1、處世-1、心相+30、獲得<MarkdownWrapper>[黃酒](/system/items/)</MarkdownWrapper>x1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>釣魚</td>
		<td>收穫豐富</td>
		<td>-</td>
		<td>+10</td>
		<td>銀兩+200</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>鬧市閒遊</td>
		<td>隨意吃喝</td>
		<td>-</td>
		<td>+20</td>
		<td>銀兩-50</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>流連賭坊</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-30</td>
		<td>道德-1、處世+1、修養-1、銀兩-2000</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>流連賭坊</td>
		<td>小賺一把</td>
		<td>-</td>
		<td>+20</td>
		<td>道德-1、處世+1、修養-1、銀兩+500</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>流連賭坊</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>+30</td>
		<td>道德-1、處世+1、修養-1、名聲-1、銀兩+1000</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>無所事事<br>客棧飲茶</td>
		<td>-</td>
		<td>-</td>
		<td>+30</td>
		<td>學問+1、處世-1、銀兩-100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩≥100<br>
            • 🚩<MarkdownWrapper>[離家出走住客棧](/event/simple/2-06-1-離家出走)</MarkdownWrapper><br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>獨自練功</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 心相＜35: 心相-5、修養-1<br>
            • 心相≧35: 武學+5、心相-10<br>
            • 開啟修練介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>打工<br>義田</td>
		<td>-</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀兩+200、體力+1<br>
            • 性情±1、處世±1、修養±1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>有建設義田，對話差分</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>打工<br>鐵鋪打鐵</td>
		<td>-</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 銀兩+500、鍛造+5<br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>相較唐門打鐵，此處不扣修養<br>，且一定賺錢，十分值得</td>
	</tr>
    <tr>
		<td>離家出走</td>
		<td>打工<br>大宋閒漢</td>
		<td>-</td>
		<td>-</td>
		<td>-15</td>
		<td>
            銀兩+800、名聲-1、性情-1、處世-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>🚩<MarkdownWrapper>[離家出走住破廟](/event/simple/2-06-1-離家出走)</MarkdownWrapper></td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>窩居</td>
		<td>無所事事</td>
		<td>-</td>
		<td>+20<br>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>窩居</td>
		<td>進錯房間</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 性情≤40: 心相-5<br>
            • 性情＞40: 處世+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>窩居</td>
		<td>雲裳玩耍</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 葉雲裳好感+1<br>
            • 心上人為葉雲裳: 心相+40<br>
            • 心上人非葉雲裳: 心相+10、變心+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>窩居</td>
		<td>雲裳惡作劇</td>
		<td>-</td>
		<td>+20<br>-10</td>
		<td>
            葉雲裳好感+1、修養-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>窩居</td>
		<td>雲裳睡著</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 葉雲裳好感+1<br>
            • 心上人為葉雲裳: 心相+100<br>
            • 心上人非葉雲裳: 變心+5<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 葉雲裳好感≥35: +30<br>
        </td>
		<td>
            無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>修練</td>
		<td>正常修練</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 武學+5<br>
            • 開啟修練介面<br>
        </td>
		<td>心相≥60:<br>武學+3</td>
		<td>-</td>
		<td>
            基礎: 100<br>
        </td>
		<td>-</td>
		<td>心相判定在扣心相之後</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>修練</td>
		<td>申屠龍切磋</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 武學+5<br>
            <br>
            全武學點數檢定:<br>
            • 全武學≥100: 武學+4、申屠龍好感+1<br>
            • 100＞全武學≥50: 武學+2<br>
            • 全武學＜50: 申屠龍好感-1<br>
            <br>
            • 開啟修練介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 50<br>
        </td>
		<td>申屠龍好感≥15</td>
		<td>-</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>獨自烤魚</td>
		<td>-</td>
		<td>+20</td>
		<td>
            修養+1、處世±1、廚藝+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>雲裳烤魚</td>
		<td>-</td>
		<td>+30</td>
		<td>
            修養+1、廚藝+1、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>吟嘯徐行</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 修養+1、處世+1<br>
            • 🚩青城散步+1、🚩青城功勳-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>雲裳散步</td>
		<td>-</td>
		<td>+30</td>
		<td>
            葉雲裳好感+1，🚩青城散步+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • 🚩青城散步≥3<br>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>申屠龍散步</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 學問+1，申屠龍好感+1<br>
            • 🚩青城散步+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 有<MarkdownWrapper>[機率增加](/event/simple/2-09-3-申屠遇襲)</MarkdownWrapper>: +30<br>
        </td>
		<td>🚩青城散步≥3</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>似有所悟</td>
		<td>-</td>
		<td>+40</td>
		<td>
            • 修養+2、處世+1<br>
            • 🚩青城散步+1、🚩青城功勳-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>遭遇野豬</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發 🆚戰野豬:<br>
            <br>
            敗: <MarkdownWrapper>[生死簿72:《被豬拱死》](/badends/badend-72)</MarkdownWrapper><br>
            <br>
            勝: 觸發選項:<br>
            👉 賣掉: 銀兩+1000<br>
            👉 一起吃: 處世+1、葉雲裳好感+1、申屠龍好感+1、青城派好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>🚩青城散步≥3</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>妖孽受死</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發 🆚戰路人俠:<br>
            <br>
            敗: 心相-40、名聲-2、🚩青城功勳-1<br>
            <br>
            勝: 武學+3，觸發選項:<br>
            👉 縱放: 道德+1、處世+1、名聲-1<br>
            👉 殺害: 修養-1、性情+1、貢獻+15、青城派好感-2，道德檢定:<br>
            • 道德≥80: 道德-2<br>
            • 80＞道德≥60: 道德-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>🚩青城散步≥3</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>申屠遇襲</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發<MarkdownWrapper>[申屠遇襲](/event/simple/2-09-3-申屠遇襲)</MarkdownWrapper>事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 100<br>
        </td>
		<td>
            • 最早第二年九月下旬<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr> 
    <tr>
		<td>青城</td>
		<td>常風觀<br>散步</td>
		<td>道長地位</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發<MarkdownWrapper>[道長地位](/event/simple/2-08-3-道長地位)</MarkdownWrapper>事件<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 80<br>
        </td>
		<td>
            • 申屠龍好感≥10<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>無法靜下</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 修養-1、向心-1、處世-1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>誦經忘詞</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 修養-1、處世+2、葉雲裳好感+1<br>
            • 青城派好感+1、🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>風捲符紙</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 命運+1、葉雲裳好感+1<br>
            • 青城派好感-2、🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相<30: +30<br>
        </td>
		<td>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>心緒沉澱</td>
		<td>-</td>
		<td>+10</td>
		<td> 
            • 修養+1、嘴力-1、內力+1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>依樣畫葫蘆</td>
		<td>-</td>
		<td>-15</td>
		<td> 
            • 嘴力+1、處世-1<br>
            • 若道德≥60: 道德-1<br>
            • 若道德＜60: 道德+1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>感悟道門</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 修養+2、嘴力-1、內力+1<br>
            • 道德+1、性情±1、處世±1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 修養≥60: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>鬼神之相</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 嘴力+2、處世-2、名聲+1<br>
            • 若道德≥60: 道德-1<br>
            • 若道德＜60: 道德+1<br>
            • 趙逵好感+1、青城派好感+1、🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 嘴力≥40: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>道士下山</td>
		<td>祭品消失</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 名聲+1、性情-1、葉雲裳好感+1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 葉雲裳好感≥30: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>道士下山</td>
		<td>高功號令</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 名聲+1、銀兩+500<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>道士下山</td>
		<td>地獄道來襲</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發戰役 ⚔️戰地獄道:<br>
            • 名聲+2、武學+5、青城派好感+1<br>
            • 🚩青城功勳+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>-</td>
		<td>靠隊友就贏，專心撿錢</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>上清宮<br>道士下山</td>
		<td>誤認鬼卒</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發對決 🆚戰青城弟子:<br>
            • 第5回合: 🚩地獄道鬼卒助陣<br>
            • 第5回合: 若修養＜40，我方憤怒<br>
            <br>
            敗: <MarkdownWrapper>[生死簿66《被道士當妖怪誤殺》](/event/badends/#生死簿-No.66)</MarkdownWrapper><br>
            <br>
            勝: 檢定🚩地獄道鬼卒助陣:<br>
            • 有助陣: 武學+4、🚩青城功勳+1<br>
            • 沒助陣: 武學+4，觸發選項:<br>
            👉追究: 修養-1、處世+1、銀兩+500、名聲+1、青城派好感-1<br>
            👉不追究: 修養+1、處世-1、道德+1、青城派+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>沒錢逛街</td>
		<td>-</td>
		<td>+30</td>
		<td>
            處世+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>包袱被割</td>
		<td>-</td>
		<td>-20</td>
		<td>
            性情-1、名聲+1、貢獻-20<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>遭遇雲裳</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩-500、葉雲裳好感+1<br>
            • 若心上人為葉雲裳: 心相+30<br>
            • 若心上人非葉雲裳: 心相+15、變心+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀兩≥2000: +30<br>
        </td>
		<td>
            • 銀兩≥1500<br>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>填飽你胃</td>
		<td>-</td>
		<td>+50</td>
		<td>
            銀兩-100<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>銀兩≥200</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>雲裳吃菜</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀兩-1000、學問+1、葉雲裳好感+2<br>
            • 若心上人為葉雲裳: 心相+30<br>
            • 若心上人非葉雲裳: 心相+20<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 35<br>
        </td>
		<td>
            • 銀兩≥1000<br>
            • 修養≥60<br>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>逛街</td>
		<td>投餵蔬果</td>
		<td>-</td>
		<td>-20</td>
		<td>
            銀兩+1000、名聲+1 <br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>曾觸發上清宮修真「鬼神之相」</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>打鐵</td>
		<td>滿意成果</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀兩-100、鍛造+5<br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>打鐵</td>
		<td>差強人意</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 銀兩+200、鍛造+3<br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 修養＜40: +10<br>
            • 性情＜40: +10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>打鐵</td>
		<td>敲到自己</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 銀兩-100、鍛造+3、命運+1 <br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相＜30: +?<br>
        </td>
		<td>-</td>
		<td>低心相權值<text style="color : red">待測</text></td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>打鐵</td>
		<td>品質良好</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀兩-100、鍛造+8、修養-1、刀劍+1<br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>刀劍-1</td>
		<td>
            基礎: 30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>打鐵</td>
		<td>人盡垂涎</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀兩+1000、鍛造+5、貢獻-15、名聲-1、刀劍+1<br>
            • 開啟鍛造介面<br>
        </td>
		<td>-</td>
		<td>刀劍-1</td>
		<td>
            • 基礎: 25<br>
            • 全鍛造≥150: +15<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>水果報恩</td>
		<td>-</td>
		<td>+15</td>
		<td>
            銀兩+100、道德+1、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治難症</td>
		<td>-</td>
		<td>+20</td>
		<td>
            銀兩+100、道德+1、唐錚好感+1、申屠龍好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治妓女</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 銀兩+100、道德+1<br>
            • 若無🚩葉雲裳先回唐門: 葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 15<br>
        </td>
		<td>-</td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治老人</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道德+1、申屠龍好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治瞎子</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道德+1、申屠龍好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治瘸子</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道德+1、申屠龍好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治青城</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 道德+1、貢獻+15<br>
            • 申屠龍好感+1、唐中翎好感+1<br>
            • 🚩青城功勳+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 15<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>醫治鬼卒</td>
		<td>-</td>
		<td>-</td>
		<td>
            觸發選項:<br>
            👉 管你去死: 道德-1、修養-1<br>
            👉 一言為定: 道德+1、名聲-1、貢獻-10、青城派好感-1、地獄道好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 地獄道≥3 +20<br>
        </td>
		<td>地獄道好感≥1</td>
		<td>
            地獄道好感:<br>
            <MarkdownWrapper>[南宮壽宴](/event/simple/1-12-1-南宮壽宴)</MarkdownWrapper>仇人線可+1<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>一籌莫展</td>
		<td>-</td>
		<td>-15</td>
		<td>
             銀兩-100、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • <MarkdownWrapper>[醫術](/system/skill)</MarkdownWrapper>等級＜3<br>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>
    <tr>
		<td>青城</td>
		<td>青城山鎮<br>坐診</td>
		<td>日漸可控</td>
		<td>-</td>
		<td>-20</td>
		<td>
             銀兩-100、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • <MarkdownWrapper>[醫術](/system/skill)</MarkdownWrapper>等級≥3<br>
            • 無🚩葉雲裳先回唐門<br>
        </td>
		<td>
            🚩葉雲裳先回唐門:<br>
            目前無法觸發<br>
        </td>
	</tr>      
    <tr>
		<td>雪山</td>
		<td>閒聊<br>夏侯蘭</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 設置🚩關心夏侯蘭<br>
            • 僅對話，不消耗行動<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>六月下旬剩一次<br>行動時開啟</td>
		<td>🚩關心夏侯蘭:<br>目前沒用</td>
	</tr>
    <tr>
		<td>雪山</td>
		<td>修練武功</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 刀劍+1、武學+2、夏侯蘭好感+1<br>
            • 開啟修練介面<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>雪山</td>
		<td>修練武功</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 拳掌+1、武學+2、夏侯蘭好感+1<br>
            • 開啟修練介面<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>雪山</td>
		<td>修練武功</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 拳掌+1、刀劍+1、武學+4、夏侯蘭好感+2 <br>
            • 開啟修練介面<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>雪山</td>
		<td>蓋房子</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 體力+1，🚩雪山蓋房子次數+1<br>
            <br>
            檢定🚩雪山蓋房子次數:<br>
            • 次數=1: 對話差分。若唐門有<MarkdownWrapper>[高級樹屋](/event/simple/3-05-3-建造樹屋)</MarkdownWrapper>，夏侯蘭好感+1<br>
            • 次數=2: 設置🚩雪山樹屋等級=1，夏侯蘭好感+2<br>
            • 次數=4: 設置🚩雪山樹屋等級=2，夏侯蘭好感+3<br>
            • 次數=7: 設置🚩雪山樹屋等級=3，夏侯蘭好感+5，對話差分<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>🚩雪山樹屋等級＜3</td>
		<td>
            若遊戲為第一周目，因雪山<br>
            僅6個行動次數，會蓋不完<br>
        </td>
	</tr>
    <tr>
		<td>雪山</td>
		<td>休息</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            心相＜30: 心相+30，檢定🚩雪山樹屋等級:<br>
            • 等級=2: 心相+10<br>
            • 等級=3: 心相+20<br>
            <br>
            心相≥30: 心相-20、內力+2、夏侯蘭好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>錦香宮</td>
		<td>指令選單</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            除下列華音閣事件外，其餘請見<MarkdownWrapper>[「錦香宮自由行動」](/event/simple/3-09-3-錦香宮事件集)</MarkdownWrapper><br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>錦香宮</td>
		<td>華音閣<br></td>
		<td>龍湘吹簫</td>
		<td>-</td>
		<td>+10</td>
		<td>
            修養+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>錦香宮</td>
		<td>華音閣<br></td>
		<td>小梅奏你</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 名聲-1<br>
            • 心上人為虞小梅: 變心+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩虞小梅同行武林大會</td>
		<td>-</td>
	</tr>
    <tr>
		<td>錦香宮</td>
		<td>華音閣<br></td>
		<td>雲裳彈琴</td>
		<td>-</td>
		<td>-</td>
		<td>
            檢定本事件觸發次數(含本次):<br>
            • 1次: 無特殊效果<br>
            • 2次: 葉雲裳好感+1<br>
            • 3次: 心相+20，觸發劇情，設置🚩葉雲裳學琴<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩葉雲裳同行武林大會<br>
            • 無🚩葉雲裳學琴<br>
        </td>
		<td>-</td>
	</tr>
    <tr>
		<td>錦香宮</td>
		<td>華音閣<br></td>
		<td>小師妹鼓掌</td>
		<td>-</td>
		<td>+20</td>
		<td>
            修養+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩小師妹同行武林大會</td>
		<td>-</td>
	</tr>
                
</BTable>

## 備註
- 心相65為綠臉，但有黃臉的額外加成。<br>
- 基礎效果 + 額外效果 = 實際效果。如低心相時，(基礎學問+2) + (低心相學問-1) = 實際學問+1。
- 但上述僅為最終效果，並非觸發順序。通常順序上，低心相是直接改原數值，高心相則是再檢定後額外加上。<br>
- 效果若寫「±」，代表數值往中庸方向調整。<br>
- 事件機率 = 事件機率權重 / (該指令所有可觸發事件權重總和)。若不可觸發，計算時相當於「權重 = 0」。<br>
- 為節省空間，省略部分易於預期的步驟，例如「事件結束」。<br>
- 「優先」事件:<br>
    1. 系統先判斷觸發哪個優先事件，再由優先事件腳本內容，判斷是否接續該指令隨機事件。<br>
    2. 優先事件結果若寫接續該指令隨機事件，代表優先事件不會消耗行動點。<br>
    3. 反之，若未寫接續該指令隨機事件，代表優先事件結束時消耗行動點，行動回合結束。<br>
    4. 優先事件之間的觸發機率，有時以機率權重表示，有時直接定義隨機數並檢定其值，此時本表以「機率 XX%」表示。<br>
    5. 若僅單一優先事件(即「無優先事件」)，且無特別內容，本表略之不寫。<br>
    6. 貢獻及部分數值增減，其實在優先事件中觸發。本表格式難以表達確切流程，僅盡量敘述等效結果。<br>
    7. 本表盡量將優先事件效果併入後續隨機事件效果中，以免讀者需要同時查看兩個事件。<br>
- 本條目參考[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)撰寫。<br>
<br>
