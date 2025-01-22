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
  description: "",
  length: 24,
  date: new Date("2025-05-10T08:00:00"),
  end: new Date("2025-05-11T16:00:00"),
  packet: "",
  devpost: "https://designverseucr.devpost.com",
  domain: "https://www.designverseucr.com",
  instagram: "https://www.instagram.com/designverseucr/",
  linkedin: "https://www.linkedin.com/company/designverseucr",
  discord: "https://discord.gg/Vck5zFjz6m",
  heart: "💙",
};

export default data;
