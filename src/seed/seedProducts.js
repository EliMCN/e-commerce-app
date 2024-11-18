// seed.js
import {collection, addDoc} from "firebase/firestore";
import db from "../db/db.js"; 
import products from "../data/data.js"; 

// Función para cargar los productos en Firestore
async function seedProducts() {
  try {
    // Accede a la colección 'products' en Firestore
    const productsRef = collection(db, "products");

    // Recorre cada producto de los datos y lo agrega a Firestore
    for (const product of products) {
      await addDoc(productsRef, product); // Agrega cada producto a Firestore
    }
    console.log("Productos cargados correctamente");
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

// Ejecutar el seeding
seedProducts();


//Para ejecutar correr en terminal node src/seed/seedProducts.js


