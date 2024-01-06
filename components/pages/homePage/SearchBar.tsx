import React from "react";
import { FaSearch } from "react-icons/fa";
import Filtering from "./Filtering";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="p-2 flex items-center bg-btn-color mx-auto w-full md:w-1/2 shadow-s rounded-md hover:shadow-m hover-ease">
          <input
            name="search-input"
            id="search-input"
            type="text"
            placeholder="search"
            className="w-full"
            autoComplete="off"
          />
          <FaSearch className="btn-icon" />
        </div>

        <Filtering />
      </div>
    </>
  );
};

export default SearchBar;
