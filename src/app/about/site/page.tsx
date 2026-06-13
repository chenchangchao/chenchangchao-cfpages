export default function SitePositioningPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
          About / Site Positioning
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
          建站初衷
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          建立自我，追求无我。在喧嚣的数字世界中，构建属于自己的坐标系。
        </p>
      </div>

      <div className="space-y-8">
        {/* 模块一：个体的坐标 */}
        <section className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="text-primary/70">01.</span> 见贤思齐与个体坐标
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            我仰慕那些在各自领域达到极致的大神：从李嘉诚的商业哲学，到 Fabrice Bellard 那种纯粹的极客精神，再到德约科维奇在球场上的绝对专注与韧性。我深知自己或许永远无法触及他们的高度，但作为浩瀚宇宙中的一个微小个体，我依然相信自身存在的价值。这个网站，就是我证明个体价值、向外探索的试验田。
          </p>
        </section>

        {/* 模块二：记录与重构 */}
        <section className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="text-primary/70">02.</span> 思想的 Git 提交记录
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            记录生活与整理信息，本身就是一种对抗遗忘的抵抗。无论是攻克一个复杂的前端架构、调通一个 AI 接口，还是去美术馆看一场展览、拨弄几曲琴音，将其沉淀下来，都能让我对做过的项目和走过的路更加清晰。阶段性的总结与记录，让我得以看到自己思维的迭代，看到自己对世界理解的颗粒度变得愈发细腻。这些微小的变化，本身就充满意义。
          </p>
        </section>

        {/* 模块三：底色与良知 */}
        <section className="rounded-xl border border-border bg-card p-8 shadow-sm bg-muted/30">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="text-primary/70">03.</span> 改变世界的最小单位
          </h2>
          <blockquote className="border-l-4 border-primary/50 pl-5 my-5 italic text-muted-foreground/90 leading-8">
            “如果你一生耿直，刚正不阿，没做任何恶心的事情，没有做任何对别人造成伤害的事情，一辈子拼了老命勉强把老婆、孩子、老娘，把身边的这些人照顾好了，没有成名，没有发财，没有成就伟大的事业，一生正直，最后梗着脖子到了七八十岁死掉了，你这一生是不是没有改变世界？你还是改变世界了的，你把这个世界变得美好了一点点。因为你，这个世界又多了一个好人。”
          </blockquote>
          <p className="text-base leading-8 text-muted-foreground">
            罗永浩《我的奋斗》里的这段话，是我的人生底色。在追求技术巅峰或成为超级个体之前，首先成为一个大写的人。守住良知的底线，保持正直。即使最终平凡，我也以此为荣。
          </p>
        </section>
      </div>
    </main>
  );
}