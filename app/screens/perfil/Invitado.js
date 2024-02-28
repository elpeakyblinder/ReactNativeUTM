import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Invitado() {
    const navegacion = useNavigation();
    return (
        <ScrollView centerContent={true} style={styles.body}>
            <Image
                source={require("../../../assets/img/sticker-png-background-orange-instagram-tnt-clan-games-recreation-thumbnail.png")}
                resizeMode="cover"
                style={styles.imagen}
            />
            <Text style={styles.titulo}>Ingresa a tu perfil</Text>
            <View>
                <Button
                    title="Inicia Sesión"
                    type="solid"
                    buttonStyle={{
                        backgroundColor: 'rgba(153, 102, 50, 1)'
                    }}
                    onPress={() => navegacion.navigate("login")}
                    // onPress={() => console.log("hiciste click...")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        marginLeft: 30,
        marginRight: 30,
    },
    imagen: {
        height: 320,
        width: "100%",
        marginBottom: 30,
        marginTop: 20,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    parrafo: {
        textAlign: "justify",
        marginBottom: 20,
    }
});
