import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const BasicArea: React.FC = () => {
  const series = [
    {
      name: "Series 1",
      data: [42000, 20000, 50000, 28000, 60000, 32000, 72000, 40000, 80000, 48000, 85000, 45000],
    },
    {
      name: "Series 2",
      data: [30000, 45000, 38000, 55000, 45000, 60000, 52000, 70000, 62000, 75000, 68000, 80000],
    },
    {
      name: "Series 3",
      data: [25000, 35000, 28000, 45000, 35000, 50000, 42000, 58000, 50000, 65000, 55000, 70000],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    // The colors are updated to match the screenshot's lines (Orange, Blue, Green)
    colors: ["#F59E0B", "#3B82F6", "#22C55E"], 
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    // The gradient fill is adjusted to create a lighter, more subtle shadow effect
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35, // Adjust opacity to create a more subtle fill
        opacityTo: 0.15,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return `${(val / 1000).toFixed(0)}K`;
        },
      },
      // Adding a min and max to the Y-axis to match the scale in the image
      min: 0,
      max: 100000,
    },
    grid: {
      borderColor: "#E5E7EB",
      row: {
        colors: ["transparent"],
        opacity: 0.5,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val.toLocaleString();
        },
      },
    },
    legend: {
      show: false, // The screenshot does not show a legend
    },
  };

  return (
      <ReactApexChart options={options} series={series} type="area" height={350} width="100%" />
  );
};

export default BasicArea;