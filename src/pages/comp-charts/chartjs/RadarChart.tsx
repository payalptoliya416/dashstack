import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
 type  ChartOptions,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: React.FC = () => {
  const data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "5:00AM - 12:00AM",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#FF6384",
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#FF6384",
      },
      {
        label: "12:00AM - 11:00PM",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#3E97FF",
        pointBackgroundColor: "#3E97FF",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#3E97FF",
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
          maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "350px", margin: "auto", padding: "20px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
