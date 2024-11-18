import {useState} from "react";
import {Link} from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Hero from "../../components/Hero/Hero";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"; // 
import CategoriesLoader from "../../components/CategoriesLoader/CategoriesLoader";
import imagen from "../../assets/kid.jpg";
import "./Store.css";

const Store = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Para saber si estamos cargando categorías
  const [error, setError] = useState(null); // Para manejar errores

  // Se pasa el setCategories desde el componente Store
  const handleSetCategories = (categories) => {
    setCategories(categories);
    setLoading(false); // Cuando se reciben las categorías, dejamos de cargar
  };

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

        {/* Llama a CategoriesLoader para cargar las categorías */}
        <CategoriesLoader
          setCategories={handleSetCategories}
          setError={setError}
        />

        {/* Mostrar spinner mientras se cargan las categorías */}
        {loading && <LoadingSpinner />}

        {/* Mostrar mensaje si hay un error */}
        {error && <p>Error al cargar las categorías: {error}</p>}

        {/* Renderiza las categorías solo después de que se carguen */}
        {!loading && categories.length > 0 && (
          <ul className="categories-list">
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category}`} className="category-link">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Listado de productos */}
      <main className="products">
        <ItemListContainer greeting={"Nuestros productos"} />
      </main>
    </div>
  );
};

export default Store;
