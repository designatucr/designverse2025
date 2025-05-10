import {
  Description,
  RadioInput,
  TermsAndConditions,
  TextInput,
} from "@/types/forms";
import data from "@/data/config";

interface Attributes {
  firstName: string;
  lastName: string;
  email: string;
  discord: string;
  project: string;
  slides: string;
  design: string;
  devpost: string;
  copilot: string;
  requirements: string[];
}

interface Fields {
  description: Description;
  firstName: TextInput;
  lastName: TextInput;
  email: TextInput;
  discord: TextInput;
  project: TextInput;
  slides: TextInput;
  design: TextInput;
  devpost: TextInput;
  copilot: RadioInput;
  requirements: TermsAndConditions;
}

export const ATTRIBUTES: Attributes = {
  firstName: "",
  lastName: "",
  email: "",
  discord: "",
  project: "",
  slides: "",
  design: "",
  devpost: "",
  copilot: "",
  requirements: [],
};

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Thank you for submitting to ${
        data.name
      }. We look forward to seeing your project and learning more about your ideas.`,
      `The form below is your official submission to ${data.name} and will allow you to be considered for judging.`,
      "This form must be submitted by 8AM on May 11th. However you are still allowed to edit your Figma, Slides and any other related works until 9AM.",
      "Note: Submissions after 9AM will NOT be accepted.",
    ],
  },
  firstName: {
    input: "input",
    name: "firstName",
    type: "text",
    title: "First Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
    placeholder: "John",
  },
  lastName: {
    input: "input",
    name: "lastName",
    type: "text",
    title: "Last Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
    placeholder: "John",
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
    placeholder: "john.doe@gmail.com",
  },
  discord: {
    input: "input",
    name: "discord",
    type: "text",
    title: "Discord",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "ie. john_doe#1234",
  },
  project: {
    input: "input",
    name: "project",
    type: "text",
    title: "Project Title",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "ie. Build a Bear",
  },
  slides: {
    input: "input",
    name: "slides",
    type: "text",
    title: "Slides Link (ie. Google Slides, Canva)",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Slides Link",
  },
  design: {
    input: "input",
    name: "design",
    type: "text",
    title: "Design Link (ie. Figma, Canva)",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Design Link",
  },
  devpost: {
    input: "input",
    name: "devpost",
    type: "text",
    title: "Devpost Link",
    maxLength: 50,
    width: 12,
    editable: true,
    required: true,
    placeholder: "Devpost",
  },
  copilot: {
    input: "radio",
    text: "Are you going for the MLH Github Copilot Track?",
    width: 12,
    field: "copilot",
    options: ["Yes", "No"],
    required: true,
    editable: true,
  },
  requirements: {
    text: "Terms and Conditions",
    input: "terms",
    width: 12,
    field: "requirements",
    editable: true,
    options: [
      "All designs MUST be made between the dates of 9:00 AM PT May 10th - 9:00 AM PT May 11th",
      "All work submitted MUST be original work. Any plagiarized OR previous work submitted will be disqualified",
    ],
    required: true,
  },
};
