import { createContext } from "react";
import { Language, MenuSection } from "./components/types";

const Context = createContext<{
  activeData: MenuSection[];
  orderRef: { [key: string]: any };
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  orderState: { [key: string]: any };
  setOrderState: React.Dispatch<React.SetStateAction<object>>;
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
}>({
  activeData: [],
  orderRef: {},
  activeItem: "",
  setActiveItem: () => {},
  orderState: {},
  setOrderState: () => {},
  lang: "en",
  setLang: () => {},
});

export default Context;
