<!-- .vitepress/theme/NotFound.vue -->
<template>
	<div class="not-found-container">
		<div class="not-found-content">
            <div class="img-container">
                <img :src="content.image" :style="{marginTop: content.marginTop? content.marginTop + '%' : '0%'}">
            </div>
            <p>{{ probabilityLabel }}</p>
			<p>{{ t(content.mainMessage) }}</p>
			<p>{{ t(content.subMessage) }}</p>
			<a :href="homeLink" class="home-button">{{ ui.home[locale] }}</a>
			<a :href="buttonLink" class="home-button">{{ t(content.customButton.text) }}</a>
		</div>
	</div>
</template>

<script>
import { withBase } from "vitepress";
export default {
    data() {
        return {
            randomVariable: 0,
            contentIndex: 0,
            locale: "zh", // zh | en | ja，於 created() 依路徑判定
            content: {},
            // UI 固定文字（非角色台詞）
            ui: {
                home: { zh: "返回首頁", en: "Back to Home", ja: "トップへ戻る" },
                // {name} / {p} 由 probabilityLabel 帶入
                probability: {
                    zh: "{name}結緣機率：{p} %",
                    en: "Chance of meeting {name}: {p} %",
                    ja: "{name}との遭遇確率：{p} %"
                }
            },
            contents: [
                {
                    name: { zh: "小師妹", en: "Little Sister", ja: "小師妹" },
                    image: withBase(`/images/characters/girl_0/normal.webp`),
                    mainMessage: {
                        zh: "抱歉，小師妹找不到回唐門的路。",
                        en: "Sorry, Little Sister can't find her way back to the Tang Sect.",
                        ja: "ごめんなさい、小師妹は唐門への帰り道が見つかりません。"
                    },
                    subMessage: {
                        zh: "啊⋯⋯，師兄可以揹我回唐門嗎？",
                        en: "Um... big brother, could you carry me back to the Tang Sect?",
                        ja: "あの……お兄さん、唐門まで背負って帰ってくれませんか？"
                    },
                    customButton: {
                        text: {
                            zh: "你發現前方頁面壞了，只好去鍛冶場借工具修理。",
                            en: "The page ahead is broken, so you head to the forge to borrow tools to fix it.",
                            ja: "この先のページが壊れているので、鍛冶場で道具を借りて直すことにした。"
                        },
                        path: `/develop/1-start`
                    },
                    marginTop: -40, // 圖片偏移值, 負數表向上移動
                    checkValue: 1000000 * 0.2122  //檢定值
                },
                {
                    name: { zh: "葉小妹", en: "Sister Ye", ja: "葉小妹" },
                    image: withBase(`/images/characters/girl_2/gloomy2.webp`),
                    mainMessage: {
                        zh: "抱歉，葉小妹找不到你要的頁面。",
                        en: "Sorry, Sister Ye can't find the page you're looking for.",
                        ja: "ごめん、葉小妹はあなたの探しているページを見つけられない。"
                    },
                    subMessage: {
                        zh: "醒醒吧肥仔～找不到就自己動手做啊～",
                        en: "Wake up, chubby~ If you can't find it, just make it yourself~",
                        ja: "目を覚ませデブ〜 見つからないなら自分で作ればいいじゃん〜"
                    },
                    customButton: {
                        text: {
                            zh: "經不起挑釁動手做",
                            en: "Can't resist the taunt — start building",
                            ja: "挑発に乗って自分で作る"
                        },
                        path: `/develop/1-start`
                    },
                    marginTop: -40, // 圖片偏移值, 負數表向上移動
                    checkValue: 1000000 * 0.7231  //檢定值
                },
                {
                    name: { zh: "雞腿俠", en: "Drumstick Hero", ja: "鶏もも侠" },
                    image: withBase(`/images/characters/girl_8/girl8_drumstick.webp`),
                    mainMessage: {
                        zh: "抱歉，龍湘把你要的頁面當雞腿吃了。",
                        en: "Sorry, Long Xiang ate the page you wanted as if it were a drumstick.",
                        ja: "ごめん、龍湘があなたの探すページを鶏もも肉だと思って食べちゃった。"
                    },
                    subMessage: {
                        zh: "龍湘開心地望著你，希望你還能提供更多雞腿。",
                        en: "Long Xiang looks at you happily, hoping you'll offer more drumsticks.",
                        ja: "龍湘は嬉しそうにあなたを見て、もっと鶏ももをくれることを期待している。"
                    },
                    customButton: {
                        text: {
                            zh: "你感到無奈，只好重新做一頁餵她",
                            en: "Feeling helpless, you make a new page to feed her.",
                            ja: "仕方なく、あなたは彼女に食べさせる新しいページを作る。"
                        },
                        path: `/develop/1-start`
                    },
                    marginTop: -10, // 圖片偏移值, 負數表向上移動
                    checkValue: 1000000
                }
            ],// 圖片名稱不可帶空格, #字符, 否則無法顯示。
            sampleSpaceValueArray: [],
            SAMPLE_SPACE: 0,
            showProbability: 0
        }
    },
    computed: {
        // 語系前綴：zh 為空, 其餘為 /en 或 /ja
        localePrefix() {
            return this.locale === "zh" ? "" : `/${this.locale}`;
        },
        homeLink() {
            return withBase(`${this.localePrefix}/`);
        },
        buttonLink() {
            return withBase(`${this.localePrefix}${this.content.customButton.path}`);
        },
        probabilityLabel() {
            return this.ui.probability[this.locale]
                .replace("{name}", this.t(this.content.name))
                .replace("{p}", this.showProbability);
        }
    },
    created() {
        this.locale = this.detectLocale();
        const SAMPLE_SPACE = 1000000;  // 樣本選定值上限
        this.SAMPLE_SPACE = SAMPLE_SPACE
        this.randomVariable = this.generateRandom(this.SAMPLE_SPACE);

        for (let i = 0; i < this.contents.length; i++) {
            let leftValue = 0;
            if (i > 0){
                leftValue = this.contents[i-1].checkValue
            }
            this.appendSampleSpace(leftValue, this.contents[i].checkValue)
            // Calculate the checkValue of each content
            if (this.checkContentIndex(i)) {
                this.setContentIndex(i);
            }
        }
        this.setContent();
        this.showProbability = this.getShowProbability();
    },
    mounted() {
        //remove useless element
        document.querySelectorAll("body>div.lg-container").forEach(e => e.remove());
    },
    methods: {
        // 依網址路徑判定語系 (base 為 /LoM-wiki/, 故 /en/、/ja/ 前綴可辨識)
        detectLocale() {
            if (typeof window === "undefined") return "zh";
            const p = window.location.pathname;
            if (/\/en\//.test(p)) return "en";
            if (/\/ja\//.test(p)) return "ja";
            return "zh";
        },
        // 取多語欄位; 缺該語系則回退繁中
        t(field) {
            if (field == null) return "";
            return field[this.locale] ?? field.zh ?? "";
        },
        getContentIndex() {
            return this.contentIndex;
        },
        setContentIndex(index) {
            this.contentIndex = index;
        },
        generateRandom(sampleSpace) {
            return Math.ceil(sampleSpace * Math.random());
        },
        setContent() {
            this.content = this.contents[this.contentIndex]
        },
        appendSampleSpace(leftValue, rightValue) {
            this.sampleSpaceValueArray.push(rightValue - leftValue)
        },
        checkContentIndex(index) {
            let leftValue = 0
            let rightValue = this.contents[index].checkValue
            if (index > 0) {
                leftValue = this.contents[index - 1].checkValue
            }

            // right inequality for the margin judgement, the result depends on the order of contents.
            return leftValue <= this.randomVariable && this.randomVariable <= rightValue
        },
        getSampleSpaceValue(index = null) {
            if (index === null) {
                return this.index = this.SAMPLE_SPACE
            }

            return this.sampleSpaceValueArray[index]
        },
        getShowProbability(index = null) {
            if (index === null) {
                index = this.contentIndex
            }

            // 四捨五入到第二位
            return (this.getSampleSpaceValue(index) / this.SAMPLE_SPACE * 100).toFixed(2);
        }
    }
}
</script>

<style scoped>
.not-found-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: var(--vp-c-bg);
	color: var(--vp-c-text);
	text-align: center;
}

.not-found-content {
	max-width: 600px;
	padding: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	background-color: var(--vp-c-card-bg);
}

.not-found-content h1 {
	font-size: 4rem;
	margin-bottom: 1.5rem;
}

.not-found-content p {
	font-size: 1.25rem;
	margin-bottom: 2rem;
}

.home-button {
	display: inline-block;
	padding: 10px 20px;
  margin: 10px;
	font-size: 1rem;
	color: #ffffff;
	background-color: #007bff;
	border-radius: 4px;
	text-decoration: none;
	transition: background-color 0.3s;
}

.home-button:hover {
	background-color: #0056b3;
}

.img-container {
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    padding: 20px 0px;
}
.img-container > img {
    width: 50%;
    height: 50%;
}
</style>
