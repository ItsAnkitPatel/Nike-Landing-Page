import HamburgerMenu from "./HamburgerMenu";
import useMenu from "../contexts/MenuProvider";
const Hamburger = () => {
  const { icon, changeIcon, changeMenuHidden } = useMenu();
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          changeIcon();
          changeMenuHidden();
        }}
      >
        <img src={icon} alt="" width="23px" />
      </div>
      <HamburgerMenu />
    </>
  );
};

export default Hamburger;
