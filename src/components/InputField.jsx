import React from "react";

function InputField({ children, type, placeHolder }) {
  return (
    <div className="border-solid border-slate-800 border-b-[1px] bg-transparent w-full flex items-center p-2 gap-2">
      {children}
      <input type={type} placeholder={placeHolder} className="bg-transparent focus:outline-none w-full font-Nunito placeholder:text-[#000000b6]" />
    </div>
  );
}

export default InputField;
