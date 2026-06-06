const stats = [
  ["11+", "Years Experience"],
  ["Senior Engineer", "Cvent"],
  ["Enterprise", "Applications"],
  ["Cloud", "Architecture"],
  ["Backend", "Systems"],
  ["System", "Design"],
];
export default function Stats() {
  return (
    <section className="mb-16 md:mb-24">
      <div className="grid grid-cols-2 gap-4">
        {stats.map(([v, l]) => (
          <div key={l} className="rounded border border-slate-800 p-6">
            <div className="text-2xl font-bold text-teal-300">{v}</div>
            <div className="text-sm">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
