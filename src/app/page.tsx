import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <section>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          AI Application Developer
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight text-balance md:text-7xl">
          陈常超
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          AI 应用开发 / 数据分析 / TypeScript / Python / PostgreSQL / Agent / RAG
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          关注 AI Agent、RAG、业务自动化、数据分析与全栈应用开发。把数据思维、工程能力和 AI 工具放在同一个工作流里，做能真正省时间的个人项目。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:contact@chenchangchao.com"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            联系我
          </a>
          <a
            href="https://github.com/chenchangchao"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-accent"
          >
            GitHub
          </a>
          <a
            href="https://x.com/galaxmilkway"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-accent"
          >
            X @galaxmilkway
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            ["Blogs", "/blogs", "测试文章与长期写作"],
            ["Projects", "/projects", "AI 相关个人项目"],
            ["About", "/about", "简历、性格、三观和朋友"],
          ].map(([label, href, description]) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition hover:bg-accent"
            >
              <span className="text-sm font-semibold">{label}</span>
              <span className="mt-2 block text-xs leading-5 text-muted-foreground">
                {description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-2 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80"
          alt="山地星空风景"
          width={1400}
          height={1050}
          priority
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {["Agent", "RAG", "Analytics"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-border bg-muted px-3 py-2 text-center text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
