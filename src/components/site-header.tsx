"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
// 移除了 lucide-react 里的 Github 和 Twitter 引入
import { Icons } from "./icons" 
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const blogLinks = [
  {
    href: "/blog",
    title: "所有文章",
    description: "浏览最新的技术探索与思考记录。",
  },
  {
    href: "/blog?category=rag",
    title: "RAG 知识库",
    description: "长文本处理与 Next.js 全栈落地实践。",
  },
  {
    href: "/blog?category=agent",
    title: "AI Agent 开发",
    description: "基于 MCP Server 的智能体工具链开发。",
  },
  {
    href: "/blog?category=life",
    title: "生活与随笔",
    description: "长跑记录、吉他与古琴的练习日常。",
  },
]

const aboutLinks = [
  {
    href: "/about/resume",
    title: "个人简历",
    description: "我的技术栈、工作经历与教育背景。",
  },
  {
    href: "/about/values",
    title: "价值观",
    description: "我对技术、商业与个人的认知准则。",
  },
  {
    href: "/about/personality",
    title: "性格特质",
    description: "我的内在驱动力与行事风格。",
  },
  {
    href: "/about/friends",
    title: "友情链接",
    description: "志同道合的朋友与优秀的极客博客。",
  },
]

export function SiteHeader() {
  const navigationItems = [
    <NavigationMenuItem key="blogs">
      <NavigationMenuTrigger className="bg-transparent">博客</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
          {blogLinks.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>,
    <NavigationMenuItem key="project">
      <NavigationMenuLink
        asChild
        className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
      >
        <Link href="/project">项目</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>,
    <NavigationMenuItem key="about">
      <NavigationMenuTrigger className="bg-transparent">关于</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
          {aboutLinks.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>,
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        
        {/* 左侧：Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold tracking-tight">ChenChangChao</span>
          </Link>
        </div>

        {/* 居中靠右：导航菜单 */}
        <div className="hidden flex-1 items-center justify-end pr-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>{navigationItems}</NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 右侧：图标组件和切换按钮 */}
        <div className="flex items-center space-x-2">
          <Link href="https://github.com/chenchangchao" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

// 修复点 2：把底层 <a> 升级为 <Link>，消除文本节点警告，实现无刷新跳转
const ListItem = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none mb-2">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
