import { type ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import { DataTable } from "../../../components/ui/DataTable";
import type { Recent, Status } from "../../../types/DashboardModule";

type Props = {
  data: Recent[];
};

export function RecentOrderTable({ data }: Props) {
  const columns: ColumnDef<Recent>[] = [
    {
      accessorKey: "invoiceId",
      header: "Invoice",
      cell: (info) => {
        const value = info.getValue() as string;
        return <>#{value}</>;
      },
    },
    {
      accessorKey: "customerName",
      header: "Customer",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <div className="w-[47px] h-[47px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={row.customerImage}
                alt={row.customerName}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-darkgray">
                {row.customerName}
              </h3>
              <p className="text-13">{row.customerEmail}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "couponCode",
      header: "Coupon",
      cell: (info) =>
        info.getValue() ? (
          <button className="border border-[#25B865] px-[7px] py-[5px] rounded text-[#25B865] text-11 leading-[13px]">
            {info.getValue() as string}
          </button>
        ) : (
          <span className="text-gray-400 text-xs">No coupon</span>
        ),
    },
    {
      accessorKey: "productName",
      header: "Product",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex gap-3 items-center">
            <div className="w-[53px] h-[40px] bg-[#eef0f3] rounded-lg flex justify-center items-center">
              <img
                src={row.productImage}
                alt={row.productName}
                className="max-h-full"
              />
            </div>
            <div>
              <h3 className="text-sm mb-1 font-semibold">{row.productName}</h3>
              <p className="text-xs">Invoice: #{row.invoiceId}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "paymentMethod",
      header: "Payment",
      cell: (info) => (
        <span className="capitalize">{info.getValue() as string}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue() as Status;
        const styles: Record<Status, string> = {
          Completed: "text-[#25b865] bg-[#e9f8f0]",
          Reject: "text-[#D13B4C] bg-[#fbeff1]",
          Pending: "text-[#e49e3d] bg-[#fcf3e8]",
        };
        return (
          <button
            className={`text-11 px-[7px] py-[5px] rounded leading-[13px] ${styles[status]}`}
          >
            {status}
          </button>
        );
      },
    },
    {
      id: "actions",
      header: "Action",
      cell: () => (
        <button className="text-sm">
          <EllipsisVertical size={17} />
        </button>
      ),
    },
  ];

  return (
    <DataTable data={data} columns={columns} isPaginated={true} pageSize={5} />
  );
}
