import type { ColumnDef } from "@tanstack/table-core";
import MainTitle from "../../hooks/MainTitle"
import { Table } from "../../hooks/FilterTable";
import ProductStockTable from "../../hooks/ProductStockTable";
import { SquarePen, Trash2 } from "lucide-react";
import type { Product } from "../../types/Dashboard";
 type Order = {
    id: string;
    name: string;
    address: string;
    date: string;
    type: string;
    status: string;
    };

  const data: Order[] = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
    { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
    { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
    { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
    { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
    { id: '00006', name: 'Alfred Murray', address: '543 Weinman Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
    ];

    const columns: ColumnDef<Order>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'NAME' },
    { accessorKey: 'address', header: 'ADDRESS' },
    { accessorKey: 'date', header: 'DATE' },
    { accessorKey: 'type', header: 'TYPE' },
    {
        accessorKey: 'status',
        header: 'STATUS',
        cell: ({ row }) => {
        const status = row.original.status;
        return (
            <button className={`rounded-md text-xs font-bold py-1 px-4 w-[93px] focus:outline-none ${statusColors[status]}`}>
            {status}
            </button>
        );
        },
    },
    ];

     const statusColors: Record<string, string> = {
    Completed: 'bg-[#00B69B]/30 text-[#00B69B]',
    Processing: 'bg-[#6226EF]/30 text-[#6226EF]',
    Rejected: 'bg-[#EF3826]/30 text-[#EF3826]',
    'On Hold': 'bg-[#FFA756]/30 text-[#FFA756]',
    'In Transit': 'bg-[#BA29FF]/30 text-[#BA29FF]',
    };

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

const productcolumns: ColumnDef<Product>[] = [
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

function TablePage() {
  return (
    <>
      <MainTitle title="Table"/>
    <div className="border border-[#212121]/6 mb-6"></div>
      <Table data={data} columns={columns} isPaginated={false} />
      <div className="border border-[#212121]/6 my-6"></div>
      <ProductStockTable data={defaultData} columns={productcolumns} />
    </>
  )
}

export default TablePage
