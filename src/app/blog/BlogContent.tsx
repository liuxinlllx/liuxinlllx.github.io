"use client";

import { useLanguage } from "@/lib/i18n/context";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/types";
import styles from "./page.module.css";

interface BlogContentProps {
  posts: BlogPost[];
}

export function BlogContent({ posts }: BlogContentProps) {
  const { t, lang } = useLanguage();

  // Group by slug, prefer current language, fallback to other
  const slugMap = new Map<string, BlogPost>();
  for (const post of posts) {
    if (!slugMap.has(post.slug)) {
      slugMap.set(post.slug, post);
    } else if (post.lang === lang) {
      slugMap.set(post.slug, post);
    }
  }
  const filtered = Array.from(slugMap.values());

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.blog.title}</h1>
          <p className={styles.description}>{t.blog.description}</p>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>{t.common.noContent}</p>
        ) : (
          <div className={styles.list}>
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
