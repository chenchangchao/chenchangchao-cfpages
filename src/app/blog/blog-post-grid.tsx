"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Calendar, History } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type BlogPostMeta = {
  slug: string
  title?: string
  description?: string
  category?: string
  date?: string
  created_at?: string
  updated_at?: string
}

const categoryAliases: Record<string, string> = {
  life: "人生经历",
  "reading-note": "阅读笔记",
}

function normalizeCategory(value: string | null | undefined) {
  const category = value?.trim().toLowerCase()
  return category ? categoryAliases[category] || category : undefined
}

export function BlogPostGrid({ posts }: { posts: BlogPostMeta[] }) {
  const searchParams = useSearchParams()
  const activeCategory = normalizeCategory(searchParams.get("category"))
  const filteredPosts = activeCategory
    ? posts.filter((post) => normalizeCategory(post.category) === activeCategory)
    : posts

  if (filteredPosts.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-12">
        暂无博文发布，正在拼命码字中...
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {filteredPosts.map((post) => (
        <Card key={post.slug} className="flex flex-col bg-card/40 backdrop-blur supports-backdrop-filter:bg-background/60 border-border/60 hover:border-primary/40 transition-all hover:shadow-md group">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center text-xs text-muted-foreground gap-1.5">
                {post.updated_at ? (
                  <>
                    <History className="h-3 w-3 text-amber-500" />
                    更新于 {post.updated_at}
                  </>
                ) : (
                  <>
                    <Calendar className="h-3 w-3" />
                    发布于 {post.created_at || post.date}
                  </>
                )}
              </span>
              <Badge variant="outline" className="capitalize text-[11px] font-mono">
                {post.category || "Tech"}
              </Badge>
            </div>
            <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <CardDescription className="text-sm line-clamp-2 leading-relaxed">
              {post.description || "暂无文章摘要说明。"}
            </CardDescription>
          </CardContent>
          <CardFooter className="border-t border-border/20 pt-4 mt-auto">
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1 ml-auto group/link">
              阅读全文
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
