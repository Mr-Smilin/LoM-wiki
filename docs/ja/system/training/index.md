---
aside: false
borderless: true
title: 養成コマンド
tags:
  - develop
  - 養成
  - イベント
---

# {{ $frontmatter.title }}
<br>
本表は養成コマンドのランダムイベントの大部分を列挙している。検索機能で絞り込むことを推奨。記述の方針は備考を参照。<br>


## イベント一覧

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
text: '家出',
},
{
text: '青城',
},
{
text: '江陵囲城',
},
{
text: '雪山',
},
{
text: '錦香宮',
},
{
text: '道徳+',
},
{
text: '葉雲裳好感+',
},
]"
>
	<tr>
		<td :unsortable="true" style="text-align: center">場所</td>
		<td :unsortable="true" style="text-align: center">コマンド</td>
		<td :unsortable="true" style="text-align: center">イベント名</td>
		<td :unsortable="true" style="text-align: center">貢献</td>
		<td :unsortable="true" style="text-align: center">心相</td>
		<td :unsortable="true" style="text-align: center">
			<MoodIcon :mood="`normal`" /><br>            
            心相:<br>
            33~64<br>
            基礎効果
		</td>
		<td :unsortable="true" style="text-align: center">
            <MoodIcon :mood="`high`" /><br>            
            心相:<br>
            65~100<br>
            追加効果
		</td>
		<td :unsortable="true" style="text-align: center">
			<MoodIcon :mood="`bad`" /><br>            
            心相:<br>
            0~32<br>
            追加効果
		</td>
        <td :unsortable="true" style="text-align: center">確率重み</td>
		<td :unsortable="true" style="text-align: center">必要条件</td>
        <td :unsortable="true" style="text-align: center">備考</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>正心堂<br>焚香</td>
		<td>工作輕鬆</td>
		<td>11</td>
		<td>-12</td>
		<td>
            • 品性+1、処世-1、団結-1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感+1<br>
            • 🚩「無可救薬ルート」: 唐陞好感+1<br>            
        </td>
		<td>品性+1<br>処世+1</td>
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
		<td>学問+2、処世-1、団結-1</td>
		<td>武学+2<br>鍛造+2<br>煉丹+2</td>
		<td>学問-1</td>
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
            • 処世-1、体力+1、武学+2、団結-2<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感-1<br>
            • 🚩「無可救薬ルート」: 唐陞好感-1<br> 
        </td>
		<td>-</td>
		<td>体力-1</td>
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
            • 弁舌+1、処世+1、性情+1、道徳-1、団結-1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感+2<br>
            • 🚩「無可救薬ルート」: 唐陞好感+2<br>            
        </td>
		<td>-</td>
		<td>弁舌-1</td>
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
            • 銀両-1000、処世+1、団結-2、運命+1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感-3<br>
            • 🚩「無可救薬ルート」: 唐陞好感-3<br> 
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
			• 学問+1<br>
            • 福韞好感+1、唐中翎好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「掌門が唐門にいる」<br>
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
			• 処世±2、性情±2、団結-1、学問+2、弁舌-1<br>
            • 唐中翎好感+1、唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「三師兄が代掌門」なし<br>
            • 🚩「掌門が唐門にいる」<br>
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
            • 団結-1、品性+1、処世-1、銀両-50<br>
            • 唐惟元好感+1<br>
			• 「甘蔗」+1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「四師兄が唐門にいる」<br>
            • 🚩「掌門が唐門にいる」<br>
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
			• 処世±2、性情±2、団結-2、学問+2、弁舌-1<br>
            • 唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「三師兄が代掌門」<br>
            • 学問≥50<br>
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
            (この項目は独立イベントではなく、瞑想イベントの追加段階。必要条件を参照)<br>
            • 心相≥70: 🚩「内傷の治癒」+3<br>
            • 70＞心相≥30: 🚩「内傷の治癒」+2<br>
            • 心相＜30: 🚩「内傷の治癒」+1<br>
            • 🚩「内傷の治癒」≥10なら: 「経脈閉塞」および「失魂落魄」を解除
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 技能「経脈閉塞」または「失魂落魄」を持っている場合<br>
            • かつ発生した瞑想イベントに「打坐痊癒」効果がある場合<br>
            • この段階に進んで判定<br>
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
            • 品性+1、弁舌-1、内功+1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
        </td>
		<td>内功+1</td>
		<td>内功-1</td>
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
            • 内功+2、弁舌-1、体力-1、抗毒+2、抗麻+2<br>
			• 品性+1、性情±1、処世±1<br>
            • 🚩「掌門が唐門にいる」なら: 唐中翎好感+1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
		</td>
		<td>-</td>
		<td>内功-1</td>
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
            品性-1、処世-1、刀剣+1、鍛造+2、団結-5
        </td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            • 基礎: 25<br>
            • 品性≤50: +5<br>
            • 品性≤25: +10<br>
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
            内功-1、体力-1、団結-5、運命+1
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
            • 品性+2、弁舌-2、内功+1、拳掌+1<br>
            • 性情±1、処世±1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
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
            • 品性+2、道徳+2、弁舌-1<br>
            • 性情±2、処世±2<br>
            • 「打坐療傷」(上のイベントを参照)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            薪運びのランダムイベントに続く
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び<br>優先判定</td>
		<td>龍湘練劍</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 👉 そっとしておく: 薪運びのランダムイベントに続く<br>
            • 👉 剣の使い方を教えてやる: 🆚対決：龍湘<br>
            • 勝利：武学+6、敗北：武学+2、龍湘好感+1<br>
            • 初めて発生し、かつ龍湘夜遊を発生済みなら: 龍湘心事に続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「龍湘と結縁」なし<br>
            • 最短で3年目11月中旬<br>            
        </td>
		<td>
			• 龍湘心事は龍湘と結縁するための必須イベント<br>
            • <text style="color : red">執筆待ち</text>: 龍湘夜遊および龍湘心事イベント<br>
		</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>穩健幹活</td>
		<td>13</td>
		<td>-20</td>
		<td>性情+1、体力+1、軽功+1</td>
		<td>軽功+1</td>
		<td>体力-1<br>軽功-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>扭傷腳</td>
		<td>13</td>
		<td>-31</td>
		<td>体力+1、軽功+1、性情+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>大難不死</td>
		<td>13</td>
		<td>-60</td>
		<td>性情+1、運命+1、銀両-1000</td>
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
		<td>後山<br>薪運び</td>
		<td>踏崩岩壁</td>
		<td>-</td>
		<td>-</td>
		<td><MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +30<br>
            • 心相≤10: +50<br>
            • 軽功≥50: -50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>抄捷徑</td>
		<td>13</td>
		<td>-5</td>
		<td>軽功+2、性情+1</td>
		<td>-</td>
		<td>軽功-1</td>
		<td>
            • 基礎: 25<br>
            • 軽功≥20: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>無敵號與<br>一團廢紙</td>
		<td>13<br>+10</td>
		<td>-20</td>
		<td>
            • 体力+1、武学+2<br>
            • 葉雲舟好感+1<br>
            • <MarkdownWrapper>[葉雲裳の体当たり](/ja/event/simple/1-08-1-葉雲裳衝擊)</MarkdownWrapper>イベントが発生<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「葉雲舟が唐門にいる」<br>
            • 🚩「小師妹が唐門にいる」<br>
            • <MarkdownWrapper>[師妹の新しい友達](/ja/event/simple/1-08-2-師妹交友)</MarkdownWrapper>を発生済み<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>
            • <MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>を取得可能<br>
		</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>利用陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 体力+1<br>
            • 李富貴好感+1<br>
            • 🚩「四師兄が唐門にいる」なら: 唐惟元好感+1<br>
            • 🚩「葉雲裳が唐門にいる」なら: 葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>誤踩陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
			👉葉雲裳をかばう: 道徳-1、処世-1、李富貴好感-2、葉雲裳好感+1<br>
			👉葉雲舟に告げ口: 道徳+1、処世+1、李富貴好感+2、葉雲裳好感-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
            • 🚩「葉雲舟が唐門にいる」<br>
            • 🚩「葉雲裳が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>挖礦</td>
		<td>13</td>
		<td>-20</td>
		<td>• 銀両+500<br>
            • 処世+1、道徳-1<br>
            • 李富貴好感+1<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>維修棧道</td>
		<td>13<br>+5</td>
		<td>-20</td>
		<td>
            • 体力+1、鍛造+5<br>
            • 唐陞好感+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>登崖眺望</td>
		<td>-</td>
		<td>-20</td>
		<td>
			<MarkdownWrapper>[後山で人を押す](/ja/event/simple/1-04-1-後山推人)</MarkdownWrapper>イベントが発生<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 1年目5月下旬以前<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>
            • <MarkdownWrapper>[生死簿02：転落死](/ja/event/badends/#生死簿-No.2)</MarkdownWrapper>を取得可能<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
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
		<td>🚩「葉雲舟が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>薪運び</td>
		<td>路人俠</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 軽功+1<br>
            • 🆚対決：通りすがりの侠客 が発生:<br>
            • 敗北: <MarkdownWrapper>[生死簿09：失踪ごっこ](/ja/event/badends/#生死簿-No.9)</MarkdownWrapper>へ進む<br>
            • 勝利: 👉逃がす: 道徳+2、名声+1。👉谷底へ突き落とす: 道徳-2。<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            • 通りすがりの侠客が誰かはゲーム内時間で決まる:<br>
            • 1年目6月下旬以前<br>
            • 1年目12月下旬以前<br>
            • 2年目6月下旬以前<br>
            • 2年目12月下旬以前<br>
            • 3年目6月下旬以前<br>
            • 4年目6月下旬以前<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>練武<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>練武のランダムイベントに続く</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>練武<br>優先判定</td>
		<td>小師妹烤魚</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「葉雲裳が唐門にいる」場合:<br>
            👉 水遊びの時間: 心相+20、料理+1、唐默鈴好感+2、葉雲裳好感+2、想い人判定:<br>
            • 想い人が葉雲裳でなく、かつ唐默鈴でもない: 心変わり+3<br>
            👉 計画を乱すわけにはいかない: 練武のランダムイベントに続く<br>
            <br>
            🚩「葉雲裳が唐門にいない」場合:<br>
            👉 魚捕りの時間: 心相+20、料理+1、唐默鈴好感+2、想い人判定:<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
            👉 計画を乱すわけにはいかない: 🚩「唐默鈴と結縁」判定: <br>
            • 結縁していない: 練武のランダムイベントに続く<br>
            • 結縁している: 武学+3、心相+5、唐默鈴好感+1、修練画面を開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「小師妹が唐門にいる」<br>
            • 🚩「後山の焼き魚を停止」なし (<MarkdownWrapper>[後山埋葬](/ja/event/simple/3-01-3-後山安葬)</MarkdownWrapper>から<MarkdownWrapper>[一時の平穏](/ja/event/simple/3-02-1-一波暫平)</MarkdownWrapper>まで)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>後山<br>練武</td>
		<td>正常</td>
		<td>-</td>
		<td>-20</td>
		<td>武学+5、修練画面を開く</td>
		<td>武学+3</td>
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
            料理+1、心変わり-1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩「小師妹が唐門にいない」<br>
            • 想い人が唐默鈴<br>
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
            • 想い人が虞小梅: 虞小梅好感≥45、心相+30<br>
            • 想い人が虞小梅でない: 唐布衣好感＜40、会話差分<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 55</td>
		<td>
            • 🚩「虞小梅が唐門にいる」<br>
            • 最遅で2年目12月下旬<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 優先イベントなし、鍛冶のランダムイベントに続く<br>
            • ランダムイベント後、鍛造画面を開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            「兵器損壊」状態でない
         (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶<br>優先判定</td>
		<td>修復兵器</td>
		<td>-</td>
		<td>-</td>
		<td>
            「兵器損壊」状態を解除 (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)。<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            「兵器損壊」状態
         (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶</td>
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
		<td>鍛冶場<br>鍛冶</td>
		<td>頭暈腦脹</td>
		<td>10</td>
		<td>-25</td>
		<td>
			• 品性-1、鍛造+5、名声+1<br>
            • 🚩「四師兄が唐門にいる」なら: 銀両+1000、唐惟元好感+1<br>
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
		<td>鍛冶場<br>鍛冶</td>
		<td>心有雜念</td>
		<td>10</td>
		<td>-66</td>
		<td>鍛造+5、運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 処世≥60: +5<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>品質良好</td>
		<td>10</td>
		<td>-16</td>
		<td>鍛造+8、刀剣+1、品性-1</td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            • 基礎: 25<br>
            • 心相≥50: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
    </tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>留學生想<br>偷窺秘方</td>
		<td>10</td>
		<td>-26</td>
		<td>
            • 品性-1、処世+1<br>
            • 🚩「留学生の紛争」+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≤30: +20<br>
        </td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5なら: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1に設定<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>留學生尊重</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 名声+1、鍛造+5、銀両+1000<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>講経堂<br>庶務</td>
		<td>大有學問</td>
		<td>12</td>
		<td>-16</td>
		<td>
            • 学問+1、品性+1<br>
            • 性情＞20なら: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>🚩「三師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>講経堂<br>庶務</td>
		<td>心煩意亂</td>
		<td>12<br>+5</td>
		<td>-16</td>
		<td>
            • 学問+1、体力-1<br>
            • 性情＞20なら: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「三師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>講経堂<br>庶務</td>
		<td>誘騙招募</td>
		<td>12</td>
		<td>-16</td>
		<td>
            道徳-1、名声+2、門人+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 道徳＜20: +50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹<br>優先判定</td>
		<td>苦命葉雲舟</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉 葉雲舟を手伝いに行く: <br>
            • 処世+1、煉丹+3、刀剣+1<br>
            • 葉雲舟好感+2、唐錚好感-1<br>
            <br>
			👉 葉雲舟を放っておく:<br>
            • 煉丹のランダムイベントに続く<br>
            • 新イベントでは心相が再び減るが、貢献は加算されない<br>
		</td>
		<td>-</td>
		<td>👉 手伝いに行く:<br>刀剣-1</td>
		<td>
            確率 40%
        </td>
		<td>
            • 🚩「唐錚が唐門にいる」<br>
            • 🚩「葉雲舟が唐門にいる」<br>
        </td>
		<td>
            このイベントが発生しなかった場合、または👉「放っておく」を選択した場合: <br>
            ランダムイベント後、煉丹画面を開く<br>
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
		<td>煉丹+3、処世+1、団結+2、名声-2</td>
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
            • 道徳-1、名声-1、団結-5            
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
            • 煉丹+5、運命+1<br>
            • 唐錚好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相＜30: +40<br>
        </td>
		<td>🚩「唐錚が唐門にいる」</td>
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
            • 道徳≥40の場合: 道徳-1<br>
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
            • 煉丹+10、処世-1<br>
            • 唐錚好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 心相≥80: +40<br>
        </td>
		<td>🚩「唐錚が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生壞壞</td>
		<td>10</td>
		<td>-21</td>
		<td>
            • 煉丹+5、団結-1、名声-1<br>
            • 🚩「留学生の紛争」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生友好</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 煉丹+5、学問+1<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
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
			👉やめてよ: 対決が発生<br>
            • 勝利: 武学+2(全武学＜200)または+5(全武学＜120)、虞小梅好感-2<br>
            • 敗北: 武学+2(全武学＜120)、団結+1<br>
            <br>
			👉私が手伝うよ:<br>
            • 道徳-2<br>
            • 虞小梅好感+2、唐惟元好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「小梅が唐門にいる」<br>
            • 一度きりのイベント、再発生不可
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>預算合理</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、団結+1<br>
            • 唐陞好感+1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>胡椒粉</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、道徳-1、団結-1、抗毒+3、抗麻+3<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感-1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感-1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感-1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
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
		<td>伙房<br>炊事</td>
		<td>狂放廚藝</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+3、団結-5、道徳-1、運命+1<br>
            <br>
            🚩「無可救薬ルート」なし:<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感-1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感-1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感-1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
            <br>
            🚩「無可救薬ルート」:<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
            • 唐陞好感-1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 性情≥60: +5<br>
            • 処世≥60: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>掌門健康</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、団結+2、道徳+1、処世+1<br>
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
		<td>伙房<br>炊事</td>
		<td>小師妹<br>愛吃的菜</td>
		<td>13</td>
		<td>-24</td>
		<td>
            料理+2、団結+5、銀両-200
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「小師妹が唐門にいない」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>師妹代班</td>
		<td>13<br>-5</td>
		<td>-4</td>
		<td>
            • 🚩「唐默鈴と結縁」: 差分イラストあり<br>
            • 団結+2<br>
            • 唐默鈴好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 料理≥3: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>貪吃龍湘</td>
		<td>13</td>
		<td>-7</td>
		<td>
            • 料理+1、団結+1<br>
            • 龍湘好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 料理≥5: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>
            • 最短で3年目11月中旬<br>
            • 🚩「龍湘が唐門にいる」
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>心血來潮</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+3、団結+3、銀両-200<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感+1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感+1<br>
            • 唐陞好感+1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感+1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感+1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 性情≥60: +5<br>
            • 料理≥5: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>-</td>
		<td>発生時、銀両を判定しない</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>茶肆果子</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 茶屋建設済み: 名声+1、門派資産+100、🚩「茶屋に小梅の菓子を追加」に設定<br>
            • 茶屋未建設: 門派資産+300<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 2年目12月下旬以前<br>
            • 🚩「虞小梅が唐門にいる」<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>🚩「茶屋に小梅の菓子を追加」: 現状効果なし</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>伙房<br>炊事</td>
		<td>晁和假請客</td>
		<td>13</td>
		<td>-9</td>
		<td><MarkdownWrapper>[晁和搞鬼イベント集](/ja/event/simple/1-08-3-晁和搞鬼事件集)</MarkdownWrapper>イベントが発生</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「晁和が唐門にいる」<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>掃除</td>
		<td>枯燥工作</td>
		<td>12</td>
		<td>-12</td>
		<td>体力+1、団結+1</td>
		<td>体力+1</td>
		<td>体力-1</td>
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
            • 軽功-1、運命+1<br>
            • 茅台酒x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
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
            • 体力+1、団結+2、性情-1<br>
            • 唐陞好感+1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
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
		<td>体力+1、団結+3、処世+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 25<br>
            • 団結≥50: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練<br>優先判定</td>
		<td>小梅切磋</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 やめておく: 団練のランダムイベントに続く<br>
            <br>
            👉 いいよ: 🆚戦：小梅が発生:<br>
            • 勝利: 武学+4、虞小梅好感+1<br>
            • 敗北: 全武学＜120なら、武学+2。団結+1、心相-15。<br>
		</td>
		<td>武学+2</td>
		<td>-</td>
		<td>確率 50%</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「虞小梅が唐門にいる」<br>
        </td>
		<td>
            • このイベントが発生しなかった場合、団練のランダムイベントに続く<br>
            • 初回の対戦時は会話差分あり<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>三師兄帶操</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、武学+2、団結+2<br>
            • 唐陞好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 30</td>
		<td>🚩「三師兄が唐門にいる」</td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>二師兄帶操</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、団結+1、門人-1<br>
            • 唐錚好感+1</td>
		<td>煉丹+2<br></td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 30</td>
		<td>🚩「二師兄が唐門にいる」</td>
		<td><MarkdownWrapper>[運功による治療](/ja/event/simple/1-05-1-運功療傷)</MarkdownWrapper>の前提条件</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>四師兄帶操</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 体力+1、武学+1、団結+3<br>
            • 唐惟元好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1</td>
		<td>基礎: 30</td>
		<td>🚩「四師兄が唐門にいる」</td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>大師兄帶操</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 道徳-1、体力-1、団結+2<br>
            • 唐布衣好感+1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
        </td>
		<td>
            心相≥80:<br>
            学問+1<br>
            軽功+1<br>
        </td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「大師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>流彈誤傷</td>
		<td>-</td>
		<td>-66</td>
		<td>運命+1、暗器+1、武学+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>小師妹出沒</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、武学+2、団結-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「小師妹が唐門にいる」<br>
            • 🚩「三師兄が唐門にいる」<br>
        </td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>掌門指點</td>
		<td>-</td>
		<td>-15</td>
		<td>
			• 体力+1、内功+1、軽功+1<br>
            • 団結+1、名声+1、武学+3<br>
            • 唐中翎好感+1<br>
		</td>
		<td>武学+2</td>
		<td>体力-1</td>
		<td>基礎: 10</td>
		<td>🚩「掌門が唐門にいる」</td>
		<td><MarkdownWrapper>[唐門内戦](/ja/event/simple/2-12-3-唐門內戰)</MarkdownWrapper>で掌門が動けない場合: 🚩「掌門が唐門にいない」扱い</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>留學生<br>擅自練功</td>
		<td>-</td>
		<td>-21</td>
		<td>
            • 名声-1、武学+1、団結+1<br>
            • 🚩「留学生の紛争」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>留學生<br>推擠</td>
		<td>-</td>
		<td>-16</td>
		<td>
			• 名声-2、団結+1、武学+1<br>
            • 🚩「留学生の紛争」+2<br>
            • 六大派好感それぞれ-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 🚩「留学生の紛争」≥1: +30<br>
        </td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>留學弟子<br>超團結</td>
		<td>-</td>
		<td>-16</td>
		<td>
			• 体力+1、内功+1、名声+1、団結+1<br>
            • 戦役門人生命力+2、武学+1<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 20</td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>趙活帶操<br>感慨</td>
		<td>10</td>
		<td>-26</td>
		<td>名声+1、性情+1、武学+3</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「三師兄が代掌門」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>趙活帶操<br>奇葩師弟</td>
		<td>10</td>
		<td>-36</td>
		<td>性情+3、品性-1、団結-2、運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 品性≤25: +20<br>
        </td>
        <td>
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「三師兄が代掌門」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>練功場<br>団練</td>
		<td>大師兄<br>蹴鞠</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 団結+2、体力+1<br>
            • 唐布衣好感+1、唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 20<br>
            • 品性≤25: +20<br>
        </td>
		<td>
            • 🚩「大師兄が唐門にいる」<br>
            • 🚩「小師妹が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>吊起來打</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 道徳-2、性情-1、軽功+1、運命+1<br>
            • 🚩「唐默鈴と結縁」なし: 唐默鈴好感-1<br>
            • 唐布衣好感+1、劉顎好感+1<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>開窗擊墜</td>
		<td>-</td>
		<td>+50</td>
		<td><MarkdownWrapper>[生死簿02：転落死](/ja/event/badends/#生死簿-No.2)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 3<br>
            • 軽功≥30: -3<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>無可譴責</td>
		<td>-</td>
		<td>+80</td>
		<td>道徳-2、性情-1、軽功+1</td>
		<td>-</td>
		<td>軽功-1</td>
		<td>
            • 基礎: 30<br>
            • 軽功≥20: +10<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折り鶴</td>
		<td>一絲暖意</td>
		<td>-</td>
		<td>+80</td>
		<td>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 60</td>
		<td>
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折り鶴</td>
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
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>女弟子房<br>折り鶴</td>
		<td>踏向深谷</td>
		<td>-</td>
		<td>-</td>
		<td><MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
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
            🎲天命(上限99)判定が発生:<br>
            •【≥50 大儲け】: 心相+40、銀両+1000、団結-2<br>
            •【＜50 損失】: 心相-10、銀両-500、団結+5<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>銀両≥500</td>
		<td>-</td>
	</tr>
<tr>
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
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「掌門が唐門にいない」<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>學大師兄</td>
		<td>-</td>
		<td>+50</td>
		<td>団結+10、処世+5、品性-5</td>
		<td>軽功+2<br>暗器+2</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 最短で3年目10月上旬<br>
            • 🚩「大師兄が唐門にいない」<br>
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
            • 団結+1、学問+1<br>
            • 福韞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>🚩「福韞が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐家大院</td>
		<td>男弟子房<br>休息</td>
		<td>福韞淨化<br>四師兄</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両+100<br>
            • 福韞好感+1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「四師兄が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
			外出コマンドメニューに続く
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>小梅亂入</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 ランニング:<br>
            • 体力+1、軽功+1、虞小梅好感+1<br>
            • 想い人が虞小梅: 心相+20<br>
            • 想い人が虞小梅でない: 心変わり+1<br>
			<br>
            👉 やるべきことをやる: <br>
            • 処世+1、虞小梅好感-1<br>
            • 外出コマンドメニューに続く<br>
		</td>
		<td>
            心相≥80:<br>
            👉 ランニング:<br>
            体力+1<br>
            軽功+1<br>
            虞小梅<br>
            好感+1
        </td>
		<td>
            👉 ランニング:<br>
            体力-1<br>
        </td>
		<td>基礎: 35</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「虞小梅が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>我有帶秘笈</td>
		<td>-</td>
		<td>-</td>
		<td>
			• 本イベントの発生回数によって: 会話差分<br>
            • 外出コマンドメニューに続く<br> 
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 35</td>
		<td>
            • 最遅で2年目10月下旬<br>
            • 🚩「晁和が唐門にいる」<br>
            • 最多3回まで発生<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>龍湘遭竊</td>
		<td>-</td>
		<td>-</td>
		<td>
			<MarkdownWrapper>[龍湘、盗難に遭う](/ja/event/simple/1-09-2-龍湘遭竊)</MarkdownWrapper>イベントが発生<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最遅で2年目5月下旬<br>
            • <MarkdownWrapper>[四師兄、人手を駆り出す](/ja/event/simple/1-09-2-四師兄抓公差)</MarkdownWrapper>を発生済み<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>姜記肉包</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 並んで買う(銀両＞500必要):<br>
            • 学問-1、銀両-500、「姜記肉包」x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
            <br>
            👉 時間を無駄にする:<br>
            • 🚩「外出で龍湘に遭遇」を設定<br>
            • 外出のコマンドメニューに戻る<br>
            <br>
            👉 店を壊す(道徳＜40かつ性情≥60必要):<br>
            • 道徳-2、🆚戦：江湖の拳師 が発生<br>
            • 敗北: <MarkdownWrapper>[生死簿86：肉まんを喉に詰めて](/ja/event/badends/#生死簿-No.86)</MarkdownWrapper><br>
            • 勝利: 武学+4、銀両+1000、名声+2、姜記肉包x5を獲得、上官螢好感-3、唐中翎好感-3、宋悲好感-2、丐幇好感+2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「龍湘が唐門にいる」</td>
		<td>
            🚩「外出で龍湘に遭遇」:<br>
            本行動の後続で龍湘イベントが<br>
            発生するかどうかに影響<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>李富貴<br>跑腿</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉道を教える: <br>
            • 李富貴好感+1<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出のコマンドメニューに戻る<br>
            <br>
            👉連れて行ってあげる: <br>
            • 道徳+1、銀両+200<br>
            <br>
            👉ぼったくり(🚩「四師兄が唐門にいる」必要): <br>
            • 道徳-1、銀両+500<br>
            • 唐惟元好感+1、李富貴好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「李富貴が唐門にいる」</td>
		<td>
            🚩「外出で李富貴に遭遇」:<br>
            本行動の後続で李富貴イベントが<br>
            発生するかどうかに影響<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>李富貴<br>喝涼水</td>
		<td>-</td>
		<td>-</td>
		<td>
            銀両＜100:<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出のコマンドメニューに戻る<br>
            <br>
            銀両≧100: 選択肢が発生:<br>
            <br>
            👉無視する:<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出のコマンドメニューに戻る<br>
            <br>
            👉見せつけるように飲む:<br>
            • 道徳-1、品性-1、処世+1、銀両-100、心相+30<br>
            • 李富貴好感-1、丐幇好感-1<br>
            <br>
            👉おごる(銀両≧200必要):<br>
            • 道徳+1、処世+2、銀両-200<br>
            • 李富貴好感＜12: 心相+20、李富貴+2<br>
            • 李富貴好感≧12: 心相+10、李富貴+2<br>
            • 李富貴好感≧20、かつ<MarkdownWrapper>[阿摩搪牆拳](/ja/system/books/book_4040)</MarkdownWrapper>を未所持: これを獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「李富貴が唐門にいる」</td>
		<td>
            🚩「外出で李富貴に遭遇」:<br>
            本行動の後続で李富貴イベントが<br>
            発生するかどうかに影響<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>外出<br>優先判定</td>
		<td>福韞<br>強制淨化</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 性情≤40: 会話差分<br>
            • 道徳+1、学問+1、福韞好感+1<br>
            • 🚩「福韞を殴った」を解除<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「福韞を殴った」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>行商</td>
		<td>不多不少</td>
		<td>16</td>
		<td>-15</td>
		<td>銀両+1000、弁舌+1、名声+1</td>
		<td>弁舌+1<br>名声+1</td>
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
            • 銀両-1000、唐惟元好感-1<br>
            • 2回目の発生: 秘笈<MarkdownWrapper>[《江湖鬼蜮録》](/ja/system/books/book_8005)</MarkdownWrapper>を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩「四師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>行商</td>
		<td>賭博輸光</td>
		<td>16<br>-10</td>
		<td>-65</td>
		<td>
            • 銀両-2500、品性-2、性情-2、処世+2、運命+1<br>
            • 唐惟元好感-2<br>
            <br>            
            2回目の発生時:<br>
            • 時間＞2年目12月下旬なら: イベント終了<br>
            • 時間≤2年目12月下旬なら: <MarkdownWrapper>[龍湘の食い逃げ](/ja/event/simple/1-04-1-龍湘霸王餐)</MarkdownWrapper>イベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤0: +50<br>
        </td>
		<td>
            • 銀両≧3000<br>
            • 🚩「四師兄が唐門にいる」<br>
            • 最大2回まで発生<br>
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
            • 銀両+1500、門派資産+100<br>
            • 道徳-1、性情+1、処世-1、弁舌+1<br> 
            • 🚩「行商成功回数」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 弁舌≥20: +30<br>
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
            • 銀両+2000、門派資産+150<br>
            • 道徳-2、性情+1、処世-2、弁舌+2<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥30: +5<br>
            • 弁舌≥80: +5<br>
            • 弁舌≥90: +5<br>
            • 道徳＜40: +20<br>
        </td>
		<td>🚩「行商成功回数」≥2</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>行商</td>
		<td>長途行商</td>
		<td>16</td>
		<td>-25</td>
		<td>
            • 銀両+3000、門派資産+200<br>
            • 体力+2、行動回数-1<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥30: +5<br>
            • 弁舌≥80: +5<br>
            • 弁舌≥90: +5<br>
            • 道徳≥60: +20<br>
        </td>
		<td>行動回数≥2</td>
		<td>合計で行動回数2消費</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>逛街舒心</td>
		<td>-</td>
		<td>+20</td>
		<td>処世+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>包袱被割</td>
		<td>-20</td>
		<td>-20</td>
		<td>性情-1、名声+1</td>
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
		<td>市場<br>街歩き</td>
		<td>飛石尋釁</td>
		<td>-</td>
		<td>-</td>
		<td>
			🎲天命が発生(上限99、軽功補正):<br>
            【≥60 回避】: 心相+20、名声+1、飛石幇好感-1、イベント終了<br>
            【＜60 戦う】: 🆚戦：飛石幇 が発生、勝敗を判定:<br>
            <br>
            敗北: 銀両-1000、心相-30<br>
            <br>
            勝利: 武学+2(全武学≤110)、選択肢が発生:<br>
            • 👉逃がす: 道徳+1、品性+1、処世+1、飛石幇好感+1<br>
            • 👉工賃は俺のもの: 道徳-1、性情+1、処世+1、銀両+250、飛石幇好感-1<br>
            • 👉滅多刺しにする: 道徳-3、品性-2、名声+2、宋悲好感-1、飛石幇好感-3、飛石幇向心-2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「飛石幇と和解」なし</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>何方妖孽</td>
		<td>-</td>
		<td>-</td>
		<td>
			🆚戦：錦香弟子:<br>
            敗北: <MarkdownWrapper>[生死簿17：晴らせぬ冤](/ja/event/badends/#生死簿-No.17)</MarkdownWrapper>へ進む<br>
            勝利：武学+4(全武学≤150)または+2(全武学＞150)、選択肢が発生:<br>
            👉 落ち着け: 道徳+1、品性+1、名声+1、錦香宮好感+1<br>
			👉 俺と結婚したいか: 道徳-1、性情+1、品性-1、弁舌+1、心変わり+1<br>
			👉 無情に殺す: 道徳-3、品性-2、性情+2、名声-2、錦香宮好感-4、龍湘好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 お金を出して善行を積む: 銀両-100、品性+1、性情-1、処世+1<br>
			<br>
            👉 倍の金額で俺が割る: 🆚戦：江湖の拳師:<br>
            • 敗北: 銀両-200、名声-2、性情-1<br>
			• 勝利: 武学+2(未知の条件)、選択肢が発生:<br>
            • 👉 見逃す: 名声+1、門人+1<br>
			• 👉 殺害する: 道徳-3、品性-3、性情+2、処世-2、銀両-200<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>丐幫搶菜</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「丐幇との野菜争奪回数」+1に設定、⚔️戦役：丐幇 が発生:<br>
            • 敗北: 心相-10、団結+1、丐幇好感+1、丐幇向心+1<br>
            • 勝利: 武学+2、名声-1、品性-1、心相+10、団結+1、門派資産-100、丐幇好感+1、丐幇向心-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>填飽舒心</td>
		<td>-</td>
		<td>+30</td>
		<td>銀両-100</td>
		<td>体力+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>心相判定は心相加算の後</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>摺紙藝人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-200<br>
            • 唐默鈴好感+2
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 銀両≥200<br>
            • 🚩「小師妹が唐門にいる」<br>
        </td>
		<td>心相判定は心相加算の後</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>茶肆吃麵</td>
		<td>-</td>
		<td>+20</td>
		<td>学問+1、銀両-100</td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>贈送蔬果</td>
		<td>-</td>
		<td>+40</td>
		<td>団結+5、門派資産+500、銀両+500</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>門派規模≥4</td>
		<td>現状では条件を満たせない</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>女俠戰龍湘</td>
		<td>-</td>
		<td>-10</td>
		<td>性情-1、武学+2、刀剣+1</td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>山賊戰龍湘</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「龍湘と姉弟の呼び合い」を判定:<br>
            • はい: 武学+1、心相+6、料理+1、龍湘好感+2<br>
            • いいえ: 武学+1、銀両+500、体力+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>
            はい: <br>料理-1<br>
            いいえ: <br>体力-1<br>
        </td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>龍湘打客人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
            • 🚩「龍湘の除名」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>龍湘算錯帳</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>龍湘燒廚房</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>技能「医術」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級≥2を判定:<br>
            • はい: 李富貴好感+2<br>
            • いいえ: 性情-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇成功</td>
		<td>-</td>
		<td>+30</td>
		<td>
            李富貴好感≥20、かつ秘笈<MarkdownWrapper>[《蛇形拳》](/ja/system/books/book_4008)</MarkdownWrapper>を未所持: 該当秘笈を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇失敗</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：蛇 が発生:<br>
            • 敗北: <MarkdownWrapper>[生死簿88：大道芸人の毒蛇](/ja/event/badends/#生死簿-No.88)</MarkdownWrapper>へ進む<br>
            • 勝利: 抗毒+1、抗麻+1、名声+1、心相-10、李富貴好感+1、丐幇好感+1<br>
        </td>
		<td>-</td>
		<td>勝利: <br>抗毒-1<br>抗麻-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>
            対戦する蛇の種類はゲーム内時間で決まる:<br>
            • 1年目12月下旬以前<br>
            • 2年目12月下旬以前<br>
            • 4年目5月上旬以前<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇大成功</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 李富貴好感+1<br>
            • 秘笈<MarkdownWrapper>[《蓮花落》](/ja/system/books/book_7001)</MarkdownWrapper>を未所持: 該当秘笈を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≥60: +20<br>
            • 処世≥60: +10<br>
        </td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>釣魚</td>
		<td>-</td>
		<td>+20</td>
		<td>李富貴好感+1、樊嘯天好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>偶遇福韞</td>
		<td>-</td>
		<td>-</td>
		<td>
            道徳＞40: 道徳+1、学問+1、福韞好感+1<br>
            道徳≤40: 選択肢が発生:<br>
            <br>
            👉 あげない: <br>
            • 道徳-1、処世+1、福韞好感-1、嵩山派好感-1、🆚戦：福韞<br>
            • 敗北: 銀両-200<br>
            • 勝利: 武学+4、🚩「福韞を殴った」を設定<br>
            <br>
            👉 あげる(銀両≥10必要): <br>
            • 道徳+1、学問+1、銀両-10、福韞好感+1<br>
            • 複合判定(該当しない場合のみ次の判定に進む):<br>
            • 「仏学」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級=0、かつ秘笈<MarkdownWrapper>[《羅漢拳譜》](/ja/system/books/book_6001)</MarkdownWrapper>を未所持: これを獲得<br>
            • 仏学等級≥1、かつ道徳≥60、かつ秘笈<MarkdownWrapper>[《金剛腿》](/ja/system/books/book_4001)</MarkdownWrapper>を未所持: これを獲得<br>
            • 仏学等級≥2、かつ道徳≥60、かつ福韞好感≥10、かつ秘笈<MarkdownWrapper>[《金鐘罩》](/ja/system/books/book_1030)</MarkdownWrapper>を未所持: これを獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「福韞が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>帶小師妹<br>下山認路</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-200、唐默鈴好感+1<br>
            • 想い人が唐默鈴: 心相+30<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 道徳≥50: +10<br>
            • 道徳≥60: +10<br>
        </td>
		<td>
            • 銀両≥200<br>
            • 唐中翎好感≥20<br>
            • 🚩「小師妹が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>小師妹<br>得意洋洋</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 唐默鈴好感+1<br>
            • 想い人が唐默鈴: 心相+30<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「唐默鈴と結縁」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>混世魔王</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-500、葉雲裳好感+1<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心相-30、心変わり+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀両≥2000: +30<br>
        </td>
		<td>
            • 銀両≥500<br>
            • 🚩「葉雲裳が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>市場<br>街歩き</td>
		<td>監護人</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-500、唐默鈴好感+1、葉雲裳好感+1<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀両≥2000: +30<br>
        </td>
		<td>
            • 銀両≥500<br>
            • 🚩「小師妹が唐門にいる」<br> 
            • 🚩「葉雲裳が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩「外堡ポイント」+1<br>
            • 外堡のランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家<br>優先判定</td>
		<td>龍湘與福韞</td>
		<td>10</td>
		<td>-12</td>
		<td>
            🚩「外堡ポイント」+1、選択肢が発生:
            <br>
            👉「救えないが、共に苦しむ」:<br>
            • 性情+1、品性+1、心相-5<br>
            • 龍湘好感+2、福韞好感+1<br>
            • 想い人が龍湘でない場合: 心変わり+1<br>
            <br>
            👉「救えない、逃げる」:<br>
            • 性情-1<br>
            • 🚩「外堡で龍湘に遭遇」を設定<br>
            • 🚩「外堡で福韞に遭遇」を設定<br>
            • 外堡のランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「福韞が唐門にいる」<br>
        </td>
		<td>
            🚩「外堡で龍湘/福韞に遭遇」:<br>
            本行動の後続で龍湘/福韞イベントが<br>
            発生するかどうかに影響<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>死皮賴臉</td>
		<td>10</td>
		<td>-12</td>
		<td>
            🆚戦：通りすがりの侠客<br>
            <br>
            敗北: 🚩「二師兄が唐門にいる」を判定:<br>
            • いる: 心相-25、貢献-20、性情-1、唐中翎好感-1、唐錚好感-1<br>
            • いない: 心相-25、貢献-20、性情-2<br>
            <br>
            勝利: 選択肢が発生:<br>
            👉 失せろ: 道徳-2、品性-1、銀両+200、門派資産+10<br>
            👉 ツケにしておく: 道徳+1、処世+1、貢献-20、門派資産-10、唐陞好感+1。🚩「掌門が唐門にいる」場合: 唐中翎好感+1。<br>
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
            ⚔️戦役 が発生: 勝敗に関係なく、武学+2、門派資産-50。<br>
            🚩「小師妹が唐門にいる」場合: 銀両+200、門派資産+30、🚩「外堡ポイント」+2<br>
            <br>
            🚩「葉雲裳が唐門にいる」場合: 以下に続く<br>
            • 門派資産+20、🚩「外堡ポイント」+2<br>
            • 🚩「上官螢が唐門にいる」場合: 上官螢好感+1<br>
            • 🚩「魏菊が唐門にいる」場合: 魏菊好感+1<br>
            • 🚩「虞小梅が唐門にいる」場合: 虞小梅好感+1<br>
            • 🚩「郁竹が唐門にいる」場合: 郁竹好感+1<br>
            • 🚩「龍湘が唐門にいる」場合: 龍湘好感+1<br>
            • 🚩「葉雲舟が唐門にいる」場合: 葉雲舟好感+1<br>
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
		<td>門派資産+50</td>
		<td>門派資<br>産+50</td>
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
            🚩「上官螢が唐門にいる」場合: 上官螢好感+1<br>
            🚩「魏菊が唐門にいる」場合: 魏菊好感+1<br>
            🚩「虞小梅が唐門にいる」場合: 虞小梅好感+1<br>
            🚩「郁竹が唐門にいる」場合: 郁竹好感+1<br>
            🚩「龍湘が唐門にいる」場合: 龍湘好感+1<br>
            🚩「葉雲舟が唐門にいる」場合: 葉雲舟好感+1<br>
            🚩「李富貴が唐門にいる」場合: 李富貴好感+1<br>
            🚩「福韞が唐門にいる」場合: 福韞好感+1<br>
        </td>
		<td>発生した<br>好感が<br>さらに+1</td>
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
		<td>名声+2、銀両+500、門派資産+500</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 名声≥20: +30</td>
		<td>-</td>
		<td>
            上官螢を外堡に住まわせたい場合、<MarkdownWrapper>[唐門の財務改善](/ja/event/simple/1-08-1-唐門財務改善)</MarkdownWrapper><br>
            イベントを周回するのが最速<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>-8</td>
		<td>
            • 学問+1、品性+1<br>
            • 福韞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            🚩「福韞が唐門にいる」<br>
            🚩「外堡で福韞に遭遇」なし<br>
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
            • 学問+1、品性+1<br>
            • 福韞好感+1、葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            🚩「葉雲舟が唐門にいる」<br>
            🚩「福韞が唐門にいる」<br>
            🚩「外堡で福韞に遭遇」なし<br>
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
            • 品性-1<br>
            • 葉雲裳好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            🚩「葉雲裳が唐門にいる」<br>
            🚩「福韞が唐門にいる」<br>
            🚩「外堡で福韞に遭遇」なし<br>
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
            • 名声+2<br>
            • 葉雲舟好感+2、葉雲裳好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「葉雲舟が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟削劍</td>
		<td>10</td>
		<td>-12</td>
		<td>
            刀剣+1、本イベントの発生回数(今回含む)を判定:<br>
            • 初回発生: 会話差分<br>
            • 2回目発生: 会話差分<br>
            • 3回目以降: 選択肢が発生:<br>
            <br>
            👉 僕も欲しい: 未知の条件を判定:<br>
            • 未知の条件: 「失敗木剣」+1を獲得<br>
            • 未知の条件: 「木剣」+1を獲得<br>
            • 未知の条件: 「聴雲木剣」+1を獲得<br>
            • 名声-1、処世+1、道徳-1<br>
            <br>
            👉 手伝う: <br>
            • 処世-1、品性+1、鍛造+2<br>
            • 葉雲舟好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>葉雲舟が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟教劍</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 刀剣+1、武学+5<br>
            • 葉雲舟好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩「葉雲舟が唐門にいる」<br>
            • 「葉雲舟削劍」を5回以上発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩「茶屋ポイント」+1<br>
            • 茶屋のランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>現時点では茶屋に他の優先イベントなし</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>茶水太燙</td>
		<td>10</td>
		<td>-32</td>
		<td>
            • 学問+1、品性+1、選択肢が発生:<br>
            👉 事を荒立てない: 品性+1、名声-1、🚩「茶屋ポイント」+1<br>
            👉 殴る: 品性-1、🆚戦：通りすがりの侠客 が発生<br>
            <br>
            敗北: <MarkdownWrapper>[生死簿18：釜茹で](/ja/event/badends/#生死簿-No.18)</MarkdownWrapper><br>
            <br>
            勝利: 選択肢が発生:<br>
            👉 冷ましてから飲む: 弁舌+1、処世-1、銀両+200<br>
            👉 茶代を百倍払わせる: 道徳-1、品性-1、処世+1、名声-1、門派資産+10、🚩「茶屋ポイント」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>店前打鬥</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 学問+1、品性+1、⚔️乱戦 が発生<br>
            • 勝敗に関係なく、心相+15、武学+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>飛石找碴</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 学問+1、品性+1、⚔️戦役：飛石幇 が発生<br>
            • 勝敗に関係なく、名声+1、武学+2、銀両+200<br>
            • 門派資産+10、飛石幇好感-1、飛石幇向心-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩「飛石幇と和解」なし</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>丐幫尋釁</td>
		<td>10</td>
		<td>-12</td>
		<td>
            • 学問+1、品性+1、⚔️戦役：丐幇 が発生<br>
            • 勝敗に関係なく、武学+2、丐幇向心-1、選択肢が発生:<br>
            <br>
            👉 次は来るな(銀両≥500必要):<br>
            • 品性+1、道徳+1、銀両-500<br>
            • 🚩「茶屋ポイント」+2、丐幇好感-1<br>
            <br>
            👉 熱々の茶を浴びせる:<br>
            • 品性-1、道徳-1、名声+2、団結+1<br>
            • 丐幇好感-2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>請你吃瓜</td>
		<td>10</td>
		<td>+18</td>
		<td>
			• 学問+1、品性+1<br>
            • 銀両-100、団結+1<br>
            • 処世+3、品性±1、性情±1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≥60: +30<br>
        </td>
		<td>銀両≥100</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>午後小雨</td>
		<td>10</td>
		<td>+18</td>
		<td>
			• 学問+1、品性+1<br>
            • 品性+3、団結+1、性情±1<br>
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
		<td>茶屋<br>茶博士</td>
		<td>魏菊茶匠</td>
		<td>10</td>
		<td>-12</td>
		<td>
			• 学問+1、品性+1<br>
            • 学問+2、品性+2、名声+3、門派資産+10<br>
            • 魏菊好感+1、🚩「茶屋ポイント」+2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 魏菊好感≥15: +10<br>
            • 魏菊好感≥20: +10<br>
        </td>
		<td>🚩「魏菊が唐門にいる」</td>
		<td>現時点(v1.0.5000.13)<br>版本では発生不可<br></td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士</td>
		<td>龍湘點茶</td>
		<td>10</td>
		<td>-10</td>
		<td>
			• 学問+1、品性+1<br>
            • 名声+1、門派資産+20、龍湘好感+1<br>
            • 想い人が龍湘でない場合: 心変わり+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「龍湘が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「薬屋ポイント」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>備考参照</td>
		<td>-</td>
		<td>
            確率は「葉雲舟煎藥」が<br>
            発生するかどうかで決まる<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察<br>優先判定</td>
		<td>葉雲舟煎藥</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「薬屋ポイント」+1、選択肢が発生:<br>
            <br>
            👉 葉雲舟に助言する: <br>
            • 道徳+1、品性+1、葉雲舟好感+2<br>
            • 処世≤40: 会話差分<br>
            • 🚩「葉雲舟の煎薬俠を発生済み」を設定<br>
            <br>
            👉 自分のことをする: <br>
            • 薬屋のランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>確率 40%</td>
		<td>🚩「葉雲舟が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>帶水果報恩</td>
		<td>10</td>
		<td>+8</td>
		<td>
            団結+1、道徳+1、銀両+200<br>
        </td>
		<td>門派資<br>産+10</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>一致認同</td>
		<td>10</td>
		<td>-2</td>
		<td>
            • 煉丹+5、道徳+1、銀両+100<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感+1<br>
        </td>
		<td>二師兄<br>が唐門<br>にいる<br>場合:<br>唐錚好<br>感+1</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>醫治公子哥</td>
		<td>10</td>
		<td>-32</td>
		<td>名声+1</td>
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
		<td>薬屋<br>診察</td>
		<td>醫治黑狗</td>
		<td>10</td>
		<td>-2</td>
		<td>
			• 道徳≥60: 道徳+1、樊嘯天好感+1<br>
            • 道徳＜60: 体力-1、心相-40<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>醫療糾紛</td>
		<td>10</td>
		<td>-</td>
		<td>
            👉 非を認めない: 道徳-2、弁舌+1、名声-1、処世+1、心相-12、🚩「薬屋ポイント」-1<br>
            <br>
            👉 優しく説得して帰す: 道徳+1、弁舌+1、品性+1、処世-1、心相-62、🚩「投獄回数」+1<br>
            <br>
            👉 事を荒立てない(銀両≥500必要): 銀両-500、性情-1、処世-1、心相-32、🚩「薬屋ポイント」+1<br>
        </td>
		<td>-</td>
		<td>弁舌<br>+1の場合:<br>弁舌-1</td>
		<td>
            • 基礎: 10<br>
            • 心相≤30: +30
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>醫治妓女</td>
		<td>10<br>+20</td>
		<td>-52</td>
		<td>
            • 道徳+1<br>
            • 🚩「大師兄が唐門にいる」: 唐布衣好感+1<br>
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
		<td>薬屋<br>診察</td>
		<td>無償治老人</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「老人の書き置き」＜2</td>
		<td>🚩「老人の書き置き」: 現行版<br>(v1.0.5000.13)では増加不可</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>無償治瞎子</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「盲人の書き置き」＜2</td>
		<td>🚩「盲人の書き置き」: 現行版<br>(v1.0.5000.13)では増加不可</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>無償治瘸子</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「足の悪い男の書き置き」＜2</td>
		<td>🚩「足の悪い男の書き置き」: 現行版<br>(v1.0.5000.13)では増加不可</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>富人<br>投桃報李</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+2、銀両+500、門派資産+50</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>飛石幫患者</td>
		<td>10</td>
		<td>-12</td>
		<td>
			👉 説得して連れ戻す: 道徳+1、団結-1、貢献-10、飛石幇好感+1、飛石幇向心+1<br>
            <br>
            👉 好きにさせる: 団結+1、飛石幇向心-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「飛石幇と和解」なし</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察</td>
		<td>丐幫弟子<br>求診</td>
		<td>10</td>
		<td>-12</td>
		<td>
			👉 知ったことか: 道徳-1、品性-1、団結+1、丐幇向心-1<br>
            <br>
            👉 約束する: 道徳+1、団結-1、貢献-10、丐幇好感+1、丐幇向心+1、🚩「薬屋ポイント」-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>義田<br>耕耘<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩「義田ポイント」+1<br>
            • 義田コマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>現在、義田に他の優先イベントはない</td>
	</tr>
<tr>
		<td>大門</td>
		<td>義田<br>耕耘</td>
		<td>踏實努力</td>
		<td>12</td>
		<td>-12</td>
		<td>体力+1、性情±1、処世±1、品性±1</td>
		<td>体力+1</td>
		<td>体力-1</td>
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
            • 団結+2、貢献+15、性情+1<br>
            • 魏菊好感-2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩「魏菊が唐門にいる」</td>
		<td>現行(v1.0.5000.13)<br>版では発生不可</td>
	</tr>
<tr>
		<td>大門</td>
		<td>義田<br>耕耘</td>
		<td>魏菊<br>一起耕田</td>
		<td>12</td>
		<td>+18</td>
		<td>
            • 体力+1、品性+1、魏菊好感+1<br>
            • 魏菊好感≥15: 学問+1、品性+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 10</td>
		<td>🚩「魏菊が唐門にいる」</td>
		<td>現行(v1.0.5000.13)<br>版では発生不可</td>
	</tr>
<tr>
		<td>大門</td>
		<td>温泉<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩「温泉ポイント」+1<br>
            • 温泉コマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>現在、温泉に他の優先イベントはない</td>
	</tr>
<tr>
		<td>大門</td>
		<td>温泉</td>
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
		<td>温泉</td>
		<td>師兄弟偷窺</td>
		<td>-</td>
		<td>+15<br>+15</td>
		<td>
			👉 見せてくれ: <br>
            • <MarkdownWrapper>[生死簿69：自ら死地へ](/ja/event/badends/#生死簿-No.69)</MarkdownWrapper><br>
            <br>
            👉 やめろ:<br>
            • 道徳+1、団結-3、貢献-10<br>
            • 🚩「小師妹が唐門にいる」: 唐默鈴好感+1<br>
            • 🚩「葉雲裳が唐門にいる」: 葉雲裳好感+1<br>
            • 🚩「上官螢が唐門にいる」: 上官螢好感+1<br>
            • 🚩「魏菊が唐門にいる」: 魏菊好感+1<br>
            • 🚩「虞小梅が唐門にいる」: 虞小梅好感+1<br>
            • 🚩「郁竹が唐門にいる」: 郁竹好感+1<br>
            • 🚩「龍湘が唐門にいる」: 龍湘好感+1<br>
            <br>
			👉 蛇がいる: <br>
            • 道徳+1、弁舌+1、処世+1、団結-1<br>
		</td>
		<td>-</td>
		<td>👉蛇がいる:<br>弁舌-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>温泉</td>
		<td>涼棚垮了</td>
		<td>-</td>
		<td>+15</td>
		<td><MarkdownWrapper>[生死簿70：溺死](/ja/event/badends/#生死簿-No.70)</MarkdownWrapper></td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>温泉</td>
		<td>龍湘泡溫泉</td>
		<td>-</td>
		<td>+15<br>+35</td>
		<td>品性+1、龍湘好感+3</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>🚩「龍湘と結縁」</td>
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
            • 性情＞40: 処世+2、性情-2<br>
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
            • 想い人が虞小梅: 心相+40、軽功+2、虞小梅好感+1、崆峒派好感-1<br>
            • 想い人が虞小梅でない: 心相+20、軽功+1、虞小梅好感+1、崆峒派好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 虞小梅好感≥15: +25<br>
        </td>
		<td><MarkdownWrapper>[鶴が外出する](/ja/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper>を発生済み</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>聚眾嘲笑</td>
		<td>-</td>
		<td>+20</td>
		<td>
            <MarkdownWrapper>[隠蔽地での衝突](/ja/event/simple/2-03-1-窩居衝突)</MarkdownWrapper>イベントが発生<br>
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
		<td>無色広場<br>街歩き<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 性情≤40かつ銀両＜500: 🚩「金を使わない」を設定<br>
            • 性情＞40かつ銀両＜100: 🚩「金を使わない」を設定<br>
            <br>
            • 🚩「金を使わない」: 街歩きコマンドを停止<br>
            • 🚩「金を使わない」なし: 街歩きコマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>別於蜀中</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀両-100<br>
            • 学問+2、処世+2、崆峒派好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>小梅同行</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀両-100、銀両-300、処世+1、性情+1<br>
            • 虞小梅好感+2、崆峒派好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 虞小梅好感≥15: +20<br>
        </td>
		<td><MarkdownWrapper>[鶴が外出する](/ja/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper>を発生済み</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>鐵拳巷<br>購物</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 銀両-100、銀両-300、鍛造+5<br>
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
		<td>無色広場<br>街歩き</td>
		<td>偶遇<br>四師兄</td>
		<td>-</td>
		<td>+100</td>
		<td>
            • 銀両-100、唐惟元好感+1<br>
            • 商店画面を開く<br>
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
		<td>無色広場<br>賭場<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両＜2000: 賭場コマンドを停止<br>
            • 銀両≥2000: 賭場コマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>賭場</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 道徳-1、処世+1、品性-1<br>
            • 銀両-1000、運命+1<br>
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
		<td>無色広場<br>賭場</td>
		<td>小賺一把</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 道徳-1、処世+1、品性-1<br>
            • 銀両+1000、🚩「崆峒賭場の勝ち」+1に設定<br>
            • 🚩「崆峒賭場の勝ち」≥5の場合: <MarkdownWrapper>[崆峒での強盗](/ja/event/simple/2-03-1-崆峒搶劫)</MarkdownWrapper>が発生<br>
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
		<td>無色広場<br>賭場</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 道徳-1、処世+1、品性-1<br>
            • 銀両+3000、🚩「崆峒賭場の勝ち」+3に設定<br>
            • 🚩「崆峒賭場の勝ち」≥5の場合: <MarkdownWrapper>[崆峒での強盗](/ja/event/simple/2-03-1-崆峒搶劫)</MarkdownWrapper>が発生<br>
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
		<td>無色広場<br>擂台</td>
		<td>擂台比試</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 初参加の場合: 説明を聞く。処世に応じて会話差分(≤40、≥60)<br>
            <br>
            対戦相手を決定、🎲天命(上限99)が発生:<br>
            • 【＜33 丐幇弟子】、【＜66 江湖の拳師】、【≥66 通りすがりの侠客】<br>
            • 🚩「擂台ポイント」で対戦相手の強さを決定: ＜4(弱)、＜8(中)、≥8(強)<br>
            <br>
            敗北: <MarkdownWrapper>[生死簿14：殴殺](/ja/event/badends/badend-14)</MarkdownWrapper><br>
            <br>
            勝利: <br>
            • 基礎効果: 武学+2、性情+1、銀両+500、🚩「擂台ポイント」+1<br>
            • 崆峒留学門派を判定: 軽功+1(飛天)、暗器+1(奪魄)、拳掌+1(玄功)、体力+1(鉄拳)<br>
            • 🚩「擂台ポイント」＞3: 崆峒留学門派を判定: 刀剣+1(飛天)、内功+1(奪魄)、学問+1及び弁舌+1(玄功)、鍛造+4(鉄拳)<br>
            • 🚩「擂台ポイント」＞5: 武学+2<br>
            • 🚩「擂台ポイント」＞7: 武学+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練<br>優先判定</td>
		<td>小梅跑步</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉 無視する: 性情-1、虞小梅好感-2、所属門派の修練イベントに続く<br>
            <br>
            👉 追いかける: 小梅ランニングのランダムイベントに続く<br>            
		</td>
		<td>-</td>
		<td>-</td>
		<td>確率: <br>(虞小梅好感+1)<br>/101</td>
		<td><MarkdownWrapper>[鶴が外出する](/ja/event/simple/2-03-2-鶴手出遊)</MarkdownWrapper>を発生済み</td>
		<td>このイベントが未発生の場合、修練イベントに続く<br></td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練</td>
		<td>修練</td>
		<td>-</td>
		<td>-20</td>
		<td>
            武学+6、崆峒留学門派を判定:<br>
            • 飛天: 軽功+1<br>
            • 奪魄: 暗器+1<br>
            • 玄功: 拳掌+1<br>
            • 鉄拳: 体力+1<br>
            <br>
            修練画面を開く<br>
        </td>
		<td>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相判定は心相減算の前に行われる</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>遭遇情敵</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 軽功+1<br>
            • 🆚対決が発生、対決相手(確率重み): 鉄拳弟子(10)、奪魄弟子(10)、飛天弟子(10)<br>
            <br>
            敗北: <MarkdownWrapper>[生死簿16：恋敵の凶刃](/ja/event/badends/badend-16)</MarkdownWrapper><br>
            <br>
            勝利: 武学+4、🚩「小梅の求婚者との対戦」+1に設定、選択肢が発生:<br>
            👉 見逃す: 品性+1、道徳+1、処世-1、名声+1<br>
            👉 階段から突き落とす: 性情+1、道徳-2、処世+1、虞小梅好感+1<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            🚩「小梅の求婚者との対戦」:<br>
            今のところ用途なし<br>
        </td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>不擇手段</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 軽功+1<br>
            • 道徳-2、品性-1、処世+1<br>
            • 虞小梅好感+2<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>奪魄森林<br>迷路</td>
		<td>-</td>
		<td>-40</td>
		<td>
            弁舌+1、道徳-1、名声-1、運命+1 <br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>實力懸殊</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 体力+2、軽功+2<br>
            • 虞小梅好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1<br>軽功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>心相判定は心相加算の後に行われる</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>燒烤山味</td>
		<td>-</td>
		<td>+50</td>
		<td>
            • 体力+1、銀両-200<br>
            • 虞小梅好感+2 <br>
            • 🚩「小梅と焼肉を食べた」+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            • 心相判定は心相加算後<br>
            • 🚩「小梅と焼肉を食べた」: 現状未使用<br>
        </td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>狀態絕佳</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 体力+2、軽功+2<br>
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
		<td>小梅<br>ランニング</td>
		<td>英俊少俠</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 体力+1、軽功+1<br>
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
            • 学問-1、🚩「修仙回数」+1<br>
            • 🚩「修仙回数」≥5の場合: 実績<MarkdownWrapper>[はた迷惑な修仙](/ja/event/achievements/#風雲史-No.02)</MarkdownWrapper>を解放<br>
            • <MarkdownWrapper>[生死簿15：身から出た錆](/ja/event/badends/badend-15)</MarkdownWrapper>へ進む<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +15<br>
            • 弁舌≥20: +15<br>
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
            • 学問-1、🚩「修仙回数」+1<br>
            • 抗毒+1、抗麻+1、軽功+1、内功+1、弁舌-1<br>
            • 品性-1、道徳-1、性情+1、処世+1<br>
            • 虞小梅好感-1<br>
            • 🚩「修仙回数」≥5の場合: 実績<MarkdownWrapper>[はた迷惑な修仙](/ja/event/achievements/#風雲史-No.02)</MarkdownWrapper>を解放<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 弁舌＜15: +20<br>
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
            • 学問-1、🚩「修仙回数」+1<br>
            • 弁舌+1、内功+1、名声+2、学問-1<br>
            • 品性-1、道徳-1、性情+1、処世+1<br>
            • 虞小梅好感-2、崆峒派好感+2<br>
            • 🚩「修仙回数」≥5の場合: 実績<MarkdownWrapper>[はた迷惑な修仙](/ja/event/achievements/#風雲史-No.02)</MarkdownWrapper>を解放<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥15: +20<br>
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
            • 学問-1、🚩「修仙回数」+1<br>
            • 弁舌+2、名声+2、暗器+1、学問-1<br>
            • 品性-1、道徳-2、性情+1、処世+1<br>
            • 虞小梅好感-2、唐中翎好感-1、崆峒派好感+2<br>
            • 🚩「修仙回数」≥5の場合: 実績<MarkdownWrapper>[はた迷惑な修仙](/ja/event/achievements/#風雲史-No.02)</MarkdownWrapper>を解放<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥15: +20<br>
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
            • 学問-1、🚩「修仙回数」+1<br>
            • 弁舌+3、名声+3、学問-1<br>
            • 品性-2、道徳-3、性情+2、処世+1<br>
            • 虞小梅好感-2、唐中翎好感-2、唐默鈴好感-2、崆峒派好感+3<br>
            • 🚩「修仙回数」≥5の場合: 実績<MarkdownWrapper>[はた迷惑な修仙](/ja/event/achievements/#風雲史-No.02)</MarkdownWrapper>を解放<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥20: +20<br>
            • 道徳＜40: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
            奪魄森林修練コマンドのランダムイベントに続く<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練<br>優先判定</td>
		<td>一次性<br>優先事件集</td>
		<td>-</td>
		<td>-</td>
		<td>
            以下は一度きりの優先イベントとその発生条件:<br>
            • 「飛俠の武功」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>): 「昔の仲間」を発生済み<br>
            • <MarkdownWrapper>[心を集中させるのを手伝う](/ja/event/simple/2-04-1-助你收心)</MarkdownWrapper>: 「なぜ覗いているのか」を発生済み (<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>)<br>
            • 「樹屋の修繕」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>): 夏侯蘭好感≥20<br>
            • 「鉄傘の秘密」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>): 夏侯蘭好感≥20<br>
            • 「蘭の字の由来」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>): 夏侯蘭好感≥15<br>
            • 「雪山派滅亡の始末」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>): 夏侯蘭好感≥30、かつ🚩「雪山の始末を話せる」(<MarkdownWrapper>[心を集中させるのを手伝う](/ja/event/simple/2-04-1-助你收心)</MarkdownWrapper>)<br>
            <br>
            「心を集中させるのを手伝う」を除き行動を終了させ、他のイベントは終了後すべて奪魄森林修練コマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>各イベントとも<br>基礎: 50</td>
		<td>
            <br>
        </td>
		<td>一度きりのイベントの性質が似ているため<br>同一項目にまとめた</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>藉口一堆</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 武学+2<br>
            • 弁舌+2、夏侯蘭好感-1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤50: +10<br>
        </td>
		<td>-</td>
		<td>2回後に「なぜ覗いているのか」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>)が発生</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>亂打一氣</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 武学+2<br>
            • 運命+1、夏侯蘭+2<br> 
            • 想い人が夏侯蘭ではない場合: 心変わり+1<br>
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
            • 武学+2<br>
            • 体力+2、刀剣+1、夏侯蘭好感+2</td>
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
            • 武学+2<br>
            • 武学+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 40<br>
            • 心相≤30: +20<br>
        </td>
		<td>-</td>
		<td>2回後に「昔の仲間」(<MarkdownWrapper>[奪魄森林イベント集](/ja/event/simple/2-04-1-奪魄森林事件集)</MarkdownWrapper>)が発生</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 武学+2<br>
            • 武学+5、刀剣+2<br>
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
            • 武学+2<br>
            • 武学+5、拳掌+1<br>
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
            • 武学+2<br>
            • 武学+4、拳掌+2、刀剣+2<br>
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
		<td>鉄拳巷<br>鍛冶</td>
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
		<td>鉄拳巷<br>鍛冶</td>
		<td>頭暈腦脹</td>
		<td>-</td>
		<td>-21</td>
		<td>
            • 鍛造+5、品性-1、名声+1<br>
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
		<td>鉄拳巷<br>鍛冶</td>
		<td>無能手藝</td>
		<td>-</td>
		<td>-26</td>
		<td>
            鍛造+5、運命+1<br>
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
		<td>鉄拳巷<br>鍛冶</td>
		<td>熟能生巧</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、品性-1<br>
            • 郁竹好感+1<br>            
        </td>
		<td>鍛造+5<br>暗器+1</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>靈光乍現</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、品性-1、処世-1、名声+1<br>
            • 郁竹好感+2<br>
        </td>
		<td>鍛造+8<br>暗器+2</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>神工附體</td>
		<td>-</td>
		<td>-16</td>
		<td>
            • 鍛造+10、品性-1、体力-2、内功-2、名声+3<br>
            • 鍛造+5、暗器+1<br>
            • 郁竹好感+3<br>
        </td>
		<td>鍛造+5<br>暗器+2</td>
		<td>鍛造-5<br>暗器-1</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>傳奇小說</td>
		<td>-</td>
		<td>+20</td>
		<td>
            4回目の発生: 追加ストーリー<br>
        </td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>吟誦詩詞</td>
		<td>-</td>
		<td>+10</td>
		<td>
            • 学問+1、魏菊好感+1<br>
            • 3回目の発生: 追加ストーリー、魏菊好感+2<br>
        </td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>傑出文章</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 学問+2、処世-1<br>
            • 3回目の発生: 追加ストーリー、魏菊好感+5<br>
        </td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁<br>優先判定</td>
		<td>棋力判斷</td>
		<td>-</td>
		<td>-</td>
		<td>
            判定「棋力」=学問x2+品性x2+「戦術」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級x44:<br>
            • 棋力＜250: 🚩「棋力: 低」を設定<br>
            • 棋力＜650: 🚩「棋力: 中」を設定<br>
            • 棋力≧650: 🚩「棋力: 高」を設定<br>
            <br>
            奪魄峰囲碁コマンドのランダムイベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>難分難解<br>惜敗</td>
		<td>-</td>
		<td>-22</td>
		<td>
            • 武学+2<br>
            • 学問+1、品性+1、銀両-100、武学+2<br>
        </td>
		<td>武学+2</td>
		<td>武学-2</td>
		<td>基礎: 40</td>
		<td>🚩「棋力: 低」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>苦苦求活</td>
		<td>-</td>
		<td>-32</td>
		<td>
            • 武学+2<br>
            • 学問+2、性情-1、品性-1、銀両-100<br>
            • 武学+2<br>
        </td>
		<td>武学+2</td>
		<td>武学-2<br>学問-1</td>
		<td>基礎: 20</td>
		<td>🚩「棋力: 低」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>難分難解<br>險勝</td>
		<td>-</td>
		<td>+8</td>
		<td>
            • 武学+2<br>
            • 学問+1、性情-1、銀両+100<br>
            • 武学+2、学問+1<br>
        </td>
		<td>武学+2</td>
		<td>武学-2<br>学問-1</td>
		<td>基礎: 40</td>
		<td>🚩「棋力: 低」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>周旋<br>略遜一籌</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武学+2<br>
            • 性情-1、学問+1、武学+2<br>
            • 武学+2<br>
        </td>
		<td>武学+2</td>
		<td>武学-2</td>
		<td>
            • 基礎: 35<br>
            • 心相≤30: +50<br>
        </td>
		<td>🚩「棋力: 中」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>不費<br>吹灰之力</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武学+2<br>
            • 性情+2、品性-1、銀両+100<br>
            • 武学+2<br>
        </td>
		<td>武学+2</td>
		<td>武学-2</td>
		<td>基礎: 30</td>
		<td>🚩「棋力: 中」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>捉住破綻<br>勝出</td>
		<td>-</td>
		<td>-2</td>
		<td>
            • 武学+2<br>
            • 性情+1、学問+2、銀両+100<br>
        </td>
		<td>武学+4</td>
		<td>-</td>
		<td>基礎: 35</td>
		<td>🚩「棋力: 中」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>徹底擊潰</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武学+2<br>
            • 道徳-1、名声+1、銀両+100<br>
            • 武学+2<br>
        </td>
		<td>武学+2<br>名声+1</td>
		<td>武学-2</td>
		<td>基礎: 30</td>
		<td>🚩「棋力: 高」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>俐落擊敗</td>
		<td>-</td>
		<td>-12</td>
		<td>
            • 武学+2<br>
            • 品性-1、名声+1、銀両+100<br>
            • 武学+2、名声+1<br>
        </td>
		<td>武学+2<br>名声+1</td>
		<td>武学-2<br>名声-1</td>
		<td>基礎: 50</td>
		<td>🚩「棋力: 高」</td>
		<td>心相判定は心相減算前</td>
	</tr>
<tr>
		<td>江陵囲城</td>
		<td>コマンドメニュー</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            以下の「街で気晴らし」イベントを除き、その他は<MarkdownWrapper>[南宮家滞在イベント集](/ja/event/simple/2-09-1-南宮作客事件集)</MarkdownWrapper>を参照<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵囲城</td>
		<td>街で気晴らし</td>
		<td>鬧市逛街</td>
		<td>-</td>
		<td>+40</td>
		<td>品性+1、銀両-200</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵囲城</td>
		<td>街で気晴らし</td>
		<td>心曠神怡</td>
		<td>-</td>
		<td>+30</td>
		<td>体力+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵囲城</td>
		<td>街で気晴らし</td>
		<td>有礙觀瞻</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉もう一度言う: 🆚戦：江湖の拳師<br>
            • 敗北: 品性-1、名声-1、銀両-200、心相-20<br>
            • 勝利: 品性-1、性情+1、処世+1、名声+1、武学+2、銀両-100、南宮家好感-1<br>
            <br>
            👉穏便に済ませる: 心相-10、品性+1、処世-1、性情-1<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵囲城</td>
		<td>街で気晴らし</td>
		<td>不由分說</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：峨嵋の弟子が発生<br>
            <br>
            敗北: 心相-30、南宮家好感+1、行動回数がさらに-1<br>
            <br>
            勝利: 選択肢が発生:<br>
            👉 役所に突き出す: 武学+2、品性+1、性情-1、名声-1、宋悲好感+1<br>
            👉 城外に捨てる: 道徳-2、品性-1、処世+1、名声+1<br>
            👉 酒をおごる: 心相+30、銀両判定:<br>
            • 銀両＜800: 道徳-1、処世+1、名声-1、南宮家好感-1<br>
            • 銀両≧800: 心相-10、名声+1、処世+1、道徳+1、銀両-800<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>釣り</td>
		<td>收穫不佳</td>
		<td>-</td>
		<td>+20</td>
		<td>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>釣り</td>
		<td>女式衣裙</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：江湖の拳師が発生<br>
            <br>
            敗北: 心相-30、運命+1、🚩「投獄回数」+1<br>
            <br>
            勝利: 選択肢が発生:<br>
            👉 川に押し込む: 道徳-3、性情+1、品性-1、銀両+500<br>
            👉 本当に自分じゃない: 道徳+1、品性+1、処世-1、心相+30、「黄酒」x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>釣り</td>
		<td>收穫豐富</td>
		<td>-</td>
		<td>+10</td>
		<td>銀両+200</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>市場をぶらつく</td>
		<td>隨意吃喝</td>
		<td>-</td>
		<td>+20</td>
		<td>銀両-50</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>賭場に入り浸る</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-30</td>
		<td>道徳-1、処世+1、品性-1、銀両-2000</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>賭場に入り浸る</td>
		<td>小賺一把</td>
		<td>-</td>
		<td>+20</td>
		<td>道徳-1、処世+1、品性-1、銀両+500</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>賭場に入り浸る</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>+30</td>
		<td>道徳-1、処世+1、品性-1、名声-1、銀両+1000</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 5</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>無為に過ごす<br>宿屋で喫茶</td>
		<td>-</td>
		<td>-</td>
		<td>+30</td>
		<td>学問+1、処世-1、銀両-100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両≥100<br>
            • 🚩「家出中に宿屋に宿泊」 (<MarkdownWrapper>[家出](/ja/event/simple/2-06-1-離家出走)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>独りで練功</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 心相＜35: 心相-5、品性-1<br>
            • 心相≧35: 武学+5、心相-10<br>
            • 修練画面を開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>日雇い<br>義田</td>
		<td>-</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀両+200、体力+1<br>
            • 性情±1、処世±1、品性±1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>義田を建設済み、会話差分</td>
	</tr>
<tr>
		<td>家出</td>
		<td>日雇い<br>鍛冶屋で鍛冶</td>
		<td>-</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 銀両+500、鍛造+5<br>
            • 鍛造画面を開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>唐門での鍛冶と比べてここでは品性が減らず<br>、必ず稼げるので非常にお得</td>
	</tr>
<tr>
		<td>家出</td>
		<td>日雇い<br>大宋の遊び人</td>
		<td>-</td>
		<td>-</td>
		<td>-15</td>
		<td>
            銀両+800、名声-1、性情-1、処世-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>🚩「家出中に廃寺に宿泊」 (<MarkdownWrapper>[家出](/ja/event/simple/2-06-1-離家出走)</MarkdownWrapper>参照)</td>
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
            • 性情＞40: 処世+1<br>
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
            • 想い人が葉雲裳: 心相+40<br>
            • 想い人が葉雲裳でない: 心相+10、心変わり+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>窩居</td>
		<td>雲裳惡作劇</td>
		<td>-</td>
		<td>+20<br>-10</td>
		<td>
            葉雲裳好感+1、品性-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
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
            • 想い人が葉雲裳: 心相+100<br>
            • 想い人が葉雲裳でない: 心変わり+5<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 葉雲裳好感≥35: +30<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>修練</td>
		<td>正常修練</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 武学+5<br>
            • 修練画面を開く<br>
        </td>
		<td>心相≥60:<br>武学+3</td>
		<td>-</td>
		<td>
            基礎: 100<br>
        </td>
		<td>-</td>
		<td>心相判定は心相を減らした後</td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>修練</td>
		<td>申屠龍切磋</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 武学+5<br>
            <br>
            全武学ポイント判定:<br>
            • 全武学≥100: 武学+4、申屠龍好感+1<br>
            • 100＞全武学≥50: 武学+2<br>
            • 全武学＜50: 申屠龍好感-1<br>
            <br>
            • 修練画面を開く<br>
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
		<td>常風観<br>散歩</td>
		<td>獨自烤魚</td>
		<td>-</td>
		<td>+20</td>
		<td>
            品性+1、処世±1、料理+1<br>
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
		<td>常風観<br>散歩</td>
		<td>雲裳烤魚</td>
		<td>-</td>
		<td>+30</td>
		<td>
            品性+1、料理+1、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>吟嘯徐行</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 品性+1、処世+1<br>
            • 🚩「青城散歩」+1、🚩「青城功勲」-1<br>
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
		<td>常風観<br>散歩</td>
		<td>雲裳散步</td>
		<td>-</td>
		<td>+30</td>
		<td>
            葉雲裳好感+1、🚩「青城散歩」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • 🚩「青城散歩」≥3<br>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>申屠龍散步</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 学問+1、申屠龍好感+1<br>
            • 🚩「青城散歩」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • <MarkdownWrapper>[申屠の受難](/ja/event/simple/2-09-3-申屠遇襲)</MarkdownWrapper>の確率上昇時: +30<br>
        </td>
		<td>🚩「青城散歩」≥3</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>似有所悟</td>
		<td>-</td>
		<td>+40</td>
		<td>
            • 品性+2、処世+1<br>
            • 🚩「青城散歩」+1、🚩「青城功勲」-1<br>
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
		<td>常風観<br>散歩</td>
		<td>遭遇野豬</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：イノシシが発生:<br>
            <br>
            敗北: <MarkdownWrapper>[生死簿72：豚に殺される](/ja/event/badends/badend-72)</MarkdownWrapper><br>
            <br>
            勝利: 選択肢が発生:<br>
            👉 売る: 銀両+1000<br>
            👉 一緒に食べる: 処世+1、葉雲裳好感+1、申屠龍好感+1、青城派好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>🚩「青城散歩」≥3</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>妖孽受死</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：通りすがりの侠客が発生:<br>
            <br>
            敗北: 心相-40、名声-2、🚩「青城功勲」-1<br>
            <br>
            勝利: 武学+3、選択肢が発生:<br>
            👉 見逃す: 道徳+1、処世+1、名声-1<br>
            👉 殺害: 品性-1、性情+1、貢献+15、青城派好感-2、道徳判定:<br>
            • 道徳≥80: 道徳-2<br>
            • 80＞道徳≥60: 道徳-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>🚩「青城散歩」≥3</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>申屠遇襲</td>
		<td>-</td>
		<td>-</td>
		<td>
            <MarkdownWrapper>[申屠の受難](/ja/event/simple/2-09-3-申屠遇襲)</MarkdownWrapper>イベントが発生<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 100<br>
        </td>
		<td>
            • 最短で2年目9月下旬<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>常風観<br>散歩</td>
		<td>道長地位</td>
		<td>-</td>
		<td>-</td>
		<td>
            <MarkdownWrapper>[道長の地位](/ja/event/simple/2-08-3-道長地位)</MarkdownWrapper>イベントが発生<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 80<br>
        </td>
		<td>
            • 申屠龍好感≥10<br>
            • 一度きりのイベント、再発生不可<br>
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
            • 品性-1、団結-1、処世-1<br>
            • 🚩「青城功勲」+1<br>
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
            • 品性-1、処世+2、葉雲裳好感+1<br>
            • 青城派好感+1、🚩「青城功勲」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>風捲符紙</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 運命+1、葉雲裳好感+1<br>
            • 青城派好感-2、🚩「青城功勲」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相<30: +30<br>
        </td>
		<td>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>上清宮<br>修真</td>
		<td>心緒沉澱</td>
		<td>-</td>
		<td>+10</td>
		<td> 
            • 品性+1、弁舌-1、内功+1<br>
            • 🚩「青城功勲」+1<br>
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
            • 弁舌+1、処世-1<br>
            • 道徳≥60の場合: 道徳-1<br>
            • 道徳＜60の場合: 道徳+1<br>
            • 🚩「青城功勲」+1<br>
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
            • 品性+2、弁舌-1、内功+1<br>
            • 道徳+1、性情±1、処世±1<br>
            • 🚩「青城功勲」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 品性≥60: +20<br>
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
            • 弁舌+2、処世-2、名声+1<br>
            • 道徳≥60の場合: 道徳-1<br>
            • 道徳＜60の場合: 道徳+1<br>
            • 趙逵好感+1、青城派好感+1、🚩「青城功勲」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 弁舌≥40: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>上清宮<br>道士の下山</td>
		<td>祭品消失</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 名声+1、性情-1、葉雲裳好感+1<br>
            • 🚩「青城功勲」+1<br>
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
		<td>上清宮<br>道士の下山</td>
		<td>高功號令</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 名声+1、銀両+500<br>
            • 🚩「青城功勲」+1<br>
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
		<td>上清宮<br>道士の下山</td>
		<td>地獄道來襲</td>
		<td>-</td>
		<td>-</td>
		<td>
            ⚔️戦役：地獄道 が発生:<br>
            • 名声+2、武学+5、青城派好感+1<br>
            • 🚩「青城功勲」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 25<br>
        </td>
		<td>-</td>
		<td>仲間に任せれば勝てる、金拾いに専念</td>
	</tr>
<tr>
		<td>青城</td>
		<td>上清宮<br>道士の下山</td>
		<td>誤認鬼卒</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚対決：青城弟子 が発生:<br>
            • 第5回合: 🚩「地獄道の鬼卒が加勢」<br>
            • 第5回合: 品性＜40なら、味方が激怒<br>
            <br>
            敗: <MarkdownWrapper>[生死簿66：道士の妖怪退治](/ja/event/badends/#生死簿-No.66)</MarkdownWrapper><br>
            <br>
            勝: 🚩「地獄道の鬼卒が加勢」を判定:<br>
            • 加勢あり: 武学+4、🚩「青城功勲」+1<br>
            • 加勢なし: 武学+4、選択肢が発生:<br>
            👉追究: 品性-1、処世+1、銀両+500、名声+1、青城派好感-1<br>
            👉不追究: 品性+1、処世-1、道徳+1、青城派+1<br>
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
		<td>青城山鎮<br>街歩き</td>
		<td>沒錢逛街</td>
		<td>-</td>
		<td>+30</td>
		<td>
            処世+1<br>
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
		<td>青城山鎮<br>街歩き</td>
		<td>包袱被割</td>
		<td>-</td>
		<td>-20</td>
		<td>
            性情-1、名声+1、貢献-20<br>
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
		<td>青城山鎮<br>街歩き</td>
		<td>遭遇雲裳</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-500、葉雲裳好感+1<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心相+15、心変わり+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀両≥2000: +30<br>
        </td>
		<td>
            • 銀両≥1500<br>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在は発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>街歩き</td>
		<td>填飽你胃</td>
		<td>-</td>
		<td>+50</td>
		<td>
            銀両-100<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>街歩き</td>
		<td>雲裳吃菜</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-1000、学問+1、葉雲裳好感+2<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心相+20<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 35<br>
        </td>
		<td>
            • 銀両≥1000<br>
            • 品性≥60<br>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在は発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>街歩き</td>
		<td>投餵蔬果</td>
		<td>-</td>
		<td>-20</td>
		<td>
            銀両+1000、名声+1 <br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 20<br>
        </td>
		<td>上清宮修真「鬼神の相」を発生済み</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>鍛冶</td>
		<td>滿意成果</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀両-100、鍛造+5<br>
            • 鍛造インターフェースを開く<br>
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
		<td>青城山鎮<br>鍛冶</td>
		<td>差強人意</td>
		<td>-</td>
		<td>-20</td>
		<td>
            • 銀両+200、鍛造+3<br>
            • 鍛造インターフェースを開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 品性＜40: +10<br>
            • 性情＜40: +10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>鍛冶</td>
		<td>敲到自己</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 銀両-100、鍛造+3、運命+1 <br>
            • 鍛造インターフェースを開く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相＜30: +?<br>
        </td>
		<td>-</td>
		<td>低心相の重み<text style="color : red">測定待ち</text></td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>鍛冶</td>
		<td>品質良好</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀両-100、鍛造+8、品性-1、刀剣+1<br>
            • 鍛造インターフェースを開く<br>
        </td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            基礎: 30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>鍛冶</td>
		<td>人盡垂涎</td>
		<td>-</td>
		<td>-15</td>
		<td>
            • 銀両+1000、鍛造+5、貢献-15、名声-1、刀剣+1<br>
            • 鍛造インターフェースを開く<br>
        </td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            • 基礎: 25<br>
            • 全鍛造≥150: +15<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>診察</td>
		<td>水果報恩</td>
		<td>-</td>
		<td>+15</td>
		<td>
            銀両+100、道徳+1、葉雲裳好感+1<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治難症</td>
		<td>-</td>
		<td>+20</td>
		<td>
            銀両+100、道徳+1、唐錚好感+1、申屠龍好感+1<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治妓女</td>
		<td>-</td>
		<td>-30</td>
		<td>
            • 銀両+100、道徳+1<br>
            • 若🚩「葉雲裳が先に唐門へ戻った」なし: 葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 15<br>
        </td>
		<td>-</td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在は発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>診察</td>
		<td>醫治老人</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道徳+1、申屠龍好感+1<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治瞎子</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道徳+1、申屠龍好感+1<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治瘸子</td>
		<td>-</td>
		<td>-10</td>
		<td>
            道徳+1、申屠龍好感+1<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治青城</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 道徳+1、貢献+15<br>
            • 申屠龍好感+1、唐中翎好感+1<br>
            • 🚩「青城功勲」+2<br>
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
		<td>青城山鎮<br>診察</td>
		<td>醫治鬼卒</td>
		<td>-</td>
		<td>-</td>
		<td>
            選択肢が発生:<br>
            👉 管你去死: 道徳-1、品性-1<br>
            👉 一言為定: 道徳+1、名声-1、貢献-10、青城派好感-1、地獄道好感-1<br>
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
            <MarkdownWrapper>[南宮寿宴](/ja/event/simple/1-12-1-南宮壽宴)</MarkdownWrapper>の仇敵ルートで+1可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>診察</td>
		<td>一籌莫展</td>
		<td>-</td>
		<td>-15</td>
		<td>
             銀両-100、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • 「医術」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級＜3<br>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在は発生不可<br>
        </td>
	</tr>
<tr>
		<td>青城</td>
		<td>青城山鎮<br>診察</td>
		<td>日漸可控</td>
		<td>-</td>
		<td>-20</td>
		<td>
             銀両-100、葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            基礎: 30<br>
        </td>
		<td>
            • 「医術」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級≥3<br>
            • 🚩「葉雲裳が先に唐門へ戻った」なし<br>
        </td>
		<td>
            🚩「葉雲裳が先に唐門へ戻った」:<br>
            現在は発生不可<br>
        </td>
	</tr>
<tr>
		<td>雪山</td>
		<td>雑談<br>夏侯蘭</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 🚩「夏侯蘭を気遣った」を設定<br>
            • 会話のみ、行動を消費しない<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>6月下旬に残り1回<br>行動時に開放</td>
		<td>🚩「夏侯蘭を気遣った」:<br>現在は無意味</td>
	</tr>
<tr>
		<td>雪山</td>
		<td>武功の修練</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 刀剣+1、武学+2、夏侯蘭好感+1<br>
            • 修練インターフェースを開く<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>雪山</td>
		<td>武功の修練</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 拳掌+1、武学+2、夏侯蘭好感+1<br>
            • 修練インターフェースを開く<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>雪山</td>
		<td>武功の修練</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 拳掌+1、刀剣+1、武学+4、夏侯蘭好感+2 <br>
            • 修練インターフェースを開く<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>雪山</td>
		<td>家を建てる</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 体力+1、🚩「雪山で家を建てた回数」+1<br>
            <br>
            🚩「雪山で家を建てた回数」を判定:<br>
            • 回数=1: 会話差分。唐門に<MarkdownWrapper>[樹屋を建造する](/ja/event/simple/3-05-3-建造樹屋)</MarkdownWrapper>の高級樹屋があれば、夏侯蘭好感+1<br>
            • 回数=2: 🚩「雪山の樹屋レベル」=1 に設定、夏侯蘭好感+2<br>
            • 回数=4: 🚩「雪山の樹屋レベル」=2 に設定、夏侯蘭好感+3<br>
            • 回数=7: 🚩「雪山の樹屋レベル」=3 に設定、夏侯蘭好感+5、会話差分<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>🚩「雪山の樹屋レベル」＜3</td>
		<td>
            1周目の場合、雪山は<br>
            行動回数が6回しかなく、建て終わらない<br>
        </td>
	</tr>
<tr>
		<td>雪山</td>
		<td>休息</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            心相＜30: 心相+30、🚩「雪山の樹屋レベル」を判定:<br>
            • レベル=2: 心相+10<br>
            • レベル=3: 心相+20<br>
            <br>
            心相≥30: 心相-20、内功+2、夏侯蘭好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>錦香宮</td>
		<td>コマンドメニュー</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            以下の華音閣イベント以外は、<MarkdownWrapper>[錦香宮イベント集](/ja/event/simple/3-09-3-錦香宮事件集)</MarkdownWrapper>を参照<br>
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
            品性+1、龍湘好感+1<br>
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
            • 名声-1<br>
            • 心上人為虞小梅: 心変わり+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「虞小梅が武林大会に同行」</td>
		<td>-</td>
	</tr>
<tr>
		<td>錦香宮</td>
		<td>華音閣<br></td>
		<td>雲裳彈琴</td>
		<td>-</td>
		<td>-</td>
		<td>
            本イベントの発生回数(今回を含む)を判定:<br>
            • 1回: 特殊効果なし<br>
            • 2回: 葉雲裳好感+1<br>
            • 3回: 心相+20、シナリオが発生、🚩「葉雲裳が琴を習う」を設定<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩「葉雲裳が武林大会に同行」<br>
            • 🚩「葉雲裳が琴を習う」なし<br>
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
            品性+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「小師妹が武林大会に同行」</td>
		<td>-</td>
	</tr>
</BTable>

## 備考
- 心相65は緑の表情だが、黄色の表情の追加効果が付く。<br>
- 基礎効果 + 追加効果 = 実際の効果。例えば低心相時は (基礎学問+2) + (低心相学問-1) = 実際の学問+1。
- ただし上記は最終的な効果であって、発生順ではない。通常の順序では、低心相は元の数値を直接書き換え、高心相は再判定の後に追加で加算される。<br>
- 効果が「±」と書かれている場合、数値が中庸の方向へ調整されることを表す。<br>
- イベントの確率 = そのイベントの確率重み / (そのコマンドで発生しうる全イベントの重みの合計)。発生不可の場合、計算上は「重み = 0」として扱う。<br>
- 紙面節約のため、「イベント終了」のような予想しやすい手順は一部省略している。<br>
- 「優先」イベント:<br>
    1. システムはまずどの優先イベントを発生させるかを判定し、次に優先イベントのスクリプト内容に従って、そのコマンドのランダムイベントに続くかどうかを判定する。<br>
    2. 優先イベントの結果に「そのコマンドのランダムイベントに続く」と書いてある場合、優先イベントは行動回数を消費しない。<br>
    3. 逆に書いていない場合は、優先イベント終了時に行動回数を消費し、その行動の手番は終わる。<br>
    4. 優先イベント同士の発生確率は、確率重みで表されることもあれば、乱数を直接定義してその値を判定することもあり、後者は本表では「確率 XX%」と表記する。<br>
    5. 優先イベントが1つだけ (=「優先イベントなし」) で特別な内容も無い場合、本表では省略する。<br>
    6. 貢献や一部の数値増減は、実際には優先イベントの中で発生する。本表の形式では正確な流れを表しにくいため、等価な結果をできるだけ記述するにとどめる。<br>
    7. 本表では読者が2つのイベントを同時に参照しなくて済むよう、優先イベントの効果をできるだけ後続のランダムイベントの効果に含めて記述する。<br>
- 本記事は[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)を参考に作成。<br>
<br>
