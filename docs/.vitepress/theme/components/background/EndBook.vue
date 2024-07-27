<template>
        <div :class=getBookClass() :style=getBookUrl()>
            <div :class=getBookName() :style=getBookNameUrl()></div>
            <div :class=getBookCoverClass()  :style=getBookCoverUrl(no)></div>
        </div>
</template>

<script>
import {withBase} from "vitepress";
export default {
    props: {
        no: {
            type: Number
        },
    },
    methods: {
        getBookUrl() {
            return {
                backgroundImage: `url('${withBase(`/images/generic/pic_book_cover_01.png`)}')`
            };
        },
        getBookClass() {
            return ['book-image', 'book'];
        },
        getBookCoverUrl(no) {
            let coverMapping = {
                0: '',
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
                7: '',
                8: '/images/generic/background/pic_end_0000.png',
                9: '',
                10: '',
                11: '',
                12: '/images/generic/background/pic_girlroom_free_002.png',
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
                32: '/images/generic/background/pic_backmountain_work_002.png',
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
            let cover = coverMapping[no] ? coverMapping[no] : '';
            //                backgroundImage: 'radial-gradient(30px 130px ellipse, transparent 90px, rgba(255, 222, 173, 0.9) 100px), url(' + withBase(cover) + ')'

            return {
                backgroundImage: `url('${withBase(cover)}')`
            }
        },
        getBookCoverClass() {
            return ['bookcover'];
        },
        getBookName() {
            return ['bookname'];
        },
        getBookNameUrl() {
            return {
                backgroundImage: `url('${withBase(`/images/generic/pic_title_001.png`)}')`
            };
        }
    }
};
</script>

<style scoped>
.book-image {
    display: inline-block;
    vertical-align: middle;
    align-content: center;
    justify-content: center;
    background-repeat: no-repeat;
    z-index: 1;
    background-size: 100% 100%;
}

.book {
    width: 295px;
    height: 330px;
}

.bookcover {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 35px 30px;
    padding: 5px;
    width: 192px;
    height: 280px;
    border-radius: 50px;
    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%);
}

.bookcover:after {
    content: '';
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
}

.bookname {
    position: absolute;
    margin-top: 33px;
    margin-left: 21px;
    z-index: 2;
    width: 40px;
    height: 96px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
@media screen and (max-width: 768px) {
    .bookname {
        position: absolute;
        margin-top: 48px;
        margin-left: 24px;
        z-index: 2;
        width: 35px;
        height: 80px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>
