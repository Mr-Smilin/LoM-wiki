// 將含 markdown / wikilink 語法的原始字串轉為純文字，
// 供排序與搜尋使用，避免語法符號與連結網址參與比對
export function stripMarkdown(content) {
  if (content === null || content === undefined) return "";
  return String(content)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\|\|(.*?)\|\|/g, "$1")
    .replace(/<[^>]+>/g, "");
}
