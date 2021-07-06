/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { shape, arrayOf, bool } from "prop-types";

import { Chart, Loader } from '../Components';
import { getData } from '../actions';

import styles from "./IPCContainer.module.css";

const IPCContainer = ({ ipcData, isIPCLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ipcData.length) getData(dispatch);
  }, []);

  console.warn(Object.values(ipcData))

  return (
    <main>
      <header>
        <h1>IPC</h1>
      </header>
      <p>
        Revisa el índice de precios y cotizaciones.
      </p>

      <Chart ipcData={ipcData} />
      { typeof ipcData }

      <section>
        <h3>Plop</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                uno
              </th>
              <th>dos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
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
