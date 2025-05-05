import Start from "@/components/judging/start";
import ProtectedPage from "@/components/protected";

interface props {
  params: {
    id: string;
  };
}

export const metadata = {
  title: "Judge | Round",
};

const Page = ({ params }: props) => {
  const { id } = params;

  return (
    <ProtectedPage restrictions={{}}>
      <Start id={id} />
    </ProtectedPage>
  );
};

export default Page;
