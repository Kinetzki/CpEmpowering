import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import { Bar, BarChart, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function Dashboard() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jacobdfru.pythonanywhere.com/api/residents/stats",
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setStats(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-white min-h-screen p-2 box-border">
      <Banner />
      <div className="w-full flex py-10 justify-center">
        {/* Container */}
        <div className="w-[500px] h-[400px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={stats.ranges}>
              <Bar dataKey={"count"} fill="#165165"/>
              <XAxis dataKey={"range"} fontSize={"12px"}/>
              <YAxis/>
              <Legend/>
              <Tooltip/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[500px] h-[400px]">
          <ResponsiveContainer>
            <PieChart width={"100%"} height={"100%"}>
              <Pie fill="#165165" dataKey={"male"} data={stats.ranges} cx="50%" cy="50%" label/>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
