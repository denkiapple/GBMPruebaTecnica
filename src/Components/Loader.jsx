import { bool } from "prop-types";
import styles from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  ) : null;
}

Loader.propTypes = {
  isLoading: bool,
};

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
