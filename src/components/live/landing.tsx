import Logo from "@/public/logos/primary.svg";
import cloud1 from "@/public/resources/cloud1.svg";
import cloud2 from "@/public/resources/cloud2.svg";
import sand1 from "@/public/resources/sand1.svg";
import Image from "next/image";
import Countdown from "./countdown";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const Landing = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-designverse-gradients-landing-start via-designverse-gradients-landing-via to-designverse-gradients-landing-end font-work md:min-h-[170vh] lg:min-h-screen"
    >
      <Image
        className="absolute right-0 top-0 w-1/2 lg:w-fit"
        src={cloud1}
        alt={cloud1}
      />
      <Image
        className="absolute left-0 top-[8vh] w-1/4 lg:w-fit"
        src={cloud2}
        alt={cloud2}
      />

      <div className="z-20 mt-24 flex w-11/12 flex-col items-center justify-center rounded-3xl bg-[#07374B]/80 py-4 text-white lg:w-3/5 lg:p-6">
        <Image
          className="-mt-40 md:-mt-32 md:h-1/2 md:w-1/2 lg:-mt-36"
          src={Logo}
          alt="Logo"
        />
        <div className="text-md mt-4 flex flex-col items-center justify-center text-center font-bold lg:text-2xl">
          <p className="flex items-center gap-1 text-lg lg:text-2xl">
            <MapPin size={24} /> University of California Riverside{" "}
          </p>
          <p className="flex items-center gap-1 text-sm lg:text-lg">
            <Calendar size={20} /> May 10 - 11, 2025
          </p>
        </div>
        <Countdown />
      </div>

      <div className="z-20 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/sponsor"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            SPONSOR <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/mentor"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            MENTOR <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/volunteer"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            VOLUNTEER <ExternalLink />
          </Link>
        </Button>
        <Button
          asChild
          className="sm:cols-span-3 sm:col-start-2 sm:grid-cols-subgrid rounded-full bg-[#406F82] px-8 py-6"
        >
          <Link
            href="/form/participant"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            APPLY NOW !
          </Link>
        </Button>
      </div>

      <Image
        className="absolute top-[43vh] z-0 min-h-full w-full lg:top-[15vh] lg:h-fit"
        src={sand1}
        alt="sand1"
      />
    </section>
  );
};

export default Landing;
