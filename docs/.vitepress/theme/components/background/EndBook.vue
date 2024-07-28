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
                6: '/images/generic/background/pic_sleep_000.png',
                7: '/images/generic/background/pic_treehouse_000.png',
                8: '/images/generic/background/pic_end_0000.png',
                9: '',
                10: '',
                11: '/images/generic/background/pic_girlroom_free_002.png',
                12: '/images/generic/background/pic_girlroom_free_002.png',
                13: '',
                14: '',
                15: '',
                16: '',
                17: '/images/generic/background/pic_spa_002.png',
                18: '',
                19: '/images/generic/background/pic_walk_001.png',
                20: '',
                21: '/images/generic/background/pic_inn_000.png',
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
                34: '/images/generic/background/pic_door_work_003.png',
                35: '/images/generic/background/pic_end_0000.png',
                36: '/images/generic/background/pic_fortress_002.png',
                37: '/images/generic/background/pic_sunset_000.png',
                38: '',
                39: '',
                40: '',
                41: '',
                42: '',
                43: '/images/generic/background/pic_girl_002.png',
                44: '/images/generic/background/pic_girl_walk_001.png',
                45: '/images/generic/background/pic_room_free_002.png',
                46: '/images/generic/background/pic_study_001.png',
                47: '/images/generic/background/pic_end_0000.png',
                48: '/images/generic/background/pic_end_0000.png',
                49: '',
                50: '/images/generic/background/pic_treehouse_000.png',
            };
            let cover = coverMapping[no] ? coverMapping[no] : '';

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
    mask-image: radial-gradient(100px 220px ellipse, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%);
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
