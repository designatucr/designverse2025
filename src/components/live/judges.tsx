import Image from "next/image";
import Link from "next/link";
import Mike from "@/public/judges/mike.webp";
import Hara from "@/public/judges/hara.webp";
import Jerry from "@/public/judges/jerry.webp";
import George from "@/public/panelists/george.webp";
import Jamie from "@/public/panelists/jamie.webp";
import Aaron from "@/public/judges/aaron.jpg";

const judges = [
  {
    image: Mike,
    profile: "https://www.linkedin.com/in/qihang-zhang-mike/",
    name: "Mike Zhang",
    position: "Senior Product Designer @ Chartmetric",
  },
  {
    image: Hara,
    profile: "https://www.linkedin.com/in/harayum97/",
    name: "Hara Yum",
    position: "Product Designer @ Carvana",
  },
  {
    image: Jerry,
    profile: "https://www.linkedin.com/in/jerosino/",
    name: "Jerry Sinocruz",
    position: "Staff Product Researcher @ Snap",
  },
  {
    image: George,
    profile: "https://www.linkedin.com/in/georgeivanvasquez/",
    name: "George Vasquez",
    position: "Freelance",
  },
  {
    image: Jamie,
    name: "Jamie Sun",
    position: "Senior Product Designer @ Saatchi & Saatchi",
    profile: "https://www.linkedin.com/in/jamieindesign/",
  },
  {
    image: Aaron,
    name: "Aaron Guhin",
    position: "UX @ Esri",
    profile: "https://www.linkedin.com/in/aaron-guhin/",
  },
];

const Judges = () => {
  return (
    <section
      id="judges"
      className="flex flex-col items-center justify-start bg-[#3D859D]"
    >
      <p className="mt-8 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        JUDGES
      </p>

      <div className="grid w-11/12 grid-cols-1 gap-16 lg:grid-cols-3">
        {judges.map(({ image, profile, name, position }, index) => (
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
    </section>
  );
};

export default Judges;
