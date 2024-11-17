/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../../context/useCart.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ItemDetail = ({detalle}) => {
  const [showItemCount, setShowItemCount] = useState(true); // Alternar entre ItemCount y botón de compra
  const {addToCart} = useCart(); // Cambiado a addToCart para coincidir con el contexto
  const navigate = useNavigate();

  const onAddToCart = (quantity) => {
    if (!detalle.item_id || !detalle.name || !detalle.final_retail_price) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan datos del producto para añadir al carrito.",
      });
      return;
    }

    addToCart({
      item_id: detalle.item_id,
      name: detalle.name,
      price: detalle.final_retail_price,
      stock: detalle.stock,
      image_url: detalle.image_url,
      quantity,
    });

    Swal.fire({
      icon: "success",
      title: "Producto añadido",
      text: `Se añadieron ${quantity} unidades de "${detalle.name}" al carrito.`,
      timer: 2000,
      showConfirmButton: false,
    });

    setShowItemCount(false);
  };

  return (
    <div className="item-detail">
      <img src={detalle.image_url} alt={detalle.name} className="detail-img" />
      <div className="detail-info">
        <h2 className="detail-title">{detalle.name}</h2>
        <p className="detail-price">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(detalle.final_retail_price)}
        </p>
        {detalle.stock > 0 ? (
          showItemCount ? (
            <ItemCount
              stock={detalle.stock}
              initial={1}
              itemName={detalle.name}
              onAdd={onAddToCart}
            />
          ) : (
            <div className="checkout-actions">
              <Link to="/cart" className="button-end-buy">
                Terminar mi compra
              </Link>
              <Link to="/tienda" className="btn-continue-shopping">
                Seguir comprando
              </Link>
            </div>
          )
        ) : (
          <p className="out-of-stock">Producto sin stock</p>
        )}
      </div>
      <p className="detail-description">{detalle.description}</p>
      <button onClick={() => navigate(-1)} className="back-btn">
        Volver
      </button>
    </div>
  );
};

export default ItemDetail;