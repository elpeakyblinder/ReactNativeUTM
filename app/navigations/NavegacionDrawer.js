import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Restaurantes from "../screens/Restaurantes";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Busquedas from "../screens/Busquedas";
import Cuentas from "../screens/perfil/Cuentas";
import Favoritos from "../screens/Favoritos";
import TopRestaurantes from "../screens/TopRestaurantes";
import RutasPerfil from "./RutasPerfil";
const Drawer = createDrawerNavigator();

export default function NavegacionDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigation
            >

                {/*MUESTRA Y VINCULA UN BOTON*/}
                <Drawer.Screen name="Restaurantes" component={Restaurantes} option={{ title: "Restaurantes", drawerIcon: () => <Ionicons name="restaurant" size={24} /> }} />
                <Drawer.Screen name="Busquedas" component={Busquedas} option={{ title: "Busquedas", drawerIcon: () => <Ionicons name="" size={24} /> }} />
                <Drawer.Screen name="Cuentas" component={Cuentas} option={{ title: "Cuentas", drawerIcon: () => <Ionicons name="" size={24} /> }} />
                <Drawer.Screen
                name="cuenta"
                component={RutasPerfil}
                options={{
                    title:"Cuenta",
                    drawerIcon:()=><Ionicons name="person" size={24}/>
                }}
                />
                <Drawer.Screen name="Favoritos" component={Favoritos} option={{ title: "Favoritos", drawerIcon: () => <Ionicons name="" size={24} /> }} />
                <Drawer.Screen name="Top Restaurantes" component={TopRestaurantes = {}} option={{ title: "Top", drawerIcon: () => <Ionicons name="" size={24} /> }} />
            </Drawer.Navigation>
        </NavigationContainer>
    )
}