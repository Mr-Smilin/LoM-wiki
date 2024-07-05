// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import Icon from "./components/Icon.vue";
import CharacterTabs from "./components/character/CharacterTabs.vue";
import CharacterTab from "./components/character/CharacterTab.vue";
import CharacterBackground from "./components/character/CharacterBackground.vue";
import CharacterName from "./components/character/CharacterName.vue";
import CharacterTable from "./components/character/CharacterTable.vue";
import CharacterTr from "./components/character/CharacterTr.vue";
import CharacterTd from "./components/character/CharacterTd.vue";
import ChineseStyleTd from "./components/ChineseStyleTd.vue";
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
    app.component("Icon", Icon);
    app.component("ChTabs", CharacterTabs);
    app.component("ChTab", CharacterTab);
    app.component("ChBg", CharacterBackground);
    app.component("ChName", CharacterName);
    app.component("ChTable", CharacterTable);
    app.component("ChTr", CharacterTr);
    app.component("ChTd", CharacterTd);
    app.component("CnTd", ChineseStyleTd);
  },
};
