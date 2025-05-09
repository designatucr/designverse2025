import ProtectedPage from "@/components/protected";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getSession } from "@/utils/auth";

type Props = {
  children: React.ReactNode;
};

const SubmitLayout = async ({ children }: Props) => {
  const session = await getSession();

  return (
    <Providers session={session}>
      <Toaster />
      <ProtectedPage session={session} restrictions={{ participants: [1] }}>
        {children}
      </ProtectedPage>
    </Providers>
  );
};

export default SubmitLayout;
