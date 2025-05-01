import Admins from "@/components/admin/dashboards/admins";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Admins",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Admins searchParams={searchParams} />;
};

export default Page;
