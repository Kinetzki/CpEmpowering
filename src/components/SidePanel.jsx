import React from "react";
import PanelButton from "./PanelButton";
import PanelDropDown from "./PanelDropDown";
import dashboard from "../assets/icons/dashboard.svg";
import barangay from "../assets/icons/barangay.svg";
import resident from "../assets/icons/resident.svg";
import logo from "../assets/icons/logo.png";
import house from "../assets/icons/house.svg";
import { useNavigate } from "react-router-dom";
import ShowResident from "../components/ShowResident";

function SidePanel() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[var(--bg-color)] flex flex-col gap-[30px] px-[30px] min-w-[260px] py-[25px] pl-[30px]">
        <div className="w-full flex items-center justify-center p-1">
          <div className="w-[120px] h-[120px] rounded-full bg-transparent shadow-white/20 shadow-md">
            <img
              src={logo}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
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
          routes={["resident-profiling/1"]}
        />
        <PanelButton
          text={"Purok"}
          icon={house}
          handleClick={() => {
            navigate("/purok/1");
          }}
        />
    </div>
  );
}
export default SidePanel;
