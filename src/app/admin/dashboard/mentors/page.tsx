import Mentors from "@/components/admin/dashboards/mentors";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Mentors",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Mentors searchParams={searchParams} />;
};

export default Page;
