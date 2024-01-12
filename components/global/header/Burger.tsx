"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";

const Burger = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const pathmame = usePathname();

  // Close drop menu on pathname change
  useEffect(() => {
    if (showDropdownMenu) setShowDropdownMenu(!showDropdownMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathmame]);

  return (
    <>
      <button
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
        className="button absolute top-10 right-10 z-40 group/link scale-100 md:scale-0"
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
