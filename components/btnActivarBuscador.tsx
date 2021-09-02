import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import useBuscadorContext from "../hooks/useBuscadorContext";
export interface BtnActivarBuscadorProps {}

const BtnActivarBuscador: FC = () => {
  const { toogle, activo } = useBuscadorContext();
  const tema = useColorScheme();
  const colorPrincipal = Colors[tema].tint;
  return (
    <TouchableOpacity onPress={toogle} style={defStyles.btn}>
      {activo ? (
        <AntDesign name="close" size={24} color={colorPrincipal} />
      ) : (
        <FontAwesome name="search" size={24} color={colorPrincipal} />
      )}
    </TouchableOpacity>
  );
};
const defStyles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    marginHorizontal: 15,
  },
});
export default BtnActivarBuscador;
