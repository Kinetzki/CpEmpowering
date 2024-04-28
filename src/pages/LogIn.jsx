import React, { useState } from "react";
import Header from "../components/Header";
import ButtonComp from "../components/ButtonComp";
import InputField from "../components/InputField";
import mail from "../assets/icons/mail.svg";
import lock from "../assets/icons/lock.svg";
import BgCircle from "../components/BgCircle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [username, setUsername] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    console.log(e.target.value);
    setPasswrd(e.target.value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    if (username && passwrd) {
      console.log({ username, passwrd });
      const data = {
        username: username,
        password: passwrd,
      };
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          data
        );
        if (response.data !== "Incorrext username or passwordoh ") {
          console.log(response);
          const token = response.data.token;
          sessionStorage.setItem("token", token);
          navigate("/dashboard");
          setCorrect(false);
        } else {
          setCorrect(true);
        }
      } catch (err) {
        console.error(err);
        setCorrect(true);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-start overflow-hidden relative">
      <BgCircle position={"bottom-[-67%] right-[2%] z-[-1]"} />
      <BgCircle
        position={"bottom-[-23%] right-[-43%] z-[-2] border-[#2788d8]"}
      />
      <BgCircle position={"bottom-[-90%] left-[-5%] z-[-2] border-[#2788d8]"} />
      {/* <Header /> */}
      <div className="w-full flex items-center justify-center mt-[4%]">
        <div className="flex flex-col items-center gap-3 bg-white text-black px-[50px] py-[30px] rounded-xl w-[450px] h-[460px] relative">
          <h1 className="font-Outfit text-[20px]">Login</h1>
          {correct && (
            <div className="absolute top-0 translate-y-[70px] bg-[#F5656561] border-[1px] border-[#FF000061] px-[50px] py-[10px] rounded-md">
              <h1>Incorrect username or password</h1>
            </div>
          )}
          <div className="flex flex-col gap-10 w-full mt-[50px]">
            {/* <InputField placeHolder={"Enter your email/username"}/>
            <InputField placeHolder={"Enter your password"}/> */}
            <InputField
              placeHolder={"Enter your email / username"}
              type={"text"}
              onChange={handleUser}
            >
              <img src={mail} alt="" className="w-[20px] h-[20px]" />
            </InputField>
            <InputField
              placeHolder={"Enter your password"}
              type={"password"}
              onChange={handlePass}
              onEnter={async (e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                  await handleLogin();
                }
              }}
            >
              <img src={lock} alt="" className="w-[20px] h-[20px]" />
            </InputField>
          </div>
          {/* <div className="flex justify-between w-full text-[12px]">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" className=""/>
              <h1>Remember me</h1>
            </div>
            <h1>Forgot Password?</h1>
          </div>
          <div className="w-full flex gap-1 justify-center mt-[20px] text-[12px]">
            <h1>Need an account?</h1>
            <h1>Signup</h1>
          </div> */}
          <ButtonComp
            text={isLoading ? "Loading..." : "Login Now"}
            otherStyle={
              "font-Nunito mt-[20px] text-[15px] font-bold px-[50px] text-white py-[10px]"
            }
            handleClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
