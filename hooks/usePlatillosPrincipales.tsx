import { useState, useEffect } from "react";
import platillosPrincipalesJson from "../constants/platillosPrincipales.json";
import { Receta } from "../interfaces";
export const usePlatillosPrincipales = () => {
  const [platillosPrincipales, setPlatillosPrincipales] = useState<Receta[]>(
    []
  );
  useEffect(() => {
    setPlatillosPrincipales(platillosPrincipalesJson);
  }, []);
  return { platillosPrincipales };
};
