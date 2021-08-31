import React, { FC, useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { EvilIcons } from "@expo/vector-icons";

export interface BuscadorProps {
  filtrar: (text: string) => number; //función de filtro externa
}

const BuscadorRecetas: FC<BuscadorProps> = ({ filtrar }) => {
  const [cantResultados, setCantResultados] = useState<number>();
  //estilizar el componente de acuerdo al tema del app
  const tema = useColorScheme();
  const colorPrincipal = Colors[tema].tint;
  //se encarga de filtrar y mostrar la cant de resultados
  const handleFiltro = (texto: string) => {
    const numResultados = filtrar(texto);
    setCantResultados(numResultados);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <EvilIcons style={styles.icon} name="search" size={24} color="black" />
        <TextInput
          selectionColor={colorPrincipal}
          style={styles.input}
          placeholder="Busca una receta"
          onChangeText={(text) => handleFiltro(text)}
        />
      </View>

      {typeof cantResultados === "number" ? (
        <Text style={[styles.contador, { color: colorPrincipal }]}>
          {cantResultados} {cantResultados == 1 ? "resultado" : "resultados"}
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    paddingHorizontal: 10,
    color: "#e1e1e1",
  },
  input: {
    padding: 10,
    flex: 1,
    color: "#525252",
    fontSize: 16,
  },
  contador: {
    marginTop: 10,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 12,
  },
});
export default BuscadorRecetas;
