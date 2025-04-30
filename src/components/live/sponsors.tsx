import Image from "next/image";
import Link from "next/link";
import Adobe from "@/public/sponsors/adobe.webp";
import Doordash from "@/public/sponsors/doordash.webp";
import Notion from "@/public/sponsors/notion.webp";
import RaisingCanes from "@/public/sponsors/raising_canes.webp";
import Redbull from "@/public/sponsors/redbull.webp";
import Snapchat from "@/public/sponsors/snapchat.webp";
import PureButtons from "@/public/sponsors/purebuttons-logo-blue.webp";
import SchoolofBusiness from "@/public/sponsors/school_of_business.webp";
import ProgressiveGraphics from "@/public/sponsors/progressive.png";

import Fish1 from "@/public/sponsors/fish1.svg";
import Fish2 from "@/public/sponsors/fish2.svg";

const sponsorships = [
  {
    logo: Adobe,
    link: "https://www.adobe.com",
  },
  {
    logo: Doordash,
    link: "https://www.doordash.com",
  },
  {
    logo: Notion,
    link: "https://www.notion.com",
  },
  {
    logo: RaisingCanes,
    link: "https://www.raisingcanes.com/home/",
  },
  {
    logo: Redbull,
    link: "https://www.redbull.com/us-en",
  },
  {
    logo: Snapchat,
    link: "https://www.snapchat.com",
  },
  {
    logo: PureButtons,
    link: "https://www.purebuttons.com",
  },
  {
    logo: SchoolofBusiness,
    link: "https://business.ucr.edu",
  },
  {
    logo: ProgressiveGraphics,
    link: "https://progressive-graphics.com/Progressive_Graphics/shop/home",
  },
];

const Sponsors = () => {
  return (
    <div className="relative z-[10] flex flex-col items-center justify-start bg-hackathon-blue-300 py-[10vh]">
      <p className="mb-8 mt-8 flex font-sora text-4xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        SPONSORS
      </p>
      <div className="flex w-9/12 flex-wrap justify-center gap-16">
        {sponsorships.map(({ logo, link }, index) => (
          <Link href={link} key={index}>
            <Image
              src={logo}
              alt="Sponsor Logo"
              className="aspect-square w-32 rounded-full bg-white hover:scale-110 md:w-48"
              objectFit="contain"
            />
          </Link>
        ))}
      </div>
      <Image
        src={Fish1}
        alt="Fish1"
        className="absolute -bottom-[20%] left-0 w-1/4 blur-[2px] md:w-auto 2xl:bottom-0"
      />
      <Image
        src={Fish2}
        alt="Fish2"
        className="absolute right-6 top-6 w-1/4 blur-[2px] md:w-auto"
      />
    </div>
  );
};

export default Sponsors;
