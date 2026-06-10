import Image from "next/image";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Projects</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            AI 相关个人项目
          </h1>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          用风景照承载项目卡片，表达一点“向外探索、向内沉淀”的个人气质。
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-sm"
          >
            <Image
              src={project.image}
              alt={`${project.name} 风景卡片`}
              width={1200}
              height={675}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-5">
              <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {project.category}
              </span>
              <h2 className="mt-4 text-xl font-semibold">{project.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
