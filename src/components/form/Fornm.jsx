import React from "react";
import validation from "./validation";
import style from "./form.module.css";

const Form = () => {
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // Maneja cambios de input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setErrors(validation({ ...input, [name]: value }));
  };

  // Marca el campo como tocado
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  // Envío simulado
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.email && !errors.password && input.email && input.password) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true); // muestra el mensaje de éxito
        setInput({ email: "", password: "" }); // limpia campos
        setTouched({});

        // Mensaje desaparece después de 3 segundos
        setTimeout(() => setSuccess(false), 3000);
      }, 1000); // simula tiempo de envío
    }
  };

  return (
    <div className={style.all}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? style.errorInput : ""}
        />
        {touched.email && errors.email && (
          <p className={style.errorText}>{errors.email}</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? style.errorInput : ""}
        />
        {touched.password && errors.password && (
          <p className={style.errorText}>{errors.password}</p>
        )}

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !input.email ||
            !input.password ||
            errors.email ||
            errors.password
          }
        >
          {isSubmitting ? "Enviando..." : "Submit"}
        </button>

        {success && <p className={style.successMsg}>✅ Formulario enviado con éxito</p>}
      </form>
    </div>
  );
};

export default Form;
