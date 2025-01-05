"use client";
import Tabs from "./tabs";
import Loading from "@/components/loading";

import Charts from "./charts";
import { getStats } from "./actions";
import { useQuery } from "@tanstack/react-query";
import ChartLegend from "@/components/admin/services/statistics/legend";
import { Label } from "@/components/ui/label";
const Statistics = () => {
  const { data: counts } = useQuery({
    queryKey: ["/admin/statistics"],
    queryFn: async () => getStats(),
  });

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <Label className="pr-5 text-2xl font-bold">Statistics</Label>
      {!counts ? (
        <Loading />
      ) : (
        <div className="mt-4">
          <Label className="hidden pl-5 text-xl font-bold lg:block">
            Registrations
          </Label>
          <Tabs events={counts.events} />
          <Label className="hidden pl-5 text-xl font-bold lg:block">
            Attendance
          </Label>
          <ChartLegend />
          <Charts counts={counts.users} />
        </div>
      )}
    </div>
  );
};

export default Statistics;
