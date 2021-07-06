import { Line } from "react-chartjs-2";
import { shape, arrayOf } from "prop-types";

const Chart = ({ ipcData }) => {
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <section>
        <Line data={chartData} options={chartOptions} />
      </section>

      <section>
        <h3>Plop</h3>
        <p>
          Lorem ipsum...
        </p>
      </section>
    </>
  );
}

Chart.propTypes = {
  ipcData: arrayOf(shape({})),
};

Chart.defaultProps = {
  ipcData: [],
};

export default Chart;
