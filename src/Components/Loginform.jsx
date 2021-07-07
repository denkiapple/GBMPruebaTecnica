import { useState } from "react";

import { func } from "prop-types";
import styles from './Forms.module.css';

const RegisterForm = ({ handleSubmit, setForm }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // Funcion que valida correo, obtenida de StackOverflow
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = event => {
    event.preventDefault();

    if (validateEmail(username) && password.length >= 6) {
      return handleSubmit(username, password);
    }

    return alert("Verifica que sean un correo y contraseña válidos");
  };

  const goToRegister = () => {
    setForm(1);
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            Bienvenido de vuelta
          </h3>

          <button onClick={goToRegister} className={styles.secondaryBtn}>
            Deseo registrarme.
          </button>

          <form onSubmit={onSubmit}>
            <div>
              <label className={styles.label}>
                Correo electrónico
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={styles.input}
                onChange={e => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label}>
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

RegisterForm.propTypes = {
  handleSubmit: func,
  setForm: func,
};

RegisterForm.defaultProps = {
  handleSubmit: () => {},
  setForm: () => {},
};

export default RegisterForm;
