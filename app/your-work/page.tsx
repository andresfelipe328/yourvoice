import React from "react";
import Link from "next/link";
import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import { FaCamera, FaEdit } from "react-icons/fa";

const page = () => {
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-5 p-4">
        <h1>Your Work</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song, index) => (
            <Link
              id={song.toString()}
              key={index}
              href={"#"}
              className="group flex gap-2 border-2 border-text-color/50 shadow-s hover:shadow-m hover-ease"
            >
              <div className="w-64 h-40 bg-bg-color rounded-md shadow-xs flex items-center justify-center">
                <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
              </div>

              <div className="flex flex-col gap-1 p-2">
                <p>Composition name</p>
                <small>genre</small>
                <small className="opacity-60">
                  Formats: lyric sheet, mp3, mp4
                </small>

                <div className="opacity-0 group-hover:opacity-100 mt-auto ml-auto flex gap-1 hover-ease">
                  <small>edit</small>
                  <FaEdit className="btn-icon" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </LandingAnim>
  );
};

export default page;
