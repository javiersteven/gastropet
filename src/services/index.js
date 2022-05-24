import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Mover todos los servicios a un archivo de variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyDSDNtbHePCRHTruvQffgREM5txv962Qi8",
  authDomain: "react-firebase-aa32e.firebaseapp.com",
  databaseURL: "https://react-firebase-aa32e-default-rtdb.firebaseio.com",
  projectId: "react-firebase-aa32e",
  storageBucket: "react-firebase-aa32e.appspot.com",
  messagingSenderId: "294809516744",
  appId: "1:294809516744:web:ae7d24f58acb65e84e03fd",
  measurementId: "G-WMEGP0TPC6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const analytics = getAnalytics(app);

export { auth }