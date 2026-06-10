import { beliefs } from "@/lib/site-data";

export default function ValuesPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-medium text-muted-foreground">About / Values</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">我的三观</h1>
      <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
        <ul className="space-y-3 text-base leading-8 text-muted-foreground">
          {beliefs.map((belief) => (
            <li key={belief}>{belief}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
