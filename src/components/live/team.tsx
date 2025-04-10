import Image from "next/image";
import Link from "next/link";
import Layer from "@/public/resources/layer.svg";
import Castle from "@/public/resources/castle.svg";
import Seaweed from "@/public/resources/seaweed.svg";
import Layer3 from "@/public/resources/layer_3.svg";
import Coral from "@/public/resources/coral.svg";
import Star from "@/public/resources/star.svg";
import { committees, directors, first, leads } from "@/data/team";

const Team = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center justify-start bg-[#3D859D]"
    >
      <p className="mt-8 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        MEET THE TEAM
      </p>

      <p className="my-8 flex font-sora text-2xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-3xl">
        LEADS
      </p>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {directors.map(({ image, profile, name, position }, index) => (
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

      <div className="my-16 grid grid-cols-1 gap-16 lg:grid-cols-5">
        {first.map(({ image, profile, name, position }, index) => (
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

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
        {leads.map(({ image, profile, name, position }, index) => (
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

      <p className="mb-3 mt-8 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-12 lg:text-3xl">
        COMMITTEE MEMBERS
      </p>

      <div className="grid grid-cols-1 gap-16 text-center text-white md:grid-cols-3">
        {committees.map(({ team, members }, index) => (
          <div key={index}>
            <p className="text-2xl font-bold">{team}</p>
            {members.map((member, i) => (
              <p key={i} className="my-1 text-lg">
                {member}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="relative flex w-full flex-col items-center justify-center pt-20">
        <Image
          src={Castle}
          alt="Castle"
          className="z-20 mt-8 w-7/12 blur-[2px] md:w-auto"
        />
        <Image
          src={Layer3}
          alt="Layer3"
          className="z-10 -mt-[24%] w-screen blur-[2px] md:-mt-[24%]"
        />
        <Image src={Layer} alt="Layer" className="z-30 -mt-[20%] w-screen" />
        <Image
          src={Seaweed}
          alt="Seaweed"
          className="absolute bottom-[18%] right-[7%] w-1/12 blur-[2px] md:bottom-[21%] md:right-[7%] md:w-auto 2xl:bottom-[30%] 2xl:right-[15%]"
        />
        <Image
          src={Coral}
          alt="Coral"
          className="absolute bottom-[17%] left-[3%] z-20 w-2/12 blur-[2px] md:bottom-[20%] md:w-auto 2xl:bottom-[28%]"
        />
        <Image
          src={Star}
          alt="Star"
          className="absolute bottom-[8%] left-[22%] z-40 w-1/12 blur-[2px] md:bottom-[12%] md:left-[24%] md:w-auto 2xl:bottom-[17%] 2xl:left-[31.5%]"
        />
      </div>
    </section>
  );
};

export default Team;
