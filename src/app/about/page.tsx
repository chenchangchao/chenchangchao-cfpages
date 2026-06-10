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
    description: "偏理性、重视结构，也喜欢从真实生活里寻找灵感。",
  },
  {
    title: "我的三观",
    href: "/about/values",
    description: "长期主义、真实问题、持续复盘，是我比较看重的底层原则。",
  },
  {
    title: "我的朋友",
    href: "/about/friends",
    description: "产品同路人、数据分析伙伴、AI 开发朋友和独立创作者。",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">About</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">关于我</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          从统计学、数量经济学到数据分析和 AI 应用开发，我一直在做同一件事：理解复杂系统，然后把它变成更可执行的工具。
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
