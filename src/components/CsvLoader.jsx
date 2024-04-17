import React, { useState } from "react";
import ButtonComp2 from "./ButtonComp2";

function CsvLoader({ entries, handleClick }) {
  const keys = Object.keys(entries[0]);
  return (
    <div className="w-full h-full fixed flex items-center justify-center top-0 left-0 z-[9999] flex-col">
      <div className="bg-white w-[85vw] h-[85vh] rounded-lg p-4 flex flex-col overflow-x-auto">
        <div className="flex text-black gap-3 h-[55px] items-center border-b-[1px] border-[#000000] hover:bg-[#FF000026] cursor-pointer select-none w-fit">
          {keys.map((k, i) => {
            return <h1 className="w-[250px] h-[50px] font-semibold" key={i}>{k}</h1>;
          })}
        </div>
        {entries.map((item, i) => {
          return (
            <div
              className="flex text-black gap-3 h-[55px] items-center border-b-[1px] border-[#000000] hover:bg-[#FF000026] cursor-pointer select-none w-fit"
              key={i}
            >
              {keys.map((k, i) => {
                return <h1 className="w-[250px] h-[50px] truncate" key={i}>{`${item[k] || "N/A"}`}</h1>;
              })}
            </div>
          );
        })}
      </div>
      <div className="flex w-full px-[100px] justify-end gap-5">
        <button>Cancel</button>
        <ButtonComp2
          text="Confirm Data"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default CsvLoader;
