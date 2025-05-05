import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import ProtectedPage from "@/components/protected";
import { options } from "@/utils/auth";

type Props = {
  children: React.ReactNode;
};

const FormLayout = async ({ children }: Props) => {
  const session = await getServerSession(options);

  return (
    <Providers session={session}>
      <Toaster />
      <ProtectedPage session={session} restrictions={{}}>
        {children}
      </ProtectedPage>
    </Providers>
  );
};

export default FormLayout;
