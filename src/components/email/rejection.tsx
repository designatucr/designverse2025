import data from "@/data/config";
import Template from "./template";
import { Link, Text } from "@react-email/components";

interface props {
  name: string;
  position: string;
  preview: string;
}

const Rejection = ({ name, position, preview }: props) => {
  return (
    <Template name={name} preview={preview}>
      <Text className="font-sans text-white">
        Thank you for applying to {data.name} as a {position}. Unfortunately,
        due to particular circumstances we are unable to provide you a spot at{" "}
        {data.name}.
      </Text>
      <Text className="font-sans text-white">
        However, we loved getting to know you and hope that you apply next year.
        If you have any questions, please reach out at{" "}
        <Link href={`mailto:${data.email}`} className="text-[#2CB6D4]">
          {data.email}
        </Link>
      </Text>
    </Template>
  );
};

export default Rejection;
