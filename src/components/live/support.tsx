import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Layer1 from "@/public/support/layer_1.svg";
import Image from "next/image";

const support = [
  {
    title: "Become a Mentor",
    description:
      "Have experience leading, using Figma, or coordinating groups? Share your knowledge and become a mentor!",
    form: "Mentor",
    link: "/form/mentor",
  },
  {
    title: "Sponsor Us",
    description:
      "Have a company or brand you want to bring attention to? Sponsor Us to raise Brand awareness and exposure through social media and giveaways!",
    form: "Sponsor",
    link: "/form/sponsor",
  },
  {
    title: "Volunteer Work",
    description:
      "Need experience or just want to help our organization come to life? Volunteer to help the Designathon happen!",
    form: "Volunteer",
    link: "/form/volunteer",
  },
];

const Support = () => {
  return (
    <div className="relative">
      <div className="backdrop-blur-3xl">
        <Image
          src={Layer1}
          alt="Layer"
          className="absolute bottom-full -mb-2 w-full"
        />
      </div>
      <section
        id="support-us"
        className="relative flex h-[100vh] w-full flex-col items-center justify-start bg-[#4495B0] md:h-[190vh] lg:h-[80vh]"
      >
        <p className="mt-5 flex font-sora text-3xl font-bold text-white lg:mb-8 lg:mt-0 lg:text-5xl">
          SUPPORT US
        </p>
        <div className="grid w-8/12 gap-4 font-work lg:grid-cols-3 lg:gap-x-4">
          {support.map(({ title, description, form, link }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between gap-4 text-white"
            >
              <Label className="text-xl font-bold lg:text-3xl">{title}</Label>
              <div className="text-center text-sm lg:text-base">
                {description}
              </div>
              <Button asChild className="w-1/2 rounded-full font-sora">
                <Link href={link} className="flex gap-2">
                  {form} <ExternalLink />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;
