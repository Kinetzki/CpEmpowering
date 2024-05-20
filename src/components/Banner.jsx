import React from "react";
import Avatar from "./Avatar";
import power from "../assets/icons/power.svg";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png"
function Banner() {
  const navigate = useNavigate();
  return (
    <div className="w-full rounded-full bg-[var(--bg-color)] h-[39px] justify-between items-center flex px-5 py-2">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold font-Outfit text-[20px]">BayanTrack</h1>
        <img src={logo} alt="" className="w-[30px] shadow-orange-100 shadow-lg rounded-full"/>
      </div>
      {/*  */}
      <div className="flex items-center gap-2">
        <h1 className="font-semibold font-Outfit text-[20px]">Brgy. Kumintang Ilaya</h1>
        {/* <Avatar /> */}
        <div
          className="bg-[var(--secondary-color)] py-1 px-5 rounded-full flex gap-1 cursor-pointer ml-[25px]"
          onClick={() => {
            sessionStorage.removeItem("token");
            navigate("/");
          }}
        >
          <img src={power} alt="" />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
