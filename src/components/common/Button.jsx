export default function Button({ as = "button", className = "", ...props }) {
  const Tag = as;
  return (
    <Tag
      className={`inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800 active:scale-[0.98] ${className}`}
      {...props}
    />
  );
}
