import ProtectedPage from "@/components/protected";
import Find from "@/components/user/find";

interface Restrictions {
  participants: number[];
}

const Page: React.FC = () => {
  const restrictions: Restrictions = {
    participants: [1, 0, -1],
  };

  return (
    <ProtectedPage title="User | Find" restrictions={restrictions}>
      <Find />
    </ProtectedPage>
  );
};

export default Page;
