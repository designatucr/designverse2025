import { Round } from "./rounds";

export type Team = {
  id: string;
  name: string;
  members: {
    name: string;
    discord: string;
  }[];
  discords: string[];
  links: {
    [link: string]: string;
  }[];
  rounds: Round[][];
};
