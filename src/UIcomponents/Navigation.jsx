import { Link } from 'react-router-dom'
import { Timeline, Info } from '@material-ui/icons';

import logo from '../logo.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  console.warn(styles)
  return (
    <header className={styles.layout}>
      <div className={styles.branding}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>Uliu</h1>
      </div>

      <ul className={styles.routes}>
        <li>
          <Link to="/ipc">
            <Timeline />
            IPC
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Info />
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
