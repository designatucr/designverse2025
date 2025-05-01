import Sponsors from "@/components/admin/dashboards/sponsors";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Sponsors",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Sponsors searchParams={searchParams} />;
};

export default Page;
