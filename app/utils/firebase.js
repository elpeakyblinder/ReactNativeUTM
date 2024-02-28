// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHOMFBs7TEHf2-3tI0wmASzeVEkujJMQ0",
    authDomain: "umt221103ti.firebaseapp.com",
    projectId: "umt221103ti",
    storageBucket: "umt221103ti.appspot.com",
    messagingSenderId: "296132344463",
    appId: "1:296132344463:web:9aca44330f25d99a490efa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };
