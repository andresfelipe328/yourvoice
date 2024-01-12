import React from "react";
import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import ContentListing from "@/components/pages/homePage/ContentListing";
import SearchBar from "@/components/pages/homePage/SearchBar";

export default function Home() {
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-5">
        <SearchBar />

        <ContentListing />
      </div>
    </LandingAnim>
  );
}
