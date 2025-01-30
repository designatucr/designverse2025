import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Image from "next/image";
import Bubbles from "@/public/support/bubbles.svg";
import School from "@/public/support/school.svg";
import Layer from "@/public/support/layer.svg";
import Shark from "@/public/support/shark.svg";
import Column from "@/public/support/column.svg";

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
      <section
        id="support-us"
        className="relative flex min-h-[115vh] w-full flex-col items-center justify-start bg-[#3D8AA3] pt-5 md:min-h-[190vh] lg:min-h-[60vh] 2xl:min-h-[40vh]"
      >
        <div className="-mb-10 flex w-11/12 items-center justify-between md:w-8/12">
          <Image src={Bubbles} alt="Bubbles" />
          <Image src={School} alt="School" className="w-1/2 md:w-auto" />
        </div>

        <p className="mb-10 flex font-sora text-3xl font-bold text-white lg:text-5xl">
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

      <Image
        src={Column}
        alt="Column"
        className="absolute bottom-[1%] left-12 w-1/6 blur-[2px] md:w-auto lg:bottom-[16%] lg:left-[10%]"
      />

      <Image
        src={Shark}
        alt="Shark"
        className="absolute bottom-[5%] right-12 -z-20 w-1/4 blur-[2px] md:bottom-[30%] md:w-auto lg:right-[10%]"
      />
      <Image src={Layer} alt="Layer" className="-mb-2 w-full bg-[#3D8AA3]" />
    </div>
  );
};

export default Support;
