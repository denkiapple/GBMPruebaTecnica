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

  // Transforma un Date a DD/MM/YYYY - HH:MM
  const dateFormatter = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const mins = date.getMinutes();

    const fhours = hours < 10 ? "0"+hours : hours;
    const fmins = mins < 10 ? "0"+mins : mins

    return `${day}/${month}/${year} - ${fhours}:${fmins}`;
  };

  // Ordena por fecha los valores que responde el API
  const entries = Object.values(ipcData)
    .sort((a,b) => (new Date(a) - new Date(b)))
    .map(e => {
      const formattedDate = dateFormatter(new Date(e.date));
      return {
        ...e,
        formattedDate,
      }
    });

  const labels = entries.map(e => e.formattedDate);
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
