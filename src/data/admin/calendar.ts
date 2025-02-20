interface types {
  color: string;
  background: string;
  type: string;
}

export interface label {
  directors: types;
  marketing: types;
  operations: types;
  publicRelations: types;
  sponsorship: types;
  software: types;
  uiux: types;
  leads: types;
  workshop: types;
  general: types;
  food: types;
  social: types;
  activities: types;
}

export const LABELS: label = {
  directors: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "leads",
  },
  marketing: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "leads",
  },
  operations: {
    color: "green",
    background: "!bg-hackathon-tags-green-text",
    type: "leads",
  },
  sponsorship: {
    color: "purple",
    background: "!bg-hackathon-tags-purple-text",
    type: "leads",
  },
  publicRelations: {
    color: "teal",
    background: "!bg-hackathon-tags-teal-text",
    type: "leads",
  },
  software: {
    color: "teal",
    background: "!bg-hackathon-tags-teal-text",
    type: "leads",
  },
  uiux: {
    color: "green",
    background: "!bg-hackathon-tags-green-text",
    type: "leads",
  },
  leads: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "leads",
  },
  workshop: {
    color: "grayblue",
    background: "!bg-hackathon-tags-grayblue-text",
    type: "hackathon",
  },
  general: {
    color: "pink",
    background: "!bg-hackathon-tags-pink-text",
    type: "hackathon",
  },
  food: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "hackathon",
  },
  social: {
    color: "red",
    background: "!bg-hackathon-tags-red-text",
    type: "hackathon",
  },
  activities: {
    color: "yellow",
    background: "!bg-hackathon-tags-yellow-text",
    type: "hackathon",
  },
};
