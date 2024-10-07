import {useState} from "react";
import "./Navbar.css";
import "../Dropdown/dropdown.css";
import "../CartWidget/CartWidget.css"
import Dropdown from "../Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/dino-logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const itemCount = 5;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("isNavOpen:", !isNavOpen);
  };

  const buttonStyle = isNavOpen ? "navbar-toggle active" : "navbar-toggle";

  const categories = [
    {id: 1, name: "Mochilas", link: "Construccion.html"},
    {id: 2, name: "Arte y Manualidades", link: "Construccion.html"},
    {id: 3, name: "Electrónicos para Niños", link: "Construccion.html"},
    {id: 4, name: "Hobbies", link: "Construccion.html"},
    {id: 5, name: "Juegos de Agua y Playa", link: "Construccion.html"},
    {id: 6, name: "Juegos de Mesa y Cartas", link: "Construccion.html"},
    {id: 7, name: "Juegos de Salón", link: "Construccion.html"},
    {id: 8, name: "Juguetes de Construcción", link: "Construccion.html"},
    {id: 9, name: "Juguetes de Oficios", link: "Construccion.html"},
    {id: 10, name: "Juguetes para Bebés", link: "Construccion.html"},
    {id: 11, name: "Muñecos y Muñecas", link: "Construccion.html"},
    {id: 12, name: "Vehículos de Juguete", link: "Construccion.html"},
  ];

  return (
    <nav className="navbar">
      {/* Encabezado principal con logo y botón hamburguesa */}
      <div className="navbar-header">
        <div className="navbar-brand-logo">
          <a className="navbar-brand-logo-link" href="index.html">
            <img className="logo" src={logo} alt="Logo" />
            <span className="spicy-rice-regular">DINO Juguetería</span>
          </a>
        </div>
        <button
          className={buttonStyle}
          onClick={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen} // Indica si el menú está abierto
        >
          <i className={`bi ${isNavOpen ? "bi-x-circle" : "bi-list"}`}></i>
        </button>
        
      </div>

      {/* Menú de navegación, se despliega cuando isNavOpen es true */}
      <div className={`navbar-collapse ${isNavOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li>
            <a href="Construccion.html">OFERTAS</a>
          </li>
          <li>
            <a href="Construccion.html">Tienda Online</a>
          </li>
          <Dropdown categories={categories} />
          <li>
            <a href="Construccion.html">Contacto</a>
          </li>
        </ul>
        {/* Carrito al final del navbar */}
       
      </div>
      <CartWidget itemCount={itemCount} />
    </nav>
  );
}

export default Navbar;
