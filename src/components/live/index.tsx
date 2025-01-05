import Landing from "./landing";
import About from "./about";
import Support from "./support";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
// import Sponsors from "./sponsors";
// import Team from "./team";
// import Committees from "./committees";
// import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Resources from "./resources";

const Live = () => {
  return (
    <>
      <Landing />
      <About />
      <Support />
      <Resources />
      {/* <Tracks /> */}
      {/* <Schedule /> */}
      {/* <Sponsors /> */}
      {/* <Team /> */}
      {/* <Committees /> */}
      {/* <Judges /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Live;
