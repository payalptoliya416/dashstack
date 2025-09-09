import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function MultipleRadar() {
  const [state] = React.useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
      { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
      { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar" as const, // ✅ TypeScript fix
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "",
        align: "center",
      },
      colors: ["#86D00D", "#4499FC" ,  "#00CACA"],
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 4, 
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
      tooltip: {
        enabled: true,
      },
      legend: {
       show: false
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
      />
    </div>
  );
}

export default MultipleRadar;
