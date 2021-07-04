import { Link } from 'react-router-dom'
import { Timeline, Info } from '@material-ui/icons';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.layout}>
      <div className={styles.branding}>
        <h1>Uliu</h1>
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
      </ul>
    </header>
  );
}

export default Navigation;
