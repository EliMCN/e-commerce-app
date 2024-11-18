
//Flujo de Datos (Props):
//En el componente  el CategoriesLoader carga las categorías.

// El Navbar usa las categorías para mostrar un menú desplegable con los nombres de las categorías.

import {useState, useEffect} from "react";
import Navbar from "../NavBar/NavBar.jsx";
import "./Header.css"
import CategoriesLoader from "../CategoriesLoader/CategoriesLoader"; 

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Llamar al CategoriesLoader y pasarle la función setCategories para actualizar el estado
  }, []);

  return (
    <header>
      {/* Llama al CategoriesLoader y pasa la función setCategories */}
      <CategoriesLoader setCategories={setCategories} />

      {/* Pasa las categorías al Navbar */}
      <Navbar categories={categories} />
    </header>
  );
}

export default Header;