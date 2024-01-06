import React from "react";
import filter from "@/utils/filters.json";

const Filtering = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2 flex-wrap">
      <select name="genres" id="genres">
        <option defaultValue="genre title" className="hidden">
          Select Genre
        </option>
        {filter.genres.map((genre, index) => (
          <option key={index} value={genre.genre}>
            {genre.genre}
          </option>
        ))}
      </select>
      <select name="formats" id="formats">
        <option defaultValue="format title" className="hidden">
          Select Format
        </option>
        {filter.formats.map((format, index) => (
          <option key={index} value={format.format}>
            {format.format}
          </option>
        ))}
      </select>
      <select name="languages" id="languges">
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
  );
};

export default Filtering;
