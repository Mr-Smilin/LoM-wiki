<template>
    <div id="image-generator">
        <EndBackground :imageSource="imageSource" :title="title">
            {{ autoLineBreak(autoLineBreakTagReplace(context)) }}
        </EndBackground>
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        註：本圖片產生器僅供推廣 活俠傳 (League of Mortal) 使用，<br>
        請勿使用於商業用途。
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        <div type="button" class="btn download-bnt" @click="generateImage()">產生圖片</div>
        <div type="button" class="btn" @click="clearData()">清除全部資料</div>
        <div type="button" class="btn" @click="showExampleData()">帶入範本</div>
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        請在這裡輸入標題：
        <br>
        <input name="title-input" type="text" class="title-input" v-model="title">
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        請在這裡輸入內容：
        <br>
        <textarea name="context-input" type="text" class="content-input" placeholder="請在此輸入內容" v-model="context"></textarea>
        <br>
        <input type="checkbox" id="auto-line-break" checked @change="triggerAutoLineBreak()">
        <label for="auto-line-break">內容自動換行</label>
        <br>
        <input type="checkbox" id="auto-line-break-tag-replace" @change="triggerAutoLineBreak()">
        <label for="auto-line-break-tag-replace">&lt;br&gt;、&lt;/br&gt;自動取代</label>
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        請點選匯入圖片:
        <input type="file" id="file-upload" class="file-input" @change="handleImageUpload()"><br>
        建議使用尺寸為 480 * 700 的圖片。<br>
        建議使用 PNG 格式的圖片, 透明背景的圖片效果會更好。<br>
    </div>
</template>
<script>
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver';
    export default {
        data(){
            return {
                imageSource: "",
                title: "",
                context: ""
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
                    let lineLength = 18;
                    let lines = [];

                    for (let i = 0; i < string.length; i += lineLength) {
                        lines.push(string.slice(i, i + lineLength));
                    }

                    return lines.join('\n');
                }
                return string;
            },
            generateImage(){
                let image_div = document.querySelector("#image-generator")
                image_div.style.backgroundColor = '#111';
                let filename = this.getDownloadFileName();

                domtoimage.toBlob(image_div)
                    .then(function (blob) {
                        window.saveAs(blob, filename);
                    })
                    .catch((error) => {
                    console.error('oops, something went wrong!', error);
                });

                return true;
            },
            clearData(){
                this.title = "";
                this.context = "";
                this.imageSource = "";
                return true;
            },
            showExampleData(){
                this.title = "君所願兮江湖行";
                this.context = "終於輪你當主角，你的謝幕可歌可泣，世" +
                    "上無人再敢看輕你。</br>";
                this.imageSource = "/images/generic/background/pic_end_0000.png";
                document.getElementById("auto-line-break").checked = true;
                return true;
            },
            getDownloadFileName(){
                const d = new Date();
                let text = d.toISOString();
                return "LoM-"+ text +".jpeg";
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

.download-bnt{
    background-color: #05af56;
}

.download-bnt:hover{
    background-color: #047c45;
}

@media screen and (max-width: 768px){
    .download-bnt{
        background-color: #05af56;
        display: none;
    }
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