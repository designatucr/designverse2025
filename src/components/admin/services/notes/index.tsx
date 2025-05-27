import { getResults } from "./actions";
import Notes from "./notes";
import { ReactQuery } from "@/utils/react-query";

const Index = async () => {
  return (
    <ReactQuery query={getResults} queryKey={["/admin/notes"]}>
      <Notes />
    </ReactQuery>
  );
};

export default Index;
