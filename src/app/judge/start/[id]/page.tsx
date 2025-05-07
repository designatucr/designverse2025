import Start from "@/components/judging/start";

interface props {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string };
}

const Page = ({ params, searchParams }: props) => {
  const { id } = params;

  return (
    <Start
      id={id}
      name={searchParams.name}
      round={searchParams.round}
      table={searchParams.table}
    />
  );
};

export default Page;
