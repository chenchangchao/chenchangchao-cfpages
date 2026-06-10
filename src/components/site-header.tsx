import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const aboutLinks = [
  ["我的简历", "/about/resume"],
  ["我的性格", "/about/personality"],
  ["我的三观", "/about/values"],
  ["我的朋友", "/about/friends"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight">
          chenchangchao.com
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <nav
            aria-label="Main navigation"
            className="flex items-center rounded-lg border border-border bg-card p-1 text-sm shadow-sm"
          >
            <Link
              href="/blogs"
              className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-3 py-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              Projects
            </Link>
            <div className="group relative">
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                About
              </Link>
              <div className="pointer-events-none absolute right-0 top-full mt-2 w-44 rounded-lg border border-border bg-popover p-1 text-popover-foreground opacity-0 shadow-lg transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                {aboutLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-2 text-sm transition hover:bg-accent"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
