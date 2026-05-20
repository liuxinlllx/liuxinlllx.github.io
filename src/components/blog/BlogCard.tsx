"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import type { BlogPost } from "@/lib/types";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const t = useT();

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.header}>
        <div>
          <div className={styles.tagRow}>
            {post.tags.slice(0, 3).map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
          <h3 className={styles.title}>{post.title}</h3>
        </div>
        <span className={styles.arrow}>→</span>
      </div>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.meta}>
        <time>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{t.blog.readingTime(post.readingTimeMin)}</span>
      </div>
    </Link>
  );
}
