import AboutMe from "./AboutMe";
import Experience from "./Experience";
// import Projects from "./Projects";
import Footer from "./Footer";

const Content = () => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <AboutMe />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </main>
  );
};

export default Content;
