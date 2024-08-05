<template>
    <div :class=getBackgroundClass() :style=getBackgroundUrl()>
        <EndBook :no=no></EndBook>
        <div :class=getWordDivClass()>
            <div :class=getWordFlexClass()>
                <EndTitle :title=title></EndTitle>
                <EndContext><slot></slot></EndContext>
            </div>
        </div>
    </div>
    <div :class=getMobileBookDivClass()>
        <EndBook :no=no></EndBook>
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
    font-family: 'SourceHanSerifTC-BOLD', sans-serif;
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
.mobile-div {
    display: none;
}
.mobile-flex {
    display: none;
}
.mobile-background {
    display: none;
}

@media screen and (max-width: 768px) and (min-width: 500px){
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
}

@media screen and (max-width: 768px) {
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
        padding: 50px 0px;
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
