import UIOptionTable from "../../base-ui/UIOptionTable"
import { ChartJsData } from "./ChartTableData"
import DoughnutChart from "./Doughnut"
import MultipleBar from "./MultipleBar"
import PieChart from "./PieChart"
import PolarAreaChart from "./PolarArea"
import RadarChart from "./RadarChart"
import RoundedArea from "./RoundedArea"
import RoundedLine from "./RoundedLine"
import StackedBar from "./StackedBar"

function ChartJs() {
  return (
    <>
       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Multiple Bar
        </div>
        <div className="p-6">
        <MultipleBar/>
        </div>
        </div>
        
       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Stacked Bar
        </div>
        <div className="p-6">
        <StackedBar/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Rounded Line
        </div>
        <div className="p-6">
        <RoundedLine/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Rounded Area
        </div>
        <div className="p-6">
        <RoundedArea/>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="rounded-lg shadow border border-gray-100 bg-white">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Doughnut
        </div>
        <div className="p-6">
        <DoughnutChart/>
        </div>
        </div>

         <div className="rounded-lg shadow border border-gray-100 bg-white">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Pie Chart
        </div>
        <div className="p-6">
        <PieChart/>
        </div>
        </div>

         <div className="rounded-lg shadow border border-gray-100 bg-white">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
       Polar Area
        </div>
        <div className="p-6">
        <PolarAreaChart/>
        </div>
        </div>

         <div className="rounded-lg shadow border border-gray-100 bg-white">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Radar Chart
        </div>
        <div className="p-6">
        <RadarChart/>
        </div>
        </div>
        </div>
  <UIOptionTable title="Options" options={ChartJsData} />
    </>
  )
}

export default ChartJs
