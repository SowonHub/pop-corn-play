import { Container, Skeleton } from "@/components/ui";

export default function DetailPageSkeleton() {
  return (
    <Container className="max-w-5xl py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr]">
        <Skeleton className="aspect-2/3 w-full rounded-2xl" />
        <div className="space-y-6 py-4">
          <Skeleton className="h-12 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <Skeleton className="h-32 w-full" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-32 rounded-xl" />
            <Skeleton className="h-12 w-32 rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}

