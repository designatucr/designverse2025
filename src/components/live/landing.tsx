import Logo from "@/public/logos/primary.png";
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
      className="from-designverse-gradients-landing-start via-designverse-gradients-landing-via to-designverse-gradients-landing-end relative flex h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b"
    >
      <div className="flex h-fit w-3/5 flex-col items-center justify-center rounded-3xl bg-[#07374B]/80 p-12 text-white">
        <Image className="-mt-36" src={Logo} alt="Logo" />
        <div className="mt-4 text-2xl">
          University of California Riverside | May 11 - 12, 2025
        </div>
        <Countdown />
      </div>

      <div className="flex w-3/5 justify-center gap-3">
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link href="/form/interest" className="flex gap-2" target="_blank">
            Show Interest <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link href="/form/sponsor" className="flex gap-2" target="_blank">
            Sponsor <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link href="/form/mentor" className="flex gap-2" target="_blank">
            Be a Mentor <ExternalLink />
          </Link>
        </Button>
        <Button asChild className="rounded-full bg-[#4B8AC3] px-8">
          <Link href="/form/volunteer" className="flex gap-2" target="_blank">
            Be a Volunteer <ExternalLink />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Landing;
