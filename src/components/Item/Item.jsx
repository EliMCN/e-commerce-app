/* eslint-disable react/prop-types */
import "./Item.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Item = ({product}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="img-item"
        loading="lazy"
      />
      <div className="card-content">
        <h2 className="card-title">
          <i>{product.name}</i>
        </h2>
        <p className="card-price">
          {" "}
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(product.final_retail_price)}
        </p>
        {/* Mostrar "Disponible" o "No disponible" basado en el stock */}
        <p
          className={`card-available ${product.stock > 0 ? "" : "unavailable"}`}
        >
          {product.stock > 0 ? "Disponible" : "Sin Stock"}
        </p>
        <Link
          to={`/detail/${product.item_id}`}
          aria-label={`Ver detalles de ${product.name}`}
          className="details-linkbtn"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
