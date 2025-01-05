"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";

const items = [
  {
    name: "Home",
    link: "/#home",
    icon: <Menu />,
  },
  {
    name: "About",
    link: "/#about",
    icon: <Menu />,
  },
  {
    name: "Support Us",
    link: "/#support-us",
    icon: <Menu />,
  },
  {
    name: "Resources",
    link: "/#resources",
    icon: <Menu />,
  },
];

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-2 z-10 m-3 rounded-lg bg-[#3E90B4] px-3 py-2 text-white drop-shadow-xl">
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
