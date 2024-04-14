import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SidePanel from "../components/SidePanel";
import Dashboard from "../panels/Dashboard";
import BarangayOfficials from "../panels/BarangayOfficials";
import ResidentProfiling from "../panels/ResidentProfiling";
import BarangayInfo from "../panels/BarangayInfo";
import HouseHold from "../panels/HouseHold";

function Home() {
  const { panel } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full min-h-screen flex">
      <SidePanel />
      {panel === "dashboard" && <Dashboard />}
      {panel === "barangay-officials" && <BarangayOfficials />}
      {panel === "resident-profiling" && <ResidentProfiling />}
      {panel === "barangay-info" && <BarangayInfo />}
      {panel === "households" && <HouseHold />}
    </div>
  );
}

export default Home;
