import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  isPaginated?: boolean;
};

export function Table<T>({ data, columns ,isPaginated = true }: Props<T>) {
   const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }), // 🔥 Conditionally apply
    ...(isPaginated && {
      initialState: {
        pagination: {
          pageSize: 7,
        },
      },
    }),
  });
  
   const rows = isPaginated
    ? table.getPaginationRowModel().rows
    : table.getRowModel().rows;

  return (
    <>
    <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="w-full overflow-x-auto bg-white rounded-xl">
        <table className="min-w-full divide-y divide-[#FCFDFD]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-[#D5D5D5]/60">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-[15px] px-[31px] text-sm font-extrabold text-[#202224] text-start bg-[#FCFDFD]"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index === rows.length - 1
                    ? "" 
                    : "border-b border-[#D5D5D5]/60"
                }`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-4 sm:py-7 px-6 sm:px-8 text-sm font-semibold text-[#202224] whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </div>
      {isPaginated && (
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">
          Showing {table.getRowModel().rows.length} of {data.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 text-sm bg-gray-200 rounded disabled:opacity-50"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>)}
    </>
  );
}
