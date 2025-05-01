import Committees from "@/components/admin/dashboards/committees";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Committees",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Committees searchParams={searchParams} />;
};

export default Page;
