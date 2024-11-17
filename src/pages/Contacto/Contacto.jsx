import EjemploFormulario from "../../components/Form/Form";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="titulo">Contacto</h1>
      <p className="descripcion">
        Si tienes alguna pregunta o comentario, no dudes en contactarnos.
        Completa el siguiente formulario y te responderemos a la brevedad.
      </p>
      <EjemploFormulario />
    </div>
  );
};

export default Contacto;
