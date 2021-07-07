import { bool } from "prop-types";
import styles from './AuthenticationForm.module.css';

const AuthenticationForm = () => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.container}>
          <h3>Holis</h3>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

AuthenticationForm.propTypes = {
};

AuthenticationForm.defaultProps = {
};

export default AuthenticationForm;
