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
      className="flex text-black w-full gap-3 min-h-[55px] items-center border-b-[1px] border-[#000000] hover:bg-[#FF000026] cursor-pointer select-none"
      onClick={() => {
        setClicked(entry);
        console.log(entry);
        handleClick();
      }}
    >
      <div
        className="w-[18px] h-[18px] border-[1px] border-[var(--bg-color)] rounded-sm flex items-center"
        onClick={(e) => {
          setIsChecked(!isChecked);
          e.stopPropagation();
        }}
      >
        {isChecked && (selectedArr.includes(entry.id))&&(
          <img src={checked} alt="" className="w-[18px] h-[18px] rounded-sm" />
        )}
      </div>

      <h1 className="w-[200px]">{`${entry.first_name} ${entry.middle_name} ${entry.surname}`}</h1>
      <h1 className="w-[50px]">{entry.age}</h1>
      <h1 className="w-[220px]">{entry.email || "N/A"}</h1>
      <h1 className="w-[240px]">{entry.address}</h1>
      <h1 className="w-[120px]">{entry.phone_number}</h1>
      <h1 className="w-[90px]">{entry.sex}</h1>
    </div>
  );
}

export default ResidentItem;
