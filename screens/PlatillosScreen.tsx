import * as React from "react";
import { RootTabScreenProps } from "../types";
import ListaRecetas from "../components/ListaRecetas";
import BuscadorRecetas from "../components/BuscadorRecetas";
import { useRecetas } from "../hooks/useRecetas";
export default function PlatillosScreen({
  navigation,
}: RootTabScreenProps<"TabPrincipal">) {
  //trae todos los platillos y una función para filtrar con el buscador
  const { recetas: platillosPrincipales, filtrar } = useRecetas("platillo");

  return (
    <>
      <BuscadorRecetas filtrar={filtrar} />
      <ListaRecetas recetas={platillosPrincipales} />
    </>
  );
}
