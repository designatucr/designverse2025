import Teams from "@/components/admin/dashboards/teams";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Teams",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Teams searchParams={searchParams} />;
};

export default Page;
