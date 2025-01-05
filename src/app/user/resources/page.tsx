import ProtectedPage from "@/components/protected";
import Resources from "@/components/user/resources/resources";

const Page = () => {
  return (
    <ProtectedPage
      title="User | Resources"
      restrictions={{
        participants: [1],
      }}
    >
      <Resources />
    </ProtectedPage>
  );
};

export default Page;
