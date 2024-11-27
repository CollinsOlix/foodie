import { createContext } from "react";

const Context = createContext<{
  userOrderRef: { [key: string]: any };
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  userOrderState: { [key: string]: any };
  setUserOrderState: React.Dispatch<React.SetStateAction<object>>;
}>({});

export default Context;
