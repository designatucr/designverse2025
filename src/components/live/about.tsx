const About = () => {
  return (
    <section
      id="about"
      className="flex h-[70vh] w-full items-start justify-center bg-[#51ADD7]"
    >
      <div className="w-10/12">
        <div className="w-1/2 text-white">
          <p className="flex text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
            ABOUT US
          </p>
          <br />
          <p className="w-10/12 text-sm lg:w-full lg:text-base">
            DesignVerse is the first ever 24-hour beginner-friendly
            Design-a-Thon hosted by the University of California, Riverside.
            Designers are challenged to create the interface of an app or
            website through a given prompt, which would then be demoed and
            presented to a panel of industry professionals.
            <br />
            <br />
            At DesignVerse, our goal is to empower our community of students who
            are interested in design-like thinking and provide career
            developmental opportunities through our workshops, mentorship, and
            networking events.
            <br />
            <br />
            We welcome all undergraduate, graduate and high school students for
            a lively weekend filled with creativity, networking, mentorship, and
            more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
