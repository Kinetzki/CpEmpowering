import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import {
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/residents/stats",
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
    <div className="w-full bg-white min-h-screen p-2 box-border  ">
      <Banner />
      <div className="flex items-center w-full">
        <h1 className="text-[var(--bg-color)] font-Outfit text-[30px] py-[30px] pl-[50px] font-semibold w-[450px]">
          Barangay Statistics
        </h1>
        <hr className="border-[var(--bg-color)] border-[1px] w-[100%]" />
      </div>
      <div className="w-full flex py-5 justify-center gap-10 items-start h-[90vh]">
        {/* Container */}
        <div className="w-[600px] h-[450px] border-[1px] border-[#0000006f] rounded-xl px-3 py-4">
          <h1 className="text-[#000000] -translate-y-[190%]">
            Population Age Statistics
          </h1>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <BarChart data={stats.ranges}>
              <Bar dataKey={"count"} fill="#165165" />
              <XAxis dataKey={"range"} fontSize={"12px"} />
              <YAxis />
              <Legend />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[400px] h-[450px] flex items-center justify-center border-[1px] border-[#0000006f] rounded-xl flex-col">
          <h1 className="text-[#000000] -translate-y-[110%] -translate-x-[60%]">
            Population Sex Statistics
          </h1>
          <ResponsiveContainer width={"50%"}>
            <BarChart
              data={[
                {
                  total_female: stats.total_female,
                  total_male: stats.total_male,
                },
              ]}
            >
              <Bar dataKey={"total_male"} fill="#165165" />
              <Bar dataKey={"total_female"} fill="#FF5772" />
              <Legend />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
