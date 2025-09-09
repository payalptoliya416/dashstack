import React from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

function GradientDonut() {
  const [state] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        // width: 380,
        type: "donut" as const, // ✅ TypeScript fix
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#00275E", "#3E97FF", "#85D00B", "#00CCCC", "#6610F2"], // custom gradient colors
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
        },
      },
       colors: ["#00275E", "#3E97FF", "#85D00B", "#00CCCC", "#6610F2"],// fallback colors
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "",
        align: "center",
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

export default GradientDonut;
