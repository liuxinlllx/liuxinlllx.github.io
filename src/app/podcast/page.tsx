import { podcast } from "@/.velite";
import { PodcastContent } from "./PodcastContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description: "体育人文与学术对话",
};

export default function PodcastPage() {
  const episodes = [...podcast].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <PodcastContent episodes={episodes} />;
}
