import React from "react";
import { navLinks } from "../constants";
import useMenu from "../contexts/MenuProvider";

const HamburgerMenu = () => {
  const { changeIcon, changeMenuHidden, isMenuHidden } = useMenu();
  const handleMenu = () => {
    changeIcon();
    changeMenuHidden();
  };
  return (
    <div
      className={`${isMenuHidden} absolute py-3 px-5 right-0 border bg-white w-[80vw] rounded-xl`}
    >
      {navLinks.map((item, index) => (
        <li
          key={item.label}
          className="list-none mt-2 border-b  hover:border-b-[3px] transition-all duration-100 hover:bg-zinc-100 pl-1"
        >
          <a
            href={item.href}
            className="font-montserrat leading-normal text-lg text-slate-gray whitespace-nowrap hover:text-coral-red"
            onClick={handleMenu}
          >
            {item.label}
          </a>
        </li>
      ))}
    </div>
  );
};

export default HamburgerMenu;
