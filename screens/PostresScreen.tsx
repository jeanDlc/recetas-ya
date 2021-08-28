import * as React from "react";
import { usePostres } from "../hooks/usePostres";
import ListaRecetas from "../components/ListaRecetas";
export default function PostresScreen() {
  const { postres } = usePostres();
  return <ListaRecetas recetas={postres} />;
}
