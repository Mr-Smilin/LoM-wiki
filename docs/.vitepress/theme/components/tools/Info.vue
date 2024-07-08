<template>
    <div class="info-container">
        <!-- 標題容器，點擊可展開或收合內容容器 -->
        <div class="title" @click="toggleContent">
        {{ title }}
        </div>
        <!-- 內容容器，根據 isOpen 狀態決定顯示與否，並添加過渡效果 -->
        <transition name="slide-fade">
        <div v-show="isOpen" class="content">
            <slot></slot>
        </div>
        </transition>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'Info',
    props: {
        open: {
        type: Boolean,
        default: false
        },
        title: {
        type: String,
        required: true
        }
    },
    setup(props){
        const isOpen = ref(props.open);

        // 切換內容容器的顯示狀態
        const toggleContent = () => {
        isOpen.value = !isOpen.value;
        };

        watch(() => props.open, (newVal) => {
        isOpen.value = newVal;
        });

        return {
        isOpen,
        toggleContent
        }
    }
}
</script>

<style scoped>
    .info-container {
        max-width: 200px;
        padding: 10px; /* 添加內邊距 */
        overflow: hidden; /* 確保動畫效果在容器內 */
    }

    .title {
        font-weight: bold;
        cursor: pointer; /* 添加鼠標指針樣式 */
        padding: 5px; /* 添加內邊距 */
        border: 2px dotted var(--vp-c-green-2);
    }

    .title::after {
        content: "";
        border: transparent 10px solid;
        border-top-color: var(--vp-c-green-2);
    }

    /* 過渡效果 */
    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all 0.5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
        opacity: 0;
        transform: translateY(-20px);
    }

    .content {
        margin-top: 10px; /* 添加頂部邊距 */
    }
</style>
