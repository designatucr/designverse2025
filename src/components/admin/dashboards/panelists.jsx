"use client";
import { TAGS, COLUMNS } from "@/data/admin/panelists";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";

const Panelists = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Panelists"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Panelists;
