import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAv-L3pQ5VW0qyzxAf280vUA85XFr9DWdA",
  authDomain: "ecommerce-tienda-magica.firebaseapp.com",
  projectId: "ecommerce-tienda-magica",
  storageBucket: "ecommerce-tienda-magica.appspot.com",
  messagingSenderId: "950852926968",
  appId: "1:950852926968:web:8ae5a439fab669bef6aa0d",
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

// en ItemListContainer incorporar
//import {collection,getDocs} from "firebase/firestore"
//import db from "../../db/db.js"

//const getProducts = () => {
//const productsRef = collection (db,"products")
// getDocs(productsRef)  es una promesa
// .then ((dataDb)=>{
// console.log(dataDb)
//const productsDb= dataDb.docs.map((productDb)=>{
//ahora retornamos el objeto con la info del producto, por ahora incluyo id
// return{id; productDb.id,... productDb.data()}  hacemos un spread porque si lo llamamos directo con el metodo .data(), no puedo tener un objeto dentro de un objeto. Entonces con el spread agrego todo automatico. Pero en el caso de Firestore esta el id por fuera de los atributos name: productDb.data.name
// })
//console.log(productDb)
// })
//}

//vamos a mapear docs que viene del querysnapshot

//para filtrar o listar productos tambien hay que adaptarlos tengo que import query y where para filtrado
//const getProductsByCategory = () => {
//const ProductsRef= collection(db,"products")
//esto es la consulta de filtrado
//const queryCategories = query(productsRef, where("category","==",idCategory))
//pasar la ref de la collection donde quiero consultar, y el filtrado
//en where, el campo, comparador emntre comillas, y el dato a filtrar, y agrgar la variable dinamica

//para usarla le pasamos querycategorya getdocs

//getDocs(queryCategories)  es una promesa
// .then ((dataDb)=>{
// console.log(dataDb)
//const productsDb= dataDb.docs.map((productDb)=>{
//return { id: productDb.id, ...ProductDb.data() }
//})
// setProducts (productsDb)
//}

//luego modificar ItemDetailContainer
//firesbase/firestore estas en singular , e importar db
//import { doc, getDoc }

//const getProductById = () => {
// const docRef = doc(db,"products",idProduct) el idProduct que viene dde la url
//getDoc (docRef) no uso map porque es un solo producto
//.then(() => {
// cosnst productDb = {id: dataDb.id, ...dataDb.data()}
// setProduct(productDb)
//})
//}
