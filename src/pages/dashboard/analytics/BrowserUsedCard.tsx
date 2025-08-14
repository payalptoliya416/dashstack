import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { EllipsisVertical } from "lucide-react";

const browserData = [
  { name: "Safari", value: 486 },
  { name: "Chrome", value: 640 },
  { name: "Firefox", value: 274 },
  { name: "Opera", value: 456 },
  { name: "Edge", value: 312 },
  { name: "Others", value: 428 },
];

const browserTableData = [
  { img: "/images/br1.png", name: "Safari", users: 486, percent: "66.36%" },
  { img: "/images/br2.png", name: "Chrome", users: 640, percent: "86.01%" },
  { img: "/images/br3.png", name: "Firefox", users: 274, percent: "59.22%" },
  { img: "/images/br4.png", name: "Opera", users: 456, percent: "63.82%" },
  { img: "/images/br5.png", name: "Edge", users: 312, percent: "57.48%" },
  { img: "/images/br6.png", name: "Others", users: 428, percent: "35.62%" },
];

export function BrowserUsedCard() {
  return (
    <>
      <div className="flex px-6 py-4 border-b border-gray-100 items-center justify-between">
        <h3 className="text-lg font-semibold">Browser Used</h3>
        <EllipsisVertical size={18} className="text-gray-500" />
      </div>

      {/* Chart */}
      <div className="h-48 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={browserData}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
            />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar
              dataKey="value"
              fill="#60A5FA"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse">
        <tbody>
          {browserTableData.map((row, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <img src={row.img} alt={row.name} className="w-6 h-6" />
                  <span className="text-sm font-medium text-gray-800">
                    {row.name}
                  </span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600 text-end">
                {row.users}
              </td>
              <td className="py-3 px-4 text-sm text-gray-600 text-end">
                {row.percent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
