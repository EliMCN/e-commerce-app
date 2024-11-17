/* eslint-disable react/prop-types */
import "./FormCheckout.css";
const FormCheckout = ({
  dataForm,
  handleChangeInput,
  handleSubmitForm,
  errors,
}) => {
  return (
    <div className="checkout-form">
      <h2>Datos del Cliente</h2>
      <form onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label htmlFor="fullname">Nombre completo</label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            value={dataForm.fullname}
            onChange={handleChangeInput}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeInput}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input
            id="address"
            type="text"
            name="address"
            value={dataForm.address}
            onChange={handleChangeInput}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="payment">Método de Pago</label>
          <select
            id="payment"
            name="payment"
            value={dataForm.payment}
            onChange={handleChangeInput}
            required
          >
            <option value="credit">Tarjeta de Crédito</option>
            <option value="paypal">Mercado Pago</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Enviar mi orden
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
