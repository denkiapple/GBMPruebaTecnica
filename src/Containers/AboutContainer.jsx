import { GitHub, LinkedIn } from '@material-ui/icons';

import styles from "./AboutContainer.module.css";

const AboutContainer = () => {
  return (
    <main>
      <header>
        <h1>Acerca de esta App</h1>
      </header>

      <section>
        <p>
          Esta es una app de prueba, desarrollada en React por Ulises Torner Campuzano.
          Sin fines de lucro ni para uso en un ambiente productivo, sino como parte de un proceso de selección para la posición de desarrollador front-end para le empresa GBM.
        </p>
        <p>
          Se invita a ver la documentación y código en el repositorio de gitlab.
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
            Aplicación creada con React.
          </li>
          <li>
            Consumo del servicio de IPC en Mocky. (fetch)
          </li>
          <li>
            Implementación de un gráfico para la visualización de los datos del servicio. (chartjs)
          </li>
        </ul>

        <h4>Level 2</h4>
        <ul>
          <li>
            Autentificación de usuarios. (integración con firebase)
          </li>
          <li>
            Registro de usuarios con correo y contraseña.
          </li>
          <li>
            Login y logout, manejo de sesión de usuario.
          </li>
        </ul>

        <h4>Otros</h4>
        <ul>
          <li>
            Diseño 100% responsivo implementado nativamente con CSS. (Flex y Grids)
          </li>
          <li>
            Estilos propios, con CSS Modules y Media Queries.
          </li>
          <li>
            Organización de estilos con variables CSS.
          </li>
          <li>
            Manejo de múltiples vistas en una SPA con ReactRouter.
          </li>
        </ul>
      </section>

      <section>
        <p>
          Gracias por su consideración, cualquier comentario o retroalimentación es bienvenida.
        </p>
        <h3>Contacto:</h3>
        Ulises Torner Campuzano - utorner@gmail.com
      </section>
    </main>
  );
}

export default AboutContainer;
