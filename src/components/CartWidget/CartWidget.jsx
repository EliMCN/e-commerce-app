import "./cartWidget.css"; 
import {useCart} from "../../context/useCart";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const {totalQuantity} = useCart(); // Obtiene la cantidad total de productos del carrito usando el contexto-Elimino itemCount=5
 
  // Clase dinámica para cambiar estilos según el estado del carrito
  const cartIconClass = totalQuantity() > 0 ? "cart-full" : "cart-empty";

  return (
    <Link to="/cart" className={`cart-widget ${cartIconClass}`}>
      <i
        className={`bi ${totalQuantity() > 0 ? "bi-cart-fill" : "bi-cart"}`}
      ></i>
      {totalQuantity() > 0 && (
        <span className="item-count">{totalQuantity()}</span>
      )}
    </Link>
  );
};

export default CartWidget;