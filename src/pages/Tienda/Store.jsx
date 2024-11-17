import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Hero from "../../components/Hero/Hero";
import imagen from "../../assets/kid.jpg";
import "./Store.css";

const Store = () => {
  const categories = [
    {category_id: 1, name: "Mochilas"},
    {category_id: 2, name: "Librería"},
    {category_id: 3, name: "Computación"},
    {category_id: 4, name: "Juegos de Agua y Playa"},
    {category_id: 5, name: "Juegos de Mesa y Cartas"},
    {category_id: 6, name: "Juguetes de Construcción"},
    {category_id: 7, name: "Juguetes para Bebés"},
    {category_id: 8, name: "Muñecos y Muñecas"},
    {category_id: 9, name: "Vehículos de Juguete"},
  ];

  return (
    <div className="store-container">
      {/* Hero Section */}
      <Hero greeting={"¡Bienvenidos a Tienda Mágica!"} imagen={imagen} />

      {/* Introducción */}
      <section className="store-intro">
        <p className="store-description">
          ✨ <strong>Encuentra los mejores productos</strong> para chicos de
          todas las edades.
          <br />
          Descubre descuentos mágicos y ¡haz que cada momento sea especial! 🌈
        </p>
      </section>

      {/* Categorías */}
      <section className="categories">
        <h2 className="categories-title">Explora nuestras categorías</h2>
        <ul className="categories-list">
          {categories.map((category) => (
            <li key={category.category_id}>
              <a
                href={`/category/${category.category_id}`}
                className="category-link"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Listado de productos */}
      <main className="products">
        <ItemListContainer greeting={"Nuestros productos"} />
      </main>
    </div>
  );
};

export default Store;
