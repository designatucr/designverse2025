import Image from "next/image";
import Link from "next/link";
import Mock from "@/public/mock/mock_stanley.webp";

const judges = [
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
  {
    image: Mock,
    profile:
      "https://open.spotify.com/track/2M2ghHSmrQrIJxAA8ElptH?si=30657c93f4594b9a",
    name: "Stanley Lew",
  },
];

const Judges = () => {
  return (
    <div className="z-[10] flex h-[80vh] flex-col items-center justify-start bg-[#2C6273]">
      <p className="mt-5 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-5xl">
        JUDGES
      </p>

      <div className="grid grid-cols-4 gap-16">
        {judges.map(({ image, profile, name }, index) => (
          <Link
            href={profile}
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="Judge picture"
              width={200}
              height={200}
              className="aspect-square rounded-full hover:scale-110"
            />
            <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Judges;
