import React from "react";

function IconButton({ text, icon, handleClick }) {
  return (
    <div className="flex gap-3" onClick={handleClick}>
      <img src={icon} alt="" />
      {text}
    </div>
  );
}

export default IconButton;
