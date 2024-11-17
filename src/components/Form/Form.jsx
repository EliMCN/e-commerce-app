import {useState} from "react";
import "./Form.css";
import Swal from "sweetalert2";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import db from "../../db/db"; // Asegúrate de que db esté configurado correctamente.

const EjemploFormulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validar email
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validar teléfono
  const isValidPhone = (phone) => {
    const regex = /^[0-9]{10,15}$/; // Ejemplo: acepta entre 10 y 15 dígitos
    return regex.test(phone);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!name || !email || !address || !phone || !gender || !message) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Por favor, ingresa un email válido.",
      });
      return;
    }

    if (!isValidPhone(phone)) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "Por favor, ingresa un número de teléfono válido.",
      });
      return;
    }

    const orderData = {
      buyer: {
        name,
        email,
        address,
        phone,
        gender,
      },
      message,
      date: Timestamp.fromDate(new Date()),
    };

    setIsSubmitting(true);

    try {
      // Subir la orden a Firebase
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, orderData);

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: `Gracias por contactarnos. ID de tu orden: ${docRef.id}`,
      });

      // Limpiar el formulario
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setGender("");
      setMessage("");
    } catch (error) {
      console.error("Error subiendo la orden:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="formulario">
      <label>Nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa tu nombre"
        required
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu email"
        required
      />

      <label>Dirección</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Ingresa tu dirección"
        required
      />

      <label>Teléfono</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Ingresa tu teléfono"
        required
      />

      <label>Género</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Selecciona tu género"
        required
      >
        <option value="">Seleccione una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>

      <label>Mensaje</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje aquí"
        required
      ></textarea>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default EjemploFormulario;
