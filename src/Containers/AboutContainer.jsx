import { GitHub, LinkedIn } from '@material-ui/icons';

import styles from "./AboutContainer.module.css";

const AboutContainer = () => {
  return (
    <main>
      <header>
        <h1>Acerca de</h1>
      </header>

      <section>
        <p>
          Esta es una app de prueba, desarrollada en React por Ulises Torner Campuzano.
          Sin fines de lucro ni para uso en un ambiente productivo, vea la documentación y código en el repositorio de gitlab.
        </p>
      </section>

      <section>
        <div className={styles.groupLinks}>
          <a
            href="https://github.com/denkiapple/GBMPruebaTecnica"
            alt="Hipervínculo a repositorio en Github"
            target="_blank"
            rel='noreferrer'
          >
            <GitHub />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ulises-torner-campuzano-b32000140/"
            alt="Hipervínculo a Linkedin"
            target="_blank"
            rel='noreferrer'
          >
            <LinkedIn />
            Linkedin
          </a>
        </div>
      </section>

      <section>
        <h3>
          Objetivos de la prueba:
        </h3>

        <h4>Level 1</h4>
        <ul>
          <li>
            Aplicación creada con React
          </li>
        </ul>

        <h4>Level 2</h4>
        <ul>
          <li>
            Lorem ipsum...
          </li>
        </ul>

        <h4>Bonus</h4>
        <ul>
          <li>
            Diseño 100% responsivo
          </li>
          <li>
            CSS Modules y Media Queries
          </li>
        </ul>
      </section>
    </main>
  );
}

export default AboutContainer;
