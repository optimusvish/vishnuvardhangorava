const AboutMe = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About Me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">I'm a Senior Software Engineer with over 11 years of experience building enterprise software, backend systems, workflow platforms, and cloud-based applications.</p>
        <p className="mb-4">My expertise includes PHP, Laravel, CakePHP, MySQL, Redis, AWS, Docker, and modern software engineering practices. I enjoy solving complex business problems, optimizing performance, and designing systems that remain reliable as they scale.</p>
        <p>Recently I've been focusing on system design, distributed systems, cloud architecture, and building scalable products that create real business impact.</p>
      </div>
    </section>
  );
};
export default AboutMe;
