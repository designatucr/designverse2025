import Figma from "@/public/resources/figma.webp";
import Dribble from "@/public/resources/dribble.webp";
import Miro from "@/public/resources/miro.webp";
import Image from "next/image";
import Link from "next/link";
import Castle from "@/public/resources/castle.svg";
import Turtle from "@/public/resources/turtle.svg";
import Bubbles from "@/public/resources/bubbles.svg";
import Layer from "@/public/resources/layer.svg";

const resources = [
  {
    image: Figma,
    link: "https://www.figma.com",
    title: "Figma",
    description:
      "A tool for designing and building prototypes for user interfaces.",
  },
  {
    image: Dribble,
    link: "https://dribbble.com",
    title: "Dribble",
    description:
      "An online platform for designers to find and share inspirations!",
  },
  {
    image: Miro,
    link: "https://www.miro.com",
    title: "Miro",
    description:
      "A remote collaboration tool to build large scale design projects.",
  },
];

const Resources = () => {
  return (
    <div className="relative">
      <section
        id="resources"
        className="flex flex-col items-center justify-start bg-[#3D859D] text-white md:pt-32"
      >
        <p className="flex pb-3 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
          RESOURCES
        </p>
        <div className="grid w-8/12 grid-cols-1 gap-8 font-work lg:grid-cols-3">
          {resources.map(({ link, title, description, image }, index) => (
            <div
              className="flex flex-col items-center justify-center gap-4"
              key={index}
            >
              <Link
                href={link}
                target="_blank"
                className="md:h-2/12 w-2/5 hover:scale-105 hover:cursor-pointer md:w-2/12 lg:w-1/2"
              >
                <Image src={image} className="rounded-full" alt="Resource" />
              </Link>
              <div className="text-xl font-bold md:text-3xl">{title}</div>
              <div className="text-center text-base lg:text-lg">
                {description}
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex w-full items-center justify-center">
          <Image
            src={Bubbles}
            alt="Bubbles"
            className="absolute left-8 top-0 w-1/12 md:w-auto lg:left-20"
          />
          <div className="flex w-full flex-col items-center justify-center pt-20">
            <Image src={Castle} alt="Castle" className="mt-8" />

            <Image
              src={Layer}
              alt="Layer"
              className="left-0 -mt-[18%] w-screen"
            />
          </div>
          <Image
            src={Turtle}
            alt="Turtle"
            className="absolute right-8 top-0 w-1/4 md:w-auto lg:right-20"
          />
        </div>
      </section>
    </div>
  );
};

export default Resources;
