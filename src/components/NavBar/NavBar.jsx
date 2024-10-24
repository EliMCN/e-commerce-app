import {useState} from "react";
import "./Navbar.css";
import "../Dropdown/dropdown.css";
import "../CartWidget/CartWidget.css";
import "../HamburgerMenu/HamburgerMenu.css"
import Dropdown from "../Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"; 
import logo from "../../assets/logo_blanco.webp";
import {Link} from "react-router-dom";



function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemCount = 5;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("isNavOpen:", !isNavOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const categories = [
    {category_id: 1, name: "Mochilas", link: "/category/mochilas"},
    {category_id: 2, name: "Librería", link: "/category/libreria"},
    {category_idid: 3, name: "Computación", link: "/category/computacion"},
    {
      category_id: 4,
      name: "Juegos de Agua y Playa",
      link: "/category/juegos-agua-playa",
    },
    {
      category_id: 5,
      name: "Juegos de Mesa y Cartas",
      link: "/category/juegos-mesa-cartas",
    },
    {
      category_id: 6,
      name: "Juguetes de Construcción",
      link: "/category/juguetes-construccion",
    },
    {
      category_id: 7,
      name: "Juguetes para Bebés",
      link: "/category/juguetes-bebes",
    },
    {
      category_id: 8,
      name: "Muñecos y Muñecas",
      link: "/category/munecos-munecas",
    },
    {
      category_id: 9,
      name: "Vehículos de Juguete",
      link: "/category/vehiculos-juguete",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        {/* Botón Hamburguesa para móviles */}
        <HamburgerMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />

        {/* Menú de Navegación */}
        <div className={`navbar-collapse ${isNavOpen ? "open" : ""}`}>
          <ul className="navbar-nav spicy-rice-regular">
            <li>
              <Link to="/Ofertas">OFERTAS</Link>
            </li>
            <li>
              <Link to="/Tienda">Tienda Online</Link>
            </li>
            <li>
              <Link to="/Store">Prueba error</Link>
            </li>
            <li>
              <Dropdown
                categories={categories}
                isOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
              />
            </li>
            <li>
              <Link to="/Contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>

        {/* Carrito */}
        <CartWidget itemCount={itemCount} />
      </div>
    </nav>
  );
}

export default Navbar;