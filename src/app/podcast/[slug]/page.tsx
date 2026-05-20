import { podcast } from "@/.velite";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import { AudioPlayer } from "@/components/podcast/AudioPlayer";
import type { Metadata } from "next";
import styles from "./page.module.css";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  return podcast.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ep = podcast.find((p) => p.slug === slug);
  if (!ep) return { title: "Not Found" };
  return {
    title: ep.title,
    description: ep.excerpt,
  };
}

export default async function PodcastEpisodePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const ep = podcast.find((p) => p.slug === slug);

  if (!ep) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Link href="/podcast" className={styles.back}>
          ← 返回播客列表
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{ep.title}</h1>
          <div className={styles.tagRow}>
            {ep.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
          <div className={styles.meta}>
            <time>{formatDate(ep.date)}</time>
            <span>·</span>
            <span>时长: {ep.duration}</span>
          </div>
        </header>

        <AudioPlayer src={ep.audioUrl} title={ep.title} />

        <div className={styles.content}>
          <MDXRemote source={ep.body} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
