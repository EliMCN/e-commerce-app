/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from "react-router-dom";
import {getProducts} from "../../data/data.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams(); // Obtenemos idCategory como cadena

  useEffect(() => {
    setLoading(true);
    console.log("Renderizando el spinner...");

    getProducts()
      .then((data) => {
        if (!idCategory) {
          document.title = "Tienda Mágica - Catálogo";
          setProducts(data); // Mostrar todos los productos si no hay categoría
        } else {
          const filteredProducts = data.filter(
            (product) => product.category_id === Number(idCategory) // Convertimos idCategory a número
          );
          setProducts(filteredProducts);
          document.title = `Tienda Mágica - Categoría ${idCategory}`;
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [idCategory]);

  console.log("ID de categoría:", idCategory);

  return (
    <div className="itemlistcontainer">
      <h1 className="greeting-title">{greeting}</h1>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <div className="itemlist">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
