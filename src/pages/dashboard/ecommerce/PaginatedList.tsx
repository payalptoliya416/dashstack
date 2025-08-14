import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useFadeIn } from "../../../hooks/useFadeIn";
import type { PaginatedListProps } from "../../../types/DashboardModule";

export function PaginatedList<T>({
  data,
  pageSize = 7,
  renderItem,
}: PaginatedListProps<T>) {
  const table = useReactTable({
    data,
    columns: [{ accessorKey: "id" }],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize } },
  });

  const rows = table.getPaginationRowModel().rows;
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
        <div key="end-ellipsis" className="px-3 text-gray-500 flex items-end">
          ...
        </div>
      );
    }

    return pages;
  };

  return (
    <>
      <div className="bg-white rounded-xl divide-y divide-gray-100 overflow-hidden">
        {rows.map((row) => (
          <div key={row.id}>{renderItem(row.original)}</div>
        ))}
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-4 text-sm text-gray-500 px-6 py-2"
      >
        <span>
          Showing {rows.length} of {data.length} items
        </span>

        <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`py-1 md:py-2 px-3 border-r border-[#979797] ${
              !table.getCanPreviousPage() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={17} />
          </button>
          {getPageButtons()}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`py-1 md:py-2 px-3 border-l border-[#979797] ${
              !table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
