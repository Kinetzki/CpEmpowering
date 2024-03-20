import React from "react";
import PanelButton from "./PanelButton";
import PanelDropDown from "./PanelDropDown";
import dashboard from "../assets/icons/dashboard.svg";
import barangay from "../assets/icons/barangay.svg";
import resident from "../assets/icons/resident.svg";
import news from "../assets/icons/news.svg";

function SidePanel() {
  return (
    <div className="h-screen bg-[var(--bg-color)] flex flex-col gap-[40px] px-[30px] rounded-[15px] min-w-[240px] py-[25px] pl-[30px]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-full bg-white">
          <img src="" alt="" />
        </div>
      </div>
      <PanelButton text={"Dashboard"} icon={dashboard} />
      <PanelDropDown text={"Barangay"} icon={barangay} items={["Barangay Information", "Barangay Officials"]}/>
      <PanelDropDown text={"Resident"} icon={resident} items={["Resident Reports", "Resident Profiling"]}/>
      <PanelButton text={"News"} icon={news} />
    </div>
  );
}

export default SidePanel;
