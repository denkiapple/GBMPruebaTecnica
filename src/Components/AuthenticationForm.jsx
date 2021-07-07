import { useState } from "react";

import { func } from "prop-types";
import styles from './AuthenticationForm.module.css';

const AuthenticationForm = ({ handleSubmit }) => {
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

    return alert("Verifica que sea un correo válido y tu contraseña tenga al menos 6 caracteres");
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            ¡Regístrate!
          </h3>
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
                Contraseña (mínimo 6 caracteres)
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
              Registrarme
            </button>
          </form>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

AuthenticationForm.propTypes = {
  handleSubmit: func,
};

AuthenticationForm.defaultProps = {
  handleSubmit: () => {},
};

export default AuthenticationForm;
