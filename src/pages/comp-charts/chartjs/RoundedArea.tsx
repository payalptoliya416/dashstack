import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function RoundedArea() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data",
        data: [32, 48, 45, 64, 60, 84, 68],
        backgroundColor: "rgba(62, 151, 255, 0.2)",
        borderColor: "#3E97FF",
        pointBackgroundColor: "#3E97FF",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        tension: 0.4,
        borderDash: [5, 5],
      },
      {
        label: "Data 2",
        data: [35, 42, 40, 58, 52, 75, 64],
        backgroundColor: "rgba(225, 227, 234, 0.2)",
        borderColor: "#E1E3EA",
        pointBackgroundColor: "#E1E3EA",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
        align: "start" as const,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
          color: (context: any) =>
            context.tick.value === 0
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          stepSize: 16,
        },
      },
    },
  };

  return (
    <div   style={{  width: "100%", height: "350px", }} >
      <Line data={data} options={options} />
    </div>
  );
}

export default RoundedArea;
