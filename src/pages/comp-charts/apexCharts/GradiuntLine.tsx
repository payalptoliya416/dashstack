import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const GradientLine: React.FC = () => {
  const [series] = useState<{ name: string; data: number[] }[]>([
    {
      name: "Sales",
      data: [
        4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5,
      ],
    },
  ]);

  const [options] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: "line",
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
    type: "datetime",
    categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
    ],
    tickAmount: 10,
    labels: {
        formatter: (value: string, timestamp?: number, opts?: any) => {
        if (timestamp !== undefined && opts?.dateFormatter) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
        }
        return value; // fallback
        },
    },
    },
    title: {
      text: "Forecast",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    grid: {
      borderColor: "",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#3E97FF"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
  });

  return (
    <>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
          width='100%'
        />
    </>
  );
};

export default GradientLine;
