import Link from "next/link";
import { blogPosts } from "@/lib/site-data";

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Blog</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">测试文章</h1>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          先放几篇用于站点结构和视觉测试的文章，后续可以替换成正式内容。
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-border bg-card p-5 shadow-sm"
          >
            <p className="text-xs font-medium text-muted-foreground">
              {post.date}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-7">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {post.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
