import { shape } from "prop-types";

import { Link } from 'react-router-dom'
import { Timeline, Info, AccountCircle } from '@material-ui/icons';

import styles from './Navigation.module.css';

const Navigation = ({ user }) => {
  return (
    <header className={styles.layout}>
      <div className={styles.branding}>
        <h1>Bienvenido {user?.firstName || "usuario"}</h1>
      </div>

      <ul className={styles.routes}>
        <li>
          <Link to="/ipc">
            <Timeline />
            Gráfico IPC
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Info />
            Acerca de
          </Link>
        </li>
        <li>
          <Link to="/user">
            <AccountCircle />
            Mi perfil
          </Link>
        </li>
      </ul>
    </header>
  );
}

Navigation.propTypes = {
  user: shape({}),
};

Navigation.defaultProps = {
  user: {}
};

export default Navigation;
