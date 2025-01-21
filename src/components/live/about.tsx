import Image from "next/image";
import Bubble from "@/public/about/bubble.svg";
import Water from "@/public/about/water.svg";
import Light from "@/public/about/light.svg";
import Trident from "@/public/about/trident.svg";
import Layer1 from "@/public/about/layer_1.svg";
import Tubes from "@/public/about/tubes.svg";
import Rock from "@/public/about/rock.svg";
import Seaweed from "@/public/about/seaweed.svg";
import Shell from "@/public/about/shell.svg";
import Coral from "@/public/about/coral.svg";

const About = () => {
  return (
    <div className="relative">
      <Image
        src={Water}
        alt="Water"
        className="absolute top-[-2%] z-0 w-screen md:top-[-50px] lg:top-[-5%]"
      />
      <Image
        src={Bubble}
        alt="Bubble"
        className="absolute left-[80%] top-[12%] h-8 w-8 lg:left-[35%] lg:top-[15%] lg:h-20 lg:w-40"
      />
      <Image src={Light} alt="Light" className="absolute right-0" />
      <Image
        src={Trident}
        alt="Trident"
        className="absolute bottom-[20%] right-[12%]"
      />
      <section
        id="about"
        className="z-20 flex h-[90vh] w-full items-start justify-center bg-gradient-to-b from-[#589fc0] to-[#51ADD7] md:h-[135vh] lg:h-[90vh]"
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

      <Image
        src={Tubes}
        alt="Tubes"
        className="absolute bottom-[5%] left-[25%]"
      />

      <Image
        src={Rock}
        alt="Rock"
        className="absolute bottom-[8%] left-[15%]"
      />

      <Image
        src={Seaweed}
        alt="Seaweed"
        className="absolute bottom-[10%] left-[5%]"
      />

      <Image
        src={Shell}
        alt="Shell"
        className="absolute bottom-[8%] left-[50%]"
      />

      <Image
        src={Coral}
        alt="Coral"
        className="absolute bottom-[10%] left-[60%]"
      />

      <Image
        src={Layer1}
        alt="Layer"
        className="absolute bottom-0 -mb-2 w-full"
      />
    </div>
  );
};

export default About;
