import Link from "next/link";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Burger = () => {
  return (
    <Link
      href="#"
      className="scale-100 md:scale-0 group/link hover:bg-color hover:shadow-s p-2 rounded-md hover-ease"
    >
      <HiMenuAlt1 className="btn-icon group-hover/link:text-btn-effect-color hover-ease" />
    </Link>
  );
};

export default Burger;
