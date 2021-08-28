import * as React from "react";
import { usePlatillosPrincipales } from "../hooks/usePlatillosPrincipales";
import { RootTabScreenProps } from "../types";
import ListaRecetas from "../components/ListaRecetas";
export default function PlatillosScreen({
  navigation,
}: RootTabScreenProps<"TabPrincipal">) {
  const { platillosPrincipales } = usePlatillosPrincipales();
  return <ListaRecetas recetas={platillosPrincipales} />;
}
