"use client";

import { useT } from "@/lib/i18n/context";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/lib/types";
import styles from "./page.module.css";

interface BlogContentProps {
  posts: BlogPost[];
}

export function BlogContent({ posts }: BlogContentProps) {
  const t = useT();

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.blog.title}</h1>
          <p className={styles.description}>{t.blog.description}</p>
        </div>

        {posts.length === 0 ? (
          <p className={styles.empty}>{t.common.noContent}</p>
        ) : (
          <div className={styles.list}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
