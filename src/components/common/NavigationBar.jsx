export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <a href="/" className="text-lg font-bold">
          🎬 Mini Movies
        </a>
        <span className="ml-auto text-sm text-neutral-400">
          React + Vite + Tailwind
        </span>
      </div>
    </header>
  );
}
