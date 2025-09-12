import { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import type { JsVectorMapOptions } from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world";

interface JsVectorMapOptionsWithLabels extends JsVectorMapOptions {
  labels?: {
    markers?: {
      render?: (marker: any) => string;
    };
  };
}

function MarkerMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<jsVectorMap | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      const options: JsVectorMapOptionsWithLabels = {
        selector: mapRef.current,
        map: "world",
        zoomButtons: true,

        labels: {
          markers: {
            render: (marker: any) => marker.name,
          },
        },

        markers: [
          { name: "Canada", coords: [56.1304, -106.3468], style: { fill: "#f44336" } },
          { name: "United States", coords: [37.0902, -95.7129], style: { fill: "#673ab7" } },
          { name: "Brazil", coords: [-14.235, -51.9253], style: { fill: "#212121" } },
          { name: "Greenland", coords: [71.7069, -42.6043], style: { fill: "#00bcd4" } },
          { name: "Russia", coords: [61.524, 105.3188], style: { fill: "#e91e63" } },
          { name: "China", coords: [35.8617, 104.1954], style: { fill: "#4caf50" } },
          { name: "Palestine", coords: [31.9522, 35.2332], style: { fill: "#ff9800" } },
        ],

        series: {
          markers: [
            {
              scale: {
                yellow: "#ffeb3b",
                blue: "#2196f3",
              },
              attribute: "fill",
              legend: {
                title: "Something (marker)",
                vertical: true,
              },
              values: {
                0: "yellow",
                1: "blue",
              },
            },
          ],
        },
      };

      mapInstance.current = new jsVectorMap(options);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
      <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
        Marker
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

export default MarkerMap;
