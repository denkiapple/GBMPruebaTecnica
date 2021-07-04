const AboutContainer = () => {
  return (
    <main>
      <header>
        <h1>Acerca de</h1>
      </header>
      <p>
        Esta es una app de prueba, desarrollada en React por Ulises Torner Campuzano.
        Sin fines de lucro ni para uso en un ambiente productivo, vea la documentación y código en el repositorio de gitlab.
      </p>

      <section>
        <ul>
          <li>
            <a href="https://github.com/denkiapple/GBMPruebaTecnica" alt="Hipervínculo a repositorio en Github">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ulises-torner-campuzano-b32000140/" alt="Hipervínculo a Linkedin">
              Linkedin
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default AboutContainer;
