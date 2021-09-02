/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import PlatillosScreen from "../screens/PlatillosScreen";
import PostresScreen from "../screens/PostresScreen";
import DetalleReceta from "../screens/DetalleReceta";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import BtnActivarBuscador from "../components/btnActivarBuscador";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const tema = useColorScheme();
  const colorPrincipal = Colors[tema].tint;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="DetalleReceta"
        component={DetalleReceta}
        options={{
          title: "Detalle de Receta",
          headerStyle: {
            backgroundColor: colorPrincipal,
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabPrincipal"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabPrincipal"
        component={PlatillosScreen}
        options={({ navigation }: RootTabScreenProps<"TabPrincipal">) => ({
          title: "Principales",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color={color}
            />
          ),
          headerRight: () => <BtnActivarBuscador />,
          headerTitleStyle: {
            color: Colors[colorScheme].text,
            fontWeight: "bold",
          },
        })}
      />
      <BottomTab.Screen
        name="TabPostres"
        component={PostresScreen}
        options={{
          title: "Postres",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cupcake" size={24} color={color} />
          ),
          headerTitleStyle: {
            color: Colors[colorScheme].text,
            fontWeight: "bold",
          },
          headerRight: () => <BtnActivarBuscador />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
