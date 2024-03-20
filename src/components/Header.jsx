import React from "react";
import ButtonComp from "./ButtonComp";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-10 py-3 bg-white w-full">
      <h1>BayanTrack</h1>
      <div className="flex items-center gap-6 font-Nunito">
        <ButtonComp
          text={"Login"}
          otherStyle={"bg-transparent text-black font-semibold"}
          handleClick={() => {
            navigate("/");
          }}
        />
        <ButtonComp
          text={"Sign Up"}
          handleClick={() => {
            navigate("/signup");
          }}
        />
      </div>
    </div>
  );
}

export default Header;
