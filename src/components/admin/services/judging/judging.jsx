"use client";
import Loading from "@/components/loading";
import { Label } from "@/components/ui/label";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Folder, Presentation } from "lucide-react";
import Link from "next/link";

const getSubmissions = async () => {
  const { items } = await api({
    method: "GET",
    url: `/api/submit`,
  });

  return items;
};

const Judging = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getSubmissions"],
    queryFn: async () => await getSubmissions(),
  });

  if (isLoading) return <Loading />;

  return (
    <div className="flex h-full flex-col gap-3 py-4 font-work">
      <Label className="pr-5 text-2xl font-bold">Judging Schedule</Label>

      {data.map(({ project, slides, design, devpost }, index) => (
        <div className="my-3" key={index}>
          <p className="text-2xl font-semibold">
            Team {index + 1}: {project}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={slides}
              className="flex w-fit items-center gap-2 rounded bg-designverse-primary px-3 py-2 text-white hover:scale-110"
              target="_blank"
            >
              Slides
              <Presentation />
            </Link>
            <Link
              href={design}
              className="flex w-fit items-center gap-2 rounded bg-designverse-primary px-3 py-2 text-white hover:scale-110"
              target="_blank"
            >
              Design File
              <Folder />
            </Link>
            <Link
              href={devpost}
              className="flex w-fit items-center gap-2 rounded bg-designverse-primary px-3 py-2 text-white hover:scale-110"
              target="_blank"
            >
              Devpost
              <ExternalLink />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Judging;
