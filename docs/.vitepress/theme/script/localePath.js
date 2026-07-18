import { computed } from "vue";
import { useData, withBase } from "vitepress";

// 多語系頁面 (如 /ja/、/en/) 中的元件連結需要帶上目前語系前綴,
// 否則會固定指向 root (繁體中文) 頁面。
// 在 computed 內呼叫 localePath() 時, localeIndex 變動會自動觸發重新計算。
export function useLocalePath() {
  const { localeIndex } = useData();
  const prefix = computed(() =>
    localeIndex.value === "root" ? "" : `/${localeIndex.value}`,
  );
  // path 需以 "/" 開頭 (不含 base 與語系前綴), 例如 "/event/ends"
  const localePath = (path) => withBase(`${prefix.value}${path}`);
  return { localeIndex, prefix, localePath };
}
