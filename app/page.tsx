import React from "react";
import Link from "next/link";
import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import SearchBar from "@/components/pages/homePage/SearchBar";

import { FaCamera } from "react-icons/fa";
import ContentListing from "@/components/pages/homePage/ContentListing";

export default function Home() {
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-5 p-4">
        <SearchBar />

        <ContentListing />
      </div>
    </LandingAnim>
  );
}
