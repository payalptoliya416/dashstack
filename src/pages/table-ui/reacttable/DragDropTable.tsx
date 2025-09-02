import { useMemo, useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Move } from "lucide-react";

// ---------------- Types ----------------
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
    firstName: "Sanford",
    lastName: "Nienow",
    age: 17,
    visits: 81,
    status: "relationship",
    profileProgress: 5,
  },
  {
    firstName: "Dillan",
    lastName: "Abshire",
    age: 5,
    visits: 97,
    status: "complicated",
    profileProgress: 24,
  },
  {
    firstName: "Dee",
    lastName: "Von",
    age: 33,
    visits: 3,
    status: "relationship",
    profileProgress: 36,
  },
  {
    firstName: "Marjorie",
    lastName: "Johnston",
    age: 25,
    visits: 70,
    status: "single",
    profileProgress: 42,
  },
  {
    firstName: "Arely",
    lastName: "Hayes",
    age: 38,
    visits: 24,
    status: "relationship",
    profileProgress: 30,
  },
  {
    firstName: "Tyrese",
    lastName: "Spinka",
    age: 0,
    visits: 14,
    status: "complicated",
    profileProgress: 88,
  },
  {
    firstName: "Noe",
    lastName: "Harvey",
    age: 36,
    visits: 16,
    status: "complicated",
    profileProgress: 69,
  },
  {
    firstName: "Francesca",
    lastName: "Parker",
    age: 9,
    visits: 5,
    status: "single",
    profileProgress: 9,
  },
  {
    firstName: "Carlo",
    lastName: "Barrows",
    age: 33,
    visits: 57,
    status: "complicated",
    profileProgress: 49,
  },
];

// ---------------- Sortable Row ----------------
function SortableRow({ row }: { row: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: row.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className="border-b border-gray-100"
    >
      {row.getVisibleCells().map((cell: any, i: number) => (
        <td key={cell.id} className="py-3 px-6 whitespace-nowrap">
          {i === 0 ? (
            <button
              {...attributes}
              {...listeners}
              className="cursor-grab focus:border-none"
            >
              <Move className="w-4 h-4 text-gray-500" />
            </button>
          ) : (
            flexRender(cell.column.columnDef.cell, cell.getContext())
          )}
        </td>
      ))}
    </tr>
  );
}

// ---------------- Main Component ----------------
export default function DragDropTable() {
  const [data, setData] = useState<Person[]>(() => [...defaultData]);

  const columnHelper = createColumnHelper<Person>();

  const columns = useMemo<ColumnDef<Person, any>[]>(
    () => [
      columnHelper.display({
        id: "move",
        header: "Move",
        cell: () => null, // handled in SortableRow
      }),
      columnHelper.accessor("firstName", { header: "firstName" }),
      columnHelper.accessor("lastName", { header: "Last Name" }),
      columnHelper.accessor("age", { header: "Age" }),
      columnHelper.accessor("visits", { header: "Visits" }),
      columnHelper.accessor("status", { header: "Status" }),
      columnHelper.accessor("profileProgress", { header: "Profile Progress" }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setData((old) => {
      const oldIndex = table
        .getRowModel()
        .rows.findIndex((r) => r.id === active.id);
      const newIndex = table
        .getRowModel()
        .rows.findIndex((r) => r.id === over.id);
      return arrayMove(old, oldIndex, newIndex);
    });
  };

  return (
    <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
      <div className="p-4 border-b border-gray-200 font-bold text-[17px]">
        Drag & Drop
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="w-full overflow-x-auto bg-white rounded-xl">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={table.getRowModel().rows.map((row) => row.id)}
                strategy={verticalListSortingStrategy}
              >
                <table className="w-full border-collapse text-sm">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr
                        key={headerGroup.id}
                        className="border-b border-gray-200"
                      >
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
                      <SortableRow key={row.id} row={row} />
                    ))}
                  </tbody>
                </table>
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    </div>
  );
}
