<template>
    <span class="inline">
        <div :class="getBackgroundClass()" :style="getBackgroundUrl()">
            <div :class=getBookClass() :style="getBookUrl()">
                <img :class=getBookCoverClass()  :src="getBookCoverUrl(no)">
            </div>
        </div>
        <slot></slot>
    </span>



<!--    <table style="text-align:center;">-->
<!--        <tr>-->
<!--            <td WIDTH=565 BGCOLOR="#dacbb2">-->
<!--                <hr><br>-->
<!--                <font size="7" color="#a83232"><strong>&emsp;&emsp;傳說之人</strong></font>-->
<!--                <br>-->
<!--                <br>-->
<!--                <font size="5" color="000000">-->
<!--                    <strong>-->
<!--                        &emsp;&emsp;世人眾說紛紜，都想知道那位頭戴人皮面<br>-->
<!--                        &emsp;&emsp;具的前輩高人是何方神聖，然後，你那天<br>-->
<!--                        &emsp;&emsp;根本沒戴面具．<br>-->
<!--                        &emsp;&emsp;<br>-->
<!--                        <br>-->
<!--                    </strong>-->
<!--                </font>-->
<!--                <hr>-->
<!--            </td>-->
<!--        </tr>-->
<!--    </table>-->
</template>

<script>
import {withBase} from "vitepress";
export default {
    props: {
        no: {
            type: Number
        },
        title: {
            type: String,
            default: '',
        },
        context: {
            type: String,
            default: '',
        }
    },
    methods: {
        getBackgroundUrl(){
            return {
                backgroundImage: `url('${withBase(`/images/generic/background/pic_back_end_game.png`)}')`
            };
        },
        getBackgroundClass(){
            return ['background-image', 'background'];
        },
        getBookUrl(){
            return {
                backgroundImage: `url('${withBase(`/images/generic/pic_book_cover_01.png`)}')`
            };
        },
        getBookClass(){
            return ['book-image', 'book'];
        },
        getBookCoverUrl(no){
            let coverMapping = {
                0:'',
                1:'',
                2:'',
                3:'',
                4:'',
                5:'',
                6:'',
                7:'',
                8: withBase(`/images/generic/background/pic_end_0000.png`),
                9: '',
                10: '',
                11: '',
                12: '',
                13: '',
                14: '',
                15: '',
                16: '',
                17: '',
                18: '',
                19: '',
                20: '',
                21: '',
                22: '',
                23: '',
                24: '',
                25: '',
                26: '',
                27: '',
                28: '',
                29: '',
                30: '',
                31: '',
                32: withBase(`/images/generic/background/pic_backmountain_work_002.png`),
                33: '',
                34: '',
                35: '',
                36: '',
                37: '',
                38: '',
                39: '',
                40: '',
                41: '',
                42: '',
                43: '',
                44: '',
                45: '',
                46: '',
                47: '',
                48: '',
                49: '',
                50: '',
            };
            let cover = coverMapping[no] ? coverMapping[no] :'';
            console.log("no:" + no + " type:" + typeof(no));
            console.log("cover:" + cover)
            return coverMapping[no] ? coverMapping[no] :'';
        },
        getBookCoverClass(){
            return ['bookcover'];
        }
    }
};
</script>

<style scoped>
.background-image{
    display: inline-block;
    vertical-align: middle;
    align-content: center;
    background-repeat: no-repeat;
    z-index: -1;
    background-size: 100% 100%;
}

.background {
    width: 720px;
    height: 405px;
}

.book-image{
    vertical-align: middle;
    align-content: center;
    background-repeat: no-repeat;
    z-index: 1;
    background-size: 100% 100%;
}

.book {
    width: 295px;
    height: 330px;
}

.bookcover {
    margin: 35px 30px;
    padding: 5px;
    width: 192px;
    height: 280px;
    box-shadow: 0px 0px 0px 30px rgba(0,0,0,0.5);
    border-radius: 30px;
}
.img-edge-cover:after {
    content: '';
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    box-shadow:0 0 50px 30px #fff inset;
}

.small {
    width: 100px;
    height: 100px;
}

.medium {
    width: 200px;
    height: 200px;
}

.bg-small {
    width: 132px;
    height: 132px;
    line-height: 132px;
}

.bg-medium {
    width: 265px;
    height: 265px;
    line-height: 265px;
}

.inline{
    display: inline;
}

@media screen and (max-width: 768px) {
    .background {
        width: 100%;
        height: 100%;
    }
}
</style>
