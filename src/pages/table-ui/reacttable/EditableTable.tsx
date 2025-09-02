import { useMemo, useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";

// ---------------- Type Definitions ----------------
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: "relationship" | "single" | "complicated";
  profileProgress: number;
};

// ---------------- Mock Data ----------------
const defaultData: Person[] = [
  {
    firstName: "Antoinette",
    lastName: "Mertz",
    age: 1,
    visits: 11,
    status: "single",
    profileProgress: 26,
  },
  {
    firstName: "Twila",
    lastName: "Conroy",
    age: 17,
    visits: 30,
    status: "complicated",
    profileProgress: 58,
  },
  {
    firstName: "Jimmie",
    lastName: "Reynolds",
    age: 26,
    visits: 82,
    status: "relationship",
    profileProgress: 82,
  },
  {
    firstName: "Eleonore",
    lastName: "Cummings",
    age: 37,
    visits: 84,
    status: "relationship",
    profileProgress: 70,
  },
  {
    firstName: "Odessa",
    lastName: "Macejkovic",
    age: 3,
    visits: 14,
    status: "single",
    profileProgress: 14,
  },
  {
    firstName: "Luis",
    lastName: "Auer",
    age: 32,
    visits: 40,
    status: "relationship",
    profileProgress: 13,
  },
  {
    firstName: "Ciara",
    lastName: "Macejkovic",
    age: 12,
    visits: 70,
    status: "single",
    profileProgress: 37,
  },
  {
    firstName: "Myrna",
    lastName: "Bednar-Kreiger",
    age: 21,
    visits: 81,
    status: "relationship",
    profileProgress: 90,
  },
  {
    firstName: "Luther",
    lastName: "Bayer",
    age: 16,
    visits: 79,
    status: "relationship",
    profileProgress: 59,
  },
];

// ---------------- Component ----------------
export default function EditableTable() {
  const [data, setData] = useState<Person[]>(() => [...defaultData]);

  const updateData = (rowIndex: number, columnId: string, value: unknown) => {
    setData((old) =>
      old.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    );
  };

  const columnHelper = createColumnHelper<Person>();

  const inputClass =
    "w-full py-2 px-3 border border-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-500";

  const columns = useMemo<ColumnDef<Person, any>[]>(
    () => [
      columnHelper.accessor("firstName", {
        header: "First Name",
        cell: (info) => (
          <input
            className={inputClass}
            value={info.getValue() as string}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, e.target.value)
            }
          />
        ),
      }),
      columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: (info) => (
          <input
            className={inputClass}
            value={info.getValue() as string}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, e.target.value)
            }
          />
        ),
      }),
      columnHelper.accessor("age", {
        header: "Age",
        cell: (info) => (
          <input
            type="number"
            className={inputClass}
            value={info.getValue() as number}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, Number(e.target.value))
            }
          />
        ),
      }),
      columnHelper.accessor("visits", {
        header: "Visits",
        cell: (info) => (
          <input
            type="number"
            className={inputClass}
            value={info.getValue() as number}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, Number(e.target.value))
            }
          />
        ),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => (
          <select
            className={inputClass}
            value={info.getValue() as string}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, e.target.value)
            }
          >
            <option value="single">Single</option>
            <option value="relationship">Relationship</option>
            <option value="complicated">Complicated</option>
          </select>
        ),
      }),
      columnHelper.accessor("profileProgress", {
        header: "Profile Progress",
        cell: (info) => (
          <input
            type="number"
            className={inputClass}
            value={info.getValue() as number}
            onChange={(e) =>
              updateData(info.row.index, info.column.id, Number(e.target.value))
            }
          />
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
      <div className="p-4 border-b border-gray-200 font-bold text-[17px]">
        Editable
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="w-full overflow-x-auto bg-white rounded-xl">
            <table className="w-full border-collapse text-sm">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-gray-200">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3 px-6 text-left whitespace-nowrap"
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
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-3 px-6 whitespace-nowrap">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
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
  );
}
