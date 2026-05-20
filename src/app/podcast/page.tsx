import { podcast } from "@/.velite";
import { PodcastCard } from "@/components/podcast/PodcastCard";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Podcast",
  description: "体育人文与学术对话",
};

export default function PodcastPage() {
  const episodes = [...podcast].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>播客</h1>
          <p className={styles.description}>体育人文与学术对话</p>
        </div>

        {episodes.length === 0 ? (
          <p className={styles.empty}>暂无节目</p>
        ) : (
          <div className={styles.list}>
            {episodes.map((ep) => (
              <PodcastCard key={ep.slug} episode={ep} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
