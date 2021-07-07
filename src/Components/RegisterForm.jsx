import { useState } from "react";

import { func } from "prop-types";
import styles from './Forms.module.css';

const RegisterForm = ({ handleSubmit, setForm }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  // Funcion que valida correo, obtenida de StackOverflow
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onSubmit = event => {
    event.preventDefault();

    if (validateEmail(username) && password.length >= 6) {
      if (password === password2) {
        return handleSubmit(username, password);
      }

      return alert("Verifica que ambos campos de contraseña coincidan");
    }

    return alert("Verifica que sea un correo válido y tu contraseña tenga al menos 6 caracteres");
  };

  const goToLogin = () => {
    setForm(2);
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            ¡Regístrate!
          </h3>

          <button onClick={goToLogin} className={styles.secondaryBtn}>
            Ya cuento con un usuario.
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

            <div>
              <label className={styles.label}>
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className={styles.input}
                onChange={e => setPassword2(e.target.value)}
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

RegisterForm.propTypes = {
  handleSubmit: func,
  setForm: func,
};

RegisterForm.defaultProps = {
  handleSubmit: () => {},
  setForm: () => {},
};

export default RegisterForm;
