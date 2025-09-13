import UIOptionTable from "../../base-ui/UIOptionTable"
import { ReChartData } from "./ReChartData"
import TreeMap from "./TreeMap"
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

function Recharts() {
  return (
    <>
    <motion.div  {...usePageAnimation()} className="overflow-hidden">
        <div className="rounded-lg shadow border border-gray-100 bg-white ">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
         Tree Map
        </div>
        <div className="p-6">
        <TreeMap/>
        </div>
        </div>
        <UIOptionTable title="Options" options={ReChartData} />
    </motion.div>
    </>
  )
}

export default Recharts
