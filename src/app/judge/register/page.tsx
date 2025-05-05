import Judge from "@/components/form/judge";
import ProtectedPage from "@/components/protected";

export const metadata = {
  title: "Judge | Register",
};

const Page = () => {
  return (
    <ProtectedPage restrictions={{}}>
      <Judge />
    </ProtectedPage>
  );
};

export default Page;
