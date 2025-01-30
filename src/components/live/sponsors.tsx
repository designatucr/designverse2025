import Image from "next/image";
import Link from "next/link";
import Mock from "@/public/mock/mock_andrew.webp";

const sponsorships = [
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
  {
    logo: Mock,
    link: "https://open.spotify.com/track/4LwOrnuxJwR7C5Sw4liY4Z?si=2b1d61dec147420e",
  },
];

const Sponsors = () => {
  return (
    <div className="z-[10] flex h-[70vh] flex-col items-center justify-start bg-[#2C6273]">
      <p className="mt-5 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-5xl">
        SPONSORSHIPS
      </p>

      <div className="grid grid-cols-4 gap-16">
        {sponsorships.map(({ logo, link }, index) => (
          <Link href={link} key={index}>
            <Image
              src={logo}
              alt="Sponsor Logo"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
