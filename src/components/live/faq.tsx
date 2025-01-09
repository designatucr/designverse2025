import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import Image from "next/image";
import Layer1 from "@/public/faq/layer_1.svg";

const FAQ = () => {
  return (
    <div className="relative">
      <Image src={Layer1} alt="Layer" className="absolute bottom-full w-full" />

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
