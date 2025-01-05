import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#35798F] text-white">
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
  );
};

export default FAQ;
