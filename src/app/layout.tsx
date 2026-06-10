import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "陈常超 | AI Application Developer",
  description:
    "陈常超的个人主页，关注 AI Agent、RAG、数据分析、TypeScript、Python 与 PostgreSQL。",
};

const themeScript = `
(() => {
  try {
    const mode = localStorage.getItem("theme-mode") || "system";
    const root = document.documentElement;

    if (mode === "light" || mode === "dark") {
      root.dataset.theme = mode;
      root.dataset.themeMode = mode;
    } else {
      root.removeAttribute("data-theme");
      root.dataset.themeMode = "system";
    }
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className="font-sans">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
