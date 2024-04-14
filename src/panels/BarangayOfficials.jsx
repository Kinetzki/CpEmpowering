import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import ButtonComp2 from "../components/ButtonComp2";
import OfficialCard from "../components/OfficialCard";
import { useParams } from "react-router-dom";
import AddOfficials from "../components/AddOfficials";
import axios from "axios";
import Loader from "../components/Loader";

function BarangayOfficials() {
  const [showAdd, setShowAdd] = useState(false);
  const [officials, setOfficials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newOfficial, setNewOfficial] = useState({});
  
  const fetchOfficials = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://jacobdfru.pythonanywhere.com/api/officials/list",
      {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      }
    );
    if (response.status === 200) {
      setOfficials(response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchOfficials();
  }, []);

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
          <ButtonComp2
            text={"Add"}
            otherStyle={"px-[30px] py-[6px] rounded-lg"}
            handleClick={() => {
              setShowAdd(!showAdd);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 relative overflow-y-auto h-[80vh] p-5">
        {showAdd && <AddOfficials />}
        {isLoading && <Loader />}
        {/* Render Officials Cards */}

        {officials?.map((official, i) => {
          return <OfficialCard />;
        })}
      </div>
      {/* <div className="w-full bg-black h-full"></div> */}
    </div>
  );
}

export default BarangayOfficials;
