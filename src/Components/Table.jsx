import { shape, arrayOf } from "prop-types";

import styles from "./Table.module.css";

const Table = ({ entries }) => {
  const ipcElements = entries.map((entry, index) => (
    <tr className={styles.row}>
      <td>
        {index}
      </td>
      <td>
        {entry.formattedDate}
      </td>
      <td>
        {entry.price}
      </td>
      <td>
        {entry.change}
      </td>
      <td>
        {entry.percentageChange}
      </td>
      <td>
        {entry.volume}
      </td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            Índice
          </th>
          <th>
            Fecha
          </th>
          <th>
            Precio
          </th>
          <th>
            Cambio
          </th>
          <th>
            Porcentaje
          </th>
          <th>
            Volumen
          </th>
        </tr>
      </thead>
      <tbody>
        { ipcElements }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  entries: arrayOf(shape({})),
};

Table.defaultProps = {
  entries: [],
};


export default Table;
