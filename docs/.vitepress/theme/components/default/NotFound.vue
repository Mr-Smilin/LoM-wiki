<!-- .vitepress/theme/NotFound.vue -->
<template>
	<div class="not-found-container">
		<div class="not-found-content">
            <div class="img-container">
                <img :src="content.image">
            </div>
            <p>{{ content.name }}結緣機率：{{ showProbability }} % </p>
			<p>{{ content.mainMessage }}</p>
			<p>{{ content.subMessage }}</p>
			<a href="/" class="home-button">返回首頁</a>
			<a :href="content.customButton.link" class="home-button">{{ content.customButton.text }}</a>
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
            content: {},
            contents: [
                {
                    name: '葉小妹',
                    image: withBase(`/images/people/characters/girl_2/gloomy2.png`),
                    mainMessage: "抱歉，葉小妹找不到你要的頁面。",
                    subMessage: "醒醒吧肥仔～找不到就自己動手做啊～",
                    customButton: {
                        text: "經不起挑釁動手做",
                        link: withBase(`/develop/1-start`)
                    },
                    checkValue: 1000000 * 0.8231  //檢定值
                },
                {
                    name: '雞腿俠',
                    image: withBase(`/images/people/characters/girl_8/girl8_drumstick.png`),
                    mainMessage: "抱歉，龍湘把你要的頁面當雞腿吃了。",
                    subMessage: "龍湘開心地望著你，希望你還能提供更多雞腿。",
                    customButton: {
                        text: "你感到無奈，只好重新做一頁餵她",
                        link: withBase(`/develop/1-start`)
                    },
                    checkValue: 1000000
                }
            ],// 圖片名稱不可帶空格, #字符, 否則無法顯示。
            sampleSpaceValueArray: [],
            SAMPLE_SPACE: 0,
            showProbability: 0
        }
    },
    created() {
        const SAMPLE_SPACE = 1000000;  // 樣本選定值上限
        this.SAMPLE_SPACE = SAMPLE_SPACE
        this.randomVariable = this.generateRandom(this.SAMPLE_SPACE);

        for (let i = 0; i < this.contents.length; i++) {
            this.appendSampleSpace(this.contents[i].checkValue)
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
        appendSampleSpace(rightValue) {
            let leftValue = 0

            if (this.sampleSpaceValueArray.length !== 0) {
                leftValue = this.sampleSpaceValueArray[this.sampleSpaceValueArray.length - 1]
            }

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
            return (this.getSampleSpaceValue(index) / this.SAMPLE_SPACE).toFixed(4) * 100;
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
