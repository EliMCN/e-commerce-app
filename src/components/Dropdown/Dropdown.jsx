/* eslint-disable react/prop-types */
// src/components/Dropdown.jsx
//  Estructura:
// Defino las Categorías en el Componente Padre (Navbar)
// Luego pasan las Categorías al Componente Hijo (Dropdown), utilizando props.
import {Link} from "react-router-dom";
import {useState} from "react";
import "./Dropdown.css";

function Dropdown({categories}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className= "btn" onClick={toggleDropdown}>Categorías</button>
      {isOpen && (
        <ul>
          {categories.map((category) => (
            <li key={category.category_id}>
              <Link
                to={`/category/${category.category_id}`}
                onClick={toggleDropdown}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;