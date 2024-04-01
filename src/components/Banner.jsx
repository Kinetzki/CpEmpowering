import React from "react";
import Avatar from "./Avatar";
import power from "../assets/icons/power.svg";

function Banner() {
  return (
    <div className="w-full rounded-full bg-[var(--bg-color)] h-[39px] justify-between items-center flex px-5 py-2">
      <div className="flex items-center">
        <h1>BayanTrack</h1>
        <div></div>
      </div>
      {/*  */}
      <div className="flex items-center gap-2">
        <h1>Elijah</h1>
        <Avatar />
        <div className="bg-[var(--secondary-color)] py-1 px-5 rounded-full flex gap-1 cursor-pointer ml-[25px]">
          <img src={power} alt="" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;