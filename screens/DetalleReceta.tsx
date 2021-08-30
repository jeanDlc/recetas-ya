import * as React from "react";
import { FC } from "react";
import { StatusBar, StyleSheet, ScrollView } from "react-native";
import ListaPersonalizada from "../components/instrucciones/ListaPersonalizada";
import { Text, View } from "../components/Themed";
import { Receta as IReceta } from "../interfaces";
import { RootStackScreenProps } from "../types";
import { Image } from "react-native";
import Separador from "../components/Separador";
const DetalleReceta: FC<RootStackScreenProps<"DetalleReceta">> = ({
  route,
}) => {
  const receta: IReceta = route.params.receta;

  return (
    <ScrollView>
      <StatusBar backgroundColor="white" />
      <View style={styles.container}>
        <Text style={styles.title}>Receta de {receta.nombre} </Text>
        <Text style={styles.text}> {receta.descripcion} </Text>
        <Image style={styles.img} source={{ uri: receta.img }} />
        <Separador />

        <Text style={styles.sub}>Ingredientes </Text>
        <ListaPersonalizada enumerada={false} lista={receta.ingredientes} />
        <Separador />

        <Text style={styles.sub}>Instrucciones </Text>
        <ListaPersonalizada enumerada={true} lista={receta.instrucciones} />
        <Separador />
        {/* Use a light status bar on iOS to account for the black space above the modal */}
      </View>
    </ScrollView>
  );
};
export default DetalleReceta;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 25,
    minHeight: "100%",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  sub: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  img: {
    width: "100%",
    minHeight: 200,
    borderRadius: 5,
  },
  text: {
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
