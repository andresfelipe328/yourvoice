"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";

const Burger = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
        className="absolute top-14 right-10 z-40 group/link scale-100 md:scale-0"
      >
        <HiMenuAlt1 className="btn-icon group-hover/link:btn-content-hover-effect" />
      </button>

      <AnimatePresence initial={false} mode="wait">
        {showDropdownMenu && (
          <DropdownMenu show={showDropdownMenu} setShow={setShowDropdownMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Burger;
