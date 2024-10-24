import "./App.css"; // Estilos globales
import "./components/Header/Header.css"; // Estilos del Header
import "./components/Footer/Footer.css"; // Estilos del Footer
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Ofertas from "./pages/Ofertas/Ofertas";
import Contacto from "./pages/Contacto/Contacto";
import NotFound from "./pages/NotFound/NotFound";
import Store from "./pages/Tienda/Store";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  // Variables saludo y autor
  // const saludo = "¡Bienvenidos a Tienda Mágica!";
  // const autor = "Comprá sin moverte de tu casa!";

  return (
    <div className="container-app">
      <BrowserRouter>
        {/* El Header siempre estará visible */}
        <Header/>
        {/* Main content */}
        <main className="container-main">
          <Routes>
            {/* Página de inicio-LOGO */}
            <Route
              path="/"
              element={<ItemListContainer greeting={"Nuestros Productos"} />}
            />
            {/* Página de Tienda Online */}
            <Route path="/tienda" element={<Store/>} />
            {/* Página de categorías */}
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer greeting={"Hola Mundo!!"} />}
            />
            {/* Página de detalles del producto */}
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailContainer />}
            />
            {/* Página de ofertas */}
            <Route path="/ofertas" element={<Ofertas />} />{" "}
            {/* Página de contacto */}
            <Route path="/contacto" element={<Contacto />} />{" "}
            {/* Componente para una página no encontrada */}
            <Route path="*" element={<NotFound />} />{" "}
          </Routes>
          <br />
        </main>

        {/* El Footer siempre estará visible */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
