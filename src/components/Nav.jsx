import { headerLogo } from "../assets/images";
import { hamburger, xmark } from "../assets/icons";
import { navLinks } from "../constants";
import Hamburger from "./Hamburger";
import { MenuContextProvider } from "../contexts/MenuProvider";
import { useState } from "react";
const Nav = () => {
  const [icon, setIcon] = useState(hamburger);
  const [isMenuHidden, setIsMenuHidden] = useState("hidden");

  const changeIcon = () => {
    if (icon === hamburger) {
      setIcon(xmark);
    } else {
      setIcon(hamburger);
    }
  };
  const changeMenuHidden = () => {
    if(isMenuHidden === 'hidden'){
      setIsMenuHidden('')
    }else{
      setIsMenuHidden('hidden')
    }
  };
  return (
    <MenuContextProvider
      value={{ icon, isMenuHidden, changeIcon, changeMenuHidden }}
    >
      <header className="padding-x py-8 fixed z-20 w-full bg-white">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block relative">
            <Hamburger />
          </div>
        </nav>
      </header>
    </MenuContextProvider>
  );
};

export default Nav;
