import Resumes from "@/components/admin/dashboards/resumes";
import { SearchParams } from "@/types/dashboard";

export const metadata = {
  title: "Admin | Resumes",
};

type props = {
  searchParams: SearchParams;
};

const Page = ({ searchParams }: props) => {
  return <Resumes searchParams={searchParams} />;
};

export default Page;
