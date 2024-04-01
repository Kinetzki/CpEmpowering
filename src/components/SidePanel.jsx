import React from "react";
import PanelButton from "./PanelButton";
import PanelDropDown from "./PanelDropDown";
import dashboard from "../assets/icons/dashboard.svg";
import barangay from "../assets/icons/barangay.svg";
import resident from "../assets/icons/resident.svg";
import news from "../assets/icons/news.svg";
import { useNavigate } from "react-router-dom";

function SidePanel() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[var(--bg-color)] flex flex-col gap-[30px] px-[30px] rounded-[15px] min-w-[260px] py-[25px] pl-[30px]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[120px] h-[120px] rounded-full bg-white">
          <img src="" alt="" />
        </div>
      </div>

      <PanelButton
        text={"Dashboard"}
        icon={dashboard}
        handleClick={() => {
          navigate("/dashboard");
        }}
      />
      <PanelDropDown
        text={"Barangay"}
        icon={barangay}
        items={["Barangay Information", "Barangay Officials"]}
        routes={["barangay-info", "barangay-officials"]}
      />
      <PanelDropDown
        text={"Resident"}
        icon={resident}
        items={["Resident Profiling"]}
        routes={["resident-profiling"]}
      />
      <PanelButton
        text={"News"}
        icon={news}
        handleClick={() => {
          navigate("/news");
        }}
      />
    </div>
  );
}

export default SidePanel;
