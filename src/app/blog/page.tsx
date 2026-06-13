import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Suspense } from "react"
import { BookOpen } from "lucide-react"
import { BlogPostGrid, type BlogPostMeta } from "./blog-post-grid"

function getStringValue(value: unknown) {
  return typeof value === "string" ? value : undefined
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content")
  if (!fs.existsSync(contentDir)) return []
  
  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }))
}

export default function BlogListPage() {
  const contentDir = path.join(process.cwd(), "src/app/blog/[slug]")
  let posts: BlogPostMeta[] = []

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir)
    posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(contentDir, file)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContent)
        return {
          slug: file.replace(".md", ""),
          title: getStringValue(data.title),
          description: getStringValue(data.description),
          category: getStringValue(data.category),
          date: getStringValue(data.date),
          created_at: getStringValue(data.created_at),
          updated_at: getStringValue(data.updated_at),
        }
      })
      // 智能排序：谁的最新动向（更新时间，无更新则看创建时间）最近，谁排在前面
      .sort((a, b) => {
        const dateA = new Date(a.updated_at || a.created_at || a.date || 0).getTime()
        const dateB = new Date(b.updated_at || b.created_at || b.date || 0).getTime()
        return dateB - dateA
      })
  }

  return (
    <div className="container max-w-7xl mx-auto py-12 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2 border-b border-border/40 pb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          读万卷书，行万里路，知行合一
        </h1>
        <p className="text-muted-foreground text-lg">
          我的博客，记录我的学习和成长之路。这里有读书笔记、人生经历等，分享我的所见所闻和思考感悟。希望能对你有所启发，也欢迎交流讨论！
        </p>
      </div>

      <Suspense fallback={<p className="text-muted-foreground text-center py-12">正在加载文章...</p>}>
        <BlogPostGrid posts={posts} />
      </Suspense>
    </div>
  )
}
