import Image from "next/image";
import Link from "next/link";
import Adobe from "@/public/sponsors/adobe.webp";
import Doordash from "@/public/sponsors/doordash.webp";
import Notion from "@/public/sponsors/notion.webp";
import RaisingCanes from "@/public/sponsors/raising_canes.webp";
import Redbull from "@/public/sponsors/redbull.webp";
import Snapchat from "@/public/sponsors/snapchat.webp";
import fish1 from "@/public/sponsors/fish1.svg";
import fish2 from "@/public/sponsors/fish2.svg";

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
];

const Sponsors = () => {
  return (
    <div className="relative z-[10] flex h-[70vh] flex-col items-center justify-start bg-hackathon-blue-300">
      <p className="mt-8 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        SPONSORS
      </p>
      <div className="flex w-9/12 flex-wrap justify-center gap-16">
        {sponsorships.map(({ logo, link }, index) => (
          <Link href={link} key={index}>
            <Image
              src={logo}
              alt="Sponsor Logo"
              width={200}
              height={200}
              className="aspect-square rounded-full bg-white hover:scale-110"
              objectFit="contain"
            />
          </Link>
        ))}
      </div>
      <Image
        src={fish1}
        alt="fish1"
        className="absolute bottom-0 left-0 blur-[2px]"
      />
      <Image
        src={fish2}
        alt="fish2"
        className="absolute right-6 top-6 blur-[2px]"
      />
    </div>
  );
};

export default Sponsors;
