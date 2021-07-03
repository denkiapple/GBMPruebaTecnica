import { Link } from 'react-router-dom'

import logo from '../logo.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  console.warn(styles)
  return (
    <header className={styles.layout}>
      <img src={logo} className={styles.logo} alt="logo" />

      <ul className={styles.routes}>
        <li>
          <Link to="/ipc">IPC</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
