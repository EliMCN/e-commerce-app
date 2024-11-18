
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
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartProvider} from "./context/CartContext";

import "./App.css"; // Estilos globales
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <ToastContainer theme="dark" />
          
          {/* ToastContainer: Esto es necesario para que las notificaciones funcionen */}
          <Header />
          <main className="container-main">
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Tienda Magica"} />}
              />
              <Route path="/tienda" element={<Store />} />
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
