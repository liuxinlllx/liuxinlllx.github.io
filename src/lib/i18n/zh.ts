export interface Dictionary {
  nav: {
    home: string;
    blog: string;
    podcast: string;
  };
  hero: {
    name: string;
    subtitle1: string;
    subtitle2: string;
    researchTag: string;
  };
  sections: {
    about: string;
    education: string;
    work: string;
    research: string;
    media: string;
    contact: string;
    latestBlog: string;
    latestPodcast: string;
  };
  blog: {
    title: string;
    description: string;
    readingTime: (min: number) => string;
    backToList: string;
    viewAll: string;
  };
  podcast: {
    title: string;
    description: string;
    duration: string;
    listen: string;
    backToList: string;
    viewAll: string;
  };
  common: {
    present: string;
    noContent: string;
    allTags: string;
  };
  home: {
    blogTitle: string;
    podcastTitle: string;
    readMore: string;
    listenNow: string;
  };
}

export const zh: Dictionary = {
  nav: {
    home: "首页",
    blog: "博客",
    podcast: "播客",
  },
  hero: {
    name: "刘芯",
    subtitle1: "浙江大学 · 体育人文社会学博士研究生",
    subtitle2: "体卫融合 · 体育产业政策 · 健康中国",
    researchTag: "研究方向：体卫融合与健康中国",
  },
  sections: {
    about: "简介",
    education: "教育背景",
    work: "工作经历",
    research: "研究成果与报告",
    media: "媒体与培训",
    contact: "联系方式",
    latestBlog: "最新博客",
    latestPodcast: "最新播客",
  },
  blog: {
    title: "博客",
    description: "学术思考与研究笔记",
    readingTime: (min: number) => `阅读时间 ${min} 分钟`,
    backToList: "← 返回博客列表",
    viewAll: "查看全部 →",
  },
  podcast: {
    title: "播客",
    description: "体育人文与学术对话",
    duration: "时长",
    listen: "收听",
    backToList: "← 返回播客列表",
    viewAll: "查看全部 →",
  },
  common: {
    present: "至今",
    noContent: "暂无内容",
    allTags: "全部",
  },
  home: {
    blogTitle: "最新博客",
    podcastTitle: "最新播客",
    readMore: "阅读全文 →",
    listenNow: "立即收听 →",
  },
};
