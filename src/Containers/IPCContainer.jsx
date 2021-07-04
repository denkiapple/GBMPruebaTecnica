import { useEffect } from "react";

import { getData } from '../utils';

const IPCContainer = () => {
  useEffect(() => {
    getData().then(data => console.log(data));
  }, []);

  return (
    <main>
      <header>
        <h1>IPC</h1>
      </header>
      <p>
        Revisa el índice de precios y cotizaciones.
      </p>
    </main>      
  );
}

export default IPCContainer;
