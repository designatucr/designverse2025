import Figma from "@/public/resources/figma.webp";
import Dribble from "@/public/resources/dribble.webp";
import Miro from "@/public/resources/miro.webp";
import Image from "next/image";
import Link from "next/link";

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
    <section
      id="resources"
      className="flex flex-col items-center justify-center bg-[#3D859E] text-white"
    >
      <p className="flex text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
        RESOURCES
      </p>
      <div className="grid w-8/12 grid-cols-1 gap-8 lg:grid-cols-3">
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
  );
};

export default Resources;
