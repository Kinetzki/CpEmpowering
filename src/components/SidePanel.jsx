import React from "react";
import PanelButton from "./PanelButton";
import PanelDropDown from "./PanelDropDown";
import dashboard from "../assets/icons/dashboard.svg";
import barangay from "../assets/icons/barangay.svg";
import resident from "../assets/icons/resident.svg";
import support from "../assets/icons/support.svg";
import logo from "../assets/icons/logo.png";
import kumintang from "../assets/icons/kumintang.png";
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
              src={kumintang}
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
          text={"Household"}
          icon={house}
          handleClick={() => {
            navigate("/household/1");
          }}
        />
        <PanelButton
          text={"Support"}
          icon={support}
          handleClick={() => {
            navigate("/support");
          }}
        />
    </div>
  );
}
export default SidePanel;
