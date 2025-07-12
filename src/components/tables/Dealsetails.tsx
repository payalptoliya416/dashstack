import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const data = [
  {
    product: "Apple Watch",
    image: "/images/watch.png",
    location: "6096 Marjolaine Landing",
    dateTime: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },
];

const columns = [
  {
    header: "Product Name",
    accessorKey: "product",
    cell: ({ row }: any) => (
      <div className="flex items-center gap-3 mr-3">
        <img
          src={row.original.image}
          alt={row.original.product}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>{row.original.product}</span>
      </div>
    ),
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Date - Time",
    accessorKey: "dateTime",
  },
  {
    header: "Piece",
    accessorKey: "piece",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }: any) => (
      <span className="bg-[#00B69B] text-white text-sm px-4 py-1 rounded-full">
        {getValue()}
      </span>
    ),
  },
];

function Dealsetails() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="flex justify-between items-center mb-5 sm:mb-0">
        <h2 className="text-lg sm:text-2xl sm:mb-[35px] font-bold">Deals Details</h2>
        <select className="border rounded px-2 py-1 text-sm border-[#D5D5D5] text-[#2B303466] focus:outline-none">
          <option>October</option>
          <option>November</option>
        </select>
      </div>
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
                    className="text-[#202224] text-sm font-bold py-4 px-5 whitespace-nowrap"
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
              <tr
                key={row.id}
                className="border-b border-[rgba(151,151,151,0.25)]"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-5 whitespace-nowrap">
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
    </>
  );
}

export default Dealsetails;
