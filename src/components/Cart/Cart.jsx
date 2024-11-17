import {useCart} from "../../context/useCart";
import {Link} from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {cart, totalPrice, removeFromCart, clearCart} = useCart();

  // Manejar caso donde el carrito esté vacío
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="title-empty-cart">
          Oppps...No hay productos en el carrito 😥
        </h2>
        <Link to="/" className="button-home-empty-cart">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="title-cart">Productos en el carrito</h1>
      <div className="cart-items">
        {cart.map((productCart) => (
          <div className="cart-item" key={`cart-item-${productCart.item_id}`}>
            <div className="cart-item-info">
              <img
                className="img-item-cart"
                src={productCart.image_url}
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
                <p className="text-item-cart">
                  Cantidad: {productCart.quantity}
                </p>
                <p className="text-item-cart">
                  Precio parcial:{" "}
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  }).format(productCart.price * productCart.quantity)}
                </p>
              </div>
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
      <div className="info-cart">
        <p className="text-info-cart">
          Precio total:{" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(totalPrice())}
        </p>
        <button className="button-delete-cart" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="button-end-buy">
          Terminar mi compra
        </Link>
        <Link to="/tienda" className="btn-continue-shopping">
          Seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
