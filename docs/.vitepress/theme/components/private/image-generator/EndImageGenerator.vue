<template>
    <div id="image-generator">
        <EndBackground :imageSource="imageSource" :title="title">
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
        <div type="button" class="btn" @click="showExampleData()">{{ t.btnExample }}</div>
    </div>
    <hr>
    <div>
        {{ t.titleLabel }}
        <br>
        <input name="title-input" type="text" class="title-input" v-model="title">
    </div>
    <hr>
    <div>
        {{ t.contentLabel }}
        <br>
        <textarea name="context-input" type="text" class="content-input" :placeholder="t.contentPlaceholder" v-model="context"></textarea>
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
    import { useData } from "vitepress";
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
            zh: "部分瀏覽器與行動裝置若無法直接下載，將改以「分享」方式儲存圖片。",
            "zh-hans": "部分浏览器与移动设备若无法直接下载，将改用「分享」方式保存图片。",
            en: "On some browsers and mobile devices, the image is saved via the \"Share\" dialog instead of a direct download.",
            ja: "一部のブラウザ・モバイル端末では、直接ダウンロードの代わりに「共有」から画像を保存します。"
        },
        btnClear: { zh: "清除全部資料", "zh-hans": "清除全部数据", en: "Clear All", ja: "すべてクリア" },
        btnExample: { zh: "帶入範本", "zh-hans": "载入模板", en: "Load Example", ja: "サンプルを読み込む" },
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
                context: ""
            }
        },
        computed: {
            // 依當前語系挑字串, localeIndex 為 "root" 時視為 zh
            t() {
                const l = (this.localeIndex === "en" || this.localeIndex === "ja" || this.localeIndex === "zh-hans") ? this.localeIndex : "zh";
                const out = {};
                for (const key in I18N) out[key] = I18N[key][l] ?? I18N[key].zh;
                return out;
            }
        },
        mounted(){
            this.showExampleData();
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
            clearData(){
                this.title = "";
                this.context = "";
                this.imageSource = "";
                return true;
            },
            showExampleData(){
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
