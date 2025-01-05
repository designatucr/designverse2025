import Checkbox from "@/components/checkbox";
import { AVAILABILITY } from "../form/information";
import { generateSelect, generateStatus } from "./columns";
import { STATUSES } from "@/data/statuses";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Tags } from "@/types/dashboard";

type Mentor = {
  name: string;
  email: string;
  discord: string;
  availability: string[];
  response: string;
  shirt: string;
  gender: string;
  grade: string;
};

type dropdownProps = {
  object: {
    availability: string[];
    response: string;
  };
};

export const TAGS: Tags[] = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const COLUMNS: (ColumnDef<Mentor, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["gender"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "shirt",
    header: "Shirt",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["shirt"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "grade",
    header: "Grade",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Mentor, Mentor["grade"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateStatus(STATUSES),
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-11/12 grid-flow-col grid-rows-4">
          {AVAILABILITY.map((text, index) => (
            <Checkbox
              id="availability"
              checked={object.availability.includes(text)}
              key={index}
            >
              {text}
            </Checkbox>
          ))}
        </div>
      </div>
      <p className="ml-5 mt-3">{object.response}</p>
    </>
  );
};
