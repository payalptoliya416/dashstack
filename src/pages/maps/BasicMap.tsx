import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world";

function BasicMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Cleanup old map before creating new
    if (mapInstance.current) {
      mapInstance.current.destroy();
      mapInstance.current = null;
    }
    mapRef.current.innerHTML = "";

    // Create simple world map
    mapInstance.current = new jsVectorMap({
      selector: mapRef.current,
      map: "world",
      zoomButtons: true,
      regionStyle: {
        initial: { fill: "#E5E7EB" }, // light grey
        hover: { fill: "#9CA3AF" },   // darker grey on hover
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
  );
}

export default BasicMap;
