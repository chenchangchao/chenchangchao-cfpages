import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "陈常超 | AI Application Developer",
  description:
    "陈常超的个人主页，关注 AI Agent、RAG、数据分析、TypeScript、Python 与 PostgreSQL。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}