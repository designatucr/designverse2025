import Image from "next/image";
import Link from "next/link";
import Layer from "@/public/resources/layer.svg";
import Castle from "@/public/resources/castle.svg";
import { committees, directors, first, leads } from "@/data/team";

const Team = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center justify-start bg-[#3D859D]"
    >
      <p className="mt-5 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-32 lg:text-5xl">
        MEET THE TEAM
      </p>

      <p className="mt-5 flex font-sora text-xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-3xl">
        LEADS
      </p>

      <div className="grid grid-cols-2 gap-16">
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

      <div className="my-16 grid w-11/12 grid-cols-5 gap-16">
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

      <div className="grid grid-cols-4 gap-16">
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

      <p className="mt-5 flex font-sora text-xl font-bold text-white lg:mb-8 lg:mt-12 lg:text-3xl">
        COMMITTEE MEMBERS
      </p>

      <div className="gap- grid grid-cols-3 gap-16 text-center text-white">
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

      <div className="flex w-full flex-col items-center justify-center pt-20">
        <Image src={Castle} alt="Castle" className="mt-8" />

        <Image src={Layer} alt="Layer" className="left-0 -mt-[18%] w-screen" />
      </div>
    </section>
  );
};

export default Team;
