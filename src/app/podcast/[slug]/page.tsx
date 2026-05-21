import { podcast } from "@/.velite";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx/components";
import { EpisodeContent } from "./EpisodeContent";
import { BilingualBody } from "@/components/shared/BilingualBody";
import { AudioPlayer } from "@/components/podcast/AudioPlayer";
import type { Metadata } from "next";
import styles from "./page.module.css";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  const slugs = [...new Set(podcast.map((ep) => ep.slug))];
  return slugs.map((slug) => ({ slug }));
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
  const zhEp = podcast.find((p) => p.slug === slug && p.lang === "zh");
  const enEp = podcast.find((p) => p.slug === slug && p.lang === "en");

  if (!zhEp && !enEp) {
    notFound();
  }

  const episode = zhEp || enEp;

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <EpisodeContent zhEpisode={zhEp!} enEpisode={enEp} />
        <AudioPlayer src={episode!.audioUrl} title={episode!.title} />
        <div className={styles.content}>
          <BilingualBody
            zhContent={
              zhEp ? (
                <MDXRemote source={zhEp.body} components={mdxComponents} />
              ) : null
            }
            enContent={
              enEp ? (
                <MDXRemote source={enEp.body} components={mdxComponents} />
              ) : null
            }
          />
        </div>
      </article>
    </div>
  );
}
