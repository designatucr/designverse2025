"use client";
import { TAGS, COLUMNS } from "@/data/admin/interests";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";

const Interests = ({ searchParams }) => {
  return (
    <div className="font-poppins flex h-full flex-col gap-3 py-4">
      <Table
        searchParams={searchParams}
        title="Interests"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
      />
    </div>
  );
};
export default Interests;
