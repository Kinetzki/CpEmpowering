import React, { useEffect, useState } from "react";
import checked from "../assets/icons/checked.svg";

function ResidentItem({ entry, setSelected, setClicked, handleClick, selectedArr }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setSelected((selected) => [...selected, entry.id]);
    } else {
      setSelected((selected) => selected.filter((el) => el !== entry.id));
    }
  }, [isChecked]);

  return (
    <div
      className={"flex text-black w-full gap-3 min-h-[55px] items-center border-b-[1px] border-[#000000] hover:bg-[#45A5F133] cursor-pointer select-none " + (entry.deceased? "bg-[#FF000026]" : "bg-transparent")}
      onClick={() => {
        setClicked(entry);
        console.log(entry);
        handleClick();
      }}
    >
      <div
        className="w-[20px] h-[15px] border-[1px] border-[var(--bg-color)] rounded-sm flex items-center"
        onClick={(e) => {
          setIsChecked(!isChecked);
          e.stopPropagation();
        }}
      >
        {isChecked && (selectedArr.includes(entry.id))&&(
          <img src={checked} alt="" className="w-[18px] h-[18px] rounded-sm" />
        )}
      </div>

      <h1 className="w-[25%] truncate">{`${entry.first_name} ${entry.middle_name} ${entry.surname}`}</h1>
      <h1 className="w-[5%]">{entry.age}</h1>
      <h1 className="w-[30%] truncate">{entry.email || "N/A"}</h1>
      <h1 className="w-[30%]">{entry.address}</h1>
      <h1 className="w-[20%]">{entry.phone_number}</h1>
      <h1 className="w-[20%]">{entry.sex}</h1>
    </div>
  );
}

export default ResidentItem;
