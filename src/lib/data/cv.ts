import type {
  EducationItem,
  WorkItem,
  ResearchSection,
  MediaItem,
  ContactItem,
  BilingualText,
} from "@/lib/types";

export const aboutText: BilingualText = {
  zh: "刘芯，广东深圳人。目前于浙江大学教育学院攻读体育人文社会学博士学位，研究方向为体卫融合与健康中国。此前于清华大学五道口金融学院体育金融研究中心任中级研究专员，拥有苏黎世大学经济学荣誉硕士学位与华南理工大学金融学学士学位。研究关注体育产业政策、体育消费行为、体卫融合机制等议题。",
  en: "Xin Liu is a PhD candidate in Sports Humanities and Sociology at Zhejiang University's College of Education, researching Exercise is Medicine and Healthy China. Previously a Research Specialist at the Tsinghua PBCSF Sports Finance Research Center, she holds an honors master's degree in Economics from the University of Zurich and a bachelor's in Finance from South China University of Technology. Her research spans sports industry policy, sports consumption behavior, and Exercise is Medicine mechanisms.",
};

export const educationItems: EducationItem[] = [
  {
    school: { zh: "浙江大学", en: "Zhejiang University" },
    period: "2024.09",
    periodEnd: "present",
    degree: {
      zh: "体育人文社会学 · 博士研究生",
      en: "Sports Humanities & Sociology · PhD Candidate",
    },
    tags: [
      { zh: "体卫融合", en: "Exercise is Medicine" },
      { zh: "健康中国", en: "Healthy China" },
    ],
  },
  {
    school: { zh: "苏黎世大学", en: "University of Zurich" },
    period: "2016.02",
    periodEnd: "2018.10",
    degree: {
      zh: "经济学 · 荣誉硕士学位",
      en: "Economics · Master of Arts (Honors)",
    },
    details: {
      zh: "辅修数据科学，毕业论文获得满分。实习于中国综合开发研究院、弘金地体育公司。",
      en: "Minor in Data Science; master's thesis received full marks. Internships at China Development Institute and Hongjindi Sports.",
    },
    tags: [],
  },
  {
    school: { zh: "华南理工大学", en: "South China University of Technology" },
    period: "2011.09",
    periodEnd: "2015.07",
    degree: { zh: "金融学 · 学士学位", en: "Finance · Bachelor of Economics" },
    details: {
      zh: "交换项目至国立高雄大学；实习于中国欧盟商会、农村商业银行。",
      en: "Exchange program at National University of Kaohsiung; internships at EU Chamber of Commerce in China and Rural Commercial Bank.",
    },
    tags: [],
  },
];

export const workItems: WorkItem[] = [
  {
    org: {
      zh: "清华大学五道口金融学院",
      en: "Tsinghua PBCSF",
    },
    period: "2019.04",
    periodEnd: "2024.08",
    role: {
      zh: "体育金融研究中心 · 中级研究专员",
      en: "Sports Finance Research Center · Research Specialist",
    },
    bullets: [
      {
        zh: "组织开展全国体育公园调研，撰写政策解读《推进体育公园建设 满足全民健身需求》并刊登于国家发展改革委官方网站",
        en: "Led national sports park research; authored policy brief \"Promoting Sports Park Construction to Meet National Fitness Needs,\" published on the NDRC official website",
      },
      {
        zh: "参与《体育科技浪潮》《体育消费：发展趋势与政策导向》等体育产业书籍编写工作",
        en: "Contributed to books including \"The Wave of Sports Technology\" and \"Sports Consumption: Trends and Policy Directions\"",
      },
    ],
  },
  {
    org: {
      zh: "二十一点体育发展有限公司",
      en: "21-Point Sports Development Co., Ltd.",
    },
    period: "2023.01",
    periodEnd: "2024.03",
    role: { zh: "政策顾问", en: "Policy Consultant" },
    bullets: [
      {
        zh: "与中国篮球协会合作开展《中国三人篮球可持续发展战略研究》，撰写调研报告并报送体育总局",
        en: "Collaborated with the Chinese Basketball Association on \"Sustainable Development Strategy for 3×3 Basketball in China\"; authored reports submitted to the General Administration of Sport",
      },
      {
        zh: "为中国三人篮球国家队及俱乐部提供政策和产业研究支持",
        en: "Provided policy and industry research support for China's national 3×3 basketball team and clubs",
      },
    ],
  },
];

