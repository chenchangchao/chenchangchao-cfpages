"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/icons";
import { Brain, Code2, Cpu, Network, BookOpen, ArrowUpRight, Terminal, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// 定义全网独一份的硬核技术深挖与笔面试精粹大盘
const techCompendiums = [
  {
    id: "transformer-engineering",
    title: "01. 大模型/Transformer/Attention 工程实战精粹",
    description: "聚焦于大型语言模型工程落地的核心代码实现。杜绝纸上谈兵，从零手工实现核心组件，攻克工程化过程中的并发与显存优化难点。",
    icon: Code2,
    iconColor: "text-blue-500",
    bgMuted: "bg-blue-500/10",
    tags: ["Python/PyTorch", "Manual Self-Attention", "KV Cache Implementation", "CUDA Memory Basics"],
    focusAreas: [
      "手工复现标准 Multi-Head Attention 与 Grouped-Query Attention (GQA) 的矩阵运算流",
      "深挖推理加速期 KV Cache 的底层存储机制，分析其对显存吞吐与 Batch Size 的空间复杂度绑定",
      "总结不同量化精度（FP16, INT8, INT4）在工程层面的权重裁剪与精度对齐技巧"
    ],
    links: {
      github: "https://github.com/chenchangchao",
      article: "https://chenchangchao.github.io/blog/transformer-engineering"
    }
  },
  {
    id: "llm-algorithms",
    title: "02. 大模型/Transformer 算法原理与数学推导",
    description: "立足于严谨的数学视角与算法底座，对大模型主流论文中的核心机制进行深度的数学公式推导与大厂常考笔面试题全景起底。",
    icon: Brain,
    iconColor: "text-purple-500",
    bgMuted: "bg-purple-500/10",
    tags: ["Mathematical Proofs", "RoPE Derivation", "LayerNorm vs RMSNorm", "Gradient Dynamics"],
    focusAreas: [
      "极限拆解旋转位置编码（RoPE）的复数空间旋转矩阵推导，阐述其外推性的几何本质",
      "对比 Post-LN 与 Pre-LN 在深层网络中的梯度流传播差异，以及 RMSNorm 的计算提效原理",
      "沉淀大厂高频算法面试题：长文本注意力机制衰减、Softmax 溢出防止、交叉熵损失反向传播"
    ],
    links: {
      github: "https://github.com/chenchangchao",
      article: "https://chenchangchao.github.io/blog/llm-algorithms"
    }
  },
  {
    id: "agent-rag-engineering",
    title: "03. Agent/RAG/LangChain 生产级工程落地方案",
    description: "总结将通用大模型包装为特定业务专家的工程链路。重点攻克垂直领域专有知识库在检索阶段的幻觉指标优化问题。",
    icon: Terminal,
    iconColor: "text-emerald-500",
    bgMuted: "bg-emerald-500/10",
    tags: ["LangChain/LangGraph", "Vector DB (Milvus/Pinecone)", "Reranking", "Evaluation Frameworks"],
    focusAreas: [
      "归纳长文本专利/法律场景的混合检索优化（Dense + Sparse Embedding），复现双路召回的流转架构",
      "基于 LangGraph 沉淀生产级多智能体状态机协同（Router, Evaluator模式）的工程设计模式",
      "剖析 RAG 面试高频区：如何解决检索中的“中间信息迷失（Lost in the Middle）”以及 Prompt 溢出控制"
    ],
    links: {
      github: "https://github.com/chenchangchao",
      article: "https://chenchangchao.github.io/blog/agent-rag-engineering"
    }
  },
  {
    id: "agent-mcp-principles",
    title: "04. Agent/MCP/RAG 计算机基础与底层协议原理",
    description: "从计算机系统架构与网络协议的底层视角，解构大模型与外部环境交互的通讯管道，掌握 AI 时代的‘网关级协议’。",
    icon: Network,
    iconColor: "text-amber-500",
    bgMuted: "bg-amber-500/10",
    tags: ["Model Context Protocol", "SSE (Server-Sent Events)", "JSON-RPC 2.0", "Context Window Control"],
    focusAreas: [
      "深度剖析 Anthropic 主导的 Model Context Protocol (MCP) 原理，还原大模型调用外部 Tools 时的 Schema 握手流程",
      "拆解基于 Server-Sent Events (SSE) 的全双工/单向流式传输控制，解释打字机流式输出的 HTTP 底层基建",
      "探究长上下文窗口管理：总结极值文本输入下，系统级截断、滚动滑窗与上下文压缩的计算机边界理论"
    ],
    links: {
      github: "https://github.com/chenchangchao",
      article: "https://chenchangchao.github.io/blog/agent-mcp-principles"
    }
  },
  {
    id: "hermes-openclaw-analysis",
    title: "05. 开源 Agent 框架（Hermes/OpenClaw）架构剖析",
    description: "通过对行业前沿开源智能体运行核（Agent Core）进行代码走查与架构拆解，吸纳顶尖极客的工程抽象思维与并发控制设计。",
    icon: Cpu,
    iconColor: "text-pink-500",
    bgMuted: "bg-pink-500/10",
    tags: ["Source Code Review", "Asynchronous Event Loop", "State Persist", "Runtime Isolation"],
    focusAreas: [
      "解构前沿开源智能体框架的任务调度引擎，理清异步事件循环（Async Event Loop）与多并发请求的隔离阻断机制",
      "剖析 Agent 记忆体（Short-term / Long-term Memory）的持久化中间件设计与动态上下文裁剪算法",
      "归纳大模型报错、网络超时、API 风控等异常状态下，开源框架内部封装的指数退避重试（Exponential Backoff）容灾方案"
    ],
    links: {
      github: "https://github.com/chenchangchao",
      article: "https://chenchangchao.github.io/blog/hermes-openclaw-analysis"
    }
  }
]

export default function ProjectPage() {
  return (
    <div className="container max-w-5xl py-12 space-y-10 animate-in fade-in duration-500">
      
      {/* 头部：极其坦诚、有深度的个人技术宣示 */}
      <div className="flex flex-col gap-3 border-b border-border/40 pb-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          技术深挖与笔面试精粹大盘
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          与其堆砌流于表面的业务 Demo，我选择将精力投入到对 <span className="text-foreground font-semibold">大模型底层原理</span> 与 <span className="text-foreground font-semibold">工程边界</span> 的死磕中。
          以下是我对大模型全栈技术核心论文、经典代码块及前沿开源项目的核心提炼，致力于打通从数理推导到生产级落地的每一处黑盒。
        </p>
      </div>

      {/* 核心知识矩阵列表 */}
      <div className="flex flex-col gap-8">
        {techCompendiums.map((item) => {
          const IconComponent = item.icon
          return (
            <Card key={item.id} className="relative overflow-hidden bg-card/40 backdrop-blur border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              {/* 微光漫反射 */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgMuted} blur-3xl opacity-50 rounded-full pointer-events-none transition-opacity group-hover:opacity-80`} />
              
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${item.bgMuted} border border-border/40`}>
                      <IconComponent className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* 攻坚核心/高频考点剖析 */}
                <div className="space-y-3 bg-muted/30 p-4 rounded-xl border border-border/40">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4 text-primary/80" />
                    重点攻坚与常考点剖析
                  </h4>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {item.focusAreas.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">·</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-[11px] bg-accent/60 border border-border/40 text-foreground/90">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="border-t border-border/20 pt-4 flex flex-wrap gap-3 items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                  <Layers className="h-3 w-3" />
                  类型: Advanced Tech Research & Code Walkthrough
                </span>
                <div className="flex items-center gap-3">
                  <Link href={item.links.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm" className="h-9 gap-1.5 text-muted-foreground hover:text-foreground">
                      <Icons.gitHub className="h-4 w-4" />
                      我的 GitHub
                    </Button>
                  </Link>
                  <Link href={item.links.article} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="h-9 gap-1.5 shadow-sm group/btn">
                      查看精粹文档
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

// 辅助子组件：简单注入以防遗漏
function Layers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-10 5 10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  )
}