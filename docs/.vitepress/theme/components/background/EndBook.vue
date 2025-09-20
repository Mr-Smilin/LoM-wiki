<template>
        <div :class=getBookClass() :style=getBookUrl()>
            <div :class=getBookName() :style=getBookNameUrl()></div>
            <div :class=getBookCoverClass()  :style="getBookCoverUrl(no, imageSource)"></div>
        </div>
</template>

<script>
import {withBase} from "vitepress";
export default {
    props: {
        no: {
            type: Number
        },
        imageSource: {
            type: String,
            default: ""
        }
    },
    methods: {
        getBookUrl() {
            return {
                backgroundImage: `url('${withBase(`/images/generic/pic_book_cover_01.webp`)}')`
            };
        },
        getBookClass() {
            return ['book-image', 'book'];
        },
        getBookCoverUrl(no, imageSource) {
            let coverMapping = {
                1: '/images/generic/background/pic_alchemy_event_001.webp',
                2: '/images/generic/background/pic_fortress_002.webp',
                3: '/images/generic/background/pic_walk_002.webp',
                4: '/images/generic/background/pic_fortress_002.webp',
                5: '/images/generic/background/pic_treehouse_000.webp',
                6: '/images/generic/background/pic_sleep_000.webp',
                7: '/images/generic/background/pic_treehouse_000.webp',
                8: '/images/generic/background/pic_end_0000.webp',
                9: '/images/generic/background/pic_treehouse_000.webp',
                10: '/images/generic/background/pic_fishing_001.webp',
                11: '/images/generic/background/pic_girlroom_free_002.webp',
                12: '/images/generic/background/pic_girlroom_free_002.webp',
                13: '/images/generic/background/pic_walk_001.webp',
                14: '/images/generic/background/pic_backmountain_free_001.webp',
                15: '/images/generic/background/pic_backmountain_free_001.webp',
                16: '/images/generic/background/pic_treehouse_000.webp',
                17: '/images/generic/background/pic_spa_002.webp',
                18: '/images/generic/background/pic_sleep_000.webp',
                19: '/images/generic/background/pic_walk_001.webp',
                20: '/images/generic/background/pic_mall_free_001.webp',
                21: '/images/generic/background/pic_inn_000.webp',
                22: '/images/generic/background/pic_fortress_002.webp',
                23: '/images/generic/background/pic_inn_000.webp',
                24: '/images/generic/background/pic_fishing_001.webp',
                25: '/images/generic/background/pic_farm_001.webp',
                26: '/images/generic/background/pic_inn_000.webp',
                27: '/images/generic/background/pic_treehouse_000.webp',
                28: '/images/generic/background/pic_event_003.webp',
                29: '/images/generic/background/pic_meet_100.webp',
                30: '/images/generic/background/pic_treehouse_000.webp',
                31: '/images/generic/background/pic_inn_000.webp',
                32: '/images/generic/background/pic_backmountain_work_002.webp',
                33: '/images/generic/background/pic_fortress_002.webp',
                34: '/images/generic/background/pic_door_work_003.webp',
                35: '/images/generic/background/pic_end_0000.webp',
                36: '/images/generic/background/pic_fortress_002.webp',
                37: '/images/generic/background/pic_sunset_000.webp',
                38: '/images/generic/background/pic_girl_001.webp',
                39: '/images/generic/background/pic_bash_001.webp',
                40: '/images/generic/background/pic_run_101.webp',
                41: '/images/generic/background/pic_forge_000.webp',
                42: '/images/generic/background/pic_go_000.webp',
                43: '/images/generic/background/pic_girl_002.webp',
                44: '/images/generic/background/pic_girl_walk_001.webp',
                45: '/images/generic/background/pic_room_free_002.webp',
                46: '/images/generic/background/pic_study_001.webp',
                47: '/images/generic/background/pic_end_0000.webp',
                48: '/images/generic/background/pic_end_0000.webp',
                49: '/images/generic/background/pic_treehouse_000.webp',
                50: '/images/generic/background/pic_treehouse_000.webp',
                51: '/images/generic/background/pic_sleep_000.webp',
                52: '/images/generic/background/pic_sleep_000.webp',
                53: '/images/generic/background/pic_sleep_000.webp',
                54: '/images/generic/background/pic_treehouse_000.webp',
            };
            if (imageSource !== ""){
                return {
                    backgroundImage: `url('${withBase(imageSource)}')`
                }
            }
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
                backgroundImage: `url('${withBase(`/images/generic/pic_title_001.webp`)}')`
            };
        }
    }
};
</script>

<style scoped>
.book-image {
    display: inline-block;
    position: relative;
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
    border-radius: 40px;
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
    top: 33px;
    left: 21px;
    z-index: 2;
    width: 40px;
    height: 96px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
@media screen and (max-width: 768px) {
    .bookname {
        position: absolute;
        top: 48px;
        left: 24px;
        z-index: 2;
        width: 35px;
        height: 80px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>
