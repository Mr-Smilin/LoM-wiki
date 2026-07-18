import { computed } from "vue";
import { useData } from "vitepress";

// 取得目前語系的路徑前綴（root 語系為空字串，其他為 /en、/ja ...），
// 供元件產生站內連結時跟隨當前語系
export function useLocalePrefix() {
    const { localeIndex } = useData();
    return computed(() =>
        localeIndex.value === "root" ? "" : `/${localeIndex.value}`
    );
}
