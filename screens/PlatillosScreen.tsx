import * as React from "react";
import { RootTabScreenProps } from "../types";
import ListaRecetas from "../components/ListaRecetas";
import BuscadorRecetas from "../components/BuscadorRecetas";
import { useRecetas } from "../hooks/useRecetas";
import Fade from "../components/Fade";
import useBuscadorContext from "../hooks/useBuscadorContext";
export default function PlatillosScreen({
  navigation,
}: RootTabScreenProps<"TabPrincipal">) {
  //trae todos los platillos y una función para filtrar con el buscador
  const { recetas: platillosPrincipales, filtrar } = useRecetas("platillo");
  const { activo } = useBuscadorContext();

  return (
    <>
      {activo && (
        <Fade condicion={activo} duracion={1000}>
          <BuscadorRecetas filtrar={filtrar} />
        </Fade>
      )}
      <ListaRecetas recetas={platillosPrincipales} />
    </>
  );
}
