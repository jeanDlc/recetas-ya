import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Instruccion from "./ItemLista";
export interface Props {
  lista: string[];
  enumerada: boolean; //la lista es o no enumerada
}

const ListaPersonalizada: FC<Props> = ({ lista, enumerada }) => {
  return (
    <View style={styles.container}>
      {lista.map((item, index) => (
        <Instruccion
          key={index}
          numeracion={enumerada ? index : undefined}
          item={item}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default ListaPersonalizada;
