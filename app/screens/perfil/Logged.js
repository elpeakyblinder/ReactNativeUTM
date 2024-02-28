import React from "react";
import {View,Text, Button}from "react-native";
import firebase from 'firebase/compat/app';

export default function Logged(){
    return(
        <View>
            <Text>Has iniciado sesion correctamente</Text>
            <Button
            title='Cerrar sesion'
            onPress={()=>firebase.auth().signOut()}
            />
        </View>
    );
}