"use client";

import React, { useRef, useState } from "react";
import filter from "@/utils/filters.json";
import { FaTimes, FaCaretRight } from "react-icons/fa";

type Filter = {
  [key: string]: string | undefined;
  genre?: string;
  format?: string;
  language?: string;
};

const Filtering = () => {
  const [filters, setFilters] = useState<Filter>({});

  // add filters to filters state
  const handleAddFilter = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    setFilters((prev) => ({ ...prev, [type]: e.target.value }));
  };

  // removes selected filter based on value and reset select filter option
  const handleDeleteFilter = (filter: string | undefined) => {
    const filterKey = Object.keys(filters).find(
      (key) => filters[key] === filter
    );
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[filterKey!];
      return newFilters;
    });

    const filterOption: any = document.getElementById(filterKey!);
    filterOption.selectedIndex = 0;
    console.log(filterOption.selectedIndex);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full gap-2 flex-wrap">
        <select
          name="genre"
          id="genre"
          onChange={(e) => handleAddFilter(e, "genre")}
        >
          <option defaultValue="genre title" className="hidden">
            Select Genre
          </option>
          {filter.genres.map((genre, index) => (
            <option key={index} value={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
        <select
          name="format"
          id="format"
          onChange={(e) => handleAddFilter(e, "format")}
        >
          <option defaultValue="format title" className="hidden">
            Select Format
          </option>
          {filter.formats.map((format, index) => (
            <option key={index} value={format.format}>
              {format.format}
            </option>
          ))}
        </select>
        <select
          name="language"
          id="language"
          onChange={(e) => handleAddFilter(e, "language")}
        >
          <option defaultValue="language title" className="hidden">
            Select Language
          </option>
          {filter.languages.map((language, index) => (
            <option key={index} value={language.language}>
              {language.language}
            </option>
          ))}
        </select>
      </div>

      {Object.keys(filters).length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Object.values(filters).map((filter) => (
            <div
              key={filter}
              className="flex items-center gap-2 bg-btn-color p-2 rounded-md shadow-s"
            >
              <small className="text-ellipsis overflow-hidden">{filter}</small>
              <button onClick={() => handleDeleteFilter(filter)}>
                <FaTimes className="btn-icon" />
              </button>
            </div>
          ))}

          <button className="group button">
            <small className="group-hover:btn-content-hover-effect">
              apply
            </small>
            <FaCaretRight className="btn-icon group-hover:btn-content-hover-effect" />
          </button>
        </div>
      )}
    </>
  );
};

export default Filtering;
