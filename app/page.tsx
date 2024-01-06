import React from "react";
import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import Filtering from "@/components/pages/homePage/Filtering";
import SearchBar from "@/components/pages/homePage/SearchBar";

export default function Home() {
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-5 p-4">
        {/* <Filtering /> */}
        <SearchBar />

        <div className=" flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((song, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="w-full h-40 bg-bg-color rounded-md shadow-xs"></div>
              <p>song name by componser</p>
              <small>genre</small>
            </div>
          ))}
        </div>
      </div>
    </LandingAnim>
  );
}
