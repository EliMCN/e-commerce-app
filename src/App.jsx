
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Ofertas from "./pages/Ofertas/Ofertas";
import Contacto from "./pages/Contacto/Contacto";
import NotFound from "./pages/NotFound/NotFound";
import Store from "./pages/Tienda/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"

import "./App.css"; // Estilos globales
import "react-toastify/dist/ReactToastify.css";


const categories = [
  {category_id: 1, name: "Mochilas"},
  {category_id: 2, name: "Librería"},
  {category_id: 3, name: "Computación"},
  {category_id: 4, name: "Juegos de Agua y Playa"},
  {
    category_id: 5,
    name: "Juegos de Mesa y Cartas",
  },
  {
    category_id: 6,
    name: "Juguetes de Construcción",
  },
  {category_id: 7, name: "Juguetes para Bebés"},
  {category_id: 8, name: "Muñecos y Muñecas"},
  {category_id: 9, name: "Vehículos de Juguete"},
];

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <ToastContainer theme="dark" />
          {/* ToastContainer:Esto es necesario para que las notificaciones funcionen */}
          {/* Pasa categories a Header */}
          <Header categories={categories} />
          <main className="container-main">
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Tienda Magica"} />}
              />
              <Route
                path="/tienda"
                element={<Store categories={categories} />}
              />
              <Route
                path="/category/:idCategory"
                element={<ItemListContainer greeting={"Nuestros Productos"} />}
              />
              <Route
                path="/detail/:idProduct"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;