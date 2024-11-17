/* eslint-disable react/prop-types */
import {useCart} from "../../context/useCart";

const CartItems = ({cart}) => {
  const {removeFromCart} = useCart();

  return (
    <div className="cart-items">
      {cart.map((productCart) => (
        <div className="item-cart" key={productCart.item_id}>
          <img
            className="img-item-cart"
            src={productCart.image_url}
            width={100}
            alt={productCart.name}
          />
          <div className="cart-item-details">
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">
              Precio c/u:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(productCart.price)}
            </p>
            <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">
              Precio parcial:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(productCart.price * productCart.quantity)}
            </p>
          </div>
          <button
            className="delete-item-cart"
            onClick={() => removeFromCart(productCart.item_id)}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
