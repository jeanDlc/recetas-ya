import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text } from "../Themed";
export interface PropsItem {
  item: string;
  numeracion?: number;
}

const ItemLista: React.FC<PropsItem> = ({ item, numeracion }) => {
  const tema = useColorScheme();
  const colorPrincipal = Colors[tema].tint;
  const vinieta = "\u2022" + " "; // es el punto de una lista : •
  //si la lista es enumerada --> numeracion es de tipo number, sino , undefined
  return (
    <View style={styles.container}>
      <Text style={[styles.numeracion, { color: colorPrincipal }]}>
        {typeof numeracion === "number" ? numeracion + 1 : vinieta}
      </Text>

      <Text style={styles.text}>{item.trim()} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 8,
  },
  numeracion: {
    paddingRight: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  text: {
    flex: 1,
  },
});
export default ItemLista;
