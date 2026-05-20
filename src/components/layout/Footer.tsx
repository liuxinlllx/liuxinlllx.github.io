import { useT } from "@/lib/i18n/context";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "32px 24px",
        fontSize: "0.8rem",
        color: "var(--text-light)",
        borderTop: "1px solid var(--border)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <span>
        &copy; {year} {t.hero.name}
      </span>
    </footer>
  );
}
