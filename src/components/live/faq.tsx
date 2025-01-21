import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import Image from "next/image";
import Angelfish from "@/public/faq/angelfish.svg";
import Stingray from "@/public/faq/stingray.svg";

const FAQ = () => {
  return (
    <div className="relative">
      <Image
        src={Angelfish}
        alt="Angelfish"
        className="absolute right-8 top-0 lg:right-20"
      />

      <Image
        src={Stingray}
        alt="Stingray"
        className="absolute left-8 top-0 lg:left-20"
      />

      <div className="flex h-[200vh] w-full flex-col items-center bg-[#35798F] text-white md:h-[325vh] lg:h-[200vh]">
        <p className="flex font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
          FAQ
        </p>
        <Accordion type="single" collapsible className="w-8/12 font-work">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem value={question} key={index}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
