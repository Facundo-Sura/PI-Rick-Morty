import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (evento) => {
    setErrors(
      validation({ ...userData, [evento.target.name]: evento.target.value })
    );
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData);
  };

  return (
    <div className={style.pagina}>
      <form onSubmit={handleSubmit} className={style.fomrulario}>
        <h2 className={style.login}>Login</h2>
        <div className={style.info}>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            className={style.input}
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>

        <div className={style.info}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
            className={style.input}
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>

        <button className={style.enviar}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
