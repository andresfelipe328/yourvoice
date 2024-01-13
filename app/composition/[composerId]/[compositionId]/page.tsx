import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import Link from "next/link";
import React from "react";
import {
  FaCamera,
  FaEdit,
  FaPlay,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";

const page = ({
  params,
}: {
  params: { composerId: string; compositionId: string };
}) => {
  console.log(`/composition/${"composerId"}/${params.compositionId}`);
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-2 p-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/5 h-96 border-2 border-text-color bg-bg-color rounded-md shadow-xs flex items-center justify-center">
            <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-2">
            <h1>Composition Name</h1>
            <p className="font-medium">by composer</p>
            <small>released January 01, 2024</small>
            <small className="mt-2">
              <span className="font-bold">Language:</span> english
            </small>
            <small>
              <span className="font-bold">Genre:</span> genre type
            </small>
            <small>
              <span className="font-bold">Mood:</span> mood type(s)
            </small>

            <div className="flex items-center gap-2">
              <button className="group w-14 h-14 rounded-full button p-0 flex items-center justify-center">
                <FaPlay className="btn-icon group-hover:btn-content-hover-effect" />
              </button>
              <div className="flex-1 flex items-center gap-1">
                <small>00:00</small>
                <div className="w-1/2 border-2 border-btn-effect-color rounded-md h-2"></div>
                <small>03:25</small>
              </div>
            </div>

            <div className="w-[250px] mt-auto">
              <small className="flex justify-between">
                <span className="font-bold">Standard License:</span> $50.00
              </small>
              <small className="flex justify-between">
                <span className="font-bold">Exented License:</span> $100.00
              </small>
              <small className="flex justify-between">
                <span className="font-bold uppercase">Buy Copyright:</span>{" "}
                $1000.00
              </small>

              <button className="group button w-full mt-2 justify-center">
                <FaShoppingCart className="btn-icon group-hover:btn-content-hover-effect" />
                <small className="btn-icon group-hover:btn-content-hover-effect">
                  purshase
                </small>
              </button>
            </div>
          </div>
        </div>

        <h2>Description:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          vitae cum a et, vel dolore. Ab nostrum suscipit obcaecati doloremque
          est at inventore placeat sequi voluptas eveniet sint hic dolorum, enim
          natus nemo vero nulla temporibus nam quaerat distinctio labore
          perferendis, debitis reiciendis voluptatum. Atque laudantium omnis
          necessitatibus voluptatum pariatur
        </p>

        <h2>Lyrics:</h2>
        <p className="text-center bg-bg-color/80 p-2">[lyrics text]</p>

        <div className="flex justify-around gap-2 mt-5">
          <div className="flex gap-2">
            <div className="w-14 h-14 rounded-3xl bg-btn-color flex items-center justify-center">
              <FaUserAlt className="btn-icon" />
            </div>
            <div className="flex flex-col gap-2">
              <p>Composer</p>
              <small>City, Country</small>
              <button className="group button ">
                <small className="group-hover:btn-content-hover-effect mx-auto">
                  Follow
                </small>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Contact</p>
            <button className="group button">
              <small className="group-hover:btn-content-hover-effect">
                send a message
              </small>
            </button>
          </div>
        </div>

        <h2>Other Works:</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((song, index) => (
            <Link
              id={song.toString()}
              key={index}
              href={`/composition/${"composerId"}/${song}`}
              className="group flex gap-2 border-2 border-text-color/50 shadow-s hover:shadow-m hover-ease"
            >
              <div className="w-64 h-40 bg-bg-color rounded-md shadow-xs flex items-center justify-center">
                <FaCamera className="btn-icon text-5xl opacity-75 group-hover:scale-110 hover-ease" />
              </div>

              <div className="flex flex-col gap-1 p-2">
                <p>Composition name</p>
                <small>genre</small>
                <small className="opacity-60">Formats: lyric sheet, mp3</small>
              </div>
            </Link>
          ))}

          <button className="group button w-fit h-fit">
            <small className="group-hover:btn-content-hover-effect">
              show more
            </small>
          </button>
        </div>
      </div>
    </LandingAnim>
  );
};

export default page;
