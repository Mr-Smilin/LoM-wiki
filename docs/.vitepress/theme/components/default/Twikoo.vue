<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useData } from "vitepress";

const envId = "https://twikoo.smilin.net";
const twikooJs = ref(null);
const router = useRouter();
const { localeIndex } = useData();

// 评论区语言跟随当前语系 (Twikoo 支持 zh-cn/zh-tw/zh-hk/en/ja, 未设置时按浏览器语言, 这里按站点语系固定)
const TWIKOO_LANGS = {
	root: "zh-TW",
	"zh-hans": "zh-CN",
	en: "en",
	ja: "ja",
};

// 後端掛掉(例如免費額度用完回 503)時 Twikoo 會轉圈或留言區空白、瀏覽數不更新。
// 逾時就改顯示說明; 瀏覽數改用這台瀏覽器上次成功拿到的數字並標註時間。
const TIMEOUT_MS = 10000;
const STATUS_URL = "https://github.com/Mr-Smilin/LoM-wiki/issues?q=label%3Atwikoo-down";
const FAIL_TEXT = {
	root: {
		comments: "留言系統暫時無法連線，可能是免費服務用量已滿或後端維護中。頁面內容不受影響，請稍後再試。",
		status: "查看狀態",
		stale: (t) => `（${t} 的資料，目前無法更新）`,
		none: "（目前無法取得）",
	},
	"zh-hans": {
		comments: "评论系统暂时无法连接，可能是免费服务用量已满或后端维护中。页面内容不受影响，请稍后再试。",
		status: "查看状态",
		stale: (t) => `（${t} 的数据，目前无法更新）`,
		none: "（目前无法获取）",
	},
	en: {
		comments: "The comment system is temporarily unavailable (the free service quota may be used up, or the backend is under maintenance). Page content is not affected; please try again later.",
		status: "Status",
		stale: (t) => ` (as of ${t}, unable to update)`,
		none: " (unavailable)",
	},
	ja: {
		comments: "コメントシステムに一時的に接続できません（無料枠の上限、またはメンテナンス中の可能性があります）。ページの内容には影響ありません。しばらくしてから再度お試しください。",
		status: "状況を見る",
		stale: (t) => `（${t} 時点のデータ、更新できません）`,
		none: "（取得できません）",
	},
};
// 熔斷: 一次逾時後 5 分鐘內(同分頁)換頁/重整都不再打後端, 直接顯示說明。
// 後端卡住時讀者會一直重整, 這比任何自動重試都容易把後端打垮。
// ponytail: 刻意不做自動重試, 等確認卡住不是負載造成的再考慮
const BREAKER_MS = 5 * 60 * 1000;
const BREAKER_KEY = "tk_down_until";
let failTimer;
let viewsObserver;

function breakerOpen() {
	try {
		return Date.now() < Number(sessionStorage.getItem(BREAKER_KEY));
	} catch (e) {
		return false;
	}
}

function onTimeout() {
	try {
		sessionStorage.setItem(BREAKER_KEY, String(Date.now() + BREAKER_MS));
	} catch (e) {}
	onFail();
}

const viewsKey = () => "tk_views:" + location.pathname;

// 瀏覽數 span 在 layout 裡、換頁不會重建, 先重設避免殘留上一頁的數字;
// Twikoo 成功寫入數字時存進 localStorage (無痕/封鎖時讀寫會丟例外, 一律吞掉)
function watchViews() {
	viewsObserver?.disconnect();
	const el = document.getElementById("twikoo_visitors");
	if (!el) return;
	el.textContent = "-";
	viewsObserver = new MutationObserver(() => {
		const n = el.textContent;
		if (!/^\d+$/.test(n)) return;
		try {
			localStorage.setItem(viewsKey(), JSON.stringify({ n, t: Date.now() }));
		} catch (e) {}
	});
	viewsObserver.observe(el, { childList: true, characterData: true, subtree: true });
}

