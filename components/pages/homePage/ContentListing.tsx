"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { FaCamera, FaTimes, FaPlay, FaUserAlt } from "react-icons/fa";
import PreviewComp from "./PreviewComp";

const ContentListing = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [currPreview, setCurrPreview] = useState(1);

  const handleOpenPreview = (preview: number) => {
    setShowPreview(true);
    setCurrPreview(preview);
  };

  return (
    <div className="flex gap-2">
      <div className="relative flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song, index) => (
          <button
            key={index}
            className="group "
            onClick={() => handleOpenPreview(song)}
          >
            <div className="w-full h-40 bg-bg-color rounded-md shadow-xs flex items-center justify-center">
              <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
            </div>
            <div className="mx-2 p-2 text-left rounded-md group-hover:backdrop-blur-[10px] group-hover:-translate-y-5 group-hover:shadow-s hover-ease">
              <p>composition name</p>
              <p className="font-medium">by composer</p>
              <small>genre</small>
            </div>
          </button>
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
