import { ReactQuery } from "@/utils/react-query";
import { getEvents } from "./actions";
import Calendar from "./calendar";

const Index = () => {
  return (
    <ReactQuery query={getEvents} queryKey={["/admin/calendar"]}>
      <Calendar />
    </ReactQuery>
  );
};

export default Index;
