import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";
import { View } from "../components/Themed";
import Receta from "../components/Receta";
import { Receta as IReceta } from "../interfaces";
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
