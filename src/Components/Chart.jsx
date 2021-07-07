import { Line } from "react-chartjs-2";
import { shape, arrayOf } from "prop-types";

const Chart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Precio',
        data: data,
        fill: false,
        backgroundColor: '#337d47',
        borderColor: '#337d47',
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
    <section>
      <Line data={chartData} options={chartOptions} />
    </section>
  );
}

Chart.propTypes = {
  labels: arrayOf(shape({})),
  data: arrayOf(shape({})),
};

Chart.defaultProps = {
  labels: [],
  data: [],
};

export default Chart;
