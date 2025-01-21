import Image from "next/image";
import logo from "@/public/logos/short.webp";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  SiInstagram,
  SiLinkedin,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import data from "@/data/config";
import Layer1 from "@/public/footer/layer_1.svg";
import Fish1 from "@/public/footer/fish1.svg";
import Fish2 from "@/public/footer/fish2.svg";
import Fish3 from "@/public/footer/fish3.svg";

const Footer = () => {
  return (
    <div className="relative lg:mt-[15vh]">
      <Image
        src={Fish1}
        alt="Fish1"
        className="absolute bottom-[200%] left-8 lg:bottom-[475%] lg:left-20"
      />
      <Image
        src={Fish2}
        alt="Fish2"
        className="absolute bottom-[250%] left-[60%] md:left-[80%] lg:bottom-[425%] lg:left-[30%]"
      />
      <Image
        src={Fish3}
        alt="Fish3"
        className="absolute bottom-[300%] lg:bottom-[450%] lg:right-[10%]"
      />

      <Image
        src={Layer1}
        alt="Layer"
        className="absolute bottom-[95%] w-full blur-[2px]"
      />

      <div className="flex flex-col items-center justify-center gap-4 bg-[#081c28] p-8 text-white">
        <Image src={logo} width={100} alt="DesignVerse Short logo" />
        <div className="flex items-center justify-center gap-4">
          <Link href={`mailto:${data.email}`}>
            <Mail className="text-3xl text-white hover:scale-125 hover:cursor-pointer lg:text-4xl" />
          </Link>
          <Link href={data.instagram}>
            <SiInstagram className="text-2xl text-white hover:scale-125 hover:cursor-pointer lg:text-3xl" />
          </Link>
          <Link href={data.linkedin}>
            <SiLinkedin className="text-2xl text-white hover:scale-125 hover:cursor-pointer lg:text-3xl" />
          </Link>
          <Link href="https://www.tiktok.com/@designverseucr">
            <SiTiktok className="text-2xl text-white hover:scale-125 hover:cursor-pointer lg:text-3xl" />
          </Link>
        </div>
        <div className="font-work">
          Made with&nbsp;{data.heart}
          &nbsp;by the DesignVerse Team 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
