import { Feed } from "feed";
import { writeFileSync } from "fs";
import { join } from "path";

async function main() {
  const { blog } = await import("../.velite/index.js");
  const { podcast } = await import("../.velite/index.js");

  const siteUrl = "https://liuxinlllx.github.io";

  // Blog RSS
  const blogFeed = new Feed({
    title: "Xin Liu's Blog",
    description: "学术思考与研究笔记 — Academic reflections and research notes",
    id: siteUrl,
    link: siteUrl,
    language: "zh-CN",
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Xin Liu`,
    author: {
      name: "Xin Liu",
      email: "540737233@qq.com",
    },
  });

  for (const post of blog) {
    blogFeed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.body,
      date: new Date(post.date),
      category: post.tags.map((t: string) => ({ name: t })),
    });
  }

  writeFileSync(join(process.cwd(), "public", "rss.xml"), blogFeed.rss2());
  writeFileSync(join(process.cwd(), "public", "atom.xml"), blogFeed.atom1());

  // Podcast RSS
  const podcastFeed = new Feed({
    title: "体育人文对话 — Xin Liu's Podcast",
    description: "体育人文与学术对话 — Sports humanities and academic conversations",
    id: siteUrl,
    link: siteUrl,
    language: "zh-CN",
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Xin Liu`,
    author: {
      name: "Xin Liu",
      email: "540737233@qq.com",
    },
  });

  for (const ep of podcast) {
    podcastFeed.addItem({
      title: ep.title,
      id: `${siteUrl}/podcast/${ep.slug}`,
      link: `${siteUrl}/podcast/${ep.slug}`,
      description: ep.excerpt,
      content: ep.body,
      date: new Date(ep.date),
      audio: `${siteUrl}${ep.audioUrl}`,
    });
  }

  writeFileSync(join(process.cwd(), "public", "podcast.xml"), podcastFeed.rss2());

  console.log("RSS feeds generated: rss.xml, atom.xml, podcast.xml");
}

main().catch(console.error);
