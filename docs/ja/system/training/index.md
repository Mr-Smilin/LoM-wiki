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
		<td>楽な仕事</td>
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
		<td>課外の書物</td>
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
		<td>家具を壊す</td>
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
		<td>サボっていい加減</td>
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
		<td>火事を起こす</td>
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
		<td>福韞の仏法談義</td>
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
		<td>三師兄と掌門の<br>古今談義</td>
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
		<td>一本のサトウキビ</td>
		<td>11</td>
		<td>+3</td>
		<td>
            • 団結-1、品性+1、処世-1、銀両-50<br>
            • 唐惟元好感+1<br>
			• 「サトウキビ」+1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)
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
		<td>三師兄とあなたの<br>古今談義</td>
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
		<td>座禅で療傷</td>
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
		<td>少し上達</td>
		<td>-</td>
		<td>-8</td>
		<td>
            • 品性+1、弁舌-1、内功+1<br>
            • 「座禅で療傷」(上のイベントを参照)<br>
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
		<td>清心静坐</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 内功+2、弁舌-1、体力-1、抗毒+2、抗麻+2<br>
			• 品性+1、性情±1、処世±1<br>
            • 🚩「掌門が唐門にいる」なら: 唐中翎好感+1<br>
            • 「座禅で療傷」(上のイベントを参照)<br>
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
		<td>心が浮ついて苛立つ</td>
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
		<td>師弟の火遊び</td>
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
		<td>大いに悟る</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 品性+2、弁舌-2、内功+1、拳掌+1<br>
            • 性情±1、処世±1<br>
            • 「座禅で療傷」(上のイベントを参照)<br>
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
		<td>初心を思い出す</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 品性+2、道徳+2、弁舌-1<br>
            • 性情±2、処世±2<br>
            • 「座禅で療傷」(上のイベントを参照)<br>
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
		<td>優先イベントなし</td>
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
		<td>龍湘の剣の稽古</td>
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
		<td>着実に働く</td>
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
		<td>足をくじく</td>
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
		<td>九死に一生</td>
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
		<td>岩壁を踏み崩す</td>
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
		<td>近道をする</td>
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
		<td>無敵号と<br>紙くずの山</td>
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
		<td>罠を利用</td>
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
		<td>罠を踏む</td>
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
		<td>採掘</td>
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
		<td>桟道の修繕</td>
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
		<td>崖に登って眺める</td>
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
		<td>採薬</td>
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
		<td>通りすがりの侠客</td>
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
		<td>優先イベントなし</td>
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
		<td>小師妹の焼き魚</td>
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
		<td>通常</td>
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
		<td>独りで焼き魚</td>
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
		<td>小梅の乱入</td>
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
		<td>優先イベントなし</td>
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
		<td>兵器の修復</td>
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
		<td>満足の出来</td>
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
		<td>頭がくらくら</td>
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
		<td>雑念あり</td>
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
		<td>留学生が秘方を<br>覗こうとする</td>
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
		<td>留学生の敬意</td>
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
		<td>大いに学ぶ</td>
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
		<td>心が乱れる</td>
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
		<td>騙して勧誘</td>
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
		<td>苦労人の葉雲舟</td>
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
		<td>満足の出来</td>
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
		<td>配合を簡略化</td>
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
		<td>奇想天外</td>
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
		<td>こっぴどく叱られる</td>
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
		<td>応用が利く</td>
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
		<td>全神経を集中</td>
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
		<td>留学生の悪さ</td>
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
		<td>留学生と友好</td>
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
		<td>小梅の復讐</td>
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
		<td>妥当な予算</td>
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
		<td>奔放な料理</td>
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
		<td>掌門の健康</td>
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
		<td>小師妹の<br>好きな料理</td>
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
		<td>小師妹の代役</td>
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
		<td>食いしん坊の龍湘</td>
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
		<td>ふと思い立って</td>
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
		<td>茶屋の菓子</td>
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
		<td>晁和の偽のおごり</td>
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
		<td>退屈な仕事</td>
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
		<td>後始末</td>
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
		<td>脱手鏢</td>
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
		<td>汚れを洗い落とす</td>
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
		<td>汗を流す</td>
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
		<td>小梅との手合わせ</td>
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
		<td>三師兄が指導</td>
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
		<td>二師兄が指導</td>
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
		<td>四師兄が指導</td>
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
		<td>大師兄が指導</td>
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
		<td>流れ弾で負傷</td>
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
		<td>小師妹が出没</td>
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
		<td>掌門の指導</td>
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
		<td>留学生が<br>勝手に練功</td>
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
		<td>留学生の<br>押し合い</td>
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
		<td>留学弟子が<br>超団結</td>
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
		<td>趙活が指導<br>感慨</td>
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
		<td>趙活が指導<br>変わり者の師弟</td>
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
		<td>大師兄の<br>蹴鞠</td>
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
		<td>吊るして殴る</td>
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
		<td>窓を開けて撃墜</td>
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
		<td>責めようがない</td>
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
		<td>一筋の温もり</td>
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
		<td>丸めて捨てる</td>
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
		<td>深い谷へ踏み出す</td>
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
		<td>ひと眠り</td>
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
		<td>人の世が恐い</td>
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
		<td>大師兄を真似る</td>
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
		<td>福韞の説法</td>
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
		<td>福韞が四師兄を<br>浄化</td>
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
		<td>優先イベントなし</td>
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
		<td>小梅の乱入</td>
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
		<td>秘笈を持ってきた</td>
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
		<td>龍湘、盗難に遭う</td>
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
		<td>姜記肉まん</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 並んで買う(銀両＞500必要):<br>
            • 学問-1、銀両-500、「姜記肉まん」x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
            <br>
            👉 時間を無駄にする:<br>
            • 🚩「外出で龍湘に遭遇」を設定<br>
            • 外出のコマンドメニューに戻る<br>
            <br>
            👉 店を壊す(道徳＜40かつ性情≥60必要):<br>
            • 道徳-2、🆚戦：江湖の拳師 が発生<br>
            • 敗北: <MarkdownWrapper>[生死簿86：肉まんを喉に詰めて](/ja/event/badends/#生死簿-No.86)</MarkdownWrapper><br>
            • 勝利: 武学+4、銀両+1000、名声+2、姜記肉まんx5を獲得、上官螢好感-3、唐中翎好感-3、宋悲好感-2、丐幇好感+2<br>
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
		<td>李富貴の<br>使い走り</td>
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
		<td>李富貴が<br>冷水を飲む</td>
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
		<td>福韞の<br>強制浄化</td>
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
		<td>過不足なし</td>
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
		<td>荷物を切られる</td>
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
		<td>賭博で全額すった</td>
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
		<td>我先にと買い漁る</td>
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
		<td>大収穫で帰還</td>
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
		<td>長距離の行商</td>
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
		<td>気晴らしの街歩き</td>
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
		<td>荷物を切られる</td>
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
		<td>飛石幇が因縁をつける</td>
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
		<td>何者だ妖怪め</td>
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
		<td>胸の上で石割り</td>
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
		<td>丐幇と野菜の奪い合い</td>
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
		<td>腹を満たして満足</td>
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
		<td>折り紙職人</td>
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
		<td>茶屋で麺を食べる</td>
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
		<td>野菜と果物の贈り物</td>
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
		<td>女侠vs龍湘</td>
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
		<td>山賊vs龍湘</td>
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
		<td>龍湘が客を殴る</td>
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
		<td>龍湘の勘定違い</td>
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
		<td>龍湘が厨房を燃やす</td>
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
		<td>李富貴の<br>胸の上で石割り</td>
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
		<td>李富貴の<br>蛇使い成功</td>
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
		<td>李富貴の<br>蛇使い失敗</td>
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
		<td>李富貴の<br>蛇使い大成功</td>
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
		<td>李富貴の<br>釣り</td>
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
		<td>福韞と偶然会う</td>
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
		<td>小師妹を連れて<br>下山の道覚え</td>
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
		<td>小師妹が<br>得意満面</td>
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
		<td>保護者</td>
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
		<td>優先イベントなし</td>
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
		<td>龍湘と福韞</td>
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
		<td>厚かましい居座り</td>
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
		<td>住人の乱闘</td>
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
		<td>家賃を受け取る</td>
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
		<td>掃除</td>
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
		<td>唐門への付け届け</td>
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
		<td>木陰の説法</td>
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
		<td>福韞と<br>葉雲舟</td>
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
		<td>福韞と<br>葉雲裳</td>
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
		<td>苦労人の葉雲舟</td>
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
		<td>葉雲舟の剣削り</td>
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
		<td>葉雲舟の剣指南</td>
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
            • 「葉雲舟の剣削り」を5回以上発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>大門</td>
		<td>茶屋<br>茶博士<br>優先判定</td>
		<td>優先イベントなし</td>
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
		<td>茶が熱すぎる</td>
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
		<td>店先の乱闘</td>
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
		<td>飛石幇の言いがかり</td>
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
		<td>丐幇が因縁をつける</td>
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
		<td>瓜をおごる</td>
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
		<td>午後の小雨</td>
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
		<td>茶匠・魏菊</td>
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
		<td>龍湘の点茶</td>
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
		<td>優先イベントなし</td>
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
            確率は「葉雲舟の煎薬」が<br>
            発生するかどうかで決まる<br>
        </td>
	</tr>
<tr>
		<td>大門</td>
		<td>薬屋<br>診察<br>優先判定</td>
		<td>葉雲舟の煎薬</td>
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
		<td>果物で恩返し</td>
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
		<td>満場一致</td>
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
		<td>御曹司の治療</td>
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
		<td>黒犬の治療</td>
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
		<td>医療トラブル</td>
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
		<td>妓女の治療</td>
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
		<td>老人を無償で治療</td>
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
		<td>盲人を無償で治療</td>
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
		<td>足の悪い男を無償で治療</td>
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
		<td>富豪の<br>お礼</td>
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
		<td>飛石幇の患者</td>
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
		<td>丐幇弟子の<br>受診</td>
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
		<td>優先イベントなし</td>
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
		<td>地道に努力</td>
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
		<td>魏菊の白菜を<br>掘り返す</td>
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
		<td>魏菊と<br>一緒に耕す</td>
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
		<td>優先イベントなし</td>
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
		<td>疲れが<br>吹き飛ぶ</td>
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
		<td>師兄弟の覗き</td>
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
		<td>日よけ棚が崩れる</td>
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
		<td>龍湘と温泉に入る</td>
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
		<td>無為に過ごす</td>
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
		<td>誰かが覗いている</td>
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
		<td>小梅がドアを破る</td>
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
		<td>寄ってたかって嘲笑</td>
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
		<td>優先イベントなし</td>
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
		<td>蜀とは違う</td>
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
		<td>小梅と同行</td>
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
		<td>鉄拳巷で<br>買い物</td>
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
		<td>四師兄と<br>偶然会う</td>
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
		<td>優先イベントなし</td>
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
		<td>賭けは十中八九イカサマ</td>
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
		<td>小勝ち</td>
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
		<td>大勝ち</td>
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
		<td>擂台での試合</td>
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
		<td>小梅のランニング</td>
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
		<td>恋敵と遭遇</td>
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
		<td>手段を選ばず</td>
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
		<td>奪魄森林で<br>迷子</td>
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
		<td>実力差歴然</td>
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
		<td>山の幸のバーベキュー</td>
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
		<td>絶好調</td>
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
		<td>凛々しい少侠</td>
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
		<td>大仙の降臨</td>
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
		<td>少し成果</td>
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
		<td>気功で山を平らに</td>
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
		<td>唐門の祖師</td>
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
		<td>皇室の血統</td>
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
		<td>優先イベントなし</td>
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
		<td>一度きりの<br>優先イベント集</td>
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
		<td>言い訳がいっぱい</td>
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
		<td>滅茶苦茶に打つ</td>
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
		<td>草刈り功</td>
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
		<td>判断を控える</td>
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
		<td>思いのまま</td>
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
		<td>流れるように</td>
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
		<td>必殺の心得</td>
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
		<td>満足の出来</td>
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
		<td>頭がくらくら</td>
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
		<td>下手な腕前</td>
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
		<td>習うより慣れろ</td>
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
		<td>ひらめき</td>
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
		<td>神業が宿る</td>
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
		<td>伝奇小説</td>
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
		<td>詩詞を吟じる</td>
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
		<td>傑出した文章</td>
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
		<td>棋力の判定</td>
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
		<td>接戦の末<br>惜敗</td>
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
		<td>苦しい粘り</td>
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
		<td>接戦の末<br>辛勝</td>
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
		<td>渡り合うも<br>一歩及ばず</td>
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
		<td>造作もなく<br>勝つ</td>
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
		<td>綻びを突いて<br>勝利</td>
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
		<td>徹底的に打ち破る</td>
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
		<td>鮮やかに撃破</td>
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
		<td>市場で街歩き</td>
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
		<td>心が晴れやか</td>
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
		<td>見苦しい</td>
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
		<td>問答無用</td>
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
		<td>収穫いまいち</td>
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
		<td>女物の衣装</td>
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
		<td>大漁</td>
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
		<td>気ままに飲み食い</td>
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
		<td>賭けは十中八九イカサマ</td>
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
		<td>小勝ち</td>
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
		<td>大勝ち</td>
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
		<td>無為に過ごす</td>
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
		<td>部屋を間違える</td>
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
		<td>雲裳の遊び</td>
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
		<td>雲裳のいたずら</td>
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
		<td>雲裳が寝入る</td>
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
		<td>通常の修練</td>
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
		<td>申屠龍との手合わせ</td>
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
		<td>独りで焼き魚</td>
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
		<td>雲裳の焼き魚</td>
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
		<td>吟じながらそぞろ歩き</td>
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
		<td>雲裳の散歩</td>
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
		<td>申屠龍の散歩</td>
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
		<td>悟るところあり</td>
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
		<td>イノシシと遭遇</td>
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
		<td>妖怪め、死ね</td>
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
		<td>申屠の受難</td>
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
		<td>道長の地位</td>
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
		<td>心が静まらない</td>
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
		<td>読経で言葉を忘れる</td>
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
		<td>風に舞う符紙</td>
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
		<td>心が落ち着く</td>
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
		<td>見よう見まね</td>
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
		<td>道門を悟る</td>
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
		<td>鬼神の相</td>
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
		<td>供物の消失</td>
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
		<td>高功の号令</td>
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
		<td>地獄道の襲来</td>
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
		<td>鬼卒と誤認</td>
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
		<td>金が無い街歩き</td>
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
		<td>荷物を切られる</td>
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
		<td>雲裳と遭遇</td>
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
		<td>腹ごしらえ</td>
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
		<td>雲裳の食事</td>
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
		<td>野菜と果物を与える</td>
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
		<td>満足の出来</td>
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
		<td>まずまず</td>
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
		<td>自分を叩く</td>
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
		<td>誰もが欲しがる</td>
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
		<td>果物で恩返し</td>
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
		<td>難病の治療</td>
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
		<td>妓女の治療</td>
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
		<td>老人の治療</td>
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
		<td>盲人の治療</td>
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
		<td>足の悪い男の治療</td>
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
		<td>青城弟子の治療</td>
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
		<td>鬼卒の治療</td>
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
		<td>手の施しようがない</td>
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
		<td>病状が次第に安定</td>
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
		<td>思いのまま</td>
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
		<td>流れるように</td>
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
		<td>流れるように</td>
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
		<td>龍湘の簫</td>
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
		<td>小梅があなたを奏でる</td>
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
		<td>雲裳の琴</td>
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
		<td>小師妹の拍手</td>
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
