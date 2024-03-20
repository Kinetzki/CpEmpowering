import React from "react";
import Header from "../components/Header";
import ButtonComp from "../components/ButtonComp";
import InputField from "../components/InputField";
import mail from "../assets/icons/mail.svg";
import lock from "../assets/icons/lock.svg";
import BgCircle from "../components/BgCircle";

function LogIn() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start overflow-hidden relative">
      <BgCircle position={"bottom-[-67%] right-[2%] z-[-1]"}/>
      <BgCircle position={"bottom-[-23%] right-[-43%] z-[-2] border-[#2788d8]"}/>
      <BgCircle position={"bottom-[-90%] left-[-5%] z-[-2] border-[#2788d8]"}/>
      <Header />
      <div className="w-full flex items-center justify-center mt-[4%]">
        <div className="flex flex-col items-center gap-3 bg-white text-black px-[50px] py-[30px] rounded-xl w-[450px] h-[460px] ">
          <h1 className="font-Outfit text-[20px]">Login</h1>
          <div className="flex flex-col gap-10 w-full mt-[50px]">
            {/* <InputField placeHolder={"Enter your email/username"}/>
            <InputField placeHolder={"Enter your password"}/> */}
            <InputField placeHolder={"Enter your email / username"} type={"text"}>
              <img src={mail} alt="" className="w-[20px] h-[20px]" />
            </InputField>
            <InputField placeHolder={"Enter your password"} type={"password"}>
              <img src={lock} alt="" className="w-[20px] h-[20px]" />
            </InputField>
          </div>
          <div className="flex justify-between w-full text-[12px]">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" className=""/>
              <h1>Remember me</h1>
            </div>
            <h1>Forgot Password?</h1>
          </div>
          <div className="w-full flex gap-1 justify-center mt-[20px] text-[12px]">
            <h1>Need an account?</h1>
            <h1>Signup</h1>
          </div>
          <ButtonComp text={"Login Now"} otherStyle={"font-Nunito mt-[20px] text-[15px] font-bold px-[50px] text-white py-[10px]"} />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
