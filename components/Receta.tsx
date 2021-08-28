import React, { FC } from "react";
import {
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Receta as IReceta } from "../interfaces";
type RecetaProps = {
  receta: IReceta;
};
import { Text as CustomText } from "./Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

const Receta: FC<RecetaProps> = ({ receta }) => {
  const tema = useColorScheme();
  const tintColor = Colors[tema].tint;
  const redirect = () => {
    //TODO: abrir una ventana modal con la receta entera
    console.log("redirect");
  };
  return (
    <>
      <Pressable onPress={redirect} style={classes.container}>
        <CustomText style={classes.title}> {receta.nombre} </CustomText>
        <CustomText style={classes.text}> {receta.descripcion} </CustomText>
        <Image style={classes.img} source={{ uri: receta.img }} />

        <TouchableOpacity
          onPress={redirect}
          style={[classes.btn, { backgroundColor: tintColor }]}
        >
          <Text style={classes.btnText}>Ver receta</Text>
        </TouchableOpacity>
        <View style={classes.divider}></View>
      </Pressable>
    </>
  );
};
const classes = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  img: {
    width: "100%",
    minHeight: 200,
    borderRadius: 5,
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
  },
  btn: {
    width: "100%",
    paddingVertical: 17,
    marginTop: 15,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e1e1e1",
    marginVertical: 20,
  },
});
export default Receta;
