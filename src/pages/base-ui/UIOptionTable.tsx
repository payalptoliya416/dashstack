import React from "react";

export interface Option {
  reference: string;
  details: React.ReactNode;
}

interface OptionTableProps {
  title?: string; 
  options: Option[];
}

const UIOptionTable: React.FC<OptionTableProps> = ({ title = "Options", options }) => {
  return (
    <div className="grid grid-cols-12 rounded-lg shadow-md border border-gray-200 bg-white mt-7">
      <div className="col-span-12">
        <div className="p-6 font-bold text-[17px]">{title}</div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border border-gray-100">
            <thead>
              <tr className="text-left">
                <th className="px-6 py-3 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Reference
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600 whitespace-nowrap">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {options.map((opt, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 text-sm leading-[26px] text-gray-700 whitespace-nowrap"
                >
                  <td className="px-6 py-3">
                    <button className="text-[#e83e8c] py-[2px] px-2 rounded bg-[#f1f2f3] text-sm">
                      {opt.reference}
                    </button>
                  </td>
                  <td className="px-4 py-3">{opt.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UIOptionTable;
