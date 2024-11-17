import {mixed, object, string} from "yup";

// Definir el esquema de validación
const userSchema = object({
  fullname: string().required("El campo nombre es requerido"),
  phone: mixed().required("El campo teléfono es requerido"),
  email: string()
    .email("El campo email debe ser un correo válido")
    .required("El campo email es obligatorio"),
});

// Validar los datos del formulario
const validateForm = async (dataForm) => {
  try {
    // Validamos los datos
    await userSchema.validate(dataForm, {abortEarly: false}); // Validar todos los errores
    return {status: "success"};
  } catch (error) {
    // Manejar errores
    return {
      status: "error",
      message: error.errors.join(", "), // Mostrar todos los errores en una lista
    };
  }
};

export default validateForm;
