import { useMemo, useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {motion} from 'framer-motion';
import { usePageAnimation } from "../../../hooks/usePageAnimation";

// ---------------- Types ----------------
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  location: string;
  phone: string;
};

// ---------------- Data ----------------
const data: Person[] = [
  {
    firstName: "Yoshi",
    lastName: "Tannamuri",
    age: 37,
    email: "yoshi.tannamuri@example.com",
    location: "Tokyo, Japan",
    phone: "+81 90-1234-5678",
  },
  {
    firstName: "Roland",
    lastName: "Mendel",
    age: 31,
    email: "roland.mendel@example.com",
    location: "Berlin, Germany",
    phone: "+49 1234 567890",
  },
  {
    firstName: "Maria",
    lastName: "Anders",
    age: 24,
    email: "maria.anders@example.com",
    location: "New York, USA",
    phone: "+1 123-456-7890",
  },
  {
    firstName: "Helen",
    lastName: "Bennett",
    age: 43,
    email: "helen.bennett@example.com",
    location: "London, UK",
    phone: "+44 20 1234 5678",
  },
  {
    firstName: "Francisco",
    lastName: "Chang",
    age: 29,
    email: "francisco.chang@example.com",
    location: "San Francisco, USA",
    phone: "+1 987-654-3210",
  },
];

// ---------------- Icons ----------------
const UpArrow = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "12px", height: "12px" }}
  >
    <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" />
  </svg>
);

const DownArrow = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "12px", height: "12px" }}
  >
    <path d="M296 183L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
  </svg>
);
const UpDownArrow = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "12px", height: "12px" }}
  >
    <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 
      9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 
      17-41zM296 183L177 64c-9.4-9.4-24.6-9.4-33.9 
      0L24 183c-15.1 15.1-4.4 41 17 
      41h238c21.4 0 32.1-25.9 17-41z" />
  </svg>
);

// ---------------- Component ----------------
export default function SortingTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "age", header: "Age" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "location", header: "Location" },
      { accessorKey: "phone", header: "Phone" },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <motion.div  {...usePageAnimation()} className="overflow-hidden">
    <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
          <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
          Sorting
        </div>
       <div className="grid grid-cols-12">
          <div className="col-span-12">
             <div className="w-full overflow-x-auto bg-white rounded-xl">
                <table className="w-full border-collapse text-sm">
                    <thead>
                    {table.getHeaderGroups().map((hg) => (
                        <tr key={hg.id} className="border-b border-gray-200">
                        {hg.headers.map((header) => (
                            <th
                            key={header.id}
                            onClick={header.column.getToggleSortingHandler()}
                            className="py-3 px-6 text-left cursor-pointer select-none whitespace-nowrap"
                            >
                            <div className="flex items-center gap-1">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {header.column.getIsSorted() === "asc" && <UpArrow />}
                                {header.column.getIsSorted() === "desc" && <DownArrow />}
                                {!header.column.getIsSorted() && <UpDownArrow />}
                            </div>
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b border-gray-100">
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="py-3 px-6 whitespace-nowrap">
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
    </div>
    </motion.div>
  );
}
