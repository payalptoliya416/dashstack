import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["sumi", "swapan", "sojib", "swampa", "Soweav"],
    datasets: [
      {
        label: "My Dataset",
        data: [100, 100, 100, 100, 125],
        backgroundColor: [
          "#3E97FF",
          "#E83E8C",
          "#EEF1F3",
          "#E49E3D",
          "#3DC7BE",
        ],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
     cutout: "0%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div style={{ width: "70%", margin: "auto", padding: "20px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;
