import UIOptionTable from "../../base-ui/UIOptionTable"
import { ReChartData } from "./ReChartData"
import TreeMap from "./TreeMap"

function Recharts() {
  return (
    <>
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Tree Map
        </div>
        <div className="p-6">
        <TreeMap/>
        </div>
        </div>
        <UIOptionTable title="Options" options={ReChartData} />
    </>
  )
}

export default Recharts
