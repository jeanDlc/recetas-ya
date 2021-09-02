import React, { useContext } from "react";
import {
  BuscadorContext,
  IContextProps,
} from "../context/buscador/BuscadorState";
const useBuscadorContext = (): IContextProps => {
  const context = useContext(BuscadorContext);
  return context;
};
export default useBuscadorContext;
