<template>
    <!-- 外層依容器寬度縮放預覽; 內層 .stage 固定像素, 截圖直接拿它輸出, 畫質與裝置無關 -->
    <div ref="wrap" class="stage-wrap" :class="{ portrait }" :style="{ height: size.h * k + 'px' }">
        <div ref="stage" class="stage" :class="{ portrait, 'wrap-overflow': wrapOverflow }" :style="stageStyle">
            <div ref="words" class="words">
                <BadendTitle :title="title"></BadendTitle>
                <BadendContext><slot></slot></BadendContext>
            </div>
        </div>
    </div>
</template>

<script>
import { withBase } from "vitepress";

// 生死簿 (驟死結局) 畫面。依遊戲截圖 1920x1080 量測後減半:
// 標題 70px、內文 36px、標題右緣 x=312、上緣 y=72; 數值已對 No.1~90 截圖逐張比對校正
const SIZES = { landscape: { w: 960, h: 540 }, portrait: { w: 540, h: 960 } };

export default {
    props: {
        title: { type: String, default: "" },
        imageSource: { type: String, default: "" }, // 自訂背景; 空字串用遊戲原圖
        portrait: { type: Boolean, default: false },
        // 橫式預設同遊戲, 超出畫面就切字; 開啟後改為超出畫面自動換列 (日文譯文較長)
        wrapOverflow: { type: Boolean, default: false },
    },
    data() {
        return { k: 1 };
    },
    computed: {
        size() {
            return this.portrait ? SIZES.portrait : SIZES.landscape;
        },
        stageStyle() {
            const url = this.imageSource || withBase("/images/generic/background/pic_badend_0000.webp");
            return {
                width: this.size.w + "px",
                height: this.size.h + "px",
                transform: `scale(${this.k})`,
                backgroundImage: `url('${url}')`,
                // 自訂圖一律鋪滿置中
                ...(this.imageSource ? { backgroundSize: "cover", backgroundPosition: "center" } : {}),
            };
        },
    },
    watch: {
        portrait() {
            this.$nextTick(this.fit);
        },
    },
    mounted() {
        this.ro = new ResizeObserver(this.fit);
        this.ro.observe(this.$refs.wrap);
        this.fit();
        this.keepInside();
    },
    updated() {
        this.keepInside();
    },
    beforeUnmount() {
        this.ro?.disconnect();
    },
    methods: {
        fit() {
            this.k = this.$refs.wrap.clientWidth / this.size.w;
        },
        // 文字往左長, 超長 (如日文長句) 會超出左緣: 這時改貼左邊留白
        keepInside() {
            const w = this.$refs.words;
            w.style.left = w.style.right = "";
            if (w.offsetLeft < 16) {
                w.style.left = "16px";
                w.style.right = "auto";
            }
        },
        // 給產生器截圖用: 未縮放的畫布節點與原始尺寸
        captureTarget() {
            return { node: this.$refs.stage, ...this.size };
        },
    },
};
</script>

<style scoped>
.stage-wrap {
    width: 100%;
    overflow: hidden;
}
.stage-wrap.portrait {
    max-width: 420px; /* 桌機上直式預覽不撐滿版 */
    margin: 0 auto;
}

/* 尺寸變數由 BadendTitle / BadendContext 繼承使用 */
.stage {
    --x: 159px; /* 標題右緣距左 */
    --y: 36px;
    --title: 35px;
    --title-max: none; /* 同遊戲: 標題不換列, 超出畫面就切掉 (No.3) */
    --text: 18px;
    --text-lh: 24px;
    --text-max: none; /* 同遊戲: 只在原文換行處換列, 長句直排到底, 超出畫面就切掉 (No.41/46/59) */
    position: relative;
    overflow: hidden;
    transform-origin: top left;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: 'SourceHanSerifTW-Bold', serif;
    color: #f04648;
}
.stage.wrap-overflow {
    --title-max: 504px; /* 排到畫面底部 (y≈1076) 才換列 */
    --text-max: 500px;
}
.stage.portrait {
    --x: 320px; /* 直式寬度有餘裕, 長文多切幾列往左長, 不往下壓到人物 */
    --y: 56px;
    --title: 44px;
    --title-max: 520px;
    --text: 22px;
    --text-lh: 30px;
    --text-max: 420px;
    background-size: 160% auto; /* 原圖放大, 人物約滿寬並置於下段, 上方留給文字 */
    background-position: 56% 82%;
}

.words {
    position: absolute;
    top: var(--y);
    right: calc(100% - var(--x));
    writing-mode: vertical-rl; /* 直書, 多列由右往左長 */
    inline-size: max-content;  /* 不受畫面剩餘高度限制, 換列只看 --title-max / --text-max */
}
</style>
