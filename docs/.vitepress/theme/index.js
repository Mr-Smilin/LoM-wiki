// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import Icon from "./components/Icon.vue";
import BadendIcon from "./components/icons/BadendIcon.vue";
import Girl0Icon from "./components/icons/Girl0Icon.vue";
import "./styles/style.css";
import "./styles/borderless.css";
import "./styles/twikoo.css";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);


    //Icon component group
    app.component("Icon", Icon);
    // following component based on Icon,
    // if you need, you can add image map to function getIconSource() in Icon.vue,
    // and create a new vue file to register
    app.component("BadendIcon", BadendIcon);
    app.component("Girl0Icon", Girl0Icon);
  },
};
