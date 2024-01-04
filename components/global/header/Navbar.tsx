import React from "react";
import Image from "next/image";

import NavbarLinks from "./NavbarLinks";
import NavbarAnimLayout from "@/components/layout/layoutAnimations/NavbarAnimLayout";

const Navbar = () => {
  return (
    <NavbarAnimLayout>
      <header className="group flex items-center justify-between p-10">
        <div className="flex items-center gap-5">
          <Image
            src="/yourvoice_logo.svg"
            width={70}
            height={70}
            className="drop-shadow-md"
            alt="app logo"
            priority
          />
          {/* <h1 className="text-btn-effect-color">yourvoice</h1> */}
        </div>

        <NavbarLinks />
      </header>
    </NavbarAnimLayout>
  );
};

export default Navbar;
