import React from "react";

function ResidentItem() {
  return (
    <div className="flex text-black w-full gap-3 h-[55px] items-center border-b-[1px] border-[#000000]">
      <input type="checkbox" className=" bg-black w-[50px]" />
      <h1 className="w-[200px]">Paul Kenneth Quinto</h1>
      <h1 className="w-[70px]">22</h1>
      <h1 className="w-[220px]">kinetzki2k20@gmail.com</h1>
      <h1 className="w-[205px]">Makati City, Batangas</h1>
      <h1 className="w-[120px]">09565176896</h1>
      <h1 className="w-[90px]">Actions</h1>
    </div>
  );
}

export default ResidentItem;
