/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { shape, arrayOf, bool } from "prop-types";

import { Chart, Loader, Table } from '../Components';
import { getData } from '../actions';

const IPCContainer = ({ ipcData, isIPCLoading }) => {
  const dispatch = useDispatch();

  // Pide los valores de IPC al cargar el componente
  useEffect(() => {
    if (!ipcData.length) getData(dispatch);
  }, []);

  // Ordena por fecha los valores que responde el API
  const entries = Object.values(ipcData)
    .sort((a,b) => (new Date(a) - new Date(b)));

  const labels = entries.map(e => new Date(e.date).toTimeString());
  const data = entries.map(e => e.price);

  return (
    <main>
      <header>
        <h1>IPC</h1>
      </header>
      <p>
        Revisa el índice de precios y cotizaciones.
      </p>

      <Chart labels={labels} data={data} />

      <section>
        <h3>{entries.length || "Sin"} Registros</h3>
        <Table entries={entries} />
      </section>

      <Loader isLoading={isIPCLoading} />
    </main>
  );
}

IPCContainer.propTypes = {
  ipcData: arrayOf(shape({})),
  isIPCLoading: bool,
};

IPCContainer.defaultProps = {
  ipcData: [],
  isIPCLoading: false,
};

const mapStateToProps = ({
  data: ipcData,
  isLoading: isIPCLoading,
}) => ({
  ipcData,
  isIPCLoading,
});

export default connect(
  mapStateToProps,
)(IPCContainer);
