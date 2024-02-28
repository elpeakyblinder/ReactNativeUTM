import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurantes from "../screens/Restaurantes";
import Favoritos from "../screens/Favoritos";
import RutasPerfil from "./RutasPerfil";
import Busquedas from "../screens/Busquedas";
import TopRestaurantes from "../screens/TopRestaurantes";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Cuenta"
                screenOptions={({ route }) => ({
                    tabBarInactiveTintColor: "#52585E",
                    tabBarActiveTintColor: "00a680",
                    tabBarIcon: ({ color }) => opciones(route, color),
                })}
            >
                <Tab.Screen name="Restaurantes" component={Restaurantes} options={{ title: "Restaurantes" }} />
                <Tab.Screen name="Favoritos" component={Favoritos} options={{ title: "Favoritos" }} />
                <Tab.Screen name="Cuentas" component={RutasPerfil} options={{ title: "Cuentas", headerShown: false }} />
                <Tab.Screen name="Busquedas" component={Busquedas} options={{ title: "Busquedas" }} />
                <Tab.Screen name="TopRestaurantes" component={TopRestaurantes} options={{ title: "Top" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function opciones(ruta, color) {
    let iconName;
    switch (ruta.name) {
        case "Restaurantes":
            iconName = "home";
            break;
        case "Favoritos":
            iconName = "star";
            break;
        case "Cuentas":
            iconName = "account-circle";
            break;
        case "Busquedas":
            iconName = "search";
            break;
        case "TopRestaurantes":
            iconName = "bear";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-comunity" name={iconName} size={22} color={color} />
    )
}
