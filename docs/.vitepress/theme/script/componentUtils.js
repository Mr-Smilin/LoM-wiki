// 解析資料
export function getContentType(content) {
  if (Array.isArray(content)) return "array";
  if (!content || typeof content !== "object") return "text";
  if (content.type === "br") return "br";
  if (typeof content.type === "symbol" && content.type.description === "v-txt")
    return "text";
  if (typeof content.type === "string" || typeof content.type === "object")
    return "component";
  return "unknown";
}
