"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Pencil, UserRoundX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { api } from "@/utils/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "@/components/loading";
import Confirm from "./confirm";
import { Round } from "@/types/rounds";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import toaster from "@/utils/toaster";

type TeamUpdateType = {
  uid: string;
  round: number;
};
const Dashboard = () => {
  const queryClient = useQueryClient();
  const [unavailable, setUnavailable] = useState<TeamUpdateType | null>(null);

  const fetchRounds = async () => {
    const { items } = await api({ url: "/api/judging/start", method: "GET" });
    return items;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["rounds"],
    queryFn: fetchRounds,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: (body: TeamUpdateType) =>
      api({
        method: "POST",
        url: "/api/judging/start",
        body,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rounds"] });
      toaster(`Round updated`, "success");
    },
    onError: (error) => {
      toaster(`Error updating round! ${error}`, "error");
    },
  });

  const handleUpdate = () => {
    mutation.mutate(unavailable!);

    setUnavailable(null);
  };
  if (isLoading) return <Loading />;
  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-[#E7E7E7]">
      <div className="w-full">
        <Label className="mb-8 flex w-full justify-between rounded-t-xl bg-hackathon-blue-100 px-4 py-4 text-xl font-semibold text-white">
          <p>JUDGING</p>
          <p>ALL FEEDBACK</p>
        </Label>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-xl border-black/20 bg-hackathon-primary text-white"
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
                  <div className="min-w-0 flex-1">
                    <AccordionTrigger
                      hidden
                      className="block min-w-0 flex-1 truncate text-left hover:no-underline"
                    >
                      R{index + 1} - {name}
                    </AccordionTrigger>
                  </div>
                  <div className="flex flex-row gap-3">
                    <Badge className="whitespace-nowrap">{table}</Badge>
                    <Badge
                      className="cursor-pointer whitespace-nowrap"
                      onClick={() =>
                        setUnavailable({ uid: current.uid, round: index })
                      }
                    >
                      <UserRoundX size={20} />
                    </Badge>
                    <Link
                      href={`/judge/start/${round[0]?.uid}?name=${name}&round=${index + 1}&table=${table}`}
                      className="text-md flex flex-row items-center justify-between gap-2 rounded-md bg-hackathon-tags-gray-bg px-2 py-1 text-black"
                    >
                      <Pencil size={20} />
                    </Link>
                  </div>
                </div>
                <AccordionContent className="flex flex-col gap-4 bg-white p-2 text-black">
                  {(["implementation", "idea", "design"] as const).map(
                    (key) => (
                      <div key={key} className="mt-4">
                        <div className="flex justify-between text-lg font-bold text-hackathon-green-300">
                          <span>{key.toUpperCase()}</span>
                          <Badge type="purple">
                            {current.feedback?.[key]?.rating ?? 0}/5
                          </Badge>
                        </div>
                        <p className="text-black/70">
                          {current.feedback?.[key]?.comment || "No response"}
                        </p>
                      </div>
                    ),
                  )}
                  <div className="text-md flex items-center justify-between font-semibold text-black">
                    <span>TOTAL</span>
                    <Badge type="gray">
                      {(["implementation", "idea", "design"] as const).reduce(
                        (total, key) =>
                          total + (current.feedback?.[key]?.rating ?? 0),
                        0,
                      )}
                      /15
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <AlertDialog open={unavailable ? true : false}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Is the team not available?</AlertDialogTitle>
            <AlertDialogDescription>
              This will direct you to the next available team.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setUnavailable(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={handleUpdate}>Confirm</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Confirm />
    </div>
  );
};
export default Dashboard;
