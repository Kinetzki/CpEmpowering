import React from "react";
import Banner from "../components/Banner";
import balagtas from "../assets/icons/balagtas.jpg";
function BarangayInfo() {
  return (
    <div className="w-full bg-white min-h-screen p-2">
      <Banner />
      <div className="w-full h-[90vh] flex gap-[10px] text-[var(--bg-color)] font-semibold px-[50px]">
        <div className="flex flex-col gap-[50px] justify-start w-[80%] pt-[5%]">
          <div className="w-[90%] flex flex-col items-start">
            <h1 className="font-bold text-[35px]">Mission</h1>
            <p>
            To improve the quality of life of the citizens through sustained efforts to attain a balanced agro-industrial development; to generate more employment opportunities and adequately provide the basic infrastructure utilities, facilities and social services necessary for a robust community.
            </p>
          </div>
          <div className="w-[90%] flex flex-col items-start">
            <h1 className="font-bold text-[35px]">Vision</h1>
            <p>
            Internationally recognized progressive, secure, smart and resilient sustainable RRurban (Regional Rural Urban) Port City, engaged in stable agro-industrial development and other profitable businesses, strengthened by state-of-the-art infrastructures, amenities, technologies, and globally competent and responsible citizens while conserving its bio-diverse environment and rich cultural heritage, governed by responsive ethical servant leaders.
            </p>
          </div>
        </div>
        {/* <div className="w-[50%] flex items-center">
          <img src={balagtas} alt="" className="w-[600px] h-[70%]" />
        </div> */}
      </div>
    </div>
  );
}

export default BarangayInfo;
