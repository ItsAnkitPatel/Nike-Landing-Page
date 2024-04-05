import { navLinks } from "../constants";
import useMenu from "../contexts/MenuProvider";

const HamburgerMenu = () => {
  const { changeIcon, changeTransition, isTransitionEnabled } = useMenu();

  const transitionClass = "opacity-100";
  const handleMenu = (event) => {
    event.stopPropagation();
    changeIcon();
    changeTransition();
  };
  return (
    <div
      className={`duration-500 ${
        isTransitionEnabled ? transitionClass : "-translate-y-[100%] opacity-0"
      }  absolute py-3 px-5 right-0 border bg-white w-[80vw] rounded-xl `}
      onClick={handleMenu}
    >
      {navLinks.map((item) => (
        <li
          key={item.label}
          className="list-none mt-2 border-b  hover:border-b-[3px] transition-all duration-100 hover:bg-zinc-100 pl-1"
        >
          <a
            href={item.href}
            className="font-montserrat leading-normal text-lg text-slate-gray whitespace-nowrap hover:text-coral-red block"
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
