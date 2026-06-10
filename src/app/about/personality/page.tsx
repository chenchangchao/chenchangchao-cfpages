export default function PersonalityPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-medium text-muted-foreground">
        About / Personality
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">我的性格</h1>
      <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
        <p className="text-base leading-8 text-muted-foreground">
          偏理性、重视结构，也喜欢从真实生活里寻找灵感。做事倾向先把问题拆清楚，再小步验证；遇到新技术会保持好奇，但会尽量把它放回真实问题里判断价值。
        </p>
      </div>
    </main>
  );
}
