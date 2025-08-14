import { type ColumnDef } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import { DataTable } from "../../../components/ui/DataTable";
import type {
  CampaignRow,
  CampaignStatus,
} from "../../../types/DashboardModule";

const statusColors: Record<CampaignStatus, string> = {
  "In Progress": "bg-[#ecf5ff] text-[#3e97ff]",
  Upcoming: "bg-[#fff7ec] text-[#e49e3d]",
  Completed: "bg-[#e9f8f0] text-[#25b865]",
  Rejected: "bg-[#fbeff1] text-[#d13b4c]",
  Updating: "bg-[#ecf5ff] text-[#3e97ff]",
};

const campaignData: CampaignRow[] = [
  {
    id: 1,
    name: "[US] Google Display Network",
    description: "Maximizing well-planned advertising.",
    status: "In Progress",
    stateColors: ["bg-[#3e97ff]", "bg-[#3e97ff]", "bg-[#d5d5d5]"],
  },
  {
    id: 2,
    name: "[UK] Shopping campaign",
    description: "Optimizing campaign for better results.",
    status: "Upcoming",
    stateColors: ["bg-[#e49e3d]", "bg-[#e49e3d]", "bg-[#d5d5d5]"],
  },
  {
    id: 3,
    name: "[FR] Dynamic Search Ads",
    description: "Enhancing brand through strategic ads.",
    status: "Completed",
    stateColors: ["bg-[#25b865]", "bg-[#25b865]", "bg-[#25b865]"],
  },
  {
    id: 4,
    name: "[AU] Spring Sale 2024",
    description: "Boosting sales with targeted campaigns.",
    status: "Rejected",
    stateColors: ["bg-[#d13b4c]", "bg-[#d13b4c]", "bg-[#d13b4c]"],
  },
  {
    id: 5,
    name: "[GB] Black Friday 2024",
    description: "When running several campaigns.",
    status: "Updating",
    stateColors: ["bg-[#3e97ff]", "bg-[#3e97ff]", "bg-[#d5d5d5]"],
  },
];

export default function CampaignStateTable() {
  const columns: ColumnDef<CampaignRow>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex gap-4 items-start">
            <div className="text-base font-semibold">{row.id}</div>
            <div>
              <h3 className="font-semibold text-sm">{row.name}</h3>
              <p className="text-xs text-[#6b7177]">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const value = info.getValue() as CampaignStatus;
        return (
          <span
            className={`text-[11px] px-[7px] py-[5px] rounded ${statusColors[value]}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      accessorKey: "stateColors",
      header: "State",
      cell: (info) => {
        const colors = info.getValue() as string[];
        return (
          <div className="flex gap-2">
            {colors.map((c, i) => (
              <span key={i} className={`w-6 h-[4px] rounded-full ${c}`} />
            ))}
          </div>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: () => (
        <button className="text-gray-500 hover:text-gray-700">
          <ArrowRight size={16} />
        </button>
      ),
    },
  ];

  return (
    <DataTable
      data={campaignData}
      columns={columns}
      isPaginated={true}
      pageSize={5}
    />
  );
}
