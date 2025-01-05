"use client";
import { TAGS, COLUMNS } from "@/data/admin/teams";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";

const Teams = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Table
        searchParams={searchParams}
        title="Teams"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Teams;