function onFail() {
	viewsObserver?.disconnect();
	const text = FAIL_TEXT[localeIndex.value] || FAIL_TEXT.root;
	const box = document.getElementById("twikoo");
	if (box) {
		box.innerHTML = `<p class="tk-fail">${text.comments} <a href="${STATUS_URL}" target="_blank" rel="noopener">${text.status}</a></p>`;
	}
	const el = document.getElementById("twikoo_visitors");
	if (!el || /^\d+$/.test(el.textContent)) return; // 瀏覽數本身有成功就不動
	let cached = null;
	try {
		cached = JSON.parse(localStorage.getItem(viewsKey()));
	} catch (e) {}
	if (cached?.n) {
		const lang = TWIKOO_LANGS[localeIndex.value] || "zh-TW";
		const t = new Date(cached.t).toLocaleString(lang, {
			year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,
		});
		el.innerHTML = `${cached.n}<small class="tk-stale">${text.stale(t)}</small>`;
	} else {
		el.innerHTML = `-<small class="tk-stale">${text.none}</small>`;
	}
}

function initTwikoo() {
	clearTimeout(failTimer);
	watchViews();
	if (breakerOpen()) return onFail();
	failTimer = setTimeout(onTimeout, TIMEOUT_MS);
	try {
		twikoo.init({
			envId,
			lang: TWIKOO_LANGS[localeIndex.value] || "zh-TW",
			onCommentLoaded: () => {
				clearTimeout(failTimer);
				initLightGallery();
			},
		});
	} catch (e) {}
}

function initLightGallery() {
	var commentContents = [
		...document.getElementsByClassName("vp-doc"),
		...document.getElementsByClassName("tk-content"),
	];
	for (var i = 0; i < commentContents.length; i++) {
		var commentItem = commentContents[i];
		var imgEls = commentItem.getElementsByTagName("img");
		if (imgEls.length > 0) {
			for (var j = 0; j < imgEls.length; j++) {
				var imgEl = imgEls[j];
				if (imgEl.parentElement.tagName === "A") continue;
				var aEl = document.createElement("a");
				aEl.setAttribute("class", "tk-lg-link");
				aEl.setAttribute("href", imgEl.getAttribute("src"));
				aEl.setAttribute("data-src", imgEl.getAttribute("src"));
				aEl.appendChild(imgEl.cloneNode(false));
				imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling);
				imgEl.remove();
			}
			lightGallery(commentItem, {
				selector: ".tk-lg-link",
				share: false,
			});
		}
	}
}

function initJs() {
	if (twikooJs.value) {
		twikooJs.value.onload = initTwikoo;
		router.onAfterRouteChanged = onRoute;
	}
}

function onRoute(to) {
	if (to) setTimeout(initTwikoo, 1000);
}

onMounted(() => {
	initTwikoo();
	initJs();
});
</script>

<template>
	<div class="comment-container vp-raw">
		<!-- KaTeX -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
			integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
			crossorigin="anonymous"
		/>
		<component
			:is="'script'"
			defer
			src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
			integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
			crossorigin="anonymous"
		></component>
		<component
			:is="'script'"
			defer
			src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
			integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
			crossorigin="anonymous"
		></component>

		<!-- lightGallery -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/css/lightgallery.css"
			integrity="sha384-U8ohOXEVyF0NGY2LQnH83V4wGxOmFhim4U5xhfE/WDCHdPO2iUKPPYkhpDl9U/Yf"
			crossorigin="anonymous"
		/>
		<component
			:is="'script'"
			src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/lightgallery.min.js"
			integrity="sha384-l5lFB9srHFAyvfCoHya9X1JwGGTNPvDtikieqZp7qu/bomCw0e0+yoyiL0f7UXLD"
			crossorigin="anonymous"
		></component>

		<!-- Twikoo -->
		<div id="twikoo"></div>
		<component
			:is="'script'"
			src="https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.min.js"
			crossorigin="anonymous"
			ref="twikooJs"
		></component>
	</div>
</template>
