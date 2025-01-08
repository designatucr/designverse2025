"use client";
import { TAGS, COLUMNS, DROPDOWN } from "@/data/admin/admins";
import { STATUSES } from "@/data/statuses";
import Table from "./dashboard/dashboard";
import { SearchParams } from "@/types/dashboard";

type props = {
  searchParams: SearchParams;
};

const Admin = ({ searchParams }: props) => {
  return (
    <div className="font-poppins flex h-full flex-col gap-3 py-4">
      <Table
        searchParams={searchParams}
        title="Admins"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Admin;
