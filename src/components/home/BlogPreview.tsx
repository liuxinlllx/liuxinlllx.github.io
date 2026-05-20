import { blog } from "@/.velite";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import styles from "./BlogPreview.module.css";
import Link from "next/link";

export function BlogPreview({ blogLabel, viewAllLabel }: { blogLabel: string; viewAllLabel: string }) {
  const latest = [...blog]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <SectionLabel>{blogLabel}</SectionLabel>
        <Link href="/blog" className={styles.viewAll}>
          {viewAllLabel}
        </Link>
      </div>
      <div className={styles.list}>
        {latest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
