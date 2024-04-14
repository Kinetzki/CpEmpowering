import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";

function HouseHold() {
  const [households, setHouseholds] = useState([]);

  useEffect(() => {
    const fetchHouseholds = async () => {
      const response = await axios.get(
        "https://jacobdfru.pythonanywhere.com/api/get-household",
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
    };
    fetchHouseholds();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen p-2">
      <Banner />
      <div></div>
    </div>
  );
}

export default HouseHold;
