import { cn } from "@/utils/cn";

export default function Grid({ children, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
