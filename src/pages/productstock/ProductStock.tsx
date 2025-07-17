import {
  useReactTable,
  getCoreRowModel,
  type ColumnDef,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';

import {
  ChevronLeft,
  ChevronRight,
  Search,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import MainTitle from "../../hooks/MainTitle";
import type { Product } from "../../types/Dashboard";
import ProductStockTable from '../../hooks/ProductStockTable';

const defaultData: Product[] = [
  {
    image: "/images/Bitmap1.png",
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: 690,
    pieces: 63,
    colors: ["#000000", "#9F9F9F", "#E98F8F"],
  },
  {
    image: "/images/Bitmap2.png",
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: 190,
    pieces: 13,
    colors: ["#000000", "#F57C7C", "#4D88EF", "#E9C157"],
  },
  {
    image: "/images/Bitmap3.png",
    name: "Women’s Dress",
    category: "Fashion",
    price: 640,
    pieces: 635,
    colors: ["#882853", "#7CB7F5", "#12163C", "#4343EE"],
  },
  {
    image: "/images/Bitmap4.png",
    name: "Samsung A50",
    category: "Mobile",
    price: 400,
    pieces: 67,
    colors: ["#283988", "#000000", "#A32147"],
  },
  {
    image: "/images/Bitmap5.png",
    name: "Camera",
    category: "Electronic",
    price: 420,
    pieces: 52,
    colors: ["#283988", "#000000", "#A32147"],
  },
  {
    image: "/images/Bitmap2.png",
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: 190,
    pieces: 13,
    colors: ["#000000", "#F57C7C", "#4D88EF", "#E9C157"],
  },
  {
    image: "/images/Bitmap3.png",
    name: "Women’s Dress",
    category: "Fashion",
    price: 640,
    pieces: 635,
    colors: ["#882853", "#7CB7F5", "#12163C", "#4343EE"],
  },
];

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="w-[60px] h-[60px] bg-orange-500 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={row.original.image}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: (info) => (
      <span className="font-semibold">{info.getValue() as string}</span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (info) => `$${(info.getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: "pieces",
    header: "Piece",
  },
  {
    accessorKey: "colors",
    header: "Available Color",
    cell: ({ row }) => (
      <div className="flex gap-4">
        {row.original.colors.map((color, i) => (
          <span
            key={i}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    ),
  },
  {
    header: "Action",
    cell: () => (
      <div className="flex bg-[#FAFBFD] rounded-md border border-[#979797]/70 w-max">
        <button className="border-r border-[#979797]/70 py-2 px-4">
          <SquarePen className="w-4 h-4 text-black/60" />
        </button>
        <button className="py-2 px-4">
          <Trash2 className="w-4 h-4 text-[#EF3826] " />
        </button>
      </div>
    ),
  },
];

export function ProductStock() {
  const [data] = useState<Product[]>(defaultData);
  const [search, setSearch] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: search,
    },
    onGlobalFilterChange: setSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value).toLowerCase().includes(filterValue.toLowerCase());
    },
     initialState: {
      pagination: {
        pageSize: 9,
      },
    },
  });

  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row mb-6 sm:mb-0">
        <MainTitle title="Product Stock" />
        <div>
          <div
            className={`flex items-center bg-white bg-opacity-[60%] rounded-full w-full sm:w-auto xl:w-[350px] px-4 py-[10px] border border-[#D5D5D5]/50`}
          >
            <Search className="text-[#202224]/50 w-5 h-5 mr-[13px]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent focus:outline-none w-full text-sm text-gray-700 placeholder-[#202224]/50"
            />
          </div>
        </div>
      </div>
        <ProductStockTable
        data={data}
        columns={columns}
        enableSearch={true}
        enablePagination={true}
        globalFilter={search}
        onGlobalFilterChange={setSearch}
      />

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing {table.getRowModel().rows.length} of {data.length} products
        </span>

        <div className="flex bg-[#FAFBFD] border border-[#979797] rounded-lg overflow-hidden">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`py-1 md:py-[9px] px-3 md:px-[18px] border-r border-[#979797] ${
              !table.getCanPreviousPage() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`py-1 md:py-[9px] px-3 md:px-[18px] ${
              !table.getCanNextPage() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </>
  );
}
