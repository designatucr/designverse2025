import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
import Image from "next/image";
import Layer1 from "@/public/faq/layer_1.svg";
import Layer2 from "@/public/faq/layer_2.svg";

const FAQ = () => {
  return (
    <div className="relative">
      <Image src={Layer1} alt="Layer" className="absolute bottom-full w-full" />
      <Image src={Layer2} alt="Layer" className="absolute bottom-full w-full" />

      <div className="flex h-[200vh] w-full flex-col items-center bg-[#35798F] text-white">
        <p className="flex text-3xl font-bold text-white lg:mb-8 lg:text-5xl">
          FAQ
        </p>
        <Accordion type="single" collapsible className="w-8/12">
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
