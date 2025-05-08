import Image from "next/image";
import Wesley from "@/public/panelists/wesley.webp";
import Jamie from "@/public/panelists/jamie.webp";
import George from "@/public/panelists/george.webp";
import Anastasia from "@/public/panelists/anastasia.webp";
import Kashif from "@/public/panelists/kashif.webp";
import Link from "next/link";

const first = [
  {
    image: Wesley,
    name: "Wesley Hong",
    position: "UX @ Starbucks",
    profile: "https://www.linkedin.com/in/wesleyhong92/",
  },
  {
    image: Jamie,
    name: "Jamie Sun",
    position: "Senior Product Designer @ Saatchi & Saatchi",
    profile: "https://www.linkedin.com/in/jamieindesign/",
  },
  {
    image: George,
    name: "George Vasquez",
    position: "UIUX @ BrokerBotics",
    profile: "https://www.linkedin.com/in/georgeivanvasquez/",
  },
];

const second = [
  {
    image: Anastasia,
    name: "Anastasia Dvorzhanska",
    position: "UI @ Living Spaces",
    profile: "https://www.linkedin.com/in/anastasia-dvorzhanska/",
  },
  {
    image: Kashif,
    name: "Kashif Ross",
    position: "ex-Hagerty",
    profile: "https://www.linkedin.com/in/kashifross/",
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

      <div className="grid w-9/12 grid-cols-1 gap-16 lg:grid-cols-3">
        {first.map(({ image, name, profile, position }, index) => (
          <Link
            href={profile}
            key={index}
            target="_blank"
            className="flex flex-col items-center justify-center text-center"
          >
            <Image
              src={image}
              alt="Judge Picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-2">
        {second.map(({ image, profile, name, position }, index) => (
          <Link
            href={profile}
            key={index}
            target="_blank"
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="Lead picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
            <p className="mt-3 text-xl font-semibold text-white">{position}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Panelists;
