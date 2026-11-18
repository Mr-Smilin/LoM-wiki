<template>
    <div id="image-generator">
        <EndBackground :no="coverNo" :imageSource="imageSource" :title="title">
            {{ autoLineBreak(autoLineBreakTagReplace(context)) }}
        </EndBackground>
    </div>
    <hr>
    <div v-html="t.disclaimer"></div>
    <hr>
    <div>
        {{ t.mobileNote }}<br>
        <ImageDownloadButton :target="captureTarget" prefix="LoM"></ImageDownloadButton>
        <div type="button" class="btn" @click="clearData()">{{ t.btnClear }}</div>
        <div type="button" class="btn" @click="randomPreset()">{{ t.btnRandom }}</div>
    </div>
    <hr>
    <div>
        {{ t.presetLabel }}
        <br>
        <select class="title-input" v-model="presetNo" @change="applyPreset()">
            <option :value="null">{{ t.presetNone }}</option>
            <option v-for="p in presets" :key="p.no" :value="p.no">{{ t.endPrefix }}{{ p.no }} {{ p.title }}</option>
        </select>
    </div>
    <hr>
    <div>
        {{ t.titleLabel }}
        <br>
        <input name="title-input" type="text" class="title-input" v-model="title" @input="presetNo = null">
    </div>
    <hr>
    <div>
        {{ t.contentLabel }}
        <br>
        <textarea name="context-input" type="text" class="content-input" :placeholder="t.contentPlaceholder" v-model="context" @input="presetNo = null"></textarea>
        <br>
        <input type="checkbox" id="auto-line-break" checked @change="triggerAutoLineBreak()">
        <label for="auto-line-break">{{ t.autoBreak }}</label>
        <br>
        <input type="checkbox" id="auto-line-break-tag-replace" @change="triggerAutoLineBreak()">
        <label for="auto-line-break-tag-replace">{{ t.tagReplace }}</label>
    </div>
    <hr>
    <div>
        {{ t.uploadLabel }}
        <input type="file" id="file-upload" class="file-input" @change="handleImageUpload()"><br>
        {{ t.sizeHint }}<br>
        {{ t.formatHint }}<br>
    </div>
