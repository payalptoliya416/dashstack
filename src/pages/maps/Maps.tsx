import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world";
import MarkerMap from "./MarkerMap";

function Maps() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (mapInstance.current) {
      mapInstance.current.destroy();
      mapInstance.current = null;
    }
    mapRef.current.innerHTML = "";

    mapInstance.current = new jsVectorMap({
      selector: mapRef.current,
      map: "world",
      zoomButtons: true,

      regionStyle: {
        initial: { fill: "#E5E7EB" },
      },

      markers: [
        { name: "India", coords: [20.5937, 78.9629] },
        { name: "USA", coords: [37.0902, -95.7129] },
      ],

      series: {
        regions: [
          {
            values: { IN: "criteria1", US: "criteria2" },
            scale: {
              criteria1: "#22c55e", // green
              criteria2: "#ef4444", // red
            },
            legend: {
              title: "Some title (region)",
              position: "right",
            },
          },
        ],
        markers: [
          {
            values: { 0: "criteria1", 1: "criteria2" },
            scale: {
              criteria1: "#facc15", // yellow
              criteria2: "#3b82f6", // blue
            },
            legend: {
              title: "Something (marker)",
              position: "right",
            },
          },
        ],
      },
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
    <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
      <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Basic
      </div>
       <div className="grid grid-cols-12"> 
        <div className="col-span-12">
        <div className="w-full overflow-x-auto bg-white rounded-xl">
          <div className="min-w-full">
          <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
          </div>
        </div>
        </div>
        </div>
    </div>

    <MarkerMap/>
    
        <div className="rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="p-4 md:px-6 md:py-3 border-b border-gray-200 font-bold text-[17px]">
          <h3 className="font-bold text-[17px] text-darkgray">Uses Instruction</h3>
        </div>
        <div className="py-4 px-6 border-b border-gray-200">
          <p className=" text-sm text-lightgray">Quill is delivered primarily via npm
          <span className="text-[#e83e8c] py-[3px] px-2 rounded bg-[#f1f2f3] text-sm w-max ms-2">
        npm install jsvectormap
          </span>
          </p>
        </div>
          <div className="py-4 px-6">
             <p className=" text-sm text-lightgray">For full documentation please visit the link: <a href="https://jvm-docs.vercel.app/docs/introduction" className=" break-all"><strong className="underline">https://jvm-docs.vercel.app/docs/introduction</strong></a></p>
          </div>
      </div>
    </>
  );
}

export default Maps;
