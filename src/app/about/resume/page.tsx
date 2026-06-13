import { education, experiences } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div>
        <p className="text-sm font-medium text-muted-foreground">About / Resume</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">我的简历</h1>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold">教育经历</h2>
          <div className="mt-5 space-y-4">
            {education.map((item) => (
              <div
                key={`${item.period}-${item.school}`}
                className="rounded-lg border border-border bg-background p-4"
              >
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 font-semibold">{item.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.major}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-xl font-semibold">工作经历</h2>
          <div className="mt-5 space-y-4">
            {experiences.map((item) => (
              <div
                key={`${item.period}-${item.company}`}
                className="rounded-lg border border-border bg-background p-4"
              >
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 font-semibold">{item.company}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
