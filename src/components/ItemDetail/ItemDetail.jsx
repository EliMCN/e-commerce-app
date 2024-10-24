/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import {useNavigate} from "react-router-dom";

const ItemDetail = ({detalle}) => {
  const navigate = useNavigate();

  const onAddToCart = (quantity) => {
    // Lógica para agregar al carrito, a desarrollar
    console.log(
      `Has agregado ${quantity} unidades de ${detalle.name} al carrito.`
    );
  };

  return (
    <div className="item-detail-container">
      <img src={detalle.image_url} alt={detalle.name} className="detail-img" />
      <div className="detail-info">
        <h2 className="detail-title">{detalle.name}</h2>
        <p className="detail-price"> $ {detalle.final_retail_price}</p>
        <ItemCount
          stock={detalle.stock}
          initial={1}
          itemName={detalle.name}
          onAdd={onAddToCart} // Pasamos la función para manejar la adición al carrito, proxima entrega.
        />
        <p className="detail-description">{detalle.description}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-btn">
        Volver
      </button>
    </div>
  );
};

export default ItemDetail;
