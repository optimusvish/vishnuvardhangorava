import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Arsenal from "./Arsenal";
import Stats from "./Stats";
import Projects from "./Projects";
import Footer from "./Footer";

const Content = () => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <AboutMe />
      <Stats />
      <section className="mb-16 md:mb-24">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
          Currently Building
        </h2>

        <div className="rounded border border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-slate-200">
            <a href="https://splashthat.com" target="_blank" rel="noreferrer">
              Splash
            </a>
          </h3>

          <p className="mt-3">
            Event marketing and registration platform helping organizations
            create, manage, and promote events at scale.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Symfony", "React.js", "MySQL", "AWS"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Experience />
      <Projects />
      <Arsenal />
      <Footer />
    </main>
  );
};

export default Content;
