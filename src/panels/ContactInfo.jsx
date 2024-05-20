import React from "react";
import Banner from "../components/Banner";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";

function ContactInfo() {
  return (
    <div className="w-full bg-white min-h-screen p-2 flex flex-col">
      <Banner />
      <div className="flex items-center flex-col justify-center h-full gap-5 -translate-y-[30px]">
        <h1 className="text-center text-[var(--bg-color)] font-Outfit text-[30px]">
          For inquiries contact:{" "}
        </h1>
        <div className="flex gap-5 px-10 justify-center">
          <div className="text-white bg-[var(--bg-color)] w-[250px] flex flex-col items-center gap-2 rounded-xl p-5">
            <img src={phone} alt="" className="w-[50px] h-[50px]" />
            <p className="text-center font-bold">Engr. LAILA A. CONTRERAS</p>
            <p className="font-semibold">CURSOR Adviser</p>
            <p className="font-semibold">09672731901</p>
          </div>

          <div className="text-white bg-[var(--bg-color)] w-[250px] flex flex-col items-center gap-2 rounded-xl p-5 justify-center">
            <img src={email} alt="" className="w-[50px] h-[50px]" />
            <p className="text-center font-bold">CURSOR - Alangilan</p>
            <p className="font-semibold text-[12px]">
              cursoralangilan@g.batstate-u.edu.ph
            </p>
          </div>

          <div className="text-white bg-[var(--bg-color)] w-[250px] flex flex-col items-center gap-2 rounded-xl p-5">
            <img src={phone} alt="" className="w-[50px] h-[50px]" />
            <p className="text-center font-bold">JORIEL LAURENCE S. SINGH</p>
            <p className="font-semibold">Project Head</p>
            <p className="font-semibold">09485707761</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
