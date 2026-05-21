"use client";

import Link from "next/link";
import { useT, useLanguage } from "@/lib/i18n/context";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import type { BlogPost } from "@/lib/types";
import styles from "./page.module.css";

interface PostContentProps {
  zhPost: BlogPost;
  enPost?: BlogPost;
}

export function PostContent({ zhPost, enPost }: PostContentProps) {
  const t = useT();
  const { lang } = useLanguage();
  const post = lang === "en" && enPost ? enPost : zhPost;

  return (
    <>
      <Link href="/blog" className={styles.back}>
        {t.blog.backToList}
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.tagRow}>
          {post.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
        <div className={styles.meta}>
          <time>{formatDate(post.date, lang)}</time>
          <span>&middot;</span>
          <span>{t.blog.readingTime(post.readingTimeMin)}</span>
        </div>
      </header>
    </>
  );
}
