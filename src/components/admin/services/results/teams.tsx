import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type props = { data: any[]; setTeam: (value: any) => void };
const Teams = ({ data, setTeam }: props) => {
  return (
    <ToggleGroup type="single" className="grid w-full grid-cols-6">
      {data?.map((team, index) => (
        <ToggleGroupItem
          key={index}
          value={team.name + index}
          className="items-center justify-between whitespace-nowrap rounded bg-white px-4 py-6 text-left opacity-100 hover:opacity-70 data-[state=on]:bg-hackathon-blue-100 data-[state=on]:text-white"
          onClick={() => setTeam(team)}
        >
          <div className="w-3/4 truncate text-ellipsis"> {team.name}</div>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default Teams;
