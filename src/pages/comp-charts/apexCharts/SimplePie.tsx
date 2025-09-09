import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function SimplePie() {
  const [state] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: ["#00275E", "#3E97FF", "#85D00B", "#00CCCC", "#6610F2"], 
      legend: {
        position: "bottom",
          horizontalAlign: 'center',  
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
            //   width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={380}
      />
  );
}

export default SimplePie;
