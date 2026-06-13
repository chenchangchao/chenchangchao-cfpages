import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Mail } from "lucide-react";

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
          人生随想录 / 经历与感受 / 探索与发现 / 独立自由平等  /
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          我的数字花园，记录感受与思考，分享经历与发现，欢迎交流与讨论。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:contact@chenchangchao.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            联系我
          </a>
          <a
            href="https://github.com/chenchangchao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-accent hover:text-accent-foreground"
          >
            <Icons.gitHub className="h-4 w-4" />
            GitHub
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            ["Blog", "/blog", "博客与生活笔记"],
            ["Project", "/project", "AI 相关项目笔记"],
            ["About", "/about", "我的简历、个人性格、网站定位"],
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
          className="aspect-4/3 w-full rounded-md object-cover"
        />
        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {["Life", "Read", "Tech"].map((item) => (
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
