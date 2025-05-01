import Volunteers from "@/components/admin/dashboards/volunteers";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Volunteers",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Volunteers searchParams={searchParams} />;
};

export default Page;
