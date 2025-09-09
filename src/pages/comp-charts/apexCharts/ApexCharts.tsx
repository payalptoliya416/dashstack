import ApexCandlestick from "./ApexCandlestick"
import BarWithLine from "./BarWithLine"
import BasicArea from "./BasicArea"
import BasicBar from "./BasicBar"
import BasicRadar from "./BasicRadar"
import ColumDataLabels from "./ColumDataLabels"
import GradiuntDonut from "./GradiuntDonut"
import GradientLine from "./GradiuntLine"
import LineDataLabels from "./LineDataLabels"
import MultipleRadar from "./MultipleRadar"
import RadarPolygone from "./RadarPolygone"
import SimpleDonut from "./SimpleDonut"
import SimplePie from "./SimplePie"
import StackedColumns from "./StackedColumns"


function ApexCharts() {
  return (
    <>
       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Gradient Line
        </div>
        <div className="p-6">
        <GradientLine/>
        </div>
        </div>
        
       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Line Data Labels
        </div>
        <div className="p-6">
        <LineDataLabels/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Basic Bar
        </div>
        <div className="p-6">
        <BasicBar/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Colum Data Labels
        </div>
        <div className="p-6">
        <ColumDataLabels/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
       Stacked Columns
        </div>
        <div className="p-6">
        <StackedColumns/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Basic Area
        </div>
        <div className="p-6">
        <BasicArea/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Bar With Line
        </div>
        <div className="p-6">
        <BarWithLine/>
        </div>
        </div>

       <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Apex Candlestick
        </div>
        <div className="p-6">
        <ApexCandlestick/>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-7">
             <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
     Simple Pie
        </div>
        <div className="p-6">
        <SimplePie/>
        </div>
        </div>
         <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Simple Donut
        </div>
        <div className="p-6">
        <SimpleDonut/>
        </div>
        </div>
         <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
      Gradient Donut
        </div>
        <div className="p-6">
        <GradiuntDonut/>
        </div>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-7">
             <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
     Basic Radar
        </div>
        <div className="p-6">
        <BasicRadar/>
        </div>
        </div>
         <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
     Radar Multiple
        </div>
        <div className="p-6">
        <MultipleRadar/>
        </div>
        </div>
         <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
     Radar Polygon
        </div>
        <div className="p-6">
        <RadarPolygone/>
        </div>
        </div>
        </div>
    </>
  )
}

export default ApexCharts
