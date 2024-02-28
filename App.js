import NavegacionTab from "./app/navigations/Navegacion";
import React, { useEffect } from 'react';
//import {NavigationContainer} from '@react-navigation/native'
import RutasPerfil from "./app/navigations/RutasPerfil";
import { firebaseApp } from './app/utils/firebase';
import 'firebase/compat/auth';

export default function App() {
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);

  return (<NavegacionTab>
    {/* <RutasPerfil /> */}
  </NavegacionTab>);
}

