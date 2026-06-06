export default function Timeline() {
  const items = [
    ["2025", "Senior Software Engineer"],
    ["2022", "GlobalLogic"],
    ["2018", "Enterprise Workflow Systems"],
    ["2014", "Engineering Journey Begins"],
  ];
  return (
    <section className="mb-16 md:mb-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
        Career Timeline
      </h2>
      <div className="border-l border-slate-700 ml-2">
        {items.map((i) => (
          <div key={i[0]} className="ml-6 mb-6">
            <div className="text-teal-300 font-bold">{i[0]}</div>
            <div className="text-slate-300">{i[1]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