</template>
<script>
    import { useData, withBase } from "vitepress";
    import ImageDownloadButton from "./ImageDownloadButton.vue";

    // 所有對外文字的多語表; 缺該語系時 t 會回退繁中 (zh)
    const I18N = {
        disclaimer: {
            zh: "註：本圖片產生器僅供推廣 活俠傳 (Legend of Mortal) 使用，<br>請勿使用於商業用途。",
            "zh-hans": "注：本图片生成器仅供推广 活侠传 (Legend of Mortal) 使用，<br>请勿用于商业用途。",
            en: "Note: This image generator is for promoting Legend of Mortal only.<br>Commercial use is prohibited.",
            ja: "注：本画像ジェネレーターは『活俠傳 (Legend of Mortal)』の宣伝目的のみに使用してください。<br>商用利用は禁止です。"
        },
        mobileNote: {
            zh: "iPhone / iPad 會以「分享」方式儲存圖片，請選「儲存影像」。",
            "zh-hans": "iPhone / iPad 会以「分享」方式保存图片，请选「存储图像」。",
            en: "On iPhone / iPad the image is saved via the Share sheet; choose \"Save Image\".",
            ja: "iPhone / iPad では「共有」から「画像を保存」を選んでください。"
        },
        btnClear: { zh: "清除全部資料", "zh-hans": "清除全部数据", en: "Clear All", ja: "すべてクリア" },
        btnRandom: { zh: "隨機一個結局", "zh-hans": "随机一个结局", en: "Random Ending", ja: "ランダム" },
        presetLabel: { zh: "套用遊戲內結局：", "zh-hans": "套用游戏内结局：", en: "Use an in-game ending:", ja: "ゲーム内の結末を使う：" },
        presetNone: { zh: "（自訂）", "zh-hans": "（自定义）", en: "(custom)", ja: "（カスタム）" },
        endPrefix: { zh: "結局 ", "zh-hans": "结局 ", en: "Ending ", ja: "結末 " },
        titleLabel: { zh: "請在這裡輸入標題：", "zh-hans": "请在这里输入标题：", en: "Enter a title here:", ja: "タイトルを入力：" },
        contentLabel: { zh: "請在這裡輸入內容：", "zh-hans": "请在这里输入内容：", en: "Enter the content here:", ja: "内容を入力：" },
        contentPlaceholder: { zh: "請在此輸入內容", "zh-hans": "请在此输入内容", en: "Enter content here", ja: "内容を入力してください" },
        autoBreak: { zh: "內容自動換行", "zh-hans": "内容自动换行", en: "Auto line break", ja: "自動改行" },
        tagReplace: { zh: "<br>、</br>自動取代", "zh-hans": "<br>、</br>自动替换", en: "Auto-replace <br> tags", ja: "<br>タグを自動置換" },
        uploadLabel: { zh: "請點選匯入圖片:", "zh-hans": "请点击导入图片:", en: "Choose an image to import:", ja: "画像を選択：" },
        sizeHint: {
            zh: "建議使用尺寸為 480 * 700 的圖片。",
            "zh-hans": "建议使用尺寸为 480 * 700 的图片。",
            en: "Recommended size: 480 × 700.",
            ja: "推奨サイズ：480 × 700。"
        },
        formatHint: {
            zh: "建議使用 PNG 格式的圖片, 透明背景的圖片效果會更好。",
            "zh-hans": "建议使用 PNG 格式的图片, 透明背景的图片效果会更好。",
            en: "PNG is recommended; a transparent background works best.",
            ja: "PNG形式を推奨。背景が透明だとより綺麗に仕上がります。"
        },
        exampleTitle: {
            zh: "君所願兮江湖行",
            "zh-hans": "君所愿兮江湖行",
            en: "A Life Lived by Your Own Will",
            ja: "願うがままに江湖を行く"
        },
        exampleContext: {
            zh: "終於輪你當主角，你的謝幕可歌可泣，世上無人再敢看輕你。",
            "zh-hans": "终于轮你当主角，你的谢幕可歌可泣，世上无人再敢看轻你。",
            en: "At last you take the lead role. Your farewell is the stuff of legend, and no one dares look down on you again.",
            ja: "ついに君が主役だ。その幕引きは語り草となり、もう誰も君を侮れない。"
        }
    };

    export default {
        components: { ImageDownloadButton },
        setup() {
            const { localeIndex } = useData();
            return { localeIndex };
        },
        data(){
            return {
                imageSource: "",
                title: "",
                context: "",
                presetNo: null,
                coverNo: null,
                allPresets: {}
            }
        },
        computed: {
            // localeIndex 為 "root" 時視為 zh
            lang() {
                const l = this.localeIndex;
                return (l === "en" || l === "ja" || l === "zh-hans") ? l : "zh";
            },
            // 依當前語系挑字串
            t() {
                const out = {};
                for (const key in I18N) out[key] = I18N[key][this.lang] ?? I18N[key].zh;
                return out;
            },
            // 缺該語系結局頁時回退繁中
            presets() {
                return this.allPresets[this.lang] ?? this.allPresets.zh ?? [];
            }
        },
        async mounted(){
            try {
                this.allPresets = await (await fetch(withBase("/json/end_texts.json"))).json();
            } catch (e) {
                console.error("end_texts.json 載入失敗", e); // 範本載不到不影響手動輸入
            }
            if (this.presets.length) this.randomPreset();
            else this.showExampleData();
        },
        methods: {
            handleImageUpload() {
                const file = document.getElementById("file-upload").files[0];
                this.imageSource = URL.createObjectURL(file);
                return true;
            },
            autoLineBreakTagReplace(string){
                if (document.getElementById("auto-line-break-tag-replace")?.checked) {
                    this.context = this.context.replace(/<br>|<\/br>/g, "\n");
                    return string.replace(/<br>|<\/br>/g, "\n");
                }
                return string;
            },
            autoLineBreak(string){
                if (document.getElementById("auto-line-break")?.checked) {
                    let lineLength = 22;
                    let lines = [];

                    for (let i = 0; i < string.length; i += lineLength) {
                        lines.push(string.slice(i, i + lineLength));
                    }

                    return lines.join('\n');
                }
                return string;
            },
            // 給下載鈕截圖用; 背景補不透明色 (JPEG 無透明)
            captureTarget(){
                const node = document.querySelector("#image-generator");
                node.style.backgroundColor = '#111';
                return { node, w: node.clientWidth, h: node.clientHeight };
            },
            applyPreset(){
                const p = this.presets.find((x) => x.no === this.presetNo);
                if (!p) return;
                // 結局原文已依遊戲排版斷行, 關掉自動換行以免二次切斷
                document.getElementById("auto-line-break").checked = false;
                this.coverNo = p.no;
                this.title = p.title;
                this.context = p.text;
            },
            randomPreset(){
                if (!this.presets.length) return;
                this.presetNo = this.presets[Math.floor(Math.random() * this.presets.length)].no;
                this.applyPreset();
            },
            clearData(){
                this.presetNo = null;
                this.coverNo = null;
                this.title = "";
                this.context = "";
                this.imageSource = "";
                return true;
            },
            showExampleData(){
                this.presetNo = null;
                this.coverNo = null;
                this.title = this.t.exampleTitle;
                this.context = this.t.exampleContext;
                this.imageSource = "/images/generic/background/pic_end_0000.webp";
                document.getElementById("auto-line-break").checked = true;
                return true;
            },
            triggerAutoLineBreak(){
                this.context = this.context + " ";
                this.context = this.context.substring(0, this.context.length - 1);
                return true;
            }
        }
    };
</script>

<style scoped>
.btn {
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

.btn:hover {
    background-color: #0056b3;
}


.title-input{
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    background-color: var(--vp-c-text-1);
    color: var(--vp-c-bg-soft);
}

.content-input{
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    width: 350px;
    background-color: var(--vp-c-text-1);
    color: var(--vp-c-bg-soft);
}

.file-input{
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}

div{
    padding-bottom: 15px;
}
</style>
