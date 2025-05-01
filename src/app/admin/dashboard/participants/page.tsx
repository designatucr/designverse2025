import Participants from "@/components/admin/dashboards/participants";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Participants",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Participants searchParams={searchParams} />;
};

export default Page;
