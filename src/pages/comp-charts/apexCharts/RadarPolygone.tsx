import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function RadarPolygone() {
  const [state] = React.useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar" as const,
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      title: {
        text: "",
        align: "center",
      },
      colors: ["#4C9EFE"], // series color
      markers: {
        size: 4,
        // strokeColors is the correct property in ApexCharts typings
        colors: ["#fff"],
        strokeColors: "#4C9EFE",
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val.toString(); // must return string
          },
        },
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      yaxis: {
        labels: {
          formatter: function (val: number, i: number) {
            return i % 2 === 0 ? val.toString() : "";
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
        width='100%'
      />
    </div>
  );
}

export default RadarPolygone;
