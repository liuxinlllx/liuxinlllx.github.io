import { podcast } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { EpisodeContent } from "./EpisodeContent";
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
        <EpisodeContent episode={ep} />
        <AudioPlayer src={ep.audioUrl} title={ep.title} />
        <div className={styles.content}>
          <MDXRemote source={ep.body} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
