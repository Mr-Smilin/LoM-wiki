<template>
    <div id="image-generator">
        <EndBackground :imageSource="imageSource" :title="title">
            {{ autoLineBreak(context) }}
        </EndBackground>
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        註：本圖片產生器僅供推廣 活俠傳 (League of Mortal) 使用，<br>
        請勿使用於商業用途。
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        <div type="button" class="btn" @click="generateImage()">產生圖片</div>
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
        <input type="checkbox" id="auto-line-break">
        <label for="auto-line-break">內容自動換行</label>
    </div>
    <MarkdownWrapper>---</MarkdownWrapper>
    <div>
        請點選匯入圖片: <br>
        建議使用尺寸為 480 * 700 的圖片。<br>
        建議使用 PNG 格式的圖片, 透明背景的圖片效果會更好。<br>
        <input type="file" id="file-upload" class="file-input" @change="handleImageUpload()">
    </div>
</template>
<script>
    import MarkdownWrapper from "../tools/MarkdownWrapper.vue";
    import html2canvas from 'html2canvas';
    export default {
        components: {MarkdownWrapper},
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
            autoLineBreak(string){
                if (document.getElementById("auto-line-break")?.checked) {
                    return string.replace(/<br>/g, "\n");
                }
                return string;
            },
            generateImage(){
                let image_div = document.querySelector("#image-generator")
                image_div.style.backgroundColor = '#111';
                html2canvas(image_div).then(canvas => {
                    let canvasChild = document.body.appendChild(canvas)
                    const a = document.createElement("a");
                    a.href = canvas.toDataURL("image/jpeg");
                    a.download = this.getDownloadFileName();
                    a.click();
                    canvasChild.remove();
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
                this.context = "終於輪你當主角，你的謝幕可歌可泣，世<br>" +
                    "上無人再敢看輕你。<br>" +
                    "<br>";
                this.imageSource = "/images/generic/background/pic_end_0000.png";
                document.getElementById("auto-line-break").checked = true;
                return true;
            },
            getDownloadFileName(){
                const d = new Date();
                let text = d.toISOString();
                return "LoM-"+ text +".jpeg";
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