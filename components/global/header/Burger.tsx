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
        className="group/link scale-100 md:scale-0"
      >
        <HiMenuAlt1 className="btn-icon group-hover/link:btn-content-hover-effect hover-ease" />
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
