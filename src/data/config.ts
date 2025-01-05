type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "DesignVerse 2025",
  short_name: "DesignVerse",
  email: "designverseucr@gmail.com",
  description: "DESCRIPTION",
  length: 24,
  date: new Date("2025-05-11T08:00:00"),
  end: new Date("2025-05-12T16:00:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.placeholder.com",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
  discord: "https://www.discord.com",
  heart: "💙",
};

export default data;
