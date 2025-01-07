import Logo from "@/public/logos/primary.svg";
import cloud1 from "@/public/resources/cloud1.svg";
import cloud2 from "@/public/resources/cloud2.svg";
import sand1 from "@/public/resources/sand1.svg";
// import CountDown from "./Countdown";
import Image from "next/image";
import Countdown from "./countdown";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Landing = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-designverse-gradients-landing-start via-designverse-gradients-landing-via to-designverse-gradients-landing-end font-work"
    >
      <Image className="absolute right-0 top-0" src={cloud1} alt={cloud1} />
      <Image className="absolute left-0 top-[8vh]" src={cloud2} alt={cloud2} />

      <div className="z-20 flex h-fit w-3/5 flex-col items-center justify-center rounded-3xl bg-[#07374B]/80 p-12 text-white">
        <Image className="-mt-36" src={Logo} alt="Logo" />
        <div className="mt-4 text-2xl font-bold">
          University of California Riverside | May 11 - 12, 2025
        </div>
        <Countdown />
      </div>

      <div className="z-20 flex w-3/5 justify-center gap-3">
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/interest"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            SHOW INTEREST <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/sponsor"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            SPONSOR US <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/mentor"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            BE A MENTOR <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link
            href="/form/volunteer"
            className="flex gap-2 text-xl"
            target="_blank"
          >
            BE A VOLUNTEER <ExternalLink />
          </Link>
        </Button>
      </div>
      <Image
        className="absolute top-[30vh] z-0 w-full"
        src={sand1}
        alt={sand1}
      />
    </section>
  );
};

export default Landing;
