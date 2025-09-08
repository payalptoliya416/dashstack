
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type Props<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  enableSearch?: boolean;
  enablePagination?: boolean;
  globalFilter?: string;
  onGlobalFilterChange?: (value: string) => void;
};

function ProductStockTable<T>({
  data,
  columns,
  enableSearch = false,
  enablePagination = false,
  globalFilter = "",
  onGlobalFilterChange,
}: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: enableSearch ? globalFilter : undefined,
    },
    onGlobalFilterChange: enableSearch ? onGlobalFilterChange : undefined,
    globalFilterFn: enableSearch
      ? (row, columnId, filterValue) => {
          const value = row.getValue(columnId);
          return String(value)
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
      : undefined,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: enableSearch ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
  });

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="w-full overflow-x-auto bg-white rounded-xl">
          <table className="min-w-full bg-white rounded-xl border border-[#D5D5D5]/50">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="text-left text-sm text-darkgray border-b border-[#D5D5D5]/60"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="py-4 px-10 font-bold text-sm text-darkgray whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`${
                    index === table.getRowModel().rows.length - 1
                      ? ""
                      : "border-b border-[#D5D5D5]/60"
                  } bg-white text-sm font-semibold text-darkgray`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="py-4 sm:py-6 px-6 sm:px-[30px] whitespace-nowrap text-darkgray/90 text-sm font-semibold"
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
  );
}

export default ProductStockTable;
