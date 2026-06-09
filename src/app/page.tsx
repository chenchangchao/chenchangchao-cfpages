export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          chenchangchao.com
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          陈常超
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
          AI 应用开发 / 数据分析 / TypeScript / Python / PostgreSQL / Agent / RAG
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:contact@chenchangchao.com"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950"
          >
            联系我
          </a>

          <a
            href="https://github.com/chenchangchao"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-100"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 p-5">
            <h2 className="font-semibold">AI Agent</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              基于工具调用、RAG、自动化工作流构建业务应用。
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
      </section>
    </main>
  );
}