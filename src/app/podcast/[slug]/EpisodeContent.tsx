"use client";

import Link from "next/link";
import { useT, useLanguage } from "@/lib/i18n/context";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import type { PodcastEpisode } from "@/lib/types";
import styles from "./page.module.css";

interface EpisodeContentProps {
  zhEpisode: PodcastEpisode;
  enEpisode?: PodcastEpisode;
}

export function EpisodeContent({ zhEpisode, enEpisode }: EpisodeContentProps) {
  const t = useT();
  const { lang } = useLanguage();
  const episode = lang === "en" && enEpisode ? enEpisode : zhEpisode;

  return (
    <>
      <Link href="/podcast" className={styles.back}>
        {t.podcast.backToList}
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{episode.title}</h1>
        <div className={styles.tagRow}>
          {episode.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
        <div className={styles.meta}>
          <time>{formatDate(episode.date, lang)}</time>
          <span>&middot;</span>
          <span>
            {t.podcast.duration}: {episode.duration}
          </span>
        </div>
      </header>
    </>
  );
}
