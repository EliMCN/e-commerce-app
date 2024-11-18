import {useState, useEffect} from "react";
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/db.js";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null); // Estado para la categoría
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {idProduct} = useParams();

  const getProductById = async () => {
    try {
      // Obtener el documento del producto por ID
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const productDb = {id: dataDb.id, ...dataDb.data()};
        setProduct(productDb);

        // Usar el campo `category` directamente del producto
        const productCategory = productDb.category; // Esto es un string, no un ID
        setCategory(productCategory); // Asignamos la categoría directamente
      } else {
        setError("Producto no encontrado");
      }
    } catch (error) {
      console.error(error); // Log adicional para entender mejor el error
      setError("Error al cargar el producto");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, [idProduct]);

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <ItemDetail product={product} category={category} />;
};

export default ItemDetailContainer;
