"use client";

import Navigation from "./navigation";
import Landing from "./landing";
import About from "./about";
import Support from "./support";
import Schedule from "./schedule";
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
      <Navigation />
      <Landing />
      <About />
      <Support />
      {/* <Tracks /> */}
      <Schedule />
      <Resources />
      {/* <Sponsors /> */}
      {/* <Judges /> */}
      {/* <Team /> */}
      {/* <Committees /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Live;
