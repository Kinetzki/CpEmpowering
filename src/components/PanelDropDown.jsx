import React, { useState } from "react";
import Dropdown from "../assets/icons/Dropdown.svg";
import { useNavigate } from "react-router-dom";

function PanelDropDown({ text, items, icon, routes }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
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
        <img
          src={Dropdown}
          alt=""
          className={
            "rotate-0 w-[15px] h-[15px] " + (isClicked ? "rotate-[90deg]" : "")
          }
        />
      </div>
      {isClicked && (
        <div className="flex flex-col items-start pl-[40px] gap-5 mt-[20px]">
          {items.map((item, i) => {
            return (
              <h1
                className="text-[14px] cursor-pointer"
                onClick={() => {
                  navigate(`/${routes[i]}`);
                }}
                key={i}
              >
                {item}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PanelDropDown;
