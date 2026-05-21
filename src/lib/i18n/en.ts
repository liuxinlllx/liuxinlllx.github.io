import type { Dictionary } from "./zh";

export const en: Dictionary = {
  nav: {
    home: "Home",
    blog: "Blog",
    podcast: "Podcast",
  },
  hero: {
    name: "Xin Liu",
    subtitle1:
      "PhD Candidate in Sports Humanities & Sociology, Zhejiang University",
    subtitle2:
      "Exercise is Medicine · Sports Policy · Healthy China",
    researchTag:
      "Research: Exercise is Medicine & Healthy China",
  },
  sections: {
    about: "About",
    education: "Education",
    work: "Work Experience",
    research: "Research & Publications",
    media: "Media & Training",
    contact: "Contact",
    latestBlog: "Latest Blog Posts",
    latestPodcast: "Latest Podcast Episodes",
  },
  blog: {
    title: "Blog",
    description: "Academic reflections and research notes",
    readingTime: (min: number) => `${min} min read`,
    backToList: "← Back to Blog",
    viewAll: "View All →",
  },
  podcast: {
    title: "Podcast",
    description: "Sports humanities and academic conversations",
    duration: "Duration",
    listen: "Listen",
    backToList: "← Back to Podcast",
    viewAll: "View All →",
  },
  common: {
    present: "Present",
    noContent: "No content yet",
    allTags: "All",
  },
  home: {
    blogTitle: "Latest Blog Posts",
    podcastTitle: "Latest Episodes",
    readMore: "Read More →",
    listenNow: "Listen Now →",
  },
};
