import Figma from "@/public/resources/figma.webp";
import Dribble from "@/public/resources/dribble.webp";
import Miro from "@/public/resources/miro.webp";
import Image from "next/image";
import Link from "next/link";
import Layer1 from "@/public/resources/layer_1.svg";

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
      <Image src={Layer1} alt="Layer" className="absolute bottom-full w-full" />
      <section
        id="resources"
        className="flex h-[110vh] flex-col items-center justify-start bg-[#3D859E] text-white lg:h-[80vh]"
      >
        <p className="flex font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
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
                className="w-2/5 hover:scale-105 hover:cursor-pointer lg:w-1/2"
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
      </section>
    </div>
  );
};

export default Resources;
