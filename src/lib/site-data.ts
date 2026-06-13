export const education = [
  {
    period: "2007.09 - 2010.06",
    school: "莒县二中",
    major: "高中",
  },
  {
    period: "2010.09 - 2014.06",
    school: "山东科技大学",
    major: "统计学",
  },
  {
    period: "2014.09 - 2016.06",
    school: "南开大学",
    major: "数量经济学",
  },
];

export const experiences = [
  {
    period: "2016.07 - 2019.09",
    company: "京东数科 & 京东集团",
    role: "数据分析",
  },
  {
    period: "2019.12 - 2021.05",
    company: "360金融",
    role: "数据分析",
  },
  {
    period: "2021.06 - 2026.05",
    company: "360智慧生活集团",
    role: "数据分析 & 业务开发",
  },
];

export const blogPosts = [
  {
    slug: "agent-knowledge-base",
    title: "Agent 时代的个人知识库",
    date: "2026.06.09",
    summary:
      "从 RAG、工具调用和长期记忆出发，记录个人知识库如何变成可协作的 AI 工作台。",
    tags: ["Agent", "RAG", "Knowledge"],
    body: [
      "个人知识库不只是把资料放进一个文件夹，而是让资料可以被追问、复盘和重新组合。",
      "我更关心的是 Agent 如何接入真实工具：检索、摘要、写作、任务拆解，以及把阶段性结论沉淀下来。",
    ],
  },
  {
    slug: "analyst-full-stack-notes",
    title: "数据分析师的全栈转身笔记",
    date: "2026.05.28",
    summary:
      "把 SQL、Python、TypeScript 和业务理解串起来，搭建更贴近真实问题的内部应用。",
    tags: ["Data", "Full Stack", "Product"],
    body: [
      "数据分析师做全栈应用，优势不是写更多代码，而是更容易判断一个工具是否真的解决业务问题。",
      "从指标口径、数据链路到交互界面，每一层都应该服务于同一个目标：让决策更快、更稳。",
    ],
  },
  {
    slug: "cloudflare-pages-personal-site",
    title: "用 Cloudflare Pages 做个人站",
    date: "2026.05.12",
    summary:
      "记录 Next.js、Cloudflare、静态内容和自动化部署之间的取舍，以及个人站的长期维护方式。",
    tags: ["Next.js", "Cloudflare", "Website"],
    body: [
      "个人站应该轻、快、容易维护。静态导出和边缘部署很适合这种长期存在但不需要复杂后端的场景。",
      "我希望它既能展示项目，也能沉淀写作，慢慢长成一个个人公开工作台。",
    ],
  },
];

export const projects = [
  {
    name: "AI Research Desk",
    category: "AI Agent",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "面向个人研究的资料收集、摘要、问答和引用整理系统，让碎片信息可以被持续追问。",
  },
  {
    name: "RAG Analytics Copilot",
    category: "RAG / BI",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    description:
      "把业务指标、SQL 查询和自然语言解释结合起来，帮助团队更快定位数据背后的原因。",
  },
  {
    name: "Workflow Automator",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    description:
      "使用工具调用和事件触发器处理重复任务，把日报、巡检和知识沉淀做成稳定流程。",
  },
  {
    name: "Prompt Lab",
    category: "Prompt Engineering",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80",
    description:
      "用于实验、评估和复用提示词的小型工作台，沉淀适合个人工作流的 AI 模板。",
  },
];
