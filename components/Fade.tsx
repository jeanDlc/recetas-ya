import React, { useEffect, useRef, FC } from "react";
import { Animated } from "react-native";
export interface FadeProps {
  duracion: number; //ms que durará la animación
  condicion: boolean; // se muestra o no
}

const Fade: FC<FadeProps> = ({ duracion, condicion, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duracion,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duracion,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    //dependiendo de la condición, se mostrará o no el componente children
    if (condicion) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [condicion]);
  return (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  );
};

export default Fade;
