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
  const [success, setSuccess] = React.useState(false); // ✅ nuevo estado

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setErrors(validation({ ...input, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.email && !errors.password && input.email && input.password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true); // 👈 muestra el mensaje de éxito
        setInput({ email: "", password: "" }); // limpia campos
        setTouched({});
      }, 1000); // 1 segundo de “envío”
    }
  };

  return (
    <div className={style.all}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
          value={input.email}
          className={errors.email && touched.email ? style.errorInput : ""}
        />
        {touched.email && errors.email && (
          <p className={style.errorText}>{errors.email}</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name="password"
          value={input.password}
          className={errors.password && touched.password ? style.errorInput : ""}
        />
        {touched.password && errors.password && (
          <p className={style.errorText}>{errors.password}</p>
        )}

        <button
          type="submit"
          disabled={
            isSubmitting ||
            input.email === "" ||
            input.password === "" ||
            errors.email ||
            errors.password
          }
        >
          {isSubmitting ? "Enviando..." : "Submit"}
        </button>

        {/* ✅ Mensaje visual de éxito */}
        {success && <p className={style.successMsg}>✅ Formulario enviado con éxito</p>}
      </form>
    </div>
  );
};

export default Form;
