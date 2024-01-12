import React, { useEffect, useCallback } from "react";
import { FaCamera, FaPlay, FaTimes, FaUserAlt } from "react-icons/fa";
import PreviewAnimLayout from "@/components/layout/layoutAnimations/misc/PreviewAnimLayout";
import Link from "next/link";

type Props = {
  id: number;
  show: boolean;
  preview: number;
  setShow: Function;
};

const PreviewComp = ({ id, show, setShow, preview }: Props) => {
  // Handle closing of drop menu on window resize
  const handleDroNav = useCallback(() => {
    const windowSize = window.innerWidth;
    if (show && windowSize < 768) setShow(!show);
  }, [show, setShow]);

  // Resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleDroNav);

    return () => window.removeEventListener("resize", handleDroNav);
  }, [handleDroNav]);

  return (
    <PreviewAnimLayout style="composition-preview">
      <button onClick={() => setShow(!show)} className="group w-fit">
        <FaTimes className="btn-icon group-hover:rotate-180 hover-ease" />
      </button>
      <div className="w-full h-40 bg-bg-color rounded-md shadow-xs flex items-center justify-center">
        <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
      </div>

      <div className="flex gap-2">
        <button className="group w-14 h-14 rounded-full button p-0 flex items-center justify-center">
          <FaPlay className="btn-icon group-hover:btn-content-hover-effect" />
        </button>
        <div className="flex flex-col gap-1">
          <p>
            song name - <small>genre</small>
          </p>
          <small>composer, {preview}</small>
        </div>
      </div>
      <Link
        href={`/composition/${"composerId"}/${id}`}
        className="group button w-1/2 mx-auto"
      >
        <small className="group-hover:btn-content-hover-effect mx-auto">
          Go to Page
        </small>
      </Link>
      <button className="group button w-1/2 mx-auto">
        <small className="group-hover:btn-content-hover-effect mx-auto">
          Wishlist
        </small>
      </button>
      <small>released January 01, 2024</small>

      <div className="flex gap-2">
        <div className="w-14 h-14 rounded-3xl bg-btn-color flex items-center justify-center">
          <FaUserAlt className="btn-icon" />
        </div>
        <div className="flex flex-col gap-1">
          <p>Composer</p>
          <small>City, Country</small>
        </div>
      </div>
      <button className="group button w-1/2 mx-auto">
        <small className="group-hover:btn-content-hover-effect mx-auto">
          Follow
        </small>
      </button>
    </PreviewAnimLayout>
  );
};

export default PreviewComp;
