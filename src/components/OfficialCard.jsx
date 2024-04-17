import React from "react";
import ButtonComp2 from "./ButtonComp2";

function OfficialCard({ entry, handleEdit, handleDelete }) {
  return (
    <div className="hover:scale-[1.03] duration-[0.3s] bg-[var(--bg-color)] w-[210px] h-[250px] mx-[10px] rounded-2xl flex flex-col px-3 py-1 items-center gap-2 z-[1] shadow-none hover:shadow-lg shadow-black">
      <h1 className="w-full border-b-[1px] border-[#ffffff]">
        {entry.position || "Official"}
      </h1>
      <div className="w-[52px] h-[52px] bg-white rounded-full" />
      <h1 className="text-[13px]">{`${entry.first_name} ${entry.middle_name} ${entry.surname}`}</h1>
      <h1 className="w-full border-b-[1px] border-[#ffffff] text-[11px] truncate">
        {entry.address}
      </h1>
      <h1 className="w-full border-b-[1px] border-[#ffffff] text-[11px]">
        {entry.phone_number}
      </h1>
      <h1 className="w-full border-b-[1px] border-[#ffffff] text-[11px]">
        {entry.email}
      </h1>
      <h1 className="w-full border-b-[1px] border-[#ffffff] text-[11px]">
        {entry.birthday}
      </h1>
      <div className="flex w-full justify-end gap-2 mt-[3px]">
        <ButtonComp2
          text={"Edit"}
          otherStyle={"px-4 py-[1px] rounded-lg"}
          handleClick={handleEdit}
        />
        <ButtonComp2
          text={"Delete"}
          otherStyle={"px-4 py-[1px] rounded-lg"}
          handleClick={async () => {
            await handleDelete(entry.id);
          }}
        />
      </div>
    </div>
  );
}

export default OfficialCard;
