export function formatDate(
  iso: string,
  lang: "zh" | "en" = "zh"
): string {
  const d = new Date(iso);
  if (lang === "zh") {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
