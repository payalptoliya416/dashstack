import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function BasicRadar() {
  const [state] = React.useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar" as const, // ✅ TypeScript fix
      },
      title: {
        text: "",
        align: "center",
      },
      colors: ["#82BBFD"], // ✅ Change series color here
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
      stroke: {
        width: 2,
      },
      markers: {
        size: 4,
      },
      fill: {
        opacity: 0.3,
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
    },
  });

  return (
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radar"
        height={350}
        width='100%'
      />
  );
}

export default BasicRadar;
