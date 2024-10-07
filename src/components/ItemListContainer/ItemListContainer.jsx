import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({saludo, autor, imagen1, imagen2}) => {
  return (
    <section className="ItemListContainer">
      {/* Imagen de fondo */}
      <img src={imagen1} alt="Fondo" className="background-image" />
      {/* Título */}
      <h1 className="ultra-regular">{saludo}</h1>
      {/* Texto del autor */}
      <p className="autor animate__animated animate__fadeIn">{autor}</p>
      {/* Imagen superpuesta */}
      <img src={imagen2} alt="Superposición" className="overlay-image" />
    </section>
  );
};

export default ItemListContainer;
