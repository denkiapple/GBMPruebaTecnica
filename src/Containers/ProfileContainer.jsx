import { shape } from "prop-types";
import styles from "./ProfileContainer.module.css";

const ProfileContainer = ({ userInfo, firebase }) => {
  const closeSession = async () => {
    await firebase.auth().signOut();
  };

  return (
    <main>
      <h1>Mi perfil</h1>

      {userInfo ? (
        <section>
          <div>
            <label>
              Nombre de usuario:
            </label>
            <p className={styles.paragraph}>
              {userInfo.displayName || "---"}
            </p>
          </div>

          <div>
            <label>
              Correo electrónico:
            </label>
            <p className={styles.paragraph}>
              {userInfo.email}
            </p>
          </div>

          <div>
            <label>
              Teléfono:
            </label>
            <p className={styles.paragraph}>
              {userInfo.phoneNumber || "---"}
            </p>
          </div>

          <div>
            <label>
              Usuario creado el:
            </label>
            <p className={styles.paragraph}>
              {userInfo.metadata ? userInfo.metadata.creationTime || "---" : "---"}
            </p>
          </div>

          <div>
            <label>
              Último acceso:
            </label>
            <p className={styles.paragraph}>
              {userInfo.metadata ? userInfo.metadata.lastSignInTime || "---" : "---"}
            </p>
          </div>          
        </section>
      ) : (
        <section>
          <p className={styles.paragraph}>
            Sin sesión de usuario.
          </p>
        </section>
      )}

      <section>
        <button
          className={styles.buttonOutline}
          onClick={closeSession}
        >
          {userInfo ? "Cerrar sesión" : "Volver a ingresar"}
        </button>

      </section>
    </main>
  );
}

ProfileContainer.propTypes = {
  userInfo: shape({}),
  firebase: shape({}),
};

ProfileContainer.defaultProps = {
  userInfo: {},
  firebase: {},
};

export default ProfileContainer;
