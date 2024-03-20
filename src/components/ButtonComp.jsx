import React from "react";

function ButtonComp({ text, handleClick, otherStyle }) {
  return (
    <button
      className={
        "bg-[var(--secondary-color)] px-[30px] py-[5px] rounded-lg font-Nunito text-[19px] " +
        otherStyle
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default ButtonComp;
