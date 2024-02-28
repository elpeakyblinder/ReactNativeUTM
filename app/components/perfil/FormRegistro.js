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
    const [mostrar2, setMostrar2] = useState(false);
    const [datos, setDatos] = useState(valoresDefault);
    const onSubmit = () => {
        if (isEmpty(datos.email) || isEmpty(datos.password) ||
            isEmpty(datos.repeatedPassword)) {
            console.log("No puedes dejar espacios vacios");
            toastRef.current.show("No puedes dejar espacios vacios");
        }
        else if (!validarEmail(datos.email)) {
            console.log("Estructura del email incorrecta");
            toastRef.current.show("Estructura del email incorrecta");
        }
        else if (datos.password !== datos.repeatedPassword) {
            console.log("Las contraseñas deben ser iguales");
            toastRef.current.show("Las contraseñas deben ser iguales");
        }
        else if (size(datos.password) < 6) {
            console.log("La contraseña debe tener al menos 6 caracteres");
            toastRef.current.show("La contraseña debe tener al menos 6 caracteres");
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password).then(respuesta => {
                console.log(respuesta);
                navigation.navigate("cuentas");
            })
                .catch(err => {
                    toastRef.current.show("No puedes usar un correo repetido, intenta con otro");
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
            <Input
                placeholder="Repetir contraseña"
                containerStyle={style.inputForm}
                password={true}
                secureTextEntry={mostrar2 ? false : true}
                onChange={(e) => onChange(e, "repeatedPassword")}
                rightIcon={
                    <Icon
                        type="material-community-icon"
                        name={mostrar2 ? "visibility" : "visibility-off"}
                        iconStyle={style.icono}
                        onPress={() => setMostrar2(!mostrar2)}
                    />
                }
            />
            <Button
                title="registrar"
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
        repeatedPassword: ""
    };
}

const style = StyleSheet.create({
    formContainer: {
        flex: 1,
        alingItems: 'center',
        marginTop: 10,
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