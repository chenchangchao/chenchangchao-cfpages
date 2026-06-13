export default function PersonalityPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
          About / Personality
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
          我的性格
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          INFP 调停者 / 射手座 / 理想主义与现实的持续对弈
        </p>
      </div>

      <div className="space-y-12">
        {/* 优点模块 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2">
            光影一面：利他与坚守
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">理性与包容并存</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                自认拥有相对客观的世界观。虽然偶尔会有思想上的小锋芒，但总体能够接纳世界的参差。不会轻易被狂热的情绪裹挟，尊重并倾听不同的声音，习惯在团队中做那个润滑与协调的角色。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">风物长宜放眼量</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                内核稳定，极少情绪失控。与其把精力消耗在日常的“气死我了”和无意义的牢骚中，我更愿意去跑个十公里出出汗，或者沉浸在自己的精神世界里自我消化。不短视，不纠结。
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
              <h3 className="font-bold text-lg mb-2">天生的“清道夫”与共情者</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                典型 INFP 的利他主义。面对别人的困境，无论是代码层面的疑难杂症，还是心理层面的情绪死结，我都习惯像个免费的“治疗师”一样去施以援手。虽然有时会自嘲变成了工具人，但心底里，我依然乐意在力所能及的范围内释放善意。
              </p>
            </div>
          </div>
        </section>

        {/* 缺点模块 */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b pb-2">
            暗面自省：逃避与旷野
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-muted/50 p-6 border border-transparent">
              <h3 className="font-bold text-base mb-1">宏观掩盖细节</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                习惯站在全局视角构建系统，自以为一切尽在掌控。但这种“不拘小节”的宏观思维，常常会让我在细枝末节处措手不及。成败往往藏在小节之中，这是我作为全栈开发者和独立个体必须警惕的盲区。
              </p>
            </div>
            <div className="rounded-xl bg-muted/50 p-6 border border-transparent">
              <h3 className="font-bold text-base mb-1">盲目的射手座乐观</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                乐观是极好的生活滤镜，但过度且缺乏敬畏的乐观，容易演变成“乐极生悲”。对事物走向的盲目自信，有时会削弱我对风险的把控力，让明明能十拿九稳的事情在最后关头功败垂成。
              </p>
            </div>
            <div className="rounded-xl bg-muted/50 p-6 border border-transparent">
              <h3 className="font-bold text-base mb-1">防御性撤退机制</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                内心深处依然在寻找绝对的安全感与归属感。我可以在人群中笑得没心没肺，但只要察觉到一丝冷待或危险信号，我就会光速抽身，逃得比谁都快。常常让人觉得无解，但我也信奉：“逃避可耻，但有时真的有用。”
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}