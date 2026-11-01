<template>
    <BadendBackground ref="stage" :title="title" :imageSource="imageSource" :portrait="portrait" :wrapOverflow="lang === 'ja'">{{ text }}</BadendBackground>
    <hr>
    <div v-html="t.disclaimer"></div>
    <hr>
    <div class="row">
        <ImageDownloadButton :target="() => $refs.stage.captureTarget()" prefix="LoM-badend"></ImageDownloadButton>
        <button type="button" class="btn" @click="clearData()">{{ t.btnClear }}</button>
        <button type="button" class="btn" @click="randomPreset()">{{ t.btnRandom }}</button>
    </div>
    <div class="hint">{{ t.mobileNote }}</div>

    <hr>

    <label class="field">
        {{ t.presetLabel }}
        <select v-model="presetNo" @change="applyPreset()">
            <option :value="null">{{ t.presetNone }}</option>
            <option v-for="p in presets" :key="p.no" :value="p.no">No.{{ p.no }} {{ p.title }}</option>
        </select>
    </label>
    <label class="field">
        {{ t.titleLabel }}
        <input type="text" v-model="title" @input="presetNo = null">
    </label>
    <label class="field">
        {{ t.contentLabel }}
        <textarea rows="4" :placeholder="t.contentPlaceholder" v-model="text" @input="presetNo = null"></textarea>
        <span class="hint">{{ t.breakHint }}</span>
    </label>
    <hr>
    <div class="field">
        {{ t.uploadLabel }}
        <input type="file" accept="image/*" @change="handleImageUpload">
        <button v-if="imageSource" type="button" class="btn" @click="imageSource = ''">{{ t.btnResetImage }}</button>
        <span class="hint">{{ t.sizeHint }}</span>
    </div>
</template>

<script>
import { useData, withBase } from "vitepress";
import ImageDownloadButton from "./ImageDownloadButton.vue";

// 對外文字多語表; 缺該語系回退繁中 (zh)
const I18N = {
    disclaimer: {
        zh: "註：本圖片產生器僅供推廣 活俠傳 (Legend of Mortal) 使用，<br>請勿使用於商業用途。",
        "zh-hans": "注：本图片生成器仅供推广 活侠传 (Legend of Mortal) 使用，<br>请勿用于商业用途。",
        en: "Note: This image generator is for promoting Legend of Mortal only.<br>Commercial use is prohibited.",
        ja: "注：本画像ジェネレーターは『活俠傳 (Legend of Mortal)』の宣伝目的のみに使用してください。<br>商用利用は禁止です。",
    },
    mobileNote: {
        zh: "iPhone / iPad 會以「分享」方式儲存圖片，請選「儲存影像」。",
        "zh-hans": "iPhone / iPad 会以「分享」方式保存图片，请选「存储图像」。",
        en: "On iPhone / iPad the image is saved via the Share sheet; choose \"Save Image\".",
        ja: "iPhone / iPad では「共有」から「画像を保存」を選んでください。",
    },
    btnClear: { zh: "清除全部資料", "zh-hans": "清除全部数据", en: "Clear All", ja: "すべてクリア" },
    btnRandom: { zh: "隨機一則死法", "zh-hans": "随机一则死法", en: "Random Ending", ja: "ランダム" },
    presetLabel: { zh: "套用遊戲內死法：", "zh-hans": "套用游戏内死法：", en: "Use an in-game ending:", ja: "ゲーム内の死に方を使う：" },
    presetNone: { zh: "（自訂）", "zh-hans": "（自定义）", en: "(custom)", ja: "（カスタム）" },
    titleLabel: { zh: "死法名稱：", "zh-hans": "死法名称：", en: "Title:", ja: "タイトル：" },
    contentLabel: { zh: "死法描述：", "zh-hans": "死法描述：", en: "Description:", ja: "説明：" },
    contentPlaceholder: { zh: "請在此輸入內容", "zh-hans": "请在此输入内容", en: "Enter content here", ja: "内容を入力してください" },
    breakHint: {
        zh: "換行 = 換一列；太長會自動換列。",
        "zh-hans": "换行 = 换一列；太长会自动换列。",
        en: "A line break starts a new column; long lines wrap automatically.",
        ja: "改行で次の列へ。長い行は自動で折り返します。",
    },
    uploadLabel: { zh: "替換背景圖：", "zh-hans": "替换背景图：", en: "Replace background:", ja: "背景を差し替え：" },
    btnResetImage: { zh: "恢復原圖", "zh-hans": "恢复原图", en: "Reset", ja: "元に戻す" },
    sizeHint: {
        zh: "建議 1920 × 1080（橫式）或 1080 × 1920（直式），左上角留黑給文字。",
        "zh-hans": "建议 1920 × 1080（横式）或 1080 × 1920（竖式），左上角留黑给文字。",
        en: "Recommended 1920 × 1080 (landscape) or 1080 × 1920 (portrait); keep the top-left dark for text.",
        ja: "推奨 1920 × 1080（横）または 1080 × 1920（縦）。左上は文字用に暗くしてください。",
    },
};

