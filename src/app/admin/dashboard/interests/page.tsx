import Interests from "@/components/admin/dashboards/interests";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Interests",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Interests searchParams={searchParams} />;
};

export default Page;
