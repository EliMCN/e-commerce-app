//lógica
//Agrego Sweetalert para notificaciones npm install sweetalert2

/* eslint-disable react/prop-types */


import {useState} from "react";
import "./itemCount.css";
import Swal from "sweetalert2";


const ItemCount = ({stock, initial = 1, onAdd, itemName}) => {
  // Estado para manejar la cantidad seleccionada
  const [quantity, setQuantity] = useState(initial);
  //Para deshabilitar los botones cuando corresponda, ejemplo sin stock
  const disableIncrement = quantity >= stock;
  const disableDecrement = quantity <= 1;

  function pluralizeWord(singularWord, pluralWord) {
    return quantity > 1 ? pluralWord : singularWord;
  }
  // Función para aumentar la cantidad, pero no más que el stock disponible
  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      console.log(`Cantidad incrementada: ${quantity + 1}`);
    } else {
      const Toast = Swal.mixin({
        toast: true,
        background: "#DFA822",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "No hay stock suficiente",
      });
    }
  };

  // Función para disminuir la cantidad, pero no menos que 1
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log(`Cantidad decrementada: ${quantity - 1}`);
    }
  };

  // Función para manejar el click en "Agregar al carrito"
  const handleAddToCart = () => {
    if (stock > 0 && quantity > 0) {
      console.log(`Agregando al carrito: ${quantity} ${itemName}`);
      const Toast = Swal.mixin({
        toast: true,
        background: "#F0F8FF",
        width: "500px",
        padding: "20px",
        color: "#333",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        customClass: {
          title: "custom-title",
        },
      });
      Toast.fire({
        icon: "success",
        title: `${quantity} ${itemName} ${pluralizeWord(
          "agregada",
          "agregadas"
        )} al carrito`,
      });
      onAdd(quantity);

      // Resetear la cantidad a su valor inicial después de agregar, para que si sigue comprando ya este en 1 la cantidad. Sino deberia decrementar si compra 2 o mas anteriormente.
      setQuantity(initial); // Esto restablece quantity a 1, seteado en inicial
    }
  };

  return (
    <div className="item-count-view">
      <div className="counter-controls">
        {/* Botón para decrementar */}
        <button onClick={decrement} disabled={disableDecrement}>
          -
        </button>
        {/* Muestra la cantidad actual */}
        <span>{quantity}</span>
        {/* Botón para incrementar */}
        <button onClick={increment} disabled={disableIncrement}>
          +
        </button>
      </div>
      {/* Botón para agregar al carrito */}
      <button
        className="card-button"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        Agregar
      </button>
    </div>
  );
};




export default ItemCount;



