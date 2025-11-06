export default function Section({ title, children, right }) {
  return (
    <section className="py-6">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}
