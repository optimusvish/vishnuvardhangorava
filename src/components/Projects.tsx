const systems = [
  [
    "Splash Platform",
    "Event marketing and registration platform focused on helping organizations create, manage, and promote events at scale.",
    "Symfony • React.js • MySQL • AWS",
  ],
  [
    "URL Shortener Platform",
    "Scalable URL shortening platform designed with analytics tracking, Redis caching, rate limiting, and high-performance redirects.",
    "Laravel • Redis • MySQL • Docker",
  ],
  [
    "Pricing Approval Engine",
    "Enterprise workflow platform supporting multi-stage approvals, business validations, audit trails, and pricing governance.",
    "PHP • MySQL • Workflow Automation",
  ],
];
export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
        Featured Systems
      </h2>
      <div className="space-y-6">
        {systems.map((s) => (
          <div
            key={s[0]}
            className="rounded border border-slate-800 p-6 transition duration-300 hover:border-teal-300/30 hover:bg-slate-800/20"
          >
            <h3 className="text-slate-200 font-semibold">{s[0]}</h3>
            <p className="mt-3 text-slate-400">{s[1]}</p>
            <p className="mt-3 text-teal-300">{s[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
