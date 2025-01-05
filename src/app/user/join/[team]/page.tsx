import ProtectedPage from "@/components/protected";
import Join from "@/components/user/join";

type props = {
  params: { team: string };
};

const Page = ({ params }: props) => {
  return (
    <ProtectedPage
      title="User | Join"
      restrictions={{
        participants: [1],
      }}
    >
      <Join params={params} />
    </ProtectedPage>
  );
};

export default Page;
