import * as React from "react";
import ListaRecetas from "../components/ListaRecetas";
import BuscadorRecetas from "../components/BuscadorRecetas";
import { useRecetas } from "../hooks/useRecetas";
export default function PostresScreen() {
  //trae todos los postres y una función para filtrar con el buscador
  const { recetas: postres, filtrar } = useRecetas("postre");
  return (
    <>
      <BuscadorRecetas filtrar={filtrar} />
      <ListaRecetas recetas={postres} />
    </>
  );
}
