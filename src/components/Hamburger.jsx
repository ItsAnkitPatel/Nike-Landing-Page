import React, { useState } from "react";
import { hamburger, xmark } from "../assets/icons";
const Hamburger = () => {
  const [icon, setIcon] = useState(hamburger);
  const changeMenuBar = () => {
    if (icon !== xmark) {
      return setIcon(xmark);
    }
    setIcon(hamburger);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={changeMenuBar}>
        <img src={icon} alt="" width="23px" />
      </div>
    </>
  );
};

export default Hamburger;