export const researchSections: ResearchSection[] = [
  {
    heading: { zh: "学术论文", en: "Journal Articles" },
    items: [
      {
        zh: "《新冠疫情对我国体育风险投资的影响及应对策略》，北京体育大学学报",
        en: "\"Impact of COVID-19 on Sports Venture Capital in China and Coping Strategies,\" Journal of Beijing Sport University",
      },
      {
        zh: "《我国乡村体育服务业的发展方向与金融支持研究》，入选全国青年理论研讨会",
        en: "\"Development Direction and Financial Support for China's Rural Sports Service Industry,\" selected for National Youth Theory Symposium",
      },
    ],
  },
  {
    heading: { zh: "研究报告", en: "Research Reports" },
    items: [
      {
        zh: "《2021全民健身体育公园研究报告》，中国体博会发布",
        en: "\"2021 National Fitness Sports Park Research Report,\" released at China Sports Expo",
      },
      {
        zh: "《2022年大众健身行为与消费研究报告》",
        en: "\"2022 Mass Fitness Behavior and Consumption Research Report\"",
      },
      {
        zh: "《中国城市体育消费报告》，中国体育文化和体育旅游博览会发布",
        en: "\"China Urban Sports Consumption Report,\" released at China Sports Culture & Sports Tourism Expo",
      },
      {
        zh: "《体育产业与金融政策扶持情况调研报告》，人民网等媒体发布",
        en: "\"Survey Report on Sports Industry and Financial Policy Support,\" published via People's Daily Online",
      },
    ],
  },
  {
    heading: { zh: "书籍与教材", en: "Books & Textbooks" },
    items: [
      {
        zh: "参与仇军老师《体育社会学》教材编写",
        en: "Contributed to \"Sports Sociology\" textbook (ed. Prof. Qiu Jun)",
      },
      {
        zh: "参与《体育科技浪潮》书籍编写",
        en: "Contributed to \"The Wave of Sports Technology\"",
      },
      {
        zh: "参与江小涓老师《体育消费：发展趋势与政策导向》章节写作",
        en: "Contributed a chapter to \"Sports Consumption: Trends and Policy Directions\" (ed. Prof. Jiang Xiaojuan)",
      },
    ],
  },
];

export const mediaItems: MediaItem[] = [
  {
    text: {
      zh: "学术嘉宾，多次参与《中国之声·新闻有观点》节目录制，主题涵盖水上运动、轻健身、乡村篮球等",
      en: "Academic guest on China National Radio's \"News with Views,\" covering topics from water sports to grassroots basketball",
    },
  },
  {
    text: {
      zh: "报告人，于中国体博会、中国体育文化和体育旅游博览会等全国性行业大会发布研究成果",
      en: "Presenter at national industry conferences including China Sports Expo and China Sports Culture & Tourism Expo",
    },
  },
  {
    text: {
      zh: "授课教师，参与青海省退役运动员体育产业培训，设计并主讲《体育产业人才培养课程》",
      en: "Instructor for Qinghai Province retired athletes training program; designed and taught \"Sports Industry Talent Development\" course",
    },
  },
];

export const contactItems: ContactItem[] = [
  {
    label: { zh: "邮箱", en: "Email" },
    value: "champagne_7@163.com",
    dotColor: "#3b6cf4",
  },
  {
    label: { zh: "浙江·杭州", en: "Hangzhou, Zhejiang" },
    value: "浙江·杭州",
    dotColor: "#10b981",
  },
  {
    label: { zh: "LinkedIn", en: "LinkedIn" },
    value: "www.linkedin.com/in/xin-liu-8685013a8",
    dotColor: "#f59e0b",
  },
];
