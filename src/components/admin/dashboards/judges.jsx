"use client";
import { TAGS, COLUMNS } from "@/data/admin/judges";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";

const Judges = ({ searchParams }) => {
  return (
    <div className="font-poppins flex h-full flex-col gap-3 py-4">
      <Table
        searchParams={searchParams}
        title="Judges"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Judges;
