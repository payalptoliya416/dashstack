

import ServerForm from "./ServerForm";
import NativeForm from "./NativeForm";
import TooltipForm from "./TooltipForm";

function Validation() {
   
  return (
    <>
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Native HTML5
        </div>
        <NativeForm/>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Server Rendered
        </div>
        <ServerForm/>
      </div>

      <div className="rounded-lg shadow border border-gray-100 bg-white mb-5 xl:mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Validation Tooltips
        </div>
        <TooltipForm/>
      </div>

      <div className="grid grid-cols-12 rounded-lg shadow-md border border-gray-200 bg-white mt-7">
        <div className="col-span-12">
          <div className="p-6 font-bold text-[17px]">Options</div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full border border-gray-100 text-left text-sm whitespace-nowrap">
              <thead>
                <tr>
                  <th className="px-6 py-2 border-b border-gray-100">Name</th>
                  <th className="px-6 py-2 border-b border-gray-100">Type</th>
                  <th className="px-6 py-2 border-b border-gray-100">
                    Default
                  </th>
                  <th className="px-6 py-2 border-b border-gray-100">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">type</td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                      'valid'
                    </button>{" "}
                    |
                    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                      'invalid'
                    </button>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                      'valid'
                    </button>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    Specify whether the feedback is for valid or invalid fields
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">
                    tooltip
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">bool</td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                      false
                    </button>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    Display feedback as a tooltip.
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-100 px-6 py-3">as</td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    elementType
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
                      'div'
                    </button>
                  </td>
                  <td className="border-b border-gray-100 px-6 py-3">
                    You can use a custom element type for this component.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Validation;
