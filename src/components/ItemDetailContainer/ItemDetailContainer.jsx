import {useState, useEffect} from "react";
import {getProducts} from "../../data/data.js";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx/";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null); // Estado para manejar errores
  const {item_id} = useParams();

  useEffect(() => {
    setLoading(true); // Comienza la carga
    setError(null); // Resetea el error antes de cada carga

    getProducts()
      .then((data) => {
        const findProduct = data.find((product) => product.id === item_id);
        if (!findProduct) {
          setError("Producto no encontrado."); 
        } else {
          setProduct(findProduct);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Error al cargar el producto."); // Establece un mensaje de error
      })
      .finally(() => {
        setLoading(false); // Termina la carga
      });
  }, [item_id]);

  if (loading) {
    return <LoadingSpinner loading={loading} />;
  }

  if (error) {
    return <p>{error}</p>; // Muestra el mensaje de error si hay un error
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail detalle={product} />
    </div>
  );
};

export default ItemDetailContainer;