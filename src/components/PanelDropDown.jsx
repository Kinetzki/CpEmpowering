import React, { useState } from "react";
import Dropdown from "../assets/icons/Dropdown.svg";

function PanelDropDown({ text, items, icon }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex flex-col font-Nunito select-none">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <img src={icon} alt="" className="w-[25px] h-[25px]" />
        <h1 className="text-[18px]">{text}</h1>
        <img src={Dropdown} alt="" className={"rotate-0 w-[15px] h-[15px] " + (isClicked ? "rotate-[90deg]":"")} />
      </div>
      {isClicked && (
        <div className="flex flex-col items-start pl-[40px] gap-5 mt-[20px]">
          {items.map((item) => {
            return <h1 className="text-[14px]">{item}</h1>;
          })}
        </div>
      )}
    </div>
  );
}

export default PanelDropDown;
