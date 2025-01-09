import Image from "next/image";
import Bubble from "@/public/about/bubble1.svg";
import Bubble2 from "@/public/about/bubble2.svg";
import Water from "@/public/about/water.svg";
import Light from "@/public/about/light.svg";

const About = () => {
  return (
    <div className="relative">
      <Image
        src={Water}
        alt="Water"
        className="absolute top-[-2%] z-0 w-screen md:top-[-50px] lg:top-[-5%]"
      />
      <Image
        src={Bubble2}
        alt="Bubble"
        className="absolute left-[50%] top-[10%] h-4 w-4 lg:left-[33%] lg:top-[17%] lg:h-8 lg:w-8"
      />
      <Image
        src={Bubble}
        alt="Bubble"
        className="absolute left-[55%] top-[12%] h-8 w-8 lg:left-[35%] lg:top-[20%] lg:h-14 lg:w-14"
      />
      <Image src={Light} alt="Light" className="absolute right-0" />
      <section
        id="about"
        className="z-20 flex h-[75vh] w-full items-start justify-center bg-gradient-to-b from-[#589fc0] to-[#51ADD7] md:h-[130vh] lg:h-[105vh]"
      >
        <div className="z-10 w-10/12 pt-[10vh] lg:pt-[20vh]">
          <div className="w-full pl-[4vw] text-white lg:w-1/2">
            <p className="flex font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
              ABOUT US
            </p>
            <br />
            <p className="w-10/12 font-work text-sm lg:w-full lg:text-base">
              DesignVerse is the first ever 24-hour beginner-friendly
              Design-a-Thon hosted by the University of California, Riverside.
              Designers are challenged to create the interface of an app or
              website through a given prompt, which would then be demoed and
              presented to a panel of industry professionals.
              <br />
              <br />
              At DesignVerse, our goal is to empower our community of students
              who are interested in design-like thinking and provide career
              developmental opportunities through our workshops, mentorship, and
              networking events.
              <br />
              <br />
              We welcome all undergraduate, graduate and high school students
              for a lively weekend filled with creativity, networking,
              mentorship, and more!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
