<template>
  <div class="tabs-container">
    <div :class="['tabs', tabsPosition]">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: selectedIndex === index }"
        @click="selectTab(index)"
        class="tab-title"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tab-contents">
      <slot></slot>
    </div>
    <div :class="['particle-basic',tabsPosition]">
      <div class="particle-container"></div>
    </div>
    <div class="preload-container">
      <img v-for="(src, index) in preloadImages" :key="index" :src="src" class="preload-image" alt="preload" />
    </div>
  </div>
  <div v-if="isMobile" class="mobile-content">
    <component
      v-for="(item, index) in mobileItems"
      :key="index"
      :is="item.component"
      v-bind="item.props"
    />
  </div>
</template>
  
  <script>
  import { ref, provide, computed, onMounted, onUnmounted  } from 'vue';
  
  export default {
    props: {
      position: {
        type: String,
        default: 'top', // 'top' or 'bottom'
        validator: value => ['top', 'bottom'].includes(value)
      }
    },
    setup(props) {
      const selectedIndex = ref(0);
      const tabs = ref([]);
      const preloadImages = ref([]);
      const isMobile = ref(false);
      const mobileItems = ref([]);
  
      function registerTab(tab) {
        tabs.value.push(tab);
        return tabs.value.length - 1;
      }
  
      function selectTab(index) {
        selectedIndex.value = index;
      }

      function preloadImage(src) {
        if (!preloadImages.value.includes(src)) {
          preloadImages.value.push(src);
        }
      }

      const addMobileItem = (component, props) => {
        mobileItems.value.push({ component, props });
      };
      
      const checkMobile = () => {
        isMobile.value = window.innerWidth <= 768; 
      };
  
      provide('registerTab', registerTab);
      provide('selectedIndex', selectedIndex);
      provide('preloadImage', preloadImage);
      provide('isMobile', isMobile);
      provide('addMobileItem', addMobileItem);

      onMounted(() => {
        const containers = document.querySelectorAll('.particle-container');
        const particleCount = 30;
        
        containers.forEach(container => {
          for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * (container.offsetWidth - 6)}px`; // 隨機位置

            // 隨機上升高度（最小20px，最大100px）
            const randomHeight = Math.random() * (100 - 20) + 20; // 生成20到100之間的隨機數
            particle.style.animationDuration = `${randomHeight / 10}s`; // 根據隨機高度計算動畫時長

            // 隨機上升速度（最小速度1，最大速度4）
            const randomSpeed = Math.random() * (5 - 1) + 1; // 生成1到4之間的隨機數
            particle.style.animationTimingFunction = `linear ${randomSpeed}`; // 應用隨機速度

            // 隨機上升時間（在2秒到4秒之間）
            const randomRiseTime = Math.random() * (4 - 2) + 2; // 生成2到4之間的隨機數
            particle.style.animationDuration = `${randomRiseTime}s`; // 應用隨機上升時間

            // 隨機粒子大小（在2px至6px之間）
            const randomSize = Math.round(Math.random() * 4 + 2); // 生成2到6之間的隨機整數
            particle.style.width = `${randomSize}px`;
            particle.style.height = `${randomSize}px`;

            container.appendChild(particle); // 添加到容器中
          }
        })

        checkMobile();
        window.addEventListener('resize', checkMobile);
      })

      onUnmounted(() => {
        window.removeEventListener('resize', checkMobile);
      });
  
      return {
        tabs,
        selectedIndex,
        selectTab,
        tabsPosition: computed(() => props.position === 'bottom' ? 'tabs-bottom' : 'tabs-top'),
        preloadImages,
        isMobile,
        mobileItems
      };
    }
  };
  </script>
  
  <style scoped>
  .tabs-container {
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction:column;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    box-sizing: border-box;
    height: 46px;
    margin: 0;
  }
  
  .tabs-top.tabs {
    order: -1;
  }
  
  .tabs-bottom.tabs {
    order: 1; 
  }
  
  .tab-title {
    flex: 1;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s, border-bottom 0.3s;
  }
  
  .tab-title.active {
    background-color: var(--vp-c-gray-1);
  }

  .tabs-top .tab-title.active {
    border-bottom: 2px solid #42b983;
  }

  .tabs-bottom .tab-title.active {
    border-top: 2px solid #42b983;
  }
  
  .tab-title:hover {
    background-color: var(--vp-c-gray-2);
  }
  
  .tab-content {
    position: relative;
    /* height: 100%; */
  }
  .preload-container {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .preload-image {
    width: 1px;
    height: 1px;
    opacity: 0.01;
  }

  .mobile-content {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>

<style>
  .particle-basic{
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    z-index: -1;
  }

  .particle-basic.tabs-bottom{
    bottom: 46px; 
  }

  .particle-container{
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .particle{
      box-shadow: 0 0 0 2px rgba(129, 96, 43, 0.4);
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-radius: 50%;
      background-color: var(--vp-c-text-1);
      opacity: 0.8;
      animation: riseAndFade 2s linear infinite;
  }
  


  @media (max-width: 768px) {
    .mobile-tables {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  @keyframes riseAndFade {
      0% {
          transform: translateY(100%);
          opacity: 0.8;
      }
      100%{
          transform: translateY(-2000%);
          opacity: 0;
      }
  }
</style>