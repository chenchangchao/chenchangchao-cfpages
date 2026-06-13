import fs from "fs"
import path from "path"
import Link from "next/link"
import { notFound } from "next/navigation"
import matter from "gray-matter"
import { marked } from "marked"
import { ArrowLeft, Calendar, History, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type BlogPostFrontmatter = {
  title?: string
  description?: string
  category?: string
  date?: string
  created_at?: string
  updated_at?: string
}

type HeadingItem = {
  id: string
  level: number
  text: string
}

const contentDir = path.join(process.cwd(), "src/app/blog/[slug]")

function getStringValue(value: unknown) {
  return typeof value === "string" ? value : undefined
}

function normalizeFrontmatter(data: Record<string, unknown>): BlogPostFrontmatter {
  return {
    title: getStringValue(data.title),
    description: getStringValue(data.description),
    category: getStringValue(data.category),
    date: getStringValue(data.date),
    created_at: getStringValue(data.created_at),
    updated_at: getStringValue(data.updated_at),
  }
}

function extractHeadingText(rawText: string) {
  return rawText
    .replace(/<[^>]+>/g, "")
    .trim()
}

function slugify(text: string) {
  const slug = text
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

  return slug || "section"
}

function buildHeadingHref(id: string) {
  return `#${encodeURIComponent(id)}`
}

function buildToc(html: string) {
  const headingPattern = /<(h[1-3])(?:\s+[^>]*)?>(.*?)<\/\1>/gi
  const headings: HeadingItem[] = []
  const usedIds = new Map<string, number>()

  let match: RegExpExecArray | null
  while ((match = headingPattern.exec(html))) {
    const level = Number(match[1].slice(1))
    const text = extractHeadingText(match[2])
    let id = slugify(text)

    if (!id) continue

    const count = usedIds.get(id) ?? 0
    usedIds.set(id, count + 1)
    if (count > 0) id = `${id}-${count}`

    headings.push({ id, level, text })
  }

  return headings
}

function addHeadingIds(html: string) {
  const headingPattern = /<(h[1-3])([^>]*)>(.*?)<\/\1>/gi
  const usedIds = new Map<string, number>()

  return html.replace(headingPattern, (fullMatch, tag, attrText, innerHtml) => {
    const text = extractHeadingText(innerHtml)
    let id = slugify(text)
    if (!id) return fullMatch

    const count = usedIds.get(id) ?? 0
    usedIds.set(id, count + 1)
    if (count > 0) id = `${id}-${count}`

    const preservedAttrs = attrText
      .replace(/\s*id=(?:"[^"]*"|'[^']*')/gi, "")
      .trim()
    const attrs = preservedAttrs ? ` ${preservedAttrs}` : ""

    return `<${tag}${attrs} id="${id}">${innerHtml}</${tag}>`
  })
}

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return []
  
  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(contentDir, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)
  const frontmatter = normalizeFrontmatter(data)
  const rawHtml = await marked.parse(content)
  const htmlWithIds = addHeadingIds(rawHtml)
  const toc = buildToc(htmlWithIds)

  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
      <article className="mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <section className="space-y-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            返回博客列表
          </Link>

          <div className="space-y-4 border-b border-border/60 pb-6">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                <Tag className="mr-1 h-3 w-3" />
                {frontmatter.category || "Tech"}
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
              {frontmatter.title || slug}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-6 gap-y-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary/70" />
                发布于 {frontmatter.created_at || frontmatter.date}
              </span>

              {frontmatter.updated_at && (
                <span className="flex items-center gap-1.5 bg-accent/40 px-2 py-0.5 rounded-md border border-border/40 text-xs text-foreground/80">
                  <History className="h-3.5 w-3.5 text-amber-500" />
                  最后更新于 {frontmatter.updated_at}
                </span>
              )}
            </div>

            {frontmatter.description && (
              <p className="text-base text-muted-foreground pt-2 border-t border-dashed border-border/40 mt-2">
                {frontmatter.description}
              </p>
            )}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/60 p-6 shadow-sm shadow-border/10 backdrop-blur supports-backdrop-filter:bg-card/30">
            <div className="prose dark:prose-invert prose-blue max-w-none prose-h2:text-center prose-h3:text-center prose-headings:scroll-mt-28 prose-pre:bg-muted prose-pre:border prose-pre:border-border/60">
              <div dangerouslySetInnerHTML={{ __html: htmlWithIds }} />
            </div>
          </div>
        </section>

        <aside className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain">
          <div className="space-y-4 rounded-3xl border border-border/50 bg-background/90 p-5 text-sm shadow-sm shadow-border/10 backdrop-blur supports-backdrop-filter:bg-background/90">
            <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">文章大纲</div>
            {toc.length > 0 ? (
              <nav className="space-y-3">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={buildHeadingHref(item.id)}
                    className={`block rounded-lg px-3 py-2 transition-colors hover:bg-accent/10 hover:text-foreground ${item.level === 1 ? "font-semibold" : item.level === 2 ? "pl-4" : "pl-6 text-muted-foreground"}`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            ) : (
              <p className="text-sm text-muted-foreground">暂无大纲节点。</p>
            )}
          </div>
        </aside>
      </article>
    </div>
  )
}
