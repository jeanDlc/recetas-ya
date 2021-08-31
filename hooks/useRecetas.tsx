import { useState, useEffect } from "react";
import platillosPrincipalesJson from "../constants/platillosPrincipales.json";
import postresJson from "../constants/postres.json";
import { Receta } from "../interfaces";
type tipoReceta = "platillo" | "postre";
export const useRecetas = (tipo: tipoReceta) => {
  //para aplicar el filtro
  const [recetas, setRecetas] = useState<Receta[]>([]);
  //para recordar al estado inicial
  const [dataInicial, setDataInicial] = useState<Receta[]>([]);
  const getData = async (): Promise<Receta[]> => {
    //obtiene las recetas (de un API o recurso local)
    let data: Receta[];
    if (tipo == "postre") {
      data = await postresJson;
    } else {
      data = await platillosPrincipalesJson;
    }
    return data;
  };
  useEffect(() => {
    const setearEstados = async () => {
      //obtiene la información y llena las variables de estado
      const data = await getData();
      setRecetas(data);
      setDataInicial(data);
    };
    setearEstados();
  }, []);

  //muestra las recetas que cumplen el filtro
  //retorna la cantidad de resultados
  const filtrar = (text: string): number => {
    if (text.trim() === "") {
      //si no hay consulta, mostrar las recetas originales
      setRecetas(dataInicial);
      return dataInicial.length;
    } else {
      const busqueda = text.toLowerCase().trim();
      const resultados = dataInicial.filter((receta) =>
        receta.nombre.toLowerCase().includes(busqueda)
      );
      setRecetas(resultados);
      return resultados.length;
    }
  };
  return { recetas, filtrar };
};
