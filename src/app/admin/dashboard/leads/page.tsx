import Leads from "@/components/admin/dashboards/leads";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Leads",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Leads searchParams={searchParams} />;
};

export default Page;
