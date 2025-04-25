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
    <section id="faq" className="relative bg-[#35798F] pb-[40%]">
      <Image
        src={Angelfish}
        alt="Angelfish"
        className="absolute -top-[2%] right-8 z-50 w-2/12 blur-[2px] md:top-0 md:w-auto lg:right-20"
      />

      <Image
        src={Stingray}
        alt="Stingray"
        className="absolute -top-[1%] left-8 w-1/6 blur-[2px] md:top-0 md:w-auto lg:left-20"
      />

      <div className="flex w-full flex-col items-center bg-[#35798F] pb-96 text-white">
        <p className="flex pb-2.5 font-sora text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
          FAQ
        </p>
        <Accordion type="single" collapsible className="z-10 w-8/12 font-work">
          {QUESTIONS.map(({ question, answer }, index) => (
            <AccordionItem value={question} key={index}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
