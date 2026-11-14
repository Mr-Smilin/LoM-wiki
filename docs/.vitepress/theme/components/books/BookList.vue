<!--
  秘笈列表（system/books/index.md）：一張比較表，可以搜尋、照種類／素質／天賦篩選、照武學點與價格排序。

  資料不寫在這裡也不寫在列表頁：建置時從每本書頁開頭的 book: 讀進來（見 ../../data/books.data.mjs 開頭的說明），
  所以改一本書只要改那本書頁。

  用法：<BookList :kinds="[…]" :stats="[…]" :talents="[…]" />
    kinds    種類按鈕，照這個順序
    stats    素質按鈕（篩選有加這項的書），照這個順序
    talents  天賦按鈕（篩選有這個天賦的書），只放常用的；書頁寫「儒學LV1」的，按「儒學」也找得到
  按鈕的字寫在列表頁，簡中頁建置時會跟著轉成簡體。

  搜尋：空格分隔的每個詞都要符合（比對書名、種類、素質、天賦、條件）。
  表格自己一個捲動區（約一個畫面高）：表頭黏在上面、書名欄黏在左邊；比畫面寬時上方提示可以左右滑。
-->
<template>
  <div class="bk-list">
    <div class="bk-search">
      <input
        v-model="query"
        type="search"
        class="bk-input"
        :placeholder="t.placeholder"
        :aria-label="t.placeholder"
        autocomplete="off"
      />
      <button
        type="button"
        class="bk-morebtn"
        :aria-expanded="String(showMore)"
        @click="showMore = !showMore"
      >{{ t.filter }}<span v-if="pickedCount" class="bk-badge">{{ pickedCount }}</span> ▾</button>
    </div>

    <div class="bk-group bk-kinds">
      <span class="bk-group-name">{{ t.kind }}</span>
      <div class="bk-tags">
        <button type="button" class="bk-chip" :aria-pressed="String(!kind)" @click="kind = ''">{{ t.all }}</button>
        <button
          v-for="k in kinds"
          :key="k"
          type="button"
          class="bk-chip"
          :aria-pressed="String(kind === k)"
          @click="kind = k"
        >{{ k }}</button>
      </div>
    </div>

    <div v-show="showMore" class="bk-more">
      <div class="bk-group">
        <span class="bk-group-name">{{ t.stat }}</span>
        <div class="bk-tags">
          <button
            v-for="s in stats"
            :key="s"
            type="button"
            class="bk-chip"
            :aria-pressed="String(stat === s)"
            @click="stat = stat === s ? '' : s"
          >{{ s }}</button>
        </div>
      </div>
      <div v-if="talents.length" class="bk-group">
        <span class="bk-group-name">{{ t.talent }}</span>
        <div class="bk-tags">
          <button
            v-for="s in talents"
            :key="s"
            type="button"
            class="bk-chip"
            :aria-pressed="String(talent === s)"
            @click="talent = talent === s ? '' : s"
          >{{ s }}</button>
        </div>
      </div>
    </div>

    <div class="bk-bar">
      <span class="bk-count">{{ hasFilter ? t.found(shownRows.length) : t.total(rows.length) }}</span>
      <button v-if="hasFilter" type="button" class="bk-clear" @click="clearAll">{{ t.clear }}</button>
    </div>

    <div v-if="shownRows.length" class="bk-tablebox" :class="{ 'bk-more-right': moreRight }">
      <div v-show="overflowing" class="bk-hint" aria-hidden="true"><span>← {{ t.swipe }}</span><span>→</span></div>
      <div ref="wrap" class="bk-tablewrap" @scroll.passive="updateScroll">
        <table class="bk-table">
          <thead>
            <tr>
              <th class="bk-namecol">{{ t.headers.name }}</th>
              <th>{{ t.headers.kind }}</th>
              <th>{{ t.headers.bonus }}</th>
              <th>{{ t.headers.talents }}</th>
              <th>{{ t.headers.requires }}</th>
              <th v-for="key in ['points', 'price']" :key="key" class="bk-num">
                <button type="button" class="bk-sort" @click="toggleSort(key)">
                  {{ t.headers[key] }}<BTableSortIcon :sort-key="sortKey" :sort-order="sortOrder" :header-key="key" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in shownRows" :key="row.no">
              <td class="bk-namecol">
                <a class="bk-name" :href="row.href">
                  <span class="bk-icon" :style="iconBack" aria-hidden="true"><img :src="row.icon" alt="" loading="lazy" decoding="async" /></span>
                  <span>{{ row.title }}</span>
                </a>
              </td>
              <td>{{ row.kind }}</td>
              <td>
                <div class="bk-stack">
                  <span
                    v-for="[name, value] in row.bonus"
                    :key="name"
                    class="bk-tag"
                    :class="{ 'bk-neg': typeof value === 'number' && value < 0, 'bk-on': name === stat }"
                  >{{ name }}{{ signed(value) }}</span>
                </div>
              </td>
              <td>
                <div class="bk-stack">
                  <span
                    v-for="name in row.talents"
                    :key="name"
                    class="bk-tag bk-talent"
                    :class="{ 'bk-on': talent && name.startsWith(talent) }"
                  >{{ name }}</span>
                </div>
              </td>
              <td class="bk-req">
                <template v-for="(line, i) in row.requires" :key="i"><br v-if="i" />{{ line }}</template>
              </td>
              <td class="bk-num">{{ row.points }}</td>
              <td class="bk-num">{{ row.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-else class="bk-empty">{{ t.empty }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as BOOKS } from '../../data/books.data.mjs'
import BTableSortIcon from '../bootstrap-vue/table-child/BTableSortIcon.vue'

const props = defineProps({
  kinds: { type: Array, default: () => [] },
  stats: { type: Array, default: () => [] },
  talents: { type: Array, default: () => [] }
})

const { localeIndex } = useData()

// 元件自己的字跟著語系（簡中頁是建置時從繁中轉的，元件裡的字不會被轉到）
const TEXTS = {
  root: {
    placeholder: '搜尋書名、素質、天賦', filter: '篩選', kind: '種類', stat: '素質', talent: '天賦', all: '全部',
    clear: '清除篩選', swipe: '左右滑看更多欄位', empty: '找不到符合的秘笈。',
    total: n => `共 ${n} 本`, found: n => `找到 ${n} 本`,
    headers: { name: '秘笈', kind: '種類', bonus: '素質', talents: '天賦', requires: '條件', points: '武學點', price: '價格' }
  },
  'zh-hans': {
    placeholder: '搜索书名、素质、天赋', filter: '筛选', kind: '种类', stat: '素质', talent: '天赋', all: '全部',
    clear: '清除筛选', swipe: '左右滑看更多栏位', empty: '找不到符合的秘笈。',
    total: n => `共 ${n} 本`, found: n => `找到 ${n} 本`,
    headers: { name: '秘笈', kind: '种类', bonus: '素质', talents: '天赋', requires: '条件', points: '武学点', price: '价格' }
  }
}
const t = computed(() => TEXTS[localeIndex.value] || TEXTS.root)

// 書頁的資料（簡中讀轉好的那份，其他語系先用繁中）
const rows = computed(() => (BOOKS[localeIndex.value] || BOOKS.root).map(book => ({
  ...book,
  href: withBase(book.url),
  icon: withBase(`/images/items/books/item_book_${book.no}.webp`),
  priceNum: typeof book.price === 'number' ? book.price : parseInt(book.price, 10),
  haystack: [book.title, book.kind, ...book.bonus.map(([name]) => name), ...book.talents, ...book.requires].join(' ').toLowerCase()
})))
const iconBack = computed(() => ({ backgroundImage: `url('${withBase('/images/generic/background/icon_item_back_3.webp')}')` }))

const signed = value => typeof value === 'number' ? (value > 0 ? `+${value}` : `${value}`) : value

//#region 篩選：搜尋的每個詞都要符合；種類、素質、天賦各選一個
const query = ref('')
const kind = ref('')
const stat = ref('')
const talent = ref('')
const showMore = ref(false)

const terms = computed(() => query.value.toLowerCase().split(/\s+/).filter(Boolean))
const pickedCount = computed(() => (stat.value ? 1 : 0) + (talent.value ? 1 : 0))
const hasFilter = computed(() => terms.value.length > 0 || !!kind.value || pickedCount.value > 0)

function clearAll() {
  query.value = ''
  kind.value = ''
  stat.value = ''
  talent.value = ''
}

const filteredRows = computed(() => rows.value.filter(row =>
  (!kind.value || row.kind === kind.value)
  && (!stat.value || row.bonus.some(([name]) => name === stat.value))
  && (!talent.value || row.talents.some(name => name.startsWith(talent.value)))
  && terms.value.every(word => row.haystack.includes(word))))
//#endregion

//#region 排序：點一下由少到多，再點反過來，第三下回到遊戲裡的順序；沒有價格的一律排最後
const sortKey = ref('')
const sortOrder = ref('asc')

function toggleSort(key) {
  if (sortKey.value !== key) {
    sortKey.value = key
    sortOrder.value = 'asc'
  } else if (sortOrder.value === 'asc') {
    sortOrder.value = 'desc'
  } else {
    sortKey.value = ''
    sortOrder.value = 'asc'
  }
}

const shownRows = computed(() => {
  const list = filteredRows.value
  if (!sortKey.value) return list
  const field = sortKey.value === 'price' ? 'priceNum' : 'points'
  const dir = sortOrder.value === 'asc' ? 1 : -1
  return [...list].sort((a, b) => {
    const x = a[field], y = b[field]
    const xn = Number.isNaN(x), yn = Number.isNaN(y)
    if (xn || yn) return xn - yn || Number(a.no) - Number(b.no)
    return dir * (x - y) || Number(a.no) - Number(b.no)
  })
})
//#endregion

//#region 左右滑提示：表格比框寬才出現；右邊淡出表示還有欄位，滑到最右邊就拿掉
const wrap = ref(null)
const overflowing = ref(false)
const moreRight = ref(false)

function updateScroll() {
  const el = wrap.value
  if (!el) return
  overflowing.value = el.scrollWidth > el.clientWidth + 2
  moreRight.value = overflowing.value && el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

let observer = null
onMounted(() => {
  observer = new ResizeObserver(updateScroll)
  watch(wrap, (el, old) => {
    if (old) observer.unobserve(old)
    if (el) observer.observe(el)
    updateScroll()
  }, { immediate: true })
})
onBeforeUnmount(() => observer?.disconnect())
// 篩選後欄寬會變，重算一次
watch(shownRows, () => nextTick(updateScroll))
//#endregion
</script>

<style scoped>
.bk-search {
  display: flex;
  gap: 8px;
  max-width: 420px;
  margin-top: 16px;
}

.bk-input {
  flex: 1;
  min-width: 0;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--vp-input-border-color);
  border-radius: 4px;
  transition: border-color 0.25s;
}

.bk-input:hover,
.bk-input:focus {
  border-color: var(--vp-c-brand-1);
}

.bk-morebtn {
  padding: 0 12px;
  font-size: 14px;
  white-space: nowrap;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.bk-morebtn[aria-expanded="true"] {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.bk-badge {
  display: inline-block;
  min-width: 1.4em;
  margin-left: 4px;
  padding: 0 4px;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  border-radius: 999px;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

/* 篩選按鈕：桌機組名在左，手機組名在上（照人物列表的陣營按鈕） */
.bk-kinds {
  margin-top: 10px;
}

.bk-more {
  display: grid;
  gap: 8px;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.bk-group {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4px;
}

.bk-group-name {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.bk-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.bk-chip {
  padding: 2px 8px;
  font-size: 14px;
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.bk-chip:hover,
.bk-chip[aria-pressed="true"] {
  background-color: var(--vp-c-brand-soft);
}

.bk-chip[aria-pressed="true"] {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

@media (min-width: 640px) {
  .bk-group {
    grid-template-columns: 3.5em minmax(0, 1fr);
    gap: 6px;
  }

  .bk-group-name {
    padding-top: 3px;
  }
}

.bk-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 12px 0 8px;
}

.bk-count {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.bk-clear {
  padding: 1px 10px;
  font-size: 13px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.bk-clear:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* 表格：自己一個捲動區，表頭黏在上面、書名欄黏在左邊 */
.bk-tablebox {
  position: relative;
}

.bk-hint {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 12px;
  color: var(--vp-c-brand-1);
}

.bk-tablewrap {
  max-height: calc(100vh - var(--vp-nav-height, 64px) - 40px);
  overflow: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overscroll-behavior-x: contain;
}

/* 右邊淡出：表示還有欄位沒看到 */
.bk-more-right::after {
  content: "";
  position: absolute;
  right: 1px;
  bottom: 1px;
  width: 28px;
  height: calc(100% - 22px);
  border-radius: 0 8px 8px 0;
  background: linear-gradient(to right, transparent, var(--vp-c-bg));
  pointer-events: none;
}

/* 全站的 .vp-doc table 會設 display:block 與框線，這裡改回一般表格，框線只畫橫的 */
.bk-table {
  display: table;
  width: 100%;
  margin: 0;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
}

.bk-table th,
.bk-table td {
  padding: 6px 10px;
  border: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
  vertical-align: middle;
  background-color: var(--vp-c-bg);
}

.bk-table tr:last-child td {
  border-bottom: 0;
}

.bk-table th {
  position: sticky;
  top: 0;
  z-index: 2;
  white-space: nowrap;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.bk-table tbody tr:hover td {
  background-color: var(--vp-c-bg-soft);
}

.bk-namecol {
  position: sticky;
  left: 0;
  z-index: 1;
  border-right: 1px solid var(--vp-c-divider) !important;
}

th.bk-namecol {
  z-index: 3;
}

.bk-name {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 9em;
  font-weight: 500;
  text-decoration: none;
}

.bk-icon {
  flex: none;
  width: 48px;
  height: 48px;
  background: center / contain no-repeat;
}

.bk-icon img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.bk-num {
  text-align: right !important;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.bk-sort {
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

/* 素質、天賦：一行一個標籤 */
.bk-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.bk-tag {
  padding: 0 6px;
  font-size: 13px;
  line-height: 1.6;
  white-space: nowrap;
  border-radius: 4px;
  background-color: var(--vp-c-default-soft);
}

.bk-neg {
  color: var(--vp-c-danger-1);
}

.bk-talent {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.bk-on {
  outline: 2px solid var(--vp-c-brand-1);
}

.bk-req {
  min-width: 6.5em;
  line-height: 1.5;
}

.bk-empty {
  color: var(--vp-c-text-2);
}

@media (max-width: 639px) {
  .bk-table th,
  .bk-table td {
    padding: 6px;
  }

  .bk-icon {
    width: 36px;
    height: 36px;
  }

  .bk-name {
    gap: 6px;
  }
}
</style>
