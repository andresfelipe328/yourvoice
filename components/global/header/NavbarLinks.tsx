import React from "react";
import Link from "next/link";

import { FaHome, FaListUl, FaUserAlt } from "react-icons/fa";
import { TbMusicUp } from "react-icons/tb";
import Burger from "./Burger";

const NAVLINKS = [
  {
    icon: FaHome,
    href: "/",
    text: "home",
  },
  {
    icon: FaListUl,
    href: "/your-work",
    text: "your work",
  },
  {
    icon: TbMusicUp,
    href: "#",
    text: "upload",
  },
];

const NavbarLinks = () => {
  return (
    <>
      <ul className="scale-0 hidden md:scale-100 navLinks:flex flex-1 items-center justify-center gap-10 hover-ease">
        {NAVLINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group/link hover:bg-color hover:shadow-s p-2 rounded-md hover-ease"
          >
            <link.icon className="btn-icon group-hover/link:text-btn-effect-color hover-ease" />
          </Link>
        ))}
      </ul>
      <Link
        href="#"
        className="scale-0 hidden md:scale-100 navLinks:flex group/link hover:bg-color hover:shadow-s p-2 rounded-md hover-ease"
      >
        <FaUserAlt className="btn-icon group-hover/link:text-btn-effect-color hover-ease" />
      </Link>

      {/* <Burger /> */}
    </>
  );
};

export default NavbarLinks;
