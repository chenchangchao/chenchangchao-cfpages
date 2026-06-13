import Link from "next/link";

const aboutSections = [
  {
    title: "我的简历",
    href: "/about/resume",
    description: "教育经历、工作经历，以及从数据分析到 AI 应用开发的路径。",
  },
  {
    title: "我的性格",
    href: "/about/personality",
    description: "INFP调停者，也喜欢从真实生活里寻找灵感。",
  },
  {
    title: "网站定位",
    href: "/about/site",
    description: "长期主义、真实问题、持续复盘，是我比较看重的底层原则。",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">关于我</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          你好，我是陈常超，一名 AI 应用开发者，主要关注AI 工作流实践、AI落地应用和工程效率。
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {aboutSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-lg border border-border bg-card p-5 shadow-sm transition hover:bg-accent"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {section.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
