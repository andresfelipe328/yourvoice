import React from "react";
import { FaCamera, FaPlay, FaTimes, FaUserAlt } from "react-icons/fa";
import PreviewAnimLayout from "@/components/layout/layoutAnimations/misc/PreviewAnimLayout";

type Props = {
  show: boolean;
  preview: number;
  setShow: Function;
};

const PreviewComp = ({ show, setShow, preview }: Props) => {
  return (
    <PreviewAnimLayout style="composition-preview">
      <button onClick={() => setShow(!show)} className="group">
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
          <p>song name</p>
          <small>composer, {preview}</small>
        </div>
      </div>
      <button className="group button w-1/2 mx-auto">
        <small className="group-hover:btn-content-hover-effect mx-auto">
          Go to Page
        </small>
      </button>
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
