"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading";

type Round = { name: string; affiliation: string; uid: "string" };
const Dashboard = () => {
  const fetchRounds = async () => {
    const { items } = await api({ url: "/api/judging/start", method: "GET" });
    return items;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["rounds"],
    queryFn: fetchRounds,
  });

  if (isLoading) return <Loading />;
  return (
    <div className="w-full">
      <Label className="pr-5 text-2xl font-bold">Judging</Label>
      <Accordion
        type="single"
        collapsible
        className="w-full rounded-md border-black/20 bg-hackathon-blue-200 text-white"
      >
        {data.rounds.map((round: Round[], index: number) => {
          const current = round[0];
          if (!current)
            return (
              <AccordionItem
                value={`empty-${index}`}
                key={index}
                className="w-full bg-hackathon-gray-200 p-2"
              >
                R{index + 1} - No Team
              </AccordionItem>
            );
          const team = current.name.split(":");
          const table = Number(team[0]);
          const name = team[1];
          return (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="w-full"
            >
              <div className="text-md flex w-full flex-row items-center justify-between px-2 text-left">
                <AccordionTrigger hidden className="wrap text-left">
                  R{index + 1} - {name}
                </AccordionTrigger>
                <div className="flex shrink-0 flex-row gap-2">
                  <Badge className="whitespace-nowrap">{table}</Badge>
                  <Link
                    href={`/judge/start/${round[0]?.uid}`}
                    className="text-md flex flex-row items-center justify-between gap-2 rounded-md bg-hackathon-tags-gray-bg px-2 py-1 text-black"
                  >
                    <Pencil size={20} />
                  </Link>
                </div>
              </div>
              <AccordionContent className="bg-white p-2 text-black">
                <div className="flex flex-row justify-between text-2xl text-hackathon-blue-100">
                  <div className="font-bold">IMPLEMENTATION</div>
                  <Badge type="accept">4/5</Badge>
                </div>
                <div>
                  <div className="text-lg font-bold">
                    Describe the complexity of the project.
                  </div>
                  <div className="text-black/50">
                    The technical execution of this project was pretty good!
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Dashboard;
