import { createContext } from "react";
import { AppContextType } from "./type";

export const DataContext = createContext<{
  data: AppContextType;
  setData: React.Dispatch<React.SetStateAction<AppContextType>>;
} | null>(null);
