import React from "react";
import Image from "next/image";

import NavbarLinks from "./NavbarLinks";
import NavbarAnimLayout from "@/components/layout/layoutAnimations/headerAnims/NavbarAnimLayout";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <>
      <NavbarAnimLayout>
        <header className="group flex items-center justify-between p-10">
          <div className="flex items-center gap-2">
            <Image
              src="/yourvoice_logo.svg"
              width={70}
              height={70}
              className="drop-shadow-md"
              alt="app logo"
              priority
            />
            <h1 className="text-btn-effect-color font-extrabold text-xs">
              yourvoice
            </h1>
          </div>

          <NavbarLinks />
        </header>
      </NavbarAnimLayout>
      <Burger />
    </>
  );
};

export default Navbar;
