import Image from "next/image";
import Bubble from "@/public/about/bubble.svg";
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
        src={Bubble}
        alt="Bubble"
        className="absolute left-[65%] top-[8%] h-20 w-20 lg:left-[35%] lg:top-[19%] lg:h-20 lg:w-40"
      />
      <Image src={Light} alt="Light" className="absolute right-0" />
      <Image
        src={Trident}
        alt="Trident"
        className="absolute bottom-0.5 right-[5%] w-1/5 blur-[3px] xl:bottom-[10%] xl:right-[12%] xl:w-auto"
      />
      <section
        id="about"
        className="z-20 w-full items-start justify-center bg-gradient-to-b from-[#589fc0] to-[#51ADD7] py-32 md:py-96"
      >
        <div className="z-10 w-10/12">
          <div className="-mt-3 w-full pl-[8vw] text-white lg:w-1/2">
            <p className="flex font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
              ABOUT US
            </p>
            <br />
            <p className="w-10/12 font-work text-sm lg:w-full lg:text-base">
              DesignVerse is the first and only 24-hour beginner-friendly
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
        className="absolute bottom-[0%] left-[35%] w-1/12 blur-[2px] xl:bottom-[2%] xl:left-[30%] xl:w-auto"
      />

      <Image
        src={Rock}
        alt="Rock"
        className="absolute bottom-[1%] left-[15%] w-12 blur-[2px] lg:w-auto xl:bottom-[4%] xl:left-[15%]"
      />

      <Image
        src={Seaweed}
        alt="Seaweed"
        className="absolute bottom-[7%] left-[3%] w-1/12 rotate-45 blur-[2px] lg:w-auto xl:bottom-[5%] xl:left-[5%] xl:rotate-0"
      />

      <Image
        src={Shell}
        alt="Shell"
        className="absolute bottom-[1%] left-[50%] w-1/12 blur-[2px] md:w-auto xl:bottom-[5%]"
      />

      <Image
        src={Coral}
        alt="Coral"
        className="absolute bottom-[2%] left-[65%] w-12 blur-[2px] md:w-1/5 xl:bottom-[7%] xl:left-[60%] xl:w-auto"
      />
      <Image
        src={Layer1}
        alt="Layer"
        className="absolute bottom-0 -mb-2 w-full blur-[2px]"
      />
    </div>
  );
};

export default About;
