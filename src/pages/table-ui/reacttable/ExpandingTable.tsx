import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

type PersonData = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  subRows?: PersonData[];
};

const defaultData: PersonData[] = [
  {
    firstName: "Bartholome",
    lastName: "Bosco",
    age: 22,
    visits: 67,
    status: "complicated",
    progress: 75,
  },
  {
    firstName: "Lew",
    lastName: "Kulas",
    age: 28,
    visits: 60,
    status: "single",
    progress: 63,
    subRows: [
      {
        firstName: "Alec",
        lastName: "Will",
        age: 17,
        visits: 39,
        status: "single",
        progress: 96,
      },
      {
        firstName: "Naomi",
        lastName: "McClure",
        age: 4,
        visits: 98,
        status: "complicated",
        progress: 99,
      },
      {
        firstName: "Alford",
        lastName: "Von",
        age: 29,
        visits: 32,
        status: "single",
        progress: 29,
      },
    ],
  },
  {
    firstName: "Karelle",
    lastName: "Reichel",
    age: 32,
    visits: 75,
    status: "complicated",
    progress: 21,
    subRows: [
      {
        firstName: "Herta",
        lastName: "Sporer",
        age: 35,
        visits: 21,
        status: "relationship",
        progress: 7,
      },
      {
        firstName: "Marietta",
        lastName: "Kohler",
        age: 23,
        visits: 61,
        status: "single",
        progress: 56,
      },
      {
        firstName: "Toni",
        lastName: "Hermiston",
        age: 1,
        visits: 45,
        status: "relationship",
        progress: 94,
      },
    ],
  },
  {
    firstName: "Angela",
    lastName: "Corwin",
    age: 2,
    visits: 93,
    status: "complicated",
    progress: 46,
  },
];

const Checkbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
}: {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className={`h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : "bg-[#EEF0F3]"
      }`}
    />
  );
};

const ExpandingTable = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  // Pagination
  const totalPages = Math.ceil(defaultData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = defaultData.slice(startIndex, endIndex);

  const columns = [
    { key: "firstName", header: "First Name" },
    { key: "lastName", header: "Last Name" },
    { key: "firstName2", header: "First Name" }, // duplicate as per screenshot
    { key: "lastName2", header: "Last Name" },
    { key: "age", header: "Age" },
    { key: "visits", header: "Visits" },
    { key: "status", header: "Status" },
    { key: "progress", header: "Profile Progress" },
  ] as const;

  // Toggle parent expand
  const toggleRow = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle one row (parent or sub)
  const toggleRowSelect = (id: string) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  // Select/Deselect all (parents + subs)
  const toggleAll = () => {
    const allIds: string[] = [];
    paginatedData.forEach((row, i) => {
      const parentId = `${startIndex + i}`;
      allIds.push(parentId);
      row.subRows?.forEach((_, j) => {
        allIds.push(`${startIndex + i}-sub-${j}`);
      });
    });

    if (allIds.every((id) => selectedRows.has(id))) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(allIds));
    }
  };

  return (
    <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
      <div className="p-4 border-b border-gray-200 font-bold text-[17px]">
        Expanding
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="w-full overflow-x-auto bg-white rounded-xl">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 flex gap-2 items-center">
                    <Checkbox
                      onChange={toggleAll}
                      checked={
                        paginatedData.length > 0 &&
                        paginatedData.every((row, i) => {
                          const parentId = `${startIndex + i}`;
                          const subIds =
                            row.subRows?.map(
                              (_, j) => `${startIndex + i}-sub-${j}`
                            ) || [];
                          return [parentId, ...subIds].every((id) =>
                            selectedRows.has(id)
                          );
                        })
                      }
                      indeterminate={paginatedData.some((row, i) => {
                        const parentId = `${startIndex + i}`;
                        const subIds =
                          row.subRows?.map(
                            (_, j) => `${startIndex + i}-sub-${j}`
                          ) || [];
                        const ids = [parentId, ...subIds];
                        const someSelected = ids.some((id) =>
                          selectedRows.has(id)
                        );
                        const allSelected = ids.every((id) =>
                          selectedRows.has(id)
                        );
                        return someSelected && !allSelected;
                      })}
                    />
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className="py-3 px-4 text-left whitespace-nowrap"
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, i) => {
                  const globalIndex = startIndex + i;
                  const parentId = `${globalIndex}`;
                  const subIds =
                    row.subRows?.map((_, j) => `${globalIndex}-sub-${j}`) || [];

                  const parentChecked = selectedRows.has(parentId);
                  const allSubChecked =
                    subIds.length > 0 &&
                    subIds.every((id) => selectedRows.has(id));
                  const someSubChecked = subIds.some((id) =>
                    selectedRows.has(id)
                  );

                  return (
                    <>
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 px-4 flex items-center gap-2">
                          {row.subRows && (
                            <button
                              className="h-5 w-5 flex items-center justify-center border-none bg-[#EEF0F3] checked:bg-blue-600 rounded"
                              onClick={() => toggleRow(parentId)}
                            >
                              {expanded[parentId] ? (
                                <Minus size={14} />
                              ) : (
                                <Plus size={14} />
                              )}
                            </button>
                          )}
                          <Checkbox
                            checked={parentChecked || allSubChecked}
                            indeterminate={someSubChecked && !allSubChecked}
                            onChange={() => {
                              if (allSubChecked || parentChecked) {
                                setSelectedRows((prev) => {
                                  const newSet = new Set(prev);
                                  newSet.delete(parentId);
                                  subIds.forEach((id) => newSet.delete(id));
                                  return newSet;
                                });
                              } else {
                                setSelectedRows((prev) => {
                                  const newSet = new Set(prev);
                                  newSet.add(parentId);
                                  subIds.forEach((id) => newSet.add(id));
                                  return newSet;
                                });
                              }
                            }}
                          />
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.firstName}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.lastName}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.firstName}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.lastName}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.age}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.visits}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.status}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {row.progress}
                        </td>
                      </tr>
                      {expanded[parentId] &&
                        row.subRows?.map((sub, j) => {
                          const subId = `${globalIndex}-sub-${j}`;
                          return (
                            <tr
                              key={subId}
                              className="border-b border-gray-100 bg-gray-50"
                            >
                              <td className="py-3 px-10 flex items-center gap-2">
                                <Checkbox
                                  checked={selectedRows.has(subId)}
                                  onChange={() => toggleRowSelect(subId)}
                                />
                                <span className="h-2 w-2 bg-blue-500 rounded-full inline-block"></span>
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.firstName}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.lastName}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.firstName}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.lastName}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.age}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.visits}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.status}
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                {sub.progress}
                              </td>
                            </tr>
                          );
                        })}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4">
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border border-gray-200 px-3 py-1 rounded text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <ul className="flex items-center text-sm">
          <li
            className={`px-3 py-[6px] border border-gray-200 cursor-pointer ${
              currentPage === 1
                ? "text-gray-400 bg-gray-100"
                : "bg-[#f8f9fa] text-[#252f4a]"
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            ‹
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li
              key={num}
              className={`px-3 py-[6px] border border-gray-200 cursor-pointer ${
                currentPage === num
                  ? "bg-[#3e97ff] text-white"
                  : "bg-[#f8f9fa] text-[#252f4a]"
              }`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </li>
          ))}
          <li
            className={`px-3 py-[6px] border border-gray-200 cursor-pointer ${
              currentPage === totalPages
                ? "text-gray-400 bg-gray-100"
                : "bg-[#f8f9fa] text-[#252f4a]"
            }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            ›
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpandingTable;
