import { useContext, createContext } from "react";
import { hamburger } from "../assets/icons";

export const MenuContext = createContext({
  icon: hamburger,
  isTransitionEnabled: "false",
  changeIcon: () => {},
  changeTransition: () => {},
});

export const MenuContextProvider = MenuContext.Provider;

export default function useMenu() {
  return useContext(MenuContext);
}
