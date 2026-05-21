import { blog } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { PostContent } from "./PostContent";
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
        <PostContent post={post} />
        <div className={styles.content}>
          <MDXRemote source={post.body} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
