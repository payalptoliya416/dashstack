import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function StackedColumns() {
  const [state] = React.useState({
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33, 12],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15, 13],
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8, 12, 19],
      },
      {
        name: "PRODUCT E",
        data: [32, 19, 14, 9, 11, 17, 23, 15],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        stackType: "100%", // 👈 percentage stacked
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 6,
        },
      },
      grid:{
        borderColor:'',
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
       colors: ["#254675","#96D62E","#5AA5FE", "#25D3D3","#7C33F3"], 
      xaxis: {
        categories: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        offsetX: 0,
      },
    } as ApexOptions,
  });

  return (
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={400}
        width='100%'
      />
  );
}

export default StackedColumns;
