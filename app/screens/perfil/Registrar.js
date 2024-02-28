import React, { useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FormRegistro from "../../components/perfil/FormRegistro";
import Toast from 'react-native-easy-toast';

export default function Registrar() {
    const toastRef = useRef();
    return (
        <View>
            <Image
                source={require('../../../assets/img/register.png')}
                resizeMethod="auto"
                style={styles.imagen}
            />
            <View style={styles.formulario}>
                <FormRegistro
                    toastRef={toastRef}
                />
            </View>

            <Toast
                ref={toastRef} position="center" opacity={1.0}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    imagen: {
        width: "100",
        height: 260,
        marginTop: 10,
    },
    formulario: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
})

