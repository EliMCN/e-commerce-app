/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams(); // Obtener el ID de la categoría desde la URL

  // Función para obtener productos sin filtro de categoría
  const getProducts = async () => {
    const productsRef = collection(db, "products");
    try {
      const dataDb = await getDocs(productsRef);
      const productsDb = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));
      setProducts(productsDb); // Actualizamos el estado con los productos obtenidos
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false); // Finalizamos la carga
    }
  };

  const getProductsByCategory = async () => {
    const productsRef = collection(db, "products"); // Colección 'products'
    const queryCategories = query(
      productsRef,
      where("category", "==", idCategory) // Filtrar por categoría
    );
    try {
      const dataDb = await getDocs(queryCategories); // Obtener productos filtrados por categoría
      const productsDb = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));
      setProducts(productsDb); // Actualizamos el estado con los productos filtrados
    } catch (error) {
      console.error("Error loading products by category:", error);
    } finally {
      setLoading(false); // Finalizamos la carga
    }
  };

  // useEffect para obtener productos cuando la categoría cambie o no haya categoría
  useEffect(() => {
    setLoading(true); // Mostrar el spinner mientras se cargan los productos
    if (idCategory) {
      getProductsByCategory(); // Obtener productos por categoría
    } else {
      getProducts(); // Obtener todos los productos
    }
  }, [idCategory]); // Dependencia de idCategory para actualizar los productos cuando cambie

  return (
    <div className="itemlistcontainer">
      <h1 className="greeting-title">{greeting}</h1>
      {loading ? (
        <LoadingSpinner /> // Mostrar el spinner mientras cargan los productos
      ) : (
        <div className="itemlist">
          <ItemList products={products} />{" "}
          {/* Mostrar los productos cuando se cargan */}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;