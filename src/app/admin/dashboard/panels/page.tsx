import Panels from "@/components/admin/dashboards/panels";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Panels",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Panels searchParams={searchParams} />;
};

export default Page;
