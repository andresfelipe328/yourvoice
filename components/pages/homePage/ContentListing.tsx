"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { FaCamera, FaTimes, FaPlay, FaUserAlt } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import PreviewComp from "./PreviewComp";

const ContentListing = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [currPreview, setCurrPreview] = useState(1);

  const handleOpenPreview = (e: any, preview: number) => {
    const comp = document.getElementById(preview.toString());
    console.log(comp);

    e.preventDefault();
    setShowPreview(true);
    setCurrPreview(preview);
  };

  return (
    <div className="flex gap-2 p-2">
      <div className="relative flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song, index) => (
          <Link id={song.toString()} key={index} href={"#"} className="group">
            <div className="w-full h-40 border-2 border-text-color bg-bg-color rounded-md shadow-xs flex items-center justify-center">
              <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
            </div>
            <div className="relative mx-2 p-2 text-left rounded-md group-hover:backdrop-blur-[10px] group-hover:-translate-y-5 group-hover:shadow-s hover-ease">
              <button
                onClick={(e) => handleOpenPreview(e, song)}
                className="hidden md:flex absolute top-2 right-2 gap-1 opacity-0 group-hover:opacity-100 hover-ease"
              >
                <MdOutlinePreview className="btn-icon text-xl" />
              </button>
              <p>composition name</p>
              <p className="font-medium">by composer</p>
              <small>genre</small>
            </div>
          </Link>
        ))}
      </div>
      <AnimatePresence initial={false} mode="wait">
        {showPreview && (
          <PreviewComp
            key={currPreview}
            show={showPreview}
            setShow={setShowPreview}
            preview={currPreview}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentListing;
