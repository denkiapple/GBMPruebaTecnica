import { func } from "prop-types";
import styles from './AuthenticationForm.module.css';

const AuthenticationForm = ({ handleSubmit }) => {
  const onSubmit = event => {};

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            ¡Regístrate!
          </h3>
          <form>
            <div>
              <label for="username" className={styles.label}>
                Correo electrónico:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={styles.input}
              />
            </div>

            <div>
              <label for="password" className={styles.label}>
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
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
