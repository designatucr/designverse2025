import {
  Description,
  RadioInput,
  TermsAndConditions,
  TextareaInput,
  TextInput,
} from "@/types/forms";

import data from "@/data/config";

type Tiers = {
  tier1: string;
  tier2: string;
  tier3: string;
  other: string;
};

export const TIERS: Tiers = {
  tier1: "Moonlit Tides ($750)",
  tier2: "Shimmering Seashells ($1000)",
  tier3: "Mermaid Treasure ($2000)",
  other: "Other",
};

interface Attributes {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  tier:
    | "Moonlit Tides ($750)"
    | "Shimmering Seashells ($1000)"
    | "Mermaid Treasure ($1000)"
    | "Other";
  comments: string;
  requirements: string[];
}

export const ATTRIBUTES: Attributes = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  tier: "Moonlit Tides ($750)",
  requirements: [],
  comments: "",
};

type Fields = {
  description: Description;
  name: TextInput;
  email: TextInput;
  phone: TextInput;
  company: TextInput;
  position: TextInput;
  tier: RadioInput;
  comments: TextareaInput;
  requirements: TermsAndConditions;
};

export const FIELDS: Fields = {
  description: {
    input: "description",
    width: 12,
    texts: [
      `Welcome to ${
        data.name
      }. Thank you for your interest in sponsoring us. We appreciate your efforts to help ${
        data.name
      }. ${data.name} is a ${data.description} designathon spanning ${
        data.length
      } hours on ${data.date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}.`,
      `All sponsorships are directly allocated towards the planning of this designathon. Your efforts not only help the success of the design community in Riverside, but also provides for the future development of this platform. `,
      "Previous sponsors have had exposure to student engagement within UCR, were able to extend serviceable marketing, locally provide product support and were provided benefits through their overall involvement within future programming. ",
      `Sponsors are not required to stay the full duration of the event, but are encouraged to checkout the various events, workshops, and opportunities that are available.`,
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
    placeholder: "John Doe",
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
  phone: {
    input: "input",
    name: "phone",
    type: "phone",
    title: "Phone Number",
    placeholder: "ie. 123 456 7890",
    maxLength: 50,
    width: 12,
    required: true,
    editable: true,
  },
  company: {
    input: "input",
    name: "company",
    type: "text",
    title: "Company Name",
    placeholder: "ie. Major League Hacking",
    maxLength: 50,
    width: 12,
    required: true,
    editable: true,
  },
  position: {
    input: "input",
    name: "position",
    type: "text",
    title: "Position",
    placeholder: "ie. Head of Growth",
    maxLength: 50,
    width: 12,
    required: true,
    editable: true,
  },
  tier: {
    input: "radio",
    text: "Sponsorship Tier (check sponsorship packet below)",
    options: Object.values(TIERS),
    field: "tier",
    width: 12,
    required: true,
    editable: true,
  },
  comments: {
    input: "textarea",
    name: "comments",
    rows: 4,
    title: "Additional Comments/Questions",
    placeholder: "ie. How can my organization assist your hackathon?",
    width: 12,
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
      // "I have read the MLH code of conduct and agree to the terms and conditions listed",
      // "I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy",
      // "I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy",
      "I consent to photographs being taken and being used for marketing purposes",
      "I consent to providing a safe space for designers to learn and grow their interests in computing",
      "I consent to following the provided guidelines and rules instructed by the organizing team",
      "I understand that failure to comply with guidelines or creating an unsafe space will result in my removal from the event",
      "I understand this is an in person event taking place in UCR and I must attend in person in order to participate",
      "I understand that I will be given access to private data and malicious intents and actions will be reported immediately",
    ],
    required: true,
  },
};
