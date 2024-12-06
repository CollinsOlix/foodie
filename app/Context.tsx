import { createContext } from "react";
import { MenuSection } from "./components/types";

const Context = createContext<{
  activeData: MenuSection[];
  userOrderRef: { [key: string]: any };
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  userOrderState: { [key: string]: any };
  setUserOrderState: React.Dispatch<React.SetStateAction<object>>;
  lang?: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}>({});

export default Context;
