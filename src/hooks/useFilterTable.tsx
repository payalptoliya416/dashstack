import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {motion} from 'framer-motion';
import { useFadeIn } from "./useFadeIn";

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
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }), 
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
    pages.push(<span key="start-ellipsis" className="px-3 text-gray-500 flex items-end">...</span>);
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
    pages.push(<div key="end-ellipsis" className="px-3 text-gray-500 flex items-end">...</div>);
  }

  return pages;
};

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
                    className="py-[15px] px-[31px] text-sm font-extrabold text-darkgray text-start bg-[#FCFDFD]"
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
                    className="py-4 sm:py-7 px-6 sm:px-8 text-sm font-semibold text-darkgray whitespace-nowrap"
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
     <motion.div  variants={fadeIn}
                 initial="hidden"
                 animate="visible"
                 custom={0} className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-4 text-sm text-gray-500">
           <span>
             Showing {table.getRowModel().rows.length} of {data.length} products
           </span>
   
           <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
             <button
               onClick={() => table.previousPage()}
               disabled={!table.getCanPreviousPage()}
               className={`py-1 md:py-2 px-3 md:px-[12px] border-r border-[#979797] ${
                 !table.getCanPreviousPage() ? "opacity-50 cursor-not-allowed" : ""
               }`}
             >
               <ChevronLeft size={17} />
             </button>
                 {getPageButtons()}
             <button
               onClick={() => table.nextPage()}
               disabled={!table.getCanNextPage()}
               className={`py-1 md:py-2 px-3 md:px-[12px] border-l border-[#979797] ${
                 !table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : ""
               }`}
             >
               <ChevronRight size={17} />
             </button>
           </div>
         </motion.div>)}
    </>
  );
}
