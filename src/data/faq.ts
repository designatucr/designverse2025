import data from "./config";

type QuestionAnswer = {
  question: string;
  answer: string;
};

export const QUESTIONS: QuestionAnswer[] = [
  {
    question: "What is a Design-a-Thon?",
    answer:
      "A Design-a-Thon is a large-scale event where individuals or teams can work to design a prototype product within 24 hours. Participants will compete through a given prompt to create the best product, which will be determined by a panel of judges within the industry. Such products include the UI of a website or app.",
  },
  {
    question: "How do I apply?",
    answer:
      "Please be on the lookout for the release of our official registration form! For now, you may fill out our interest form.",
  },
  {
    question: "Where will the event be held?",
    answer:
      "DesignVerse 2025 will be in person and located at the University of California, Riverside. Specific locations will be released as we approach the date of the event.",
  },
  {
    question: "I have no experience, can I still join?",
    answer:
      "Of course! Anyone interested in UI/UX design or research is highly encouraged to join! We will be offering a variety of workshops throughout the day as well as mentorship to assist you in the creation of your project.",
  },
  {
    question: "How do I prepare for DesignVerse?",
    answer:
      "While DesignVerse is beginner-friendly, there are many ways to prepare! Please visit our Resources Section to familiarize yourself with common UI/UX tools. In addition, feel free to come out to events hosted by our parent organization, Design@UCR! Our events include Figma Basics, Prototyping, Industry Professional: Ask Me Anything, Design Cohorts, Design Jams, and more!",
  },
  {
    question: "Does it cost money to participate in DesignVerse?",
    answer: "No, it is completely free!",
  },
  {
    question: "How many members can be in one team?",
    answer: "1-4 members",
  },
  {
    question: "How do I find a team?",
    answer:
      "To help you find a team, we will also be hosting mini-socials at the beginning of the event itself to allow you to meet more people. There will also be channels allocated in our Discord where you will be able to find participants who share common interests as you. Please note that teams are not required! You may also work individually.",
  },
  {
    question:
      "Do I have to join the Discord server? What if I don’t have discord?",
    answer:
      "It is highly recommended that you join the Discord Server to stay updated on the event! If you do not have Discord, no worries. We will also have in-person reminders throughout the day of the event.",
  },
  {
    question: "Do I have to design the whole time and submit a project?",
    answer:
      "The amount of time you would like to design for is completely up to you! You are not required to spend the entire time designing, as we also encourage participants to visit the various events and workshops that will be hosted throughout the event! While it is highly recommended to submit a project, you are not required to! You can attend the workshops and get to know the network around you. However, those who submit a project can put it on their portfolio and be considered for various prizes and awards.",
  },
  {
    question: "Are there prizes?",
    answer:
      "Yes! Be sure to register for our event to learn more about the prizes we have to offer!",
  },
  {
    question: "My question is not here.",
    answer: `Feel free to email us at ${data.email}`,
  },
];
