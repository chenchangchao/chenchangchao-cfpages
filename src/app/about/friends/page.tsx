import { friends } from "@/lib/site-data";

export default function FriendsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-medium text-muted-foreground">About / Friends</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">我的朋友</h1>
      <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {friends.map((friend) => (
            <span
              key={friend}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
            >
              {friend}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
