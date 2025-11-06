export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-800/60 ${className}`}
    />
  );
}
