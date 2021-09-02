import * as React from "react";
import ListaRecetas from "../components/ListaRecetas";
import BuscadorRecetas from "../components/BuscadorRecetas";
import { useRecetas } from "../hooks/useRecetas";
import useBuscadorContext from "../hooks/useBuscadorContext";
import Fade from "../components/Fade";
export default function PostresScreen() {
  //trae todos los postres y una función para filtrar con el buscador
  const { recetas: postres, filtrar } = useRecetas("postre");
  const { activo } = useBuscadorContext();

  return (
    <>
      {activo && (
        <Fade duracion={1000} condicion={activo}>
          <BuscadorRecetas filtrar={filtrar} />
        </Fade>
      )}
      <ListaRecetas recetas={postres} />
    </>
  );
}
