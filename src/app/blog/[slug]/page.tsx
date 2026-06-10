import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        返回 Blog列表
      </Link>

      <article className="mt-8">
        <p className="text-sm font-medium text-muted-foreground">{post.date}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {post.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-5 text-base leading-8 text-muted-foreground">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