const DEFAULT_NO = 1;

export default {
    components: { ImageDownloadButton },
    setup() {
        const { localeIndex } = useData();
        return { localeIndex };
    },
    data() {
        return {
            title: "",
            text: "",
            imageSource: "",
            portrait: false,
            presetNo: null,
            allPresets: {},
        };
    },
    computed: {
        lang() {
            const l = this.localeIndex;
            return l === "en" || l === "ja" || l === "zh-hans" ? l : "zh";
        },
        t() {
            const out = {};
            for (const key in I18N) out[key] = I18N[key][this.lang] ?? I18N[key].zh;
            return out;
        },
        // 英文站沒有生死簿譯文, 回退繁中
        presets() {
            return this.allPresets[this.lang] ?? this.allPresets.zh ?? [];
        },
    },
    async mounted() {
        // 自適應: 手機 (含轉直) 用直式, 平板 / 桌機 / 手機橫放用橫式 (與遊戲一致), 轉向或縮放即時切換
        this.mq = window.matchMedia("(max-width: 640px)");
        this.onMq = () => { this.portrait = this.mq.matches; };
        this.mq.addEventListener("change", this.onMq);
        this.onMq();
        try {
            this.allPresets = await (await fetch(withBase("/json/badend_texts.json"))).json();
        } catch (e) {
            console.error("badend_texts.json 載入失敗", e); // 範本載不到不影響手動輸入
        }
        this.presetNo = this.presets.some((p) => p.no === DEFAULT_NO) ? DEFAULT_NO : null;
        this.applyPreset();
    },
    beforeUnmount() {
        this.mq?.removeEventListener("change", this.onMq);
    },
    methods: {
        applyPreset() {
            const p = this.presets.find((x) => x.no === this.presetNo);
            if (p) {
                this.title = p.title;
                this.text = p.text;
            }
        },
        randomPreset() {
            if (!this.presets.length) return;
            this.presetNo = this.presets[Math.floor(Math.random() * this.presets.length)].no;
            this.applyPreset();
        },
        clearData() {
            this.title = "";
            this.text = "";
            this.imageSource = "";
            this.presetNo = null;
        },
        handleImageUpload(e) {
            const file = e.target.files[0];
            if (file) this.imageSource = URL.createObjectURL(file);
        },
    },
};
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    align-items: center;
}
.btn {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 4px;
    transition: background-color 0.3s;
}
.btn:hover { background-color: #0056b3; }

.field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin: 12px 0;
}
.field input[type="text"],
.field textarea,
.field select {
    width: 100%;
    max-width: 480px;
    padding: 8px 10px;
    font-size: 16px; /* < 16px 時 iOS 聚焦會自動放大頁面 */
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
}
.hint {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}
</style>
