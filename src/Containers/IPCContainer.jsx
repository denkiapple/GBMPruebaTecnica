import { useEffect } from "react";
import { connect } from 'react-redux';
import { shape, arrayOf } from "prop-types";

import { Chart, Loader } from '../Components';
import { getData } from '../actions';

const IPCContainer = ({ ipcData }) => {
  useEffect(() => {
    getData().then(data => console.log(data));
  }, []);

  console.warn("CONTAINER", ipcData);

  return (
    <main>
      <header>
        <h1>IPC</h1>
      </header>
      <p>
        Revisa el índice de precios y cotizaciones.
      </p>

      <Chart ipcData={ipcData} />
      <Loader isLoading={true} />
    </main>
  );
}

IPCContainer.propTypes = {
  ipcData: arrayOf(shape({})),
};

IPCContainer.defaultProps = {
  ipcData: [],
};

const mapStateToProps = state => ({
  ipcData: state
});

export default connect(
  mapStateToProps,
)(IPCContainer);
