// 把資料檔的文字依語系取出來（同 eventSeries.js 的寫法）：
//   { root: 繁中, ja: 日文, en: 英文, "zh-hans": 簡中 } 取目前語系，沒寫的語系用 root；只寫字串時每個語系都用它。
// 簡中的 "zh-hans" 由 tools/buildSimplifiedChinese.js 產生在 data/forge/zh-hans/，資料檔不用寫。
export const pick = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.root : v);

const map = (o, f) => Object.fromEntries(Object.entries(o || {}).map(([k, v]) => [k, f(v)]));

// lang 是 VitePress 的 localeIndex（root / ja / en / zh-hans）
export function resolve(data, terms, lang) {
  const p = (v) => pick(v, lang);
  // rows / values 的 key 就是繁中，沒有該語系的翻譯時是 undefined，顯示端用 key
  const t = { labels: map(terms.labels, p), cost: map(terms.cost, p), rows: map(terms.rows, p), values: map(terms.values, p) };
  const items = data.items.map((item) => {
    const key = pick(item.name, "root"); // 繁中名稱：parent 對照、Vue key 都用它
    return {
      ...item,
      key,
      name: p(item.name),
      anchor: p(item.anchor) ?? key, // 網址錨點（#…）：預設繁中名稱，讓既有連結不失效
      requires: p(item.requires),
      obtain: p(item.obtain),
      note: p(item.note),
      info: item.info && map(item.info, p),
    };
  });
  return { title: data.title, intro: p(data.intro), items, terms: t };
}
