import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { FaHome, FaListUl, FaTimes, FaUserAlt } from "react-icons/fa";
import { TbMusicUp } from "react-icons/tb";
import Backdrop from "@/components/layout/layoutAnimations/headerAnims/Backdrop";
import CollapseAnimLayout from "@/components/layout/layoutAnimations/headerAnims/CollapseAnimLayout";

type Props = {
  show: boolean;
  setShow: Function;
};

const NAVLINKS = [
  {
    icon: FaHome,
    href: "#",
    text: "home",
  },
  {
    icon: FaListUl,
    href: "#",
    text: "your work",
  },
  {
    icon: TbMusicUp,
    href: "#",
    text: "upload work",
  },
  {
    icon: FaUserAlt,
    href: "#",
    text: "profile",
  },
];

const DropdownMenu = ({ show, setShow }: Props) => {
  // Handle closing of drop menu on window resize
  const handleDroNav = useCallback(() => {
    const windowSize = window.innerWidth;
    if (show && windowSize > 767) setShow(!show);
  }, [show, setShow]);

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleDroNav);

    return () => window.removeEventListener("resize", handleDroNav);
  }, [handleDroNav]);

  return (
    <Backdrop>
      <CollapseAnimLayout style="modal-nav">
        <button
          onClick={() => setShow(!show)}
          className="absolute top-14 right-10 group/link scale-100 md:scale-0"
        >
          <FaTimes className="btn-icon group-hover/link:btn-content-hover-effect hover-ease" />
        </button>

        <ul className="flex flex-col gap-5">
          {NAVLINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group/link flex items-center gap-5 p-2 rounded-md"
            >
              <link.icon className="btn-icon group-hover/link:text-btn-effect-color hover-ease" />
              <small className=" group-hover/link:text-btn-effect-color hover-ease">
                {link.text}
              </small>
            </Link>
          ))}
        </ul>
      </CollapseAnimLayout>
    </Backdrop>
  );
};

export default DropdownMenu;
