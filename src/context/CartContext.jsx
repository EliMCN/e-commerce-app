import {createContext, useState} from "react";

// Creamos el contexto del carrito
const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (newProduct) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (product) => product.item_id === newProduct.item_id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += newProduct.quantity;
        return updatedCart;
      } else {
        return [...prevCart, newProduct];
      }
    });
  };

  // Verificar si un producto está en el carrito
  const isInCart = (item_id) => {
    return cart.some((product) => product.item_id === item_id);
  };

  // Obtener la cantidad de un producto en el carrito
  const getItemQuantity = (item_id) => {
    const product = cart.find((product) => product.item_id === item_id);
    return product ? product.quantity : 0;
  };

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = () => {
    return cart.reduce((total, product) => total + (product.quantity || 0), 0);
  };

  // Calcular el precio total de los productos en el carrito
  const totalPrice = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = parseInt(product.quantity, 10) || 0;
      return total + price * quantity;
    }, 0);
  };

  // Eliminar un producto del carrito por su ID
  const removeFromCart = (item_id) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.item_id !== item_id)
    );
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Proveer las funciones y el estado del carrito
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        getItemQuantity,
        totalQuantity,
        totalPrice,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Exportamos el contexto
export default CartContext;
