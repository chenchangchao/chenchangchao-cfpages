"use client"

import * as React from "react"
import Link from "next/link"
import { House } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
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
} from "@/components/ui/navigation-menu"

const blogLinks = [
  {
    href: "/blog",
    title: "所有文章",
    description: "浏览最新的笔记与生活随笔",
  },
  {
    href: "/blog?category=reading-note",
    title: "阅读笔记",
    description: "沉浸浓郁含英咀华",
  },
  {
    href: "/blog?category=life",
    title: "生活与随笔",
    description: "我的碎碎念",
  },
    {
    href: "/blog/gallery",
    title: "时间画廊",
    description: "光影捕捉生活的美好时刻",
  },
]

const aboutLinks = [
  {
    href: "/about/resume",
    title: "个人简历",
    description: "我的工作经历与教育背景。",
  },
  {
    href: "/about/site",
    title: "网站定位",
    description: "我对网站定位与内容规划的理解。",
  },
  {
    href: "/about/personality",
    title: "性格特质",
    description: "我的性格特质与兴趣爱好。",
  },
]

const projectLinks = [
  {
    href: "/project#llm-engineering",
    title: "LLM Engineering",
    description: "LLM 工程化与模型部署",
  },
  {
    href: "/project#llm-under-the-hood",
    title: "LLM under the hood",
    description: "LLM核心机制",
  },
  {
    href: "/project#agent-engineering",
    title: "Agent Engineering",
    description: "Agent 工程化与业务自动化",
  },
  {
    href: "/project#agent-under-the-hood",
    title: "Agent Under the hood",
    description: "Agent核心机制",
  },
  {
    href: "/project#popular-agent",
    title: "Popular Agent",
    description: "热门Agent解析",
  },
]

export function SiteHeader() {
  const navigationItems = [
    <NavigationMenuItem key="blogs">
      <NavigationMenuTrigger className="bg-transparent">博客</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[min(calc(100vw-2rem),22rem)] gap-2 p-3 md:w-136 md:grid-cols-2">
          {blogLinks.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>,
    <NavigationMenuItem key="project">
      <NavigationMenuTrigger className="bg-transparent">项目</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[min(calc(100vw-2rem),24rem)] gap-2 p-3">
          <ListItem href="/project" title="全部项目">
            AI 应用开发与落地实践总览。
          </ListItem>
          {projectLinks.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>,
    <NavigationMenuItem key="about">
      <NavigationMenuTrigger className="bg-transparent">关于</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[min(calc(100vw-2rem),22rem)] gap-2 p-3">
          {aboutLinks.map((item) => (
            <ListItem key={item.href} href={item.href} title={item.title}>
              {item.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>,
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/" aria-label="返回网站主页" title="返回网站主页" className="group flex items-center space-x-2">
            <House className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            <span className="font-bold tracking-tight">ChenChangChao</span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end pr-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>{navigationItems}</NavigationMenuList>
          </NavigationMenu>
        </div>

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
