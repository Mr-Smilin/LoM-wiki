<template>
    <div :class=getBackgroundClass() :style=getBackgroundUrl()>
        <EndBook :no=no :imageSource=imageSource></EndBook>
        <div :class=getWordDivClass()>
            <div :class=getWordFlexClass()>
                <EndTitle :title=title></EndTitle>
                <EndContext><slot></slot></EndContext>
            </div>
        </div>
    </div>
    <div :class=getMobileBookDivClass()>
        <EndBook :no=no :imageSource=imageSource></EndBook>
    </div>
    <div :class=getMobileDivClass() :style="getBackgroundUrl()">
        <div :class=getMobileFlexClass()>
            <EndTitle :title=title></EndTitle>
            <EndContext><slot></slot></EndContext>
        </div>
    </div>
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
        imageSource: {
            type: String,
            default: '',
        }
    },
    methods: {
        getBackgroundUrl(){
            return {
                backgroundImage: `url('${withBase(`/images/generic/background/pic_back_end_game.webp`)}')`
            };
        },
        getBackgroundClass(){
            return ['background-image', 'background'];
        },
        getWordDivClass() {
            return ['word-div'];
        },
        getWordFlexClass() {
            return ['word-flex'];
        },
        getMobileDivClass() {
            return ['mobile-div', 'mobile-background'];
        },
        getMobileFlexClass() {
            return ['mobile-flex'];
        },
        getMobileBookDivClass(){
            return ['mobile-div', 'mobile-book']
        }
    }
};
</script>

<style scoped>
div{
    font-family: 'SourceHanSerifTW-Bold', sans-serif;
}

.background-image{
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    z-index: -1;
    background-size: 100% 100%;
}

.background {
    width: 720px;
    height: 405px;
}

.word-div{
    width: 360px;
    height: 160px;
    padding-bottom: 20px
}

.mobile-div {
    display: none;
}
.mobile-flex {
    display: none;
}
.mobile-background {
    display: none;
}

@media screen and (max-width: 768px) and (min-width: 400px){
    .mobile-background {
        display: block;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        z-index: -1;
        background-size: 100% 150%;
        background-position: 50% 40%;
        max-width: 500px;
        margin: 0 auto;
    }
    .word-div{
        width: 392px;
        height: 188px;
        padding-bottom: 20px
    }
}

@media screen and (max-width: 400px){
    .background {
        max-width: 500px;
        width: 100%;
        height: 100%;
        display: none;
    }
    .word-div{
        display: none;
    }
    .mobile-div {
        display: block;
    }
    .mobile-flex {
        display: block;
        padding-top: 22%;
        padding-bottom: 15%;
    }
    .mobile-background {
        display: block;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        z-index: -1;
        background-size: 100% 150%;
        background-position: 50% 40%;
    }
    .mobile-book {
        display:flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
