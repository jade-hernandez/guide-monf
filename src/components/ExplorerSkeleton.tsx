import { Skeleton } from "@/components/ui/skeleton";

export function ExplorerSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="h-10 w-10 rounded-lg bg-foreground/10" />
            <Skeleton className="h-8 w-48 bg-foreground/10" />
          </div>
          <Skeleton className="w-full h-12 rounded-xl bg-foreground/10" />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-4">
          <Skeleton className="h-11 w-48 rounded-lg bg-foreground/10" />
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-10 w-32 rounded-full bg-foreground/10"
              />
            ))}
          </div>
        </div>

        <Skeleton className="h-5 w-40 mb-4 bg-foreground/10" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(12)].map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-xl bg-foreground/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
