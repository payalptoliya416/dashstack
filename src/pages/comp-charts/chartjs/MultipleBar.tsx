import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MultiBarChart: React.FC = () => {
  const data: ChartData<"bar", number[], string> = {
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
      },
      {
        label: "Expenses",
        data: [25, 34, 28, 17, 23, 22, 21, 35, 27, 30, 21, 34],
        backgroundColor: "#E1E3EA",
      },
      {
        label: "Profit",
        data: [23, 30, 25, 19, 24, 20, 20, 28, 26, 31, 18, 28],
        backgroundColor: "#E49E3D",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: (context) =>
            context.tick.value === 0
              ? "rgba(0, 0, 0, 0.1)"
              : "rgba(0, 0, 0, 0.05)",
          drawTicks: false,
        },
        ticks: {
          stepSize: 8,
        },
      },
      x: {
        grid: {
          display: false,
        },
          ticks: {},
      stacked: false,
      },
    },
    datasets: {
    bar: {
      barPercentage: 0.8,      
      borderRadius: 4,
      categoryPercentage: 0.4, 
    },
  },
  };

  return (
    <div
      style={{
        height: "350px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default MultiBarChart;
