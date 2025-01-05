import ProtectedPage from "@/components/protected";
import Team from "@/components/user/team/team";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Team"
      restrictions={{
        participants: [1],
      }}
    >
      <Team />
    </ProtectedPage>
  );
};

export default Page;
