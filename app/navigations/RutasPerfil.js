import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cuentas from "../screens/perfil/Cuentas"
import Login from "../screens/perfil/Login";
import Registro from "../screens/perfil/Registrar"
const Stack = createNativeStackNavigator();

export default function RutasPerfil() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="cuentas"
                component={Cuentas}
                options={{ title: "Mi cuenta" }}
            />

            <Stack.Screen
                name="registrar"
                component={Registro}
                options={{ title: "Registrado" }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{ tittle: "Iniciar Sesion" }}
            />
        </Stack.Navigator>
    );
}