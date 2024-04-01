import React, { useState } from "react";
import dropdown from "../assets/icons/Dropdown1.svg";

function Dropdown({ items, text }) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <>
      <div className="flex items-center px-6 h-[40px] cursor-pointer text-[#000000] relative gap-3 select-none border-[1px] border-[#000000] rounded-lg" onClick={()=>{
        setShowDrop(!showDrop);
      }}>
        <h1 className="leading-none">{text}</h1>
        <img src={dropdown} alt="" className="translate-y-1" />
        {showDrop && (
          <div className="text-[#000000] flex flex-col absolute bottom-[-82px] right-0 gap-1 bg-white px-2 min-w-[110px] rounded-2xl py-[12px] border-[1px] border-[#000000]">
            {items.map((item, i) => {
              return <h1 key={i} className=" w-full">{item}</h1>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
