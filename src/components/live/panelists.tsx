import Image from "next/image";
import Wesley from "@/public/panelists/wesley.jpeg";
import Jamie from "@/public/panelists/jamie.jpeg";
import George from "@/public/panelists/george.jpeg";
import Anastasia from "@/public/panelists/anastasia.png";
import Kashif from "@/public/panelists/kashif.jpeg";

const panels = [
  {
    image: Wesley,
    name: "Wesley Hong",
    position: "Starbucks",
  },
  {
    image: Jamie,
    name: "Jamie Sun",
    position: "Saatchi & Saatchi",
  },
  {
    image: George,
    name: "George Vasquez",
    position: "Freelance",
  },
  {
    image: Anastasia,
    name: "Anastasia Dvorzhanska",
    position: "Living Spaces",
  },
  {
    image: Kashif,
    name: "Kashif Ross",
    position: "ex-Hagerty",
  },
];

const Panelists = () => {
  return (
    <section
      id="panelists"
      className="flex flex-col items-center justify-start bg-[#3D859D]"
    >
      <p className="mt-8 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        PANELISTS
      </p>

      <div className="grid w-11/12 grid-cols-1 gap-16 lg:grid-cols-5">
        {panels.map(({ image, name, position }, index) => (
          <div key={index} className="text-center">
            <Image
              src={image}
              alt="Judge Picture"
              width={200}
              height={200}
              className="aspect-square rounded-full"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Panelists;
