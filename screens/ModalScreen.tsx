import * as React from "react";
import { StyleSheet } from "react-native";
import Separador from "../components/Separador";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function ModalScreen() {
  const tema = useColorScheme();
  const colorPrincipal = Colors[tema].tint;
  const banderaPeruana = "\uD83C\uDDF5\uD83C\uDDEA" + " ";
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colorPrincipal }]}>Recetas ya!</Text>
      <Separador width={80} />
      <Text style={styles.texto}>
        Aplicación de recetas peruanas {banderaPeruana}
      </Text>
      <Text style={styles.texto}>
        Aquí podrás encontrar las mejores recetas de postres y platillos
        principales de la gastronomía peruana
      </Text>
      <Text style={styles.texto}>Desarrollado con React Native</Text>
      <Text style={styles.texto}>Por JeanDLC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    marginBottom: 10,
  },
});
