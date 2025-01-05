import { fetchTeam } from "@/actions/join";
import Invite from "./invite";

interface props {
  params: {
    team: string;
  };
}

const Join = async ({ params }: props) => {
  const { team: id } = params;
  const team = await fetchTeam(id);

  return <div>{team && <Invite team={team} id={id} />}</div>;
};

export default Join;
