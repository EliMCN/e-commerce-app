import { useState, useEffect } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/data.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


// eslint-disable-next-line react/prop-types
function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams(); // Obtenemos la categoría de los parámetros de la URL

  useEffect(() => {
    setLoading(true);
    // Indicamos que estamos cargando
    console.log("Renderizando el spinner...");
    getProducts()
      .then((data) => {
        if (!idCategory) {
          // Cambié a !idCategory para una mejor claridad
          document.title = "Tienda Mágica Catálogo";
          setProducts(data);
        } else {
          // Si hay una categoría seleccionada, filtramos los productos
          document.title = `Tienda Mágica - ${idCategory}`; // Cambiamos el título según la categoría
          const filteredProducts = data.filter(
            (product) => product.category_id === Number(idCategory)
          );
          setProducts(filteredProducts); // Guardamos los productos filtrados por categoría
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Terminamos de cargar y cambiamos la bandera
      });
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer; 