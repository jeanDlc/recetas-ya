import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "../components/Themed";
import Receta from "../components/Receta";
import { Receta as IReceta } from "../interfaces";
import { FC } from "react";
type PropsListaRecetas = {
  recetas: IReceta[];
};
const ListaRecetas: FC<PropsListaRecetas> = ({ recetas }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recetas}
        renderItem={({ item }) => <Receta receta={item} />}
        keyExtractor={(item) => item.nombre}
      />
    </View>
  );
};
export default ListaRecetas;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
