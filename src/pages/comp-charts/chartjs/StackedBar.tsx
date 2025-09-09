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
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StackedBar() {
  const data = {
    labels: [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 37, 30, 18, 25, 28, 22, 38, 28, 28, 24, 36],
        backgroundColor: "#3E97FF",
        barThickness: 20, 
      },
      {
        label: "Expenses",
        data: [25, 34, 28, 17, 23, 22, 21, 35, 27, 30, 21, 34],
        backgroundColor: "#E1E3EA",
        barThickness: 20,
      },
      {
        label: "Profit",
        data: [23, 30, 25, 19, 24, 20, 20, 28, 26, 31, 18, 28],
        backgroundColor: "#E49E3D",
        barThickness: 20,
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
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          stepSize: 16,
        },
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
    <div style={{ width: "100%", height: "350px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default StackedBar;
