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

function RoundedLine() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 37, 30, 18, 25, 28, 22, 38, 28, 28, 24, 36],
        backgroundColor: "#3E97FF",
        borderColor: "#DFE0E1",
        pointBackgroundColor: "#3E97FF",
        pointBorderColor: "#fff",
        pointBorderWidth: 0,
        pointRadius: 3,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [25, 34, 28, 17, 23, 22, 21, 35, 27, 30, 21, 34],
        backgroundColor: "#E1E3EA",
        borderColor: "#DFE0E1",
        pointBackgroundColor: "#E1E3EA",
        pointBorderColor: "#fff",
        pointBorderWidth: 0,
        pointRadius: 3,
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [23, 30, 25, 19, 24, 20, 20, 28, 26, 31, 18, 28],
        backgroundColor: "#E49E3D",
        borderColor: "#DFE0E1",
        pointBackgroundColor: "#E49E3D",
        pointBorderColor: "#fff",
        pointBorderWidth: 0,
        pointRadius: 3,
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
        display: true,
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
    <div   style={{ width: "100%", height: "350px", }} >
      <Line data={data} options={options} />
    </div>
  );
}

export default RoundedLine;
