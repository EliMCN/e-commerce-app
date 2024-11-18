/* eslint-disable react/prop-types */
import Item from "../Item/Item"; 
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div className="itemlist">
      {products.length === 0 ? (
        <p>No hay productos disponibles en esta categoría.</p>
      ) : (
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default ItemList;