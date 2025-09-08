import { type ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import { DataTable } from "../../../components/ui/DataTable";
import type {
  ProposalStatus,
  UserRow,
  WorkStatus,
} from "../../../types/DashboardModule";

type Props = {
  data: UserRow[];
};

export function LatestLeadTable({ data }: Props) {
  const statusColors: Record<ProposalStatus | WorkStatus, string> = {
    New: "bg-[#fcf3e8] text-[#e49e3d]",
    "In Progress": "bg-[#fcf3e8] text-[#e49e3d]",
    Rejected: "bg-[#fbeff1] text-[#d13b4c]",
    "Not Interested": "bg-[#fbeff1] text-[#d13b4c]",
    Sent: "bg-[#e9f8f0] text-[#25b865]",
    Completed: "bg-[#e9f8f0] text-[#25b865]",
  };

  const columns: ColumnDef<UserRow>[] = [
    {
      accessorKey: "name",
      header: "Users",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex gap-3 items-center">
            <div className="w-[47px] h-[47px] bg-[#eef0f3] rounded-full flex justify-center items-center overflow-hidden">
              <img
                src={row.image}
                alt={row.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm mb-1 font-semibold">{row.name}</h3>
              <p className="text-xs">{row.email}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "proposal",
      header: "Proposal",
      cell: (info) => {
        const value = info.getValue() as ProposalStatus;
        return (
          <span
            className={`text-11 px-[7px] py-[5px] rounded leading-[13px] ${statusColors[value]}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (info) => <span>{info.getValue() as string}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const value = info.getValue() as WorkStatus;
        return (
          <span
            className={`text-11 px-[7px] py-[5px] rounded leading-[13px] ${statusColors[value]}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: () => <EllipsisVertical size={17} />,
    },
  ];

  return (
    <DataTable data={data} columns={columns} isPaginated={true} pageSize={5} />
  );
}
