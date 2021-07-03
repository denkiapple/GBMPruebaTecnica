import logo from '../logo.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  console.warn(styles)
  return (
    <header className={styles.layout}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Navigation;
