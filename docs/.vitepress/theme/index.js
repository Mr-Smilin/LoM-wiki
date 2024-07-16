// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./components/MyLayout.vue";
// import mock Bootstrap-vue
import BTable from "./components/bootstrap-vue/BTable.vue";
// import 連結預覽
import {
  NolebaseInlineLinkPreviewPlugin,
  InjectionKey,
} from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";
// import 歷史貢獻
import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
// import CharacterTab Group
import CharacterTabs from "./components/character/CharacterTabs.vue";
import CharacterTab from "./components/character/CharacterTab.vue";
import CharacterBackground from "./components/character/CharacterBackground.vue";
import CharacterName from "./components/character/CharacterName.vue";
import CharacterTable from "./components/character/CharacterTable.vue";
import CharacterTr from "./components/character/CharacterTr.vue";
import CharacterTd from "./components/character/CharacterTd.vue";
import ChineseStyleTd from "./components/tdStyles/ChineseStyleTd.vue";
// import Icon Group
import Icon from "./components/Icon.vue";
import BadendIcon from "./components/icons/BadendIcon.vue";
import Girl0Icon from "./components/icons/Girl0Icon.vue";
import Girl1Icon from "./components/icons/Girl1Icon.vue";
import Girl2Icon from "./components/icons/Girl2Icon.vue";
import Girl3Icon from "./components/icons/Girl3Icon.vue";
import Girl4Icon from "./components/icons/Girl4Icon.vue";
import Girl5Icon from "./components/icons/Girl5Icon.vue";
import Girl6Icon from "./components/icons/Girl6Icon.vue";
import Girl7Icon from "./components/icons/Girl7Icon.vue";
import Girl8Icon from "./components/icons/Girl8Icon.vue";
// import ItemIcon Group
import ItemIcon from "./components/ItemIcon.vue";
import BookItemIcon from "./components/itemIcons/BookItemIcon.vue";
import SpecialItemIcon from "./components/itemIcons/SpecialItemIcon.vue";
import NewspaperItemIcon from "./components/itemIcons/NewspaperItemIcon.vue";
import TeaItemIcon from "./components/itemIcons/TeaItemIcon.vue";
import WineItemIcon from "./components/itemIcons/WineItemIcon.vue";
// import AchievementIcon
import AchievementIcon from "./components/AchievementIcon.vue";
// import MoodIcon
import MoodIcon from "./components/MoodIcon.vue";
// tools
import Tabs from "./components/tab/Tabs.vue";
import Tab from "./components/tab/Tab.vue";
import MarkdownWrapper from "./components/tools/MarkdownWrapper.vue";
import InfoList from "./components/info/InfoList.vue";
import Info from "./components/info/Info.vue";

import "./styles/style.css";
import "./styles/borderless.css";
import "./styles/twikoo.css";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({ app }) {
    // import 連結預覽
    app.use(NolebaseInlineLinkPreviewPlugin);
    app.provide(InjectionKey, {
      popupWidth: 600,
      popupHeight: 400,
      locales: {
        "zh-TW": {
          popup: {
            loading: "加載中...",
            openInCurrentPage: "在完整頁面中打開",
          },
        },
      },
    });
    // import 歷史貢獻
    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        "zh-TW": {
          noLogs: "該文章無歷史貢獻",
          noContributors: "該文章無貢獻者",
          viewFullHistory: "查看完整歷史貢獻",
          changelog: {
            title: "歷史貢獻",
            noData: "無歷史貢獻",
          },
          contributors: {
            title: "貢獻者",
            noData: "無貢獻者",
          },
        },
      },
    });
    // import mock Bootstrap-vue
    app.component("BTable", BTable);
    // import CharacterTab Group
    app.component("ChTabs", CharacterTabs);
    app.component("ChTab", CharacterTab);
    app.component("ChBg", CharacterBackground);
    app.component("ChName", CharacterName);
    app.component("ChTable", CharacterTable);
    app.component("ChTr", CharacterTr);
    app.component("ChTd", CharacterTd);
    app.component("CnTd", ChineseStyleTd);

    // Icon component group
    app.component("Icon", Icon);
    // following component based on Icon,
    // if you need, you can add image map to function getIconSource() in Icon.vue,
    // and create a new vue file to register
    app.component("BadendIcon", BadendIcon);
    app.component("Girl0Icon", Girl0Icon);
    app.component("Girl1Icon", Girl1Icon);
    app.component("Girl2Icon", Girl2Icon);
    app.component("Girl3Icon", Girl3Icon);
    app.component("Girl4Icon", Girl4Icon);
    app.component("Girl5Icon", Girl5Icon);
    app.component("Girl6Icon", Girl6Icon);
    app.component("Girl7Icon", Girl7Icon);
    app.component("Girl8Icon", Girl8Icon);

    // ItemIcon component group
    app.component("ItemIcon", ItemIcon);
    // following component based on BookItemIcon,
    // It adds an Item background foreach vue file,
    // if you need, you can copy ItemIcon.vue,
    // and create a new vue file to register
    app.component("BookItemIcon", BookItemIcon);
    app.component("SpecialItemIcon", SpecialItemIcon);
    app.component("NewspaperItemIcon", NewspaperItemIcon);
    app.component("TeaItemIcon", TeaItemIcon);
    app.component("WineItemIcon", WineItemIcon);
    // AchievementIcon component
    app.component("AchievementIcon", AchievementIcon);
    // MoodIcon component
    app.component("MoodIcon", MoodIcon);

    // tools
    app.component("Tabs", Tabs);
    app.component("Tab", Tab);
    app.component("MarkdownWrapper", MarkdownWrapper);
    app.component("InfoList", InfoList);
    app.component("Info", Info);
  },
};
