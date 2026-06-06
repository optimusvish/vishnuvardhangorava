const AboutMe = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About Me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I'm a Senior Software Engineer at Cvent with over 11 years of
          experience building enterprise software, backend platforms, workflow
          systems, and cloud-native applications.
        </p>
        <p className="mb-4">
          Throughout my career, I've worked across the complete software
          development lifecycle, from architecture and development to deployment
          and production support. My focus is on designing reliable,
          maintainable, and scalable systems that solve complex business
          problems.
        </p>
        <p>
          My expertise includes PHP, Laravel, CakePHP, MySQL, Redis, AWS,
          Docker, API design, and distributed systems. I enjoy improving system
          performance, optimizing workflows, and building software that delivers
          measurable business impact.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
