import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validarEmail } from "../../utils/validaciones";
import { size, isEmpty } from "lodash";
import firebase from 'firebase/compat/app';
import { useNavigation } from "@react-navigation/native";

export default function FormRegistro(toast) {
    const navigation = useNavigation();
    const { toastRef } = toast;
    const [mostrar, setMostrar] = useState(false);
    const [datos, setDatos] = useState(valoresDefault);
    const onSubmit = () => {
        //Verificamos que no se envíen datos vacíos
        if (isEmpty(datos.email) || isEmpty(datos.password)) {
        }//Validados la estructura del email
        else if (!validarEmail(datos.email)) {
            console.log("Estructura del email incorrecta");
        }//Validamos que las contraseñas sean iguales
        else {
            firebase.auth().signInWithEmailAndPassword(datos.email, datos.password).then(respuesta => {
                console.log(respuesta);
                navigation.navigate("cuentas");
            })
                .catch(err => {
                    toastRef.current.show("No es posible iniciar sesion");
                });
        }
    };
    const onChange = (e, type) => {
        setDatos({ ...datos, [type]: e.nativeEvent.text });
    }
    return (
        <View style={StyleSheet.formContainer}>
            <Input
                placeholder="Correo Electrónico"
                containerStyle={StyleSheet.inputForm}
                onChange={(e) => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community-icon"
                        name="alternate-email"
                        iconStyle={style.icono}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={style.inputForm}
                password={true}
                secureTextEntry={mostrar ? false : true}
                onChange={(e) => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community-icon"
                        name={mostrar ? "visibility" : "visibility-off"}
                        iconStyle={style.icono}
                        onPress={() => setMostrar(!mostrar)}
                    />
                }
            />
            <Button
                title="iniciar sesion"
                containerStyle={style.btnContainer}
                buttonStyle={style.btn}
                onPress={() => onSubmit()}
            />
        </View>
    );
}

function valoresDefault() {
    return {
        email: "",
        password: "",
    };
}

const style = StyleSheet.create({
    formContainer: {
        flex: 1,
        alingItems: 'center',
        marginTop: 10
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    btnContainer: {
        marginTop: 20,
        width: "100%"
    },
    btn: {
        backgroundColor: "#996632"
    },
    icono: {
        color: "#c1c1c1"
    }
}
)