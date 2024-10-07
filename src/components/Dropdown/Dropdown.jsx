/* eslint-disable react/prop-types */
// src/components/Dropdown.jsx
//  Estructura:
// Defino las Categorías en el Componente Padre (Navbar)
// Luego pasan las Categorías al Componente Hijo (Dropdown), utilizando props.

import {useState} from "react";
import "./Dropdown.css"; 
const Dropdown = ({categories}) => {
  // Estado para manejar si el dropdown está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Cambia el estado entre abierto y cerrado
  };

  return (
    <div className="dropdown"> 
      <a href="#dropdown" onClick={toggleDropdown} className="dropdown-toggle">
        Juegos y juguetes{" "}
        <i className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
      </a>

      {isOpen && (
        <ul className="dropdown-menu">
          {categories.map((category) => (
            <li key={category.id}>
              <a href={category.link}>{category.name}</a>
            </li>
          ))}
          <li>
            <hr />
          </li>
          <li>
            <a href="Construccion.html">Todos los productos</a>
          </li>
          <li>
            <p>TE AYUDAMOS (8.00 A 15.00)</p>
            <p>
              <i className="bi bi-whatsapp"> 03487-216595</i>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
