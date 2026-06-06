export default function Arsenal() {
  const cats = {
    Backend: ["PHP", "Laravel", "CakePHP"],
    Cloud: ["AWS", "Lambda", "Kinesis"],
    Data: ["MySQL", "Redis"],
    DevOps: ["Docker", "CI/CD"],
  };
  return (
    <section className="mb-16 md:mb-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
        Tech Arsenal
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(cats).map(([k, v]) => (
          <div key={k} className="rounded border border-slate-800 p-4">
            <div className="text-teal-300 font-semibold">{k}</div>
            <div className="text-sm mt-2">{v.join(" • ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
