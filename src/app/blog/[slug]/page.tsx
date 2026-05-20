import { blog } from "@/.velite";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import type { Metadata } from "next";
import styles from "./page.module.css";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          ← 返回博客列表
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.tagRow}>
            {post.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
          <div className={styles.meta}>
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>阅读时间 {post.readingTimeMin} 分钟</span>
          </div>
        </header>

        <div className={styles.content}>
          <MDXRemote source={post.body} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
