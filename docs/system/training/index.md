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
::: warning
本條目施工中，暫時轉為普通表格(無搜尋功能)方便排錯。
:::

<Table>
	<tr>
		<td :unsortable="true">地點</td>
		<td :unsortable="true">指令</td>
		<td :unsortable="true">事件</td>
		<td :unsortable="true">貢獻</td>
		<td :unsortable="true">心相</td>
		<td :unsortable="true">
			<MoodIcon :mood="`normal`" /><br>
            心相:33~64<br>
            基礎效果
		</td>
		<td :unsortable="true">
			<MoodIcon :mood="`high`" /><br>
            心相:65~100<br>
            額外效果
		</td>
		<td :unsortable="true">
			<MoodIcon :mood="`bad`" /><br>
            心相:0~32<br>
            額外效果
		</td>
        <td :unsortable="true">機率權重</td>
		<td :unsortable="true">必要條件</td>
        <td>備註</td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>課外書籍</td>
		<td>11</td>
		<td>-12</td>
		<td>學問+2、處世-1、向心-1</td>
		<td>武學+2、鍛造+2、煉丹+2</td>
		<td>學問-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>	
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>
            三師兄與掌門<br>
            談論古今<br>
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
		<td>唐門</td>
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
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>後山<br>挑柴<br>優先判斷</td>
		<td>繼續挑柴</td>
		<td>-</td>
		<td>-</td>
		<td>
            無優先事件，接續挑柴事件判斷
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td></td>
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>後山<br>挑柴<br>優先判斷</td>
		<td>龍湘練劍</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 👉 讓她靜一靜: 隨機觸發其他事件<br>
            • 👉 我來告訴你，用劍: 🆚對決龍湘<br>
            • 勝：武學+6，敗：武學+2、龍湘好感+1<br>
            • 若初次觸發，且曾與龍湘夜遊: 接龍湘心事<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 🚩龍湘在唐門<br>
            • 未🚩和龍湘結緣<br>
            • 時間≥第三年十一月中旬<br>            
        </td>
		<td>
			• 龍湘心事為結緣龍湘必要事件<br>
            • <text style="color : red">待撰寫</text>: 龍湘夜遊及龍湘心事事件<br>
		</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>後山<br>挑柴</td>
		<td>穩健幹活</td>
		<td>13</td>
		<td>-20</td>
		<td>性情+1、體力+1、輕功+1</td>
		<td>輕功+1</td>
		<td>體力-1、輕功-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
            • ≤一年六月下、≤一年十二月下、≤二年六月下<br>
            • ≤二年十二月下、≤三年六月下、≤四年六月下<br>
        </td>
	</tr>    
	<tr>
		<td>唐門</td>
		<td>後山<br>練武<br>優先判斷</td>
		<td>繼續修練</td>
		<td>0</td>
		<td>-</td>
		<td>無優先事件，接續練武事件判斷</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>後山<br>練武<br>優先判斷</td>
		<td>小師妹烤魚</td>
		<td>0</td>
		<td>-</td>
		<td>
            🚩葉雲裳在唐門:<br>
            👉 玩水時間: 心相+20、廚藝+1，唐默鈴好感+2、葉雲裳好感+2，心上人檢定:<br>
            • 心上人非葉雲裳且心上人非唐默鈴: 變心+3<br>
            👉 不能打亂計畫: 接續練武事件判斷<br>
            <br>
            🚩葉雲裳不在唐門:<br>
            👉 捉魚時間: 心相+20、廚藝+1、唐默鈴好感+2，心上人檢定:<br>
            • 心上人非唐默鈴: 變心+3<br>
            👉 不能打亂計畫: 檢定🚩和唐默鈴結緣: <br>
            • 沒有結緣: 接續練武事件判斷<br>
            • 有結緣: 武學+3、心相+5、唐默鈴好感+1<br>
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
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>正常</td>
		<td>0</td>
		<td>-20</td>
		<td>武學+5</td>
		<td>武學+3</td>
		<td>-</td>
		<td>基礎: 100</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>獨自烤魚</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>小梅亂入</td>
		<td>0</td>
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
            • 時間≤二年十二月下旬<br>
            • 一次性事件，不可重複觸發<br>
        </td>
		<td>-</td>
	</tr>    
    <tr>
		<td>唐門</td>
		<td>鍛治場<br>打鐵<br>修先判斷</td>
		<td>繼續打鐵</td>
		<td>-</td>
		<td>-</td>
		<td>
            無優先事件，接續打鐵事件判斷<br>
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
		<td>唐門</td>
		<td>鍛治場<br>打鐵<br>修先判斷</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td></td>
	</tr>    
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>煉丹房<br>煉丹<br>優先判斷</td>
		<td>苦命葉雲舟</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉去幫葉雲舟: <br>
            • 處世+1、煉丹+3、刀劍+1<br>
            • 葉雲舟好感+2、二師兄好感-1<br>
            <br>
			👉不管葉雲舟:<br>
            • 接續煉丹事件判斷<br>
		</td>
		<td>-</td>
		<td>👉去幫:<br>刀劍-1</td>
		<td>
            機率 40%
        </td>
		<td>
            • 🚩唐錚在唐門<br>
            • 🚩葉雲舟在唐門<br>
        </td>
		<td>
            若👉不管葉雲舟，新事件會再扣心相，但貢獻不再加<br>
        </td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>伙房<br>掌廚</td>
		<td>胡椒粉</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+1、道德-1、向心-1、抗毒+3、抗麻+3<br>
            • 唐陞好感-1(不檢定🚩三師兄在唐門)<br>
            • 其餘唐門角色好感-1(若該角色🚩在唐門)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>伙房<br>掌廚</td>
		<td>狂放廚藝</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+3、向心-5、道德-1、命運+1<br>
            • 唐陞好感-1(不檢定🚩三師兄在唐門)<br>
            • 若🚩無可救藥線: 唐惟元好感-1(不檢定🚩四師兄在唐門)<br>
            • 其餘唐門角色好感-1(若該角色🚩在唐門)<br>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>伙房<br>掌廚</td>
		<td>心血來潮</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 廚藝+3、向心+3、銀兩-200<br>
            • 唐陞好感+1(不檢定🚩三師兄在唐門)<br>
            • 其餘唐門角色好感+1(若該角色🚩在唐門)<br>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>練功場<br>團練<br>優先判斷</td>
		<td>小梅切磋</td>
		<td>0</td>
		<td>-</td>
		<td>
			👉先不要: 接續團練事件判斷<br>
            <br>
            👉好啊: 觸發🆚戰小梅:<br>
            • 勝: 武學+4、虞小梅好感+1<br>
            • 負: 若全武學＜120，武學+2。向心+1、心相-15。<br>
		</td>
		<td>武學+2</td>
		<td>-</td>
		<td>機率 50%</td>
		<td>
            • 時間≤二年十二月下旬<br>
            • 🚩虞小梅在唐門<br>
        </td>
		<td>
            • 若未觸發此事件，接續團練事件判斷<br>
            • 初次對戰有對話差分<br>
        </td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>三師兄<br>帶操</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、武學+2、向心+2<br>
            • 唐陞好感+1<br>
        </td>
		<td>武學+2</td>
		<td>體力-1、內力-1</td>
		<td>基礎: 30</td>
		<td>🚩三師兄在唐門</td>
        <td>-</td>		
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>二師兄<br>帶操</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、向心+1、門人-1<br>
            • 唐錚好感+1</td>
		<td>煉丹+2<br></td>
		<td>體力-1、內力-1</td>
		<td>基礎: 30</td>
		<td>🚩二師兄在唐門</td>
		<td><MarkdownWrapper>[運功療傷](/event/simple/1-05-1-運功療傷)</MarkdownWrapper>前置條件</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>四師兄<br>帶操</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>大師兄<br>帶操</td>
		<td>0</td>
		<td>-10</td>
		<td>
            • 道德-1、體力-1、向心+2<br>
            • 唐布衣好感+1<br>
            • 🚩掌門在唐門: 唐中翎好感-1<br>
        </td>
		<td>
            心相≥80:<br>
            學問+1、輕功+1<br>
        </td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩大師兄在唐門</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>流彈誤傷</td>
		<td>0</td>
		<td>-66</td>
		<td>命運+1、暗器+1、武學+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>小師妹出沒</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 體力+1、內力+1、武學+2、向心-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>武學+2</td>
		<td>體力-1、內力-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩小師妹在唐門<br>
            • 🚩三師兄在唐門<br>
        </td>
        <td>-</td>		
	</tr>
    <tr>
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>掌門指點</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>留學生<br>擅自練功</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>留學生<br>推擠</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>留學弟子超團結</td>
		<td>0</td>
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
		<td></td>
	</tr>
    <tr>
		<td>唐門</td>
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
		<td>唐門</td>
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
		<td>唐門</td>
		<td>練功場<br>團練</td>
		<td>大師兄<br>蹴鞠</td>
		<td>0</td>
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
		<td>唐門</td>
		<td>女弟子房<br>埋伏</td>
		<td>守護小師妹</td>
		<td>-</td>
		<td>80</td>
		<td>道德-、性情-、輕功+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>有機率死亡（死法：摔死）</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>女弟子房<br>埋伏</td>
		<td>守護小師妹（被發現）</td>
		<td>-</td>
		<td>-20</td>
		<td>道德-、性情-、輕功+1、命運+1<br>小師妹好感-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>女弟子房<br>折紙鶴</td>
		<td>散心</td>
		<td>0</td>
		<td>40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>小師妹出嫁後</td>
		<td>有機率死亡</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>女弟子房<br>折紙鶴</td>
		<td>緬懷過往</td>
		<td>0</td>
		<td>80</td>
		<td>修養+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>小師妹出嫁後</td>
		<td>有機率死亡</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>休息</td>
		<td>0</td>
		<td>40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>休息（學大師兄）</td>
		<td>-</td>
		<td>50</td>
		<td>向心+5、處世+、修養-、輕功+1、暗器+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 最早第三年十月上旬<br>• 大師兄不在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>畏懼人間</td>
		<td>-</td>
		<td>-15</td>
		<td>性情-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>-</td>
		<td>-</td>
		<td>30</td>
		<td>福蘊好感+<br>四師兄好感-<br>銀兩+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>-</td>
		<td>-</td>
		<td>20</td>
		<td>福蘊好感+<br>向心力+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>四師兄</td>
		<td>0</td>
		<td>0</td>
		<td>學問+1、嘴力+1<br>向心+1<br>性情+1、修養-1<br>銀兩-100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>開啟商店<br>現在買賣後能順便飲食（僅能飲食，無法摺紙）</td>
	</tr>
    <tr>
		<td>下山</td>
		<td>優先判斷</td>
		<td>無特殊事件</td>
		<td>-</td>
		<td>-</td>
		<td>
			開啟下山指令選單
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>下山</td>
		<td>優先判斷</td>
		<td>姜記肉包</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 砸店<br>武學+2、名聲+2<br>上官好感-<br>掌門好感-<br>宋悲好感-<br>姜記肉包+1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘在唐門</td>
		<td>
			▲ 選項 1「排隊買」（消耗行動點）<br>學問-1、銀兩-500、姜記肉包+1<br>▲
			選項 2「不過是個肉包，浪費光陰真傻」<br>繼續行動<br>▲ 條件選項
			3「砸店」<br>須為道德[壞人]性情[勇敢]可選，道德-2<br>戰敗：生死簿
			86：被肉包噎死
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>優先判斷</td>
		<td>李富貴喝涼水</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>
			▲ 選項 1「無視」<br>繼續行動<br>▲ 選項 2「喝給他看」（消耗行動點）<br>銀兩-100、心相+30、道德-、修養-<br>處世+、李富貴好感-<br>▲
			選項 3「請客」（消耗行動點）<br>銀兩-200、心相+10、道德+、處世+、李富貴好感+
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>優先判斷</td>
		<td>李富貴跑腿</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>
			▲ 選項 1「替他指路」<br>李富貴好感+<br>▲ 選項
			2「沒辦法，我帶你去吧」（消耗行動點）<br>道德+、銀兩+200<br>▲ 選項
			3「介紹黑店收回扣」（消耗行動點）<br>道德-、李富貴好感-、四師兄好感+
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>優先判斷</td>
		<td>跑步</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選項 1「跑步」<br>體力+1、、輕功+1、小梅好感+1<br>▲ 選項
			2「正事要緊」<br>處世+1、小梅好感-1
		</td>
		<td>體力額外+1<br>輕功+1<br>小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>小梅在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(正常行商)<br>賺的不多不少</td>
		<td>16</td>
		<td>-15</td>
		<td>銀兩+1000<br>嘴力+1<br>名聲+1</td>
		<td>嘴力+1<br>名聲+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(成功行商)<br>誇大藥效爭相搶購</td>
		<td>16</td>
		<td>-15</td>
		<td>道德-2、性情+1、處世-2<br>嘴力+1<br>銀兩+1000<br>門派資產+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(行商大成功)<br>毫不留情<br>巧取豪奪</td>
		<td>16</td>
		<td>-15</td>
		<td>
			道德-4、性情+1、處世-90<br>嘴力+2<br>銀兩+2500<br>門派資產+200
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(行商大成功)<br>遠距離行商<br>賺的是正財</td>
		<td>16</td>
		<td>-15</td>
		<td>行動點-1<br>銀兩+3000<br>門派資產+200<br>體力+2<br>行動-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>行動次數≥2</td>
		<td>共扣行動次數2</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(行商失敗)<br>四師兄上茅廁<br>被盜</td>
		<td>-10</td>
		<td>-30</td>
		<td>銀兩-2000<br>四師兄好感-1<br>※第二次<br>江湖鬼蜮錄+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>四師兄在唐門</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>(行商大失敗)<br>行商失敗去當肥羊</td>
		<td>14</td>
		<td>-65</td>
		<td>銀兩-3000<br>修養-3、性情-3、處世+3<br>命運+1<br>四師兄好感-2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 銀兩 ≧3000<br>• 四師兄在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>行商</td>
		<td>肥羊事件第二次</td>
		<td>-</td>
		<td>-</td>
		<td>
			銀兩+1000<br>學問+1<br>※認識龍湘<br>▲ 幫龍湘還錢<br>銀兩-1000<br>道德+1、性情+1<br>龍湘好感+2<br>▲
			讓她自己想辦法<br>處世-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>8</td>
		<td>學問+1<br>修養+1<br>福韞好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>樹下說法 2</td>
		<td>10</td>
		<td>-12</td>
		<td>學問+1<br>修養+1<br>福韞好感+1<br>葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>-6</td>
		<td>修養-<br>葉雲舟好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 葉雲舟在唐門<br>• 福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>住戶糾紛</td>
		<td>10</td>
		<td>-12</td>
		<td>
			※小師妹：銀兩+200、門派資產+30<br>※葉雲裳：門派資產+20、葉雲舟好感+<br>※葉雲舟：心相-15、抗毒+1、葉雲裳好感+<br>※上官螢<br>※小菊<br>※小梅<br>※小竹<br>※龍湘<br>上官螢好感+<br>龍湘好感+
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>戰役：不論勝、敗：武學+2、門派資產-50</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>死皮賴臉</td>
		<td>-</td>
		<td>-12</td>
		<td>貢獻+10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選項 1「不付錢還想白住，滾」<br>武學+2、道德-2、修養-1、銀兩+200、資產+10<br>▲
			選項 2「要是有困難就先賒著」<br>道德+1、處世+1、貢獻-20、資產-10、掌門人好感+1、三師兄好感-1
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>收到租金</td>
		<td>10+6</td>
		<td>-12</td>
		<td>資產+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>福韞說教</td>
		<td>-</td>
		<td>-12</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>
			【秘笈】那由它劫指前置<br>▲ 選項
			1「救不了，但願意共苦」（消耗行動點）<br>性情+1、修養+1、心相-5、龍湘好感+2、福韞好感+1<br>▲
			選項 2「救不了，逃」<br>性情-1、繼續原有行動
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>打掃環境</td>
		<td>10</td>
		<td>-12</td>
		<td>外堡住客好感+1<br>※包含葉雲舟，不包含葉雲裳</td>
		<td>外堡住客好感額外+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>有入住唐門和外堡的都會加好感<br>※這邊效果好感確實是跳兩次+1</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>孝敬唐門</td>
		<td>16</td>
		<td>-2</td>
		<td>名聲+1<br>銀兩+500<br>資產+500</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>★ 應該是最快認識上官螢的途徑，有機會早於壽宴</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>苦命葉雲舟</td>
		<td>-</td>
		<td>-16</td>
		<td>名聲+2<br>葉雲舟好感+2、葉雲裳好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟削劍</td>
		<td>10</td>
		<td>-12</td>
		<td>刀劍+1<br>🚩葉雲舟削劍次數+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟在唐門</td>
		<td>
			▲ 選項 1「我也要！我也要！」:<br>
            名聲-1、處世+1、道德-1<br>▲
			選項 2「幫忙」:<br>
            處世-1、修養+1、鍛造+2、葉雲舟好感+1
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟教劍</td>
		<td>10</td>
		<td>-12</td>
		<td>刀劍+1<br>武學+5<br>葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 葉雲舟在唐門<br>🚩葉雲舟削劍次數≥5</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>茶水太燙</td>
		<td>10</td>
		<td>-32</td>
		<td>學問+1<br>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選項 1「揍他」<br>修養-1<br>勝利選呵涼再喝：嘴力+1、處世-1、銀兩+200<br>▲
			選項 2「息事寧人」<br>修養+1、名聲-1<br>戰敗：被燙死
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>口角糾紛</td>
		<td>10</td>
		<td>-12</td>
		<td>學問+1<br>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>戰役(門派亂戰，但不影響好感)<br>心相+15、武學+2</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>丐幫尋釁</td>
		<td>10</td>
		<td>-12</td>
		<td>學問+1<br>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			勝利：武學+2、丐幫向心-1<br>▲ 選項 1「行行好，下回別來鬧了」<br>修養+1、道德+1、銀兩-500、丐幫好感-1<br>▲
			選項 2「臭乞丐，請你們喝免費的滾燙熱茶」<br>修養-1、道德-1、名聲+2、向心+1、丐幫好感-2
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>飛石找碴</td>
		<td>10</td>
		<td>-12</td>
		<td>學問+1<br>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>名聲+1<br>武學+2<br>銀兩+200<br>資產+50<br>飛石幫向心力-1</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>請你吃瓜</td>
		<td>10</td>
		<td>18</td>
		<td>
			學問+1<br>向心+1<br>性情+1<br>修養-1<br>嘴力+1<br>銀兩-100
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>龍湘點茶</td>
		<td>10</td>
		<td>-10</td>
		<td>學問+1<br>修養+1<br>名聲+1<br>資產+20<br>龍湘好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>茶肆<br>茶博士</td>
		<td>午後小雨</td>
		<td>10</td>
		<td>18</td>
		<td>學問+1<br>修養+2<br>向心+1<br>性情+1/-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>水果報恩</td>
		<td>10</td>
		<td>8</td>
		<td>向心+1<br>道德+1<br>銀兩+200</td>
		<td>門派資產+10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>無償看病</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治瞎子</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫療糾紛</td>
		<td>10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			不認錯：道德-2 嘴力+1 處事+1 心相-12<br>善言勸回：道德+1 嘴力+1 修養+1
			處世-1 心相-62<br>息事寧人：銀兩-500 性情-1 處世-1 心相-32
		</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>一致認同</td>
		<td>10</td>
		<td>-2</td>
		<td>煉丹 5<br>道德 1<br>銀兩 100<br>二師兄好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>葉雲舟事件</td>
		<td>10</td>
		<td>-</td>
		<td>道德 1<br>修養 1<br>葉雲舟好感</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟在唐門</td>
		<td></td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>飛石幫事件</td>
		<td>10</td>
		<td>-12</td>
		<td>
			勸回：<br>道德+1 飛石幫向心+1 向心-2 貢獻-10<br>隨便：<br>向心+1
			飛石幫向心-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>丐幫事件</td>
		<td>10</td>
		<td>-12</td>
		<td>
			一言為定：<br>道德+1 向心-1 貢獻-10 丐幫向心+1<br>管你去死：<br>道德-1
			修養-1 向心+1 丐幫向心-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治黑狗</td>
		<td>10</td>
		<td>-</td>
		<td>
			黑狗咬傷：<br>心相-42、體力-1、<br>黑狗送禮：<br>心相-2、道德+
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治妓女</td>
		<td>10+20</td>
		<td>-52</td>
		<td>道德+、大師兄好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治公子哥</td>
		<td>10</td>
		<td>-32</td>
		<td>名聲+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>藥鋪<br>坐診</td>
		<td>醫治富庶之人</td>
		<td>10</td>
		<td>-12</td>
		<td>道德+<br>銀兩+500<br>門派資產+50</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>溫泉</td>
		<td>無事發生</td>
		<td>-</td>
		<td>-</td>
		<td>心相+70</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>溫泉</td>
		<td>涼棚垮了</td>
		<td>-</td>
		<td>15</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>生死簿 70：溺死</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>溫泉</td>
		<td>偷窺事件</td>
		<td>-</td>
		<td>30</td>
		<td>
			選項 1「聽話讓我看看」：<br>生死簿 69：自找死路<br>選項
			2「快住手」：<br>道德+1、向心-3、貢獻-10、唐門女性角色好感+1<br>選項
			3「水裡有蛇」：<br>道德+1 嘴力+1 處事+1 向心-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>溫泉</td>
		<td>身心舒暢</td>
		<td>-</td>
		<td>70</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>溫泉</td>
		<td>龍湘溫泉</td>
		<td>-</td>
		<td>50</td>
		<td>龍湘好感+3<br>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘告白後</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>義田<br>耕耘</td>
		<td>踏實努力</td>
		<td>12</td>
		<td>-12</td>
		<td>體力+1<br>性情-<br>處事-<br>修養-</td>
		<td>體力+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>偶遇福韞</td>
		<td>-</td>
		<td>-</td>
		<td>銀兩-10<br>道德+1<br>學問+1<br>福韞好感+1<br>秘笈金剛腿</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>李富貴<br>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>不知道是否跟醫術等級有關</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>弄蛇賣藝</td>
		<td>-</td>
		<td>30</td>
		<td>秘笈蛇形拳</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>李富貴好感限定贈與，沒有就只有心相+30</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>-</td>
		<td>-</td>
		<td>30</td>
		<td>秘笈蓮花落</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>李富貴好感限定贈與(紀錄時好感 3★)</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>-</td>
		<td>-</td>
		<td>-10</td>
		<td>抗毒+1<br>抗麻+1 <br>名聲+1<br>李富貴好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴在唐門</td>
		<td>李富貴的蛇逃跑了（觸發戰鬥）</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>逛街舒心</td>
		<td>-</td>
		<td>20</td>
		<td>處世+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>填飽舒心</td>
		<td>-</td>
		<td>20</td>
		<td>體力+1<br>性情-<br>處事-<br>修養-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>茶肆吃麵</td>
		<td>-</td>
		<td>20</td>
		<td>學問+1</td>
		<td>學問+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選項 1「他也是辛苦人，給錢當作善事」<br>銀兩-100、修養+、處世+、性情-<br>▲
			選項 2「我給你雙倍錢，你讓我拿槌子碎一次大石」<br>進入戰鬥<br>戰勝：<br>選項
			1「得饒人處且饒人」<br>名聲+1、門人+1<br>選項
			2「胸口碎大石（謀殺）」<br>道德-、修養-、處世-、性情+<br>戰敗：<br>銀兩-200、名聲-、性情-
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>摺紙藝人</td>
		<td>-</td>
		<td>30</td>
		<td>銀兩-200<br>唐默鈴好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>不講武德</td>
		<td>-</td>
		<td>-</td>
		<td>武學+<br>名聲-<br>修養-<br>向心+<br>資產+500<br>丐幫好感-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>何方妖孽</td>
		<td>-</td>
		<td>-</td>
		<td>
			勝利：武學+<br>▲ 選項 1「冷靜點，姑娘!」<br>道德+1、修養+1、名聲+1；錦香宮好感+1<br>▲
			選項 2「臭娘們，妳是不是想跟我成親」<br>道德-1、性情+1、修養-1、嘴力+1<br>▲
			選項 3「無情殺害」<br>道德-3、修養-2、性情+2、名聲-2、錦香宮好感-4、龍湘好感-3
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>端茶掙錢</td>
		<td>-</td>
		<td>30</td>
		<td>銀兩-500<br>龍湘好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>增長見聞</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>破財相</td>
		<td>-20</td>
		<td>-</td>
		<td>性情-<br>名聲+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>飛石尋釁</td>
		<td>-</td>
		<td>-</td>
		<td>
			【&lt;60】怎樣想怎樣打架阿<br>【&gt;=60】迴避<br>心相+20、名聲+1、飛石幫好感-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>挑戰龍湘</td>
		<td>-</td>
		<td>-10</td>
		<td>性情-1<br>武學+2<br>刀劍+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>壓寨夫人</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘好感+1<br>武學+1<br>心相+6</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘在唐門</td>
		<td>-</td>
	</tr>
	<tr>
		<td>下山</td>
		<td>鬧市<br>逛街</td>
		<td>偶遇釣魚</td>
		<td>-</td>
		<td>-</td>
		<td>李富貴好感+1<br>樊嘯天好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 李富貴在唐門<br>• 樊嘯天在唐門</td>
		<td>可利用SL刷樊嘯天好感</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>四師兄買物<br>銀兩-100</td>
		<td>0</td>
		<td>100</td>
		<td>四師兄好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>別於蜀中<br>銀兩-300</td>
		<td>0</td>
		<td>20</td>
		<td>學問+2<br>處世+2<br>銀兩-300</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>鐵拳巷<br>銀兩-300</td>
		<td>0</td>
		<td>20</td>
		<td>鍛造+5<br>銀兩-300<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>逛街</td>
		<td>偶遇小梅<br>銀兩-300</td>
		<td>0</td>
		<td>-</td>
		<td>處世+1<br>性情+1<br>銀兩-300<br>虞小梅好感+2</td>
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
		<td>0</td>
		<td>-20</td>
		<td>命運 1<br>處世 1<br>修養-1<br>道德-1<br>銀兩-1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場</td>
		<td>小賺一把</td>
		<td>0</td>
		<td>20</td>
		<td>處世 1<br>道德-1<br>修養-1<br>銀兩+1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>賭場</td>
		<td>大賺一把</td>
		<td>0</td>
		<td>30</td>
		<td>處世 1<br>道德-1<br>修養-1<br>銀兩+3000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>擂台</td>
		<td>丐幫弟子&lt;33</td>
		<td>0</td>
		<td>0</td>
		<td>
			武學 2<br>性情 1<br>銀兩 500<br>對應門派 1<br>（獲勝三次後，額外增加嘴力、學問）
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>飛天門(輕功)<br>鐵拳門(體力)<br>玄功門(拳掌)<br>奪魄門(暗器)</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>擂台</td>
		<td>江湖拳師&lt;66</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>無色廣場<br>擂台</td>
		<td>路人俠&gt;=66</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>對應門派<br>修練<br>優先判斷</td>
		<td>無特殊事件</td>
		<td>0</td>
		<td></td>
		<td>接續對應門派修練事件</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
    <tr>
		<td>崆峒</td>
		<td>對應門派<br>修練<br>優先判斷</td>
		<td>小梅跑步</td>
		<td>0</td>
		<td></td>
		<td>接續小梅跑步事件</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>認識虞小梅</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>對應門派<br>修練</td>
		<td>飛天門</td>
		<td>0</td>
		<td>-20</td>
		<td>武學+6<br>輕功+1</td>
		<td>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>對應門派<br>修練</td>
		<td>鐵拳門</td>
		<td>0</td>
		<td>-20</td>
		<td>武學+6<br>體力+1</td>
		<td>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>對應門派<br>修練</td>
		<td>玄功門</td>
		<td>0</td>
		<td>-20</td>
		<td>武學+6<br>拳掌+1</td>
		<td>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>對應門派<br>修練</td>
		<td>奪魄門</td>
		<td>0</td>
		<td>-20</td>
		<td>武學+6<br>暗器+1</td>
		<td>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>嘴炮(內力)</td>
		<td>0</td>
		<td>45</td>
		<td>
			名聲 2<br>內力 1<br>
			嘴力 1<br>性情 1<br>處世 1<br>道德-1<br>修養-1<br>學問-2<br>
			虞小梅好感-2
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>嘴炮(暗器)</td>
		<td>0</td>
		<td>35</td>
		<td>
			嘴力 2<br>名聲 2<br>暗器 1<br>性情 1<br>處世 1<br>道德-1<br>修養-1<br>學問-2<br>掌門好感-1<br>虞小梅好感-2
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>自視甚高</td>
		<td>0</td>
		<td>35</td>
		<td>
			輕功 1<br>內力 1<br>抗毒 1<br>抗麻 1<br>性情 1<br>處世 1<br>學問-1<br>嘴力-1<br>道德-1<br>修養-1<br>虞小梅好感-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>信口雌黃</td>
		<td>0</td>
		<td>35</td>
		<td>
			學問-<br>修養-<br>道德-<br>性情+<br>處世+<br>嘴力+<br>名聲+<br>虞小梅-<br>唐中翎-<br>唐默鈴-
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>被道長火球</td>
		<td>0</td>
		<td>15</td>
		<td>學問-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>修仙兩次</td>
		<td>生死簿 15：「自食惡果」</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>無能手藝</td>
		<td>-</td>
		<td>-26</td>
		<td>鍛造+5<br>命運+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>頭暈腦脹</td>
		<td>-</td>
		<td>-21</td>
		<td>鍛造+5<br>修養-<br>名聲+1<br>郁竹好感-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>滿意成果</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+10<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>熟能生巧</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+15<br>修養-<br>暗器+1<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>靈光乍現</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+18<br>修養-<br>處世-<br>名聲+<br>暗器+2<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>鐵拳巷<br>打鐵</td>
		<td>神工附體</td>
		<td>-</td>
		<td>-16</td>
		<td>
			鍛造+20<br>修養-1<br>體力-2<br>內力-2<br>名聲+2<br>暗器+3<br>郁竹好感+3
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>誦讀</td>
		<td>-</td>
		<td>10</td>
		<td>學問+1<br>魏菊好感+1</td>
		<td>學問額外+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>多次遭遇會觸發魏菊想要種田(契合她的耕陽出身)，額外增加好感一次</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>心滿意足</td>
		<td>-</td>
		<td>20</td>
		<td>學問+1</td>
		<td>-</td>
		<td>學問+0</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>玄功洞<br>讀書</td>
		<td>開拓思緒</td>
		<td>-</td>
		<td>-20</td>
		<td>學問+1<br>處世-1</td>
		<td>學問額外+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>3 次左右遭遇會觸發魏菊的認同，額外增加好感一次（魏菊好感+5）</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>捉住破綻</td>
		<td>-</td>
		<td>-2</td>
		<td>武學+6<br>性情+1<br>學問+2<br>銀兩+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>輕鬆取勝</td>
		<td>-</td>
		<td>-12</td>
		<td>武學+6<br>性情+2<br>修養-1<br>銀兩+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>下棋</td>
		<td>略有所得</td>
		<td>-</td>
		<td>-12</td>
		<td>武學+6<br>學問+1<br>性情-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>追求者</td>
		<td>-</td>
		<td>-</td>
		<td>輕功+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			武學+1<br>▲ 選項 1「放生」<br>修養+1、道德+1、處世-1、名聲+1<br>▲
			選項 2「從樓梯上推下去」<br>性情+1、道德-1、處世+1、虞小梅好感+1
		</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>抄捷徑：失敗</td>
		<td>-</td>
		<td>-25</td>
		<td>嘴力+1<br>道德-1<br>名聲-1<br>命運+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>不擇手段</td>
		<td>-</td>
		<td>-</td>
		<td>道德-2<br>修養-1<br>處世+1<br>輕功+1<br>虞小梅好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>英俊少俠</td>
		<td>-</td>
		<td>10</td>
		<td>體力+1<br>輕功+1<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>圓滿完程</td>
		<td>-</td>
		<td>10</td>
		<td>體力+2<br>輕功+2<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>狀態絕佳</td>
		<td>-</td>
		<td>10</td>
		<td>體力+2<br>輕功+2<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>小梅<br>跑步</td>
		<td>燒烤山味</td>
		<td>-</td>
		<td>50</td>
		<td>體力+1<br>銀兩-200<br>虞小梅好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>不置可否</td>
		<td>-</td>
		<td>-5</td>
		<td>武學+5</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>藉口一堆</td>
		<td>-</td>
		<td>-10</td>
		<td>武學+2<br>嘴力+2<br>夏侯蘭好感-2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>亂打一氣</td>
		<td>-</td>
		<td>-10</td>
		<td>武學+2<br>命運+1<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>鋤草功</td>
		<td>-</td>
		<td>0</td>
		<td>武學+2<br>體力+1<br>刀劍+1<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>武學+7<br>拳掌+1<br>夏侯蘭好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>行招走式</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>武學+7<br>刀劍+2<br>夏侯蘭好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>刀劍兵器</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>必殺心得</td>
		<td>-</td>
		<td>-20</td>
		<td>武學+6<br>拳掌+2<br>刀劍+2<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>無所事事</td>
		<td>-</td>
		<td>60</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>出來玩</td>
		<td>-</td>
		<td>40</td>
		<td>輕功+1<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>別派觀望</td>
		<td>-</td>
		<td>20</td>
		<td>處事+<br>性情-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>上街消遣</td>
		<td>有礙觀瞻</td>
		<td>-</td>
		<td>-20</td>
		<td>
			▲ 選項 1「你有種再說一次!」<br>戰勝；<br>銀兩-100、修養-、性情+<br>處世+、名聲+、武學+<br>戰敗；<br>心相-20、修養-、名聲-<br>▲
			選項 2「息事寧人」<br>修養+、處世-1、性情-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>上街消遣</td>
		<td>不由分說</td>
		<td>-</td>
		<td>0</td>
		<td>-</td>
		<td>-</td>
		<td>戰敗：<br>行動點-1</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選項 1「送交官府」<br>武學+2、修養+1、性情-1、名聲-1、宋悲好感+1<br>▲
			選項 2「打暈拎出城外棄置」<br>道德-2、修養-1、處世+1、名聲+1<br>▲ 選項
			3「不打不相識，請他喝酒」<br>心相+30、道德-1、處世-1、名聲-1、南宮家好感-1
		</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>上街消遣</td>
		<td>心曠神怡</td>
		<td>0</td>
		<td>30</td>
		<td>體力 1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>上街消遣</td>
		<td>上街消遣</td>
		<td>-</td>
		<td>40</td>
		<td>修養+1<br>銀兩-200</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>無所事事</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			與南宮深遊湖<br>（與南宮深第一次切磋並撐過一定回合互相吹捧後解鎖）：<br>道德-1、南宮深好感+1、名聲+1、學問+1、處世-1、性情+1、心相+50<br>第二次以後：<br>南宮深好感+2
		</td>
		<td>沒有遇到任何人：<br>心相+40</td>
		<td>南宮淺：<br>南宮淺好感+</td>
		<td>-</td>
		<td>-</td>
		<td>
			與南宮家人交流、回復心相<br>（給零用錢事件也在這裡觸發，推測需要南宮深好感
			1 或者戰役狀況不好不壞以上或純運氣）
		</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>出城衝殺</td>
		<td>出城衝殺</td>
		<td>-</td>
		<td>-15</td>
		<td>名聲+15<br>向心-<br>丐幫向心-<br>銀兩+500</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>進戰役，戰場撿錢另計</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>院中練武</td>
		<td>南宮深</td>
		<td>-</td>
		<td>-20</td>
		<td>贏<br>武學+(4)<br>處世+<br>修養-<br>南宮深+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>院中練武</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>平手</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>院中練武</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>輸</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>院中練武</td>
		<td>南宮家丁</td>
		<td>-</td>
		<td>-</td>
		<td>武學+2<br>銀兩+1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>南宮家丁&lt;80<br>賭錢：性情+、處世+</td>
	</tr>
	<tr>
		<td>江陵<br>圍城</td>
		<td>院中練武</td>
		<td>南宮淺</td>
		<td>-</td>
		<td>-20</td>
		<td>贏<br>武學+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>像你這種軟腳蝦決鬥者就交給南宮淺對付&lt;40<br>武學進展有限</td>
	</tr>
	<tr>
		<td style="text-align: center">離家<br>出走</td>
		<td style="text-align: center">**釣魚**</td>
		<td style="text-align: center">收穫豐富</td>
		<td style="text-align: center">-</td>
		<td style="text-align: center">10</td>
		<td style="text-align: center">銀兩+200</td>
		<td style="text-align: center">-</td>
		<td style="text-align: center">-</td>
		<td>-</td>
		<td>-</td>
		<td style="text-align: center">-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>釣魚</td>
		<td>沒什麼收穫</td>
		<td>-</td>
		<td>20</td>
		<td>修養+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>釣魚</td>
		<td>女式衣裙</td>
		<td>-</td>
		<td>30</td>
		<td>贏（真的不是我）：武學+2 道德+1 修養+1 處世-1 黃酒+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>可以利用此事件刷黃酒</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>釣魚</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>贏（扔水）：</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>釣魚</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>輸：</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>鬧市閒逛</td>
		<td>假裝自己有家可歸</td>
		<td>-</td>
		<td>20</td>
		<td>銀兩-50</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>流連賭坊</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-30</td>
		<td>銀兩-2000 道德-1 修養-1 處世+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>流連賭坊</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>30</td>
		<td>銀兩+1000 道德-1 修養-1 名聲-1 處世+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>客棧飲茶</td>
		<td>裝模作樣</td>
		<td>-</td>
		<td>30</td>
		<td>銀兩-100 學問+1 處世-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
	<tr>
		<td>離家<br>出走</td>
		<td>獨自練功</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
</Table>

## 備註
• 心相65為綠臉，但是會有黃臉的額外加成。<br>
• 基礎效果 + 額外效果 = 實際效果。如低心相時，(基礎學問+2) + (低心相學問-1) = 實際學問+1。<br>
• 本條目參考[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)撰寫。<br>
<br>
<BTable
	:stickyHeader="true"
	:tags="[
{
text: '道德+',
},
{
text: '道德-',
},
{
text: '名聲+',
},
{
text: '名聲-',
},
{
text: '性情+',
},
{
text: '性情-',
},
{
text: '修養+',
},
{
text: '修養-',
},
]"
>
</Btable>
