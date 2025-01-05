import Image from "next/image";
import logo from "@/public/logos/short.png";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiInstagram, SiLinkedin } from "@icons-pack/react-simple-icons";
import data from "@/data/config";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#102D39] p-8 text-white">
      <Image src={logo} width={100} alt="DesignVerse Short logo" />
      <div className="flex items-center justify-center gap-4">
        <Link href={`mailto:${data.email}`}>
          <Mail className="text-3xl text-white hover:cursor-pointer lg:text-4xl" />
        </Link>
        <Link href="https://www.instagram.com/designverseucr/">
          <SiInstagram className="text-2xl text-white hover:cursor-pointer lg:text-3xl" />
        </Link>
        <Link href="https://www.linkedin.com/company/designverseucr">
          <SiLinkedin className="text-2xl text-white hover:cursor-pointer lg:text-3xl" />
        </Link>
      </div>
      <div className="">
        Made with&nbsp;{data.heart}
        &nbsp;by the DesignVerse Team 2024
      </div>
    </div>
  );
};

export default Footer;
