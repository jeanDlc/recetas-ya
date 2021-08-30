import React, { FC } from "react";
import { View } from "./Themed";
import { StyleSheet } from "react-native";
type Props = {
  width?: number;
};
const Separador: FC<Props> = ({ width = 100 }) => {
  return (
    <View
      style={[styles.separador, { width: `${width}%` }]}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};
const styles = StyleSheet.create({
  separador: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
});
export default Separador;
