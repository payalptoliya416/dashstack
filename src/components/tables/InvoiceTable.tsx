import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import type { InvoiceData } from "../../types/Dashboard";
import React from "react";


interface Props {
  data: InvoiceData[];
}

const columns: ColumnDef<InvoiceData>[] = [
  {
    header:"Serial No.",
    accessorKey: "serialno",
    cell: info => <div>{info.getValue() as string}</div>,
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
    header:"Total Cost",
    accessorKey: "totalcost",
    cell: info => <div>{info.getValue() as string}</div>,
  },
];

function InvoiceTable({ data }: Props) {
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
                      className="text-darkgray text-sm font-bold py-4 px-5 whitespace-nowrap text-center"
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
                    <td key={cell.id} className="p-5 whitespace-nowrap text-center">
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
      <div className="col-span-12 text-end pr-[60px] pt-4 text-base font-bold text-darkgray">
        Total = ${total}
      </div>
    </div>
  );
}

export default InvoiceTable;
