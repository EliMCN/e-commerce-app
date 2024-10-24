import { useState } from "react"
import "./Form.css"


const EjemploFormulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const user = {name, email, address, phone, gender, message};
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmitForm} className="formulario">
      <label> Nombre</label>
      <input type="text" value={name} onChange={handleChangeName} />

      <label> Email</label>
      <input type="email" value={email} onChange={handleChangeEmail} />

      <label> Dirección</label>
      <input type="text" value={address} onChange={handleChangeAddress} />

      <label> Teléfono</label>
      <input type="tel" value={phone} onChange={handleChangePhone} />

      <label> Género</label>
      <select value={gender} onChange={handleChangeGender}>
        <option value="">Seleccione una opción</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
        <option value="otro">Otro</option>
      </select>

      <label> Mensaje</label>
      <textarea value={message} onChange={handleChangeMessage}></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default EjemploFormulario;