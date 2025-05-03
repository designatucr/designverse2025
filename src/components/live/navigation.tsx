"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  Menu,
  Anchor,
  Waves,
  Fish,
  Ship,
  CircleHelp,
  Calendar,
  CupSoda,
  Droplets,
  Shrimp,
  Bubbles,
} from "lucide-react";

const items = [
  {
    name: "Home",
    link: "/#home",
    icon: <Anchor />,
  },
  {
    name: "About Us",
    link: "/#about",
    icon: <Waves />,
  },
  {
    name: "Support Us",
    link: "/#support-us",
    icon: <Ship />,
  },
  {
    name: "Tracks",
    link: "/#tracks",
    icon: <Droplets />,
  },
  {
    name: "Schedule",
    link: "/#schedule",
    icon: <Calendar />,
  },
  {
    name: "Resources",
    link: "/#resources",
    icon: <Fish />,
  },
  {
    name: "Sponsors",
    link: "/#sponsors",
    icon: <Shrimp />,
  },
  {
    name: "Judges",
    link: "/#judges",
    icon: <Bubbles />,
  },
  {
    name: "Meet the Team",
    link: "/#team",
    icon: <CupSoda />,
  },
  {
    name: "FAQ",
    link: "/#faq",
    icon: <CircleHelp />,
  },
];

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-2 z-50 m-3 rounded-lg bg-[#3E90B4] px-3 py-2 text-white drop-shadow-xl">
      {isDropdownOpen ? (
        <>
          <ChevronLeft
            onClick={() => setDropdownOpen(false)}
            className="hover:cursor-pointer"
          />
          <div className="ml-2 mt-2 flex flex-col gap-2">
            {items.map(({ link, icon, name }, index) => (
              <Link key={index} href={link} className="flex gap-2">
                {icon}
                {name}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Menu
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="hover:cursor-pointer"
        />
      )}
    </div>
  );
};

export default Navigation;
