import {useState} from "react";
import "./Store.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Hero from "../../components/Hero/Hero";
import imagen from "../../assets/kid.jpg";

const Store = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    {id: 1, name: "Mochilas", link: "/category/mochilas"},
    {id: 2, name: "Librería", link: "/category/libreria"},
    {id: 3, name: "Computación", link: "/category/computacion"},
    {
      id: 4,
      name: "Juegos de Agua y Playa",
      link: "/category/juegos-agua-playa",
    },
    {
      id: 5,
      name: "Juegos de Mesa y Cartas",
      link: "/category/juegos-mesa-cartas",
    },
    {
      id: 6,
      name: "Juguetes de Construcción",
      link: "/category/juguetes-construccion",
    },
    {id: 7, name: "Juguetes para Bebés", link: "/category/juguetes-bebes"},
    {id: 8, name: "Muñecos y Muñecas", link: "/category/munecos-munecas"},
    {id: 9, name: "Vehículos de Juguete", link: "/category/vehiculos-juguete"},
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="store-container">
      <Hero greeting={"Bienvenidos a tienda  MAGICA"} imagen={imagen} />
      <section>
        <p> Lo mejor para los chicos a precios increibles</p>
      </section>

      <aside className="categories">
        <h2>Categorías</h2>
        <Dropdown
          categories={categories}
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        />
      </aside>

      <main className="products">
        <ItemListContainer />
      </main>
    </div>
  );
};

export default Store;
