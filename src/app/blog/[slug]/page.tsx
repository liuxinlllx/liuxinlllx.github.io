import { blog } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { PostContent } from "./PostContent";
import { BilingualBody } from "@/components/shared/BilingualBody";
import type { Metadata } from "next";
import styles from "./page.module.css";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  const slugs = [...new Set(blog.map((post) => post.slug))];
  return slugs.map((slug) => ({ slug }));
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
  const zhPost = blog.find((p) => p.slug === slug && p.lang === "zh");
  const enPost = blog.find((p) => p.slug === slug && p.lang === "en");

  if (!zhPost && !enPost) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <PostContent zhPost={zhPost!} enPost={enPost} />
        <div className={styles.content}>
          <BilingualBody
            zhContent={
              zhPost ? (
                <MDXRemote source={zhPost.body} components={mdxComponents} />
              ) : null
            }
            enContent={
              enPost ? (
                <MDXRemote source={enPost.body} components={mdxComponents} />
              ) : null
            }
          />
        </div>
      </article>
    </div>
  );
}
