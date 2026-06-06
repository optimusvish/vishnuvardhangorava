const Projects = () => {
return (
<section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
<h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">Featured Systems</h2>
<div className="space-y-8">
<div><h3 className="text-slate-200 font-medium">URL Shortener Platform</h3><p>Scalable URL shortening service featuring Redis caching, analytics, rate limiting and Docker deployment.</p></div>
<div><h3 className="text-slate-200 font-medium">Pricing Approval Engine</h3><p>Enterprise workflow system handling pricing approvals, validations and business processes.</p></div>
<div><h3 className="text-slate-200 font-medium">Loadout Settlement Platform</h3><p>Transaction settlement workflow focused on financial accuracy, data integrity and operational efficiency.</p></div>
<div><h3 className="text-slate-200 font-medium">Cleaning Services Platform</h3><p>Modern lead-generation website with SEO optimization and cloud deployment.</p></div>
</div>
</section>);
};
export default Projects;