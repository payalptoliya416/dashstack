import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world";

function Maps() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (mapInstance.current) {
      mapInstance.current.destroy();
    }

    mapInstance.current = new jsVectorMap({
      selector: mapRef.current,
      map: "world",
      zoomButtons: true,
      markers: [
        { name: "India", coords: [20.5937, 78.9629] },
        { name: "USA", coords: [37.0902, -95.7129] },
      ],
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <>
    <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
      <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Basic Map
      </div>
      <div className="p-6">
        <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
    </>
  );
}

export default Maps;