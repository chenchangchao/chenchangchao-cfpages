const education = [
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

const experiences = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          chenchangchao.com
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          陈常超
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          AI 应用开发 / 数据分析 / TypeScript / Python / PostgreSQL / Agent / RAG
        </p>

        <p className="mt-3 text-sm text-neutral-500">
          关注 AI Agent、RAG、业务自动化、数据分析与全栈应用开发
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:contact@chenchangchao.com"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
          >
            联系我
          </a>

          <a
            href="https://github.com/chenchangchao"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-100 transition hover:border-neutral-400"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 p-5">
            <h2 className="font-semibold">AI Agent</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              基于工具调用、RAG、MCP、自动化工作流构建业务应用。
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 p-5">
            <h2 className="font-semibold">Data Analysis</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              使用 PostgreSQL、Python、BI 报表沉淀业务洞察。
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 p-5">
            <h2 className="font-semibold">Full Stack</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              TypeScript、Next.js、Fastify、Drizzle、Cloudflare。
            </p>
          </div>
        </div>

        <section className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">教育经历</h2>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div
                  key={`${item.period}-${item.school}`}
                  className="rounded-2xl border border-neutral-800 p-5"
                >
                  <p className="text-sm text-neutral-500">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.school}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{item.major}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">工作经历</h2>
            <div className="mt-6 space-y-4">
              {experiences.map((item) => (
                <div
                  key={`${item.period}-${item.company}`}
                  className="rounded-2xl border border-neutral-800 p-5"
                >
                  <p className="text-sm text-neutral-500">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.company}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}