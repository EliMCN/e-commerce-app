import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv-L3pQ5VW0qyzxAf280vUA85XFr9DWdA",
  authDomain: "ecommerce-tienda-magica.firebaseapp.com",
  projectId: "ecommerce-tienda-magica",
  storageBucket: "ecommerce-tienda-magica.firebasestorage.app",
  messagingSenderId: "950852926968",
  appId: "1:950852926968:web:8ae5a439fab669bef6aa0d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
