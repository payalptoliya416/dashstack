import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function SimpleDonut() {
  const [state] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut" as const, 
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
         colors: ["#00275E", "#3E97FF", "#85D00B", "#00CCCC", "#6610F2"],  
      legend: {
        position: "bottom",
        horizontalAlign: "center", 
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            // chart: { width: 200 },
            legend: { position: "bottom", horizontalAlign: "center" },
          },
        },
      ],
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={380}
      />
    </div>
  );
}

export default SimpleDonut;
