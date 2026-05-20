import { blog } from "@/.velite";
import { BlogCard } from "@/components/blog/BlogCard";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "学术思考与研究笔记",
};

export default function BlogPage() {
  const posts = [...blog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>博客</h1>
          <p className={styles.description}>学术思考与研究笔记</p>
        </div>

        {posts.length === 0 ? (
          <p className={styles.empty}>暂无文章</p>
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
