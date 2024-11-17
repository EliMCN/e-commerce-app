import {useState} from "react";
import FormCheckout from "./FormCheckout";
import {useCart} from "../../context/useCart";
import CartItems from "../Cart/CartItems";
import {Timestamp, addDoc, collection, doc, setDoc} from "firebase/firestore";
import db from "../../db/db.js";
import {Link} from "react-router-dom";
import validateForm from "../../utils/validateForm.js";
import {toast} from "react-toastify";
import "./Checkout.css";


const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    payment: "credit",
  });
  const [idOrder, setIdOrder] = useState(null);
  const {cart, totalPrice, clearCart} = useCart();
  const [errors, setErrors] = useState({});

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

  const handleChangeInput = (event) => {
    setDataForm({...dataForm, [event.target.name]: event.target.value});
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: {...dataForm},
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    try {
      const response = await validateForm(dataForm);
      if (response.status === "error") {
        setErrors({...response.errors});
        throw new Error("Formulario inválido");
      }

      toast.success("Subiendo orden...");
      await uploadOrder(order);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders");
      const response = await addDoc(ordersRef, newOrder);
      setIdOrder(response.id);
      await updateStock();
    } catch (error) {
      console.log("Error subiendo la orden:", error);
    }
  };

  const updateStock = async () => {
    try {
      cart.forEach(async ({item_id, quantity, ...dataProduct}) => {
        const productRef = doc(db, "products", item_id);
        await setDoc(productRef, {
          ...dataProduct,
          stock: dataProduct.stock - quantity,
        });
      });
      clearCart();
    } catch (error) {
      console.log("Error actualizando stock:", error);
    }
  };

  return (
    <div className="checkout-container">
      {idOrder === null ? (
        <div className="checkout-content">
          <h1>Finalizar Compra</h1>
          <div className="checkout-navigation">
            <Link to="/cart" className="btn-secondary">
              Volver al Carrito
            </Link>
            <Link to="/tienda" className="btn-secondary">
              Seguir Comprando
            </Link>
          </div>
          <div className="checkout-sections">
            <div className="cart-summary">
              <h2>Resumen de tu compra</h2>
              <ul>
                <CartItems cart={cart} />
              </ul>
              <h3>Total: ${totalPrice().toFixed(2)}</h3>
            </div>
            
              <FormCheckout
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm={handleSubmitForm}
                errors={errors}
              />
            
          </div>
        </div>
      ) : (
        <div className="order-success">
          <h2>¡Orden subida correctamente! 😁</h2>
          <p>Guarde su número de seguimiento: {idOrder}</p>
          <Link to="/" className="back-to-home">
            Volver al inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
