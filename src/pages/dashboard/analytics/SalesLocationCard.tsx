import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { TrendingUp } from "lucide-react";
import EllipsisMenu from "../ecommerce/EllipsisMenu";
import type { CountrySales } from "../../../types/DashboardModule";

const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const countries: CountrySales[] = [
  {
    name: "United States",
    color: "#3B82F6",
    value: 9658,
    coordinates: [-97, 38],
  },
  { name: "Canada", color: "#EF4444", value: 8258, coordinates: [-106, 56] },
  { name: "China", color: "#22C55E", value: 7698, coordinates: [104, 35] },
  { name: "Russia", color: "#F43F5E", value: 6657, coordinates: [100, 61] },
  { name: "Brazil", color: "#000000", value: 5357, coordinates: [-51, -10] },
  { name: "Palestine", color: "#F59E0B", value: 4456, coordinates: [35, 31.5] },
];

export const SalesLocationCard: React.FC = () => {
  const totalSales = countries.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex px-6 py-4 border-b border-gray-100  items-center justify-between">
        <h3 className="text-lg font-semibold">Sales Location</h3>
        <EllipsisMenu />
      </div>

      <div className="p-4">
        <ComposableMap
          projectionConfig={{
            scale: 70,
          }}
          width={400}
          height={200}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#F3F4F6"
                  stroke="#D1D5DB"
                  strokeWidth={0.1}
                />
              ))
            }
          </Geographies>

          {countries.map((country, i) => (
            <Marker key={i} coordinates={country.coordinates}>
              <circle
                r={5}
                fill={country.color}
                stroke="#fff"
                strokeWidth={1.5}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">
            ${totalSales.toLocaleString()}
          </span>
          <span className="text-green-500 text-[11px] font-medium">
            <TrendingUp className="inline-block" size={13} /> 12.68%
          </span>
        </div>
        <p className="text-xs text-gray-500">Compared to last month sales.</p>
      </div>

      <table className="min-w-full border-collapse mt-4">
        <tbody>
          {countries.map((row, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-2 px-4">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: row.color }}
                  ></span>
                  <span className="text-sm text-gray-800">{row.name}</span>
                </div>
              </td>
              <td className="py-2 px-4 text-sm text-gray-600 text-right">
                ${row.value.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
