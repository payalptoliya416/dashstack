import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function ColumDataLabels() {
  const [state] = React.useState({
    series: [
      {
        name: "Inflation 2023",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
      {
        name: "Inflation 2024",
        data: [1.2, 2.4, 3.5, 8.0, 5.0, 4.2, 3.0, 2.0, 1.2, 0.6, 0.3, 0.1],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "40%", // 👈 thin side-by-side bars
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
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
        position: "bottom",
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: { enabled: true },
      },
      yaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          show: false,
          formatter: function (val: number) {
            return val + "%";
          },
        },
      },
      title: {
        text: "",
        floating: true,
        offsetY: 330,
        align: "center",
        style: { color: "#444" },
      },
      grid:{
        borderColor:""
      }
    } as ApexOptions,
  });

  return (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
          width='100%'
        />
  );
}

export default ColumDataLabels;
