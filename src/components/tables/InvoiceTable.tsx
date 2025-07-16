import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import type { InvoiceData } from "../../types/Dashboard";
import React from "react";

const data: InvoiceData[] = [
  { serialno: "1", description: "Children Toy", quantity: "2", basecost: "$20", totalcost: "$80" },
  { serialno: "2", description: "Makeup", quantity: "2", basecost: "$50", totalcost: "$100" },
  { serialno: "3", description: "Asus Laptop", quantity: "5", basecost: "$100", totalcost: "$500" },
  { serialno: "4", description: "Iphone X", quantity: "4", basecost: "$1000", totalcost: "$4000" },
];

const columns: ColumnDef<InvoiceData>[] = [
  {
    header: () => <div className="pl-[60px]">Serial No.</div>,
    accessorKey: "serialno",
    cell: info => <div className="pl-[60px]">{info.getValue() as string}</div>,
  },
  {
    header: "Description",
    accessorKey: "description",
    cell: info => <div>{info.getValue() as string}</div>,
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
    cell: info => <div>{info.getValue() as string}</div>,
  },
  {
    header: "Base Cost",
    accessorKey: "basecost",
    cell: info => <div>{info.getValue() as string}</div>,
  },
  {
    header: () => <div className="pr-[60px] text-end">Total Cost</div>,
    accessorKey: "totalcost",
    cell: info => <div className="pr-[60px] text-end">{info.getValue() as string}</div>,
  },
];

function InvoiceTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const total = data.reduce(
    (acc, item) => acc + parseFloat(item.totalcost.replace("$", "")),
    0
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="w-full overflow-x-auto bg-white rounded-xl">
          <table className="w-full text-sm text-left">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-[#F1F4F9] rounded-lg">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="text-[#202224] text-sm font-bold py-4 px-5 whitespace-nowrap"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      ) as React.ReactNode}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b border-[rgba(151,151,151,0.25)]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-5 whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      ) as React.ReactNode}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-span-12 text-end pr-[60px] pt-4 text-base font-bold text-[#202224]">
        Total = ${total}
      </div>
    </div>
  );
}

export default InvoiceTable;
