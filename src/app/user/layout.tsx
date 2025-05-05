/* eslint-disable new-cap */
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";
import ProtectedPage from "@/components/protected";

type Props = {
  children: React.ReactNode;
};

const UserLayout = async ({ children }: Props) => {
  const session = await getServerSession(options);

  return (
    <Providers session={session}>
      <Toaster />
      <ProtectedPage session={session} restrictions={{ participants: [1] }}>
        {children}
      </ProtectedPage>
    </Providers>
  );
};

export default UserLayout;
