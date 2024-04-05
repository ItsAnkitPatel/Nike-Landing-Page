import HamburgerMenu from "./HamburgerMenu";
import useMenu from "../contexts/MenuProvider";
const Hamburger = () => {
  const { icon, changeIcon, changeTransition } = useMenu();
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          changeIcon();
          changeTransition();
        }}
      >
        <img src={icon} alt="" width="23px" />
      </div>
      <HamburgerMenu />
    </>
  );
};

export default Hamburger;
