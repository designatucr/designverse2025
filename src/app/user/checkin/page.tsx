import ProtectedPage from "@/components/protected";
import CheckinPage from "@/components/user/checkIn";

const Page: React.FC = () => {
  return (
    <ProtectedPage
      title="User | CheckIn"
      restrictions={{
        participants: [-1, 0, 1],
      }}
    >
      <CheckinPage />
    </ProtectedPage>
  );
};

export default Page;
