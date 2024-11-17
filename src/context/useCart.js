// Hook personalizado para usar el contexto
import {useContext} from "react";
import CartContext from "./CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado con un CartProvider");
  }
  return context;
};