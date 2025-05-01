import Feedback from "@/components/admin/dashboards/feedback";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Feedback",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Feedback searchParams={searchParams} />;
};

export default Page;
