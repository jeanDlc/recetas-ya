import React, { useState, FC } from "react";
import { createContext } from "react";
export interface IContextProps {
  activo: boolean;
  toogle: () => void;
}
export const BuscadorContext = createContext<IContextProps>(
  {} as IContextProps
);

const BuscadorState: FC = ({ children }) => {
  const [activo, setActivo] = useState<boolean>(false);
  const toogle = (): void => {
    const estado = activo;
    setActivo(!estado);
  };
  return (
    <BuscadorContext.Provider value={{ activo, toogle }}>
      {children}
    </BuscadorContext.Provider>
  );
};
export default BuscadorState;
