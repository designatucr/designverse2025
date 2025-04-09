"use client";

import Navigation from "./navigation";
import Landing from "./landing";
import About from "./about";
import Support from "./support";
import Schedule from "./schedule";
import Tracks from "./tracks";
// import Sponsors from "./sponsors";
import Team from "./team";
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
      <Tracks />
      <Schedule />
      <Resources />
      {/* <Sponsors /> */}
      {/* <Judges /> */}
      <Team />
      <FAQ />
      <Footer />
    </>
  );
};

export default Live;
