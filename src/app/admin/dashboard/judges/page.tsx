import Judges from "@/components/admin/dashboards/judges";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Judges",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Judges searchParams={searchParams} />;
};

export default Page;
