<template>
    <button type="button" class="btn download-btn" :disabled="busy" @click="generate()">{{ busy ? t.busy : t.generate }}</button>
    <!-- iOS: 產圖太久會失去點擊手勢, 分享被擋時改由使用者再點一次 (新手勢), 或長按圖片儲存 -->
    <div v-if="pendingUrl" class="ios-fallback">
        <button type="button" class="btn download-btn" @click="shareAgain()">{{ t.share }}</button>
        <div class="hint">{{ t.longPress }}</div>
        <img :src="pendingUrl" alt="">
    </div>
</template>

<script>
import { useData } from "vitepress";
import { nodeToJpegFile, prepareFont, saveFile } from "./saveImage.js";

const I18N = {
    generate: { zh: "產生並下載圖片", "zh-hans": "生成并下载图片", en: "Generate & Download", ja: "画像を生成・保存" },
    busy: { zh: "產生中…", "zh-hans": "生成中…", en: "Generating…", ja: "生成中…" },
    share: { zh: "點此分享 / 儲存圖片", "zh-hans": "点此分享 / 保存图片", en: "Tap to Share / Save", ja: "タップして共有・保存" },
    longPress: {
        zh: "或直接長按下方圖片 →「加入照片」。",
        "zh-hans": "或直接长按下方图片 →「存储到照片」。",
        en: "Or long-press the image below → \"Add to Photos\".",
        ja: "または下の画像を長押し →「写真に追加」。",
    },
};

// 圖片產生器共用的下載鈕。target() 回傳 { node, w, h }: 要截的節點與其未縮放尺寸, 以 2 倍輸出。
export default {
    props: {
        target: { type: Function, required: true },
        prefix: { type: String, default: "LoM" },
    },
    setup() {
        const { localeIndex } = useData();
        return { localeIndex };
    },
    data() {
        return { busy: false, pendingFile: null, pendingUrl: "" };
    },
    computed: {
        t() {
            const l = ["en", "ja", "zh-hans"].includes(this.localeIndex) ? this.localeIndex : "zh";
            const out = {};
            for (const key in I18N) out[key] = I18N[key][l];
            return out;
        },
    },
    mounted() {
        prepareFont();
    },
    beforeUnmount() {
        this.setPending(null);
    },
    methods: {
        setPending(file) {
            if (this.pendingUrl) URL.revokeObjectURL(this.pendingUrl);
            this.pendingFile = file;
            this.pendingUrl = file ? URL.createObjectURL(file) : "";
        },
        async generate() {
            this.busy = true;
            this.setPending(null);
            try {
                const { node, w, h } = this.target();
                const name = `${this.prefix}-${new Date().toISOString().replace(/[:.]/g, "-")}.jpeg`;
                const file = await nodeToJpegFile(node, w, h, 2, name);
                try {
                    await saveFile(file);
                } catch (e) {
                    if (e?.name === "AbortError") return; // 使用者取消分享
                    if (e?.name !== "NotAllowedError") throw e;
                    this.setPending(file); // iOS 手勢逾時: 交給下一次點擊
                }
            } catch (error) {
                console.error("oops, something went wrong!", error);
            } finally {
                this.busy = false;
            }
        },
        async shareAgain() {
            try {
                await saveFile(this.pendingFile);
                this.setPending(null);
            } catch (e) {
                if (e?.name !== "AbortError") console.error(e); // 失敗就留著圖讓使用者長按
            }
        },
    },
};
</script>

<style scoped>
.btn {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    border-radius: 4px;
    transition: background-color 0.3s;
}
.btn:disabled { opacity: 0.6; cursor: wait; }
.download-btn { background-color: #05af56; }
.download-btn:hover { background-color: #047c45; }
.hint {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}
.ios-fallback {
    width: 100%;
    margin-top: 12px;
}
.ios-fallback img {
    display: block;
    width: 100%;
    max-width: 420px;
    margin-top: 8px;
}
</style>
