// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import "./styles/style.css";
import "./styles/twikoo.css";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);
  },
};
