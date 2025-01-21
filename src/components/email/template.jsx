import data from "@/data/config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Link,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#456B7F] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src="https://xlbau04o7z.ufs.sh/f/nuPM78a2zSTsnMCZfpa2zSTsUbytBgE8ivVYMaWxZuJepwAG"
                width="212"
                height="88"
                alt="DesignVerse"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center font-sora text-[24px] font-bold text-white">
              Thank you for applying!
            </Heading>
            <Text className="font-sans text-[14px] leading-[24px] text-white">
              Hello <strong>{name}</strong>,
            </Text>
            {children}
            <Text className="font-sans text-white">
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-white" />
            <Text className="text-white">
              Visit{" "}
              <Link href={data.domain} className="text-[#2CB6D4]">
                designverseucr.org
              </Link>{" "}
              for more information about {data.name} and follow us on{" "}
              <Link href={data.instagram} className="text-[#2CB6D4]">
                @designverseucr
              </Link>{" "}
              and{" "}
              <Link href={data.linkedin} className="text-[#2CB6D4]">
                in/designverseucr
              </Link>{" "}
              for up to date information and announcements.
            </Text>
            <Text className="text-xs leading-[24px] text-[#C3C3C3]">
              This invitation was intended for{" "}
              <span className="text-white">{name}</span>. If you were not
              expecting this email, you can ignore this email. If you are
              concerned about your account&apos;s safety, please contact{" "}
              <Link href={`mailto:${data.email}`} className="text-[#2CB6D4]">
                {data.email}
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
