import React from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import ButtonComp2 from "../components/ButtonComp2";
import OfficialCard from "../components/OfficialCard";

function BarangayOfficials() {
  return (
    <div className="w-full bg-white min-h-screen p-2 flex flex-col gap-2">
      <Banner />
      <div className="px-[20px] flex items-center mt-[2px] gap-5 w-full box-border justify-around">
        <h1 className="text-[var(--bg-color)] font-bold min-w-[140px]">
          Barangay Officials
        </h1>
        <hr className="w-full border-[var(--bg-color)]" />
        <div className="flex gap-5">
          <Dropdown text={"Files"} items={["Import Data", "Export Data"]} />
          <Dropdown text={"Sort"} items={["Name", "Age"]} />
          <ButtonComp2 text={"Add"} otherStyle={"px-[30px] py-2 rounded-lg"} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
        <OfficialCard/>
      </div>
      {/* <div className="w-full bg-black h-full"></div> */}
    </div>
  );
}

export default BarangayOfficials;
