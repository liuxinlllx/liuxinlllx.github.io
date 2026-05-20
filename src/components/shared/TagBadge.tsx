export function TagBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: "0.78rem",
        color: "var(--text-muted)",
        background: "#f3f2ef",
        padding: "2px 10px",
        borderRadius: "4px",
      }}
    >
      {label}
    </span>
  );
}
