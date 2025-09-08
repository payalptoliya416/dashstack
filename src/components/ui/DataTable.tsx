// components/DataTable.tsx
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useFadeIn } from "../../hooks/useFadeIn";

type Props<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  isPaginated?: boolean;
  pageSize?: number;
};

export function DataTable<T>({
  data,
  columns,
  isPaginated = true,
  pageSize = 7,
}: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
    ...(isPaginated && {
      initialState: { pagination: { pageSize } },
    }),
  });

  const rows = isPaginated
    ? table.getPaginationRowModel().rows
    : table.getRowModel().rows;

  const fadeIn = useFadeIn();
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const getPageButtons = () => {
    const pages = [];
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(pageCount - 1, currentPage + 1);

    if (currentPage <= 2) {
      start = 2;
      end = 4;
    } else if (currentPage >= pageCount - 1) {
      start = pageCount - 3;
      end = pageCount - 1;
    }

    if (start > 2) {
      pages.push(
        <span
          key="start-ellipsis"
          className="px-3 text-gray-500 flex items-end"
        >
          ...
        </span>
      );
    }

    for (let i = start; i <= end; i++) {
      if (i > 1 && i < pageCount) {
        pages.push(
          <button
            key={i}
            onClick={() => table.setPageIndex(i - 1)}
            className={`px-3 py-1 text-sm ${
              currentPage === i
                ? "bg-gray-800 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    if (end < pageCount - 1) {
      pages.push(
        <div
          key="end-ellipsis"
          className="px-3 text-gray-500 flex items-end"
        >
          ...
        </div>
      );
    }

    return pages;
  };

  return (
    <>
      <div className="bg-white overflow-x-auto rounded-xl">
        <table className="min-w-full divide-y divide-gray-100">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-[#FCFDFD]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-[12px] px-[20px] text-sm font-extrabold text-darkgray text-start"
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
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={
                  index === rows.length - 1
                    ? ""
                    : "border-b border-[#D5D5D5]/60"
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-[14px] px-[20px] text-sm font-semibold text-darkgray whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPaginated && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-4 text-sm text-gray-500 px-6 py-2"
        >
          <span>
            Showing {table.getRowModel().rows.length} of {data.length} items
          </span>

          <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`py-1 md:py-2 px-3 border-r border-[#979797] ${
                !table.getCanPreviousPage()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronLeft size={17} />
            </button>
            {getPageButtons()}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`py-1 md:py-2 px-3 border-l border-[#979797] ${
                !table.getCanNextPage()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
