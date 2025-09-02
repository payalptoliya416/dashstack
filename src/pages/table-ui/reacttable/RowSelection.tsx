import { useState, useRef, useEffect } from "react";

type PersonData = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: PersonData[] = [
  { firstName: "Kiana", lastName: "Herman", age: 35, visits: 16, status: "single", progress: 75 },
  { firstName: "Zachary", lastName: "Crooks", age: 0, visits: 53, status: "complicated", progress: 26 },
  { firstName: "Adell", lastName: "Schimmel", age: 3, visits: 24, status: "single", progress: 52 },
  { firstName: "Nyasia", lastName: "Bartell", age: 25, visits: 68, status: "complicated", progress: 79 },
  { firstName: "Brandi", lastName: "McKenzie", age: 15, visits: 51, status: "relationship", progress: 68 },
  { firstName: "Frida", lastName: "Johnson", age: 18, visits: 32, status: "complicated", progress: 33 },
  { firstName: "Keeley", lastName: "Murphy", age: 33, visits: 100, status: "relationship", progress: 30 },
  { firstName: "Delfina", lastName: "Tillman", age: 26, visits: 73, status: "relationship", progress: 82 },
  { firstName: "Lyda", lastName: "Kreiger", age: 10, visits: 49, status: "complicated", progress: 3 },
  { firstName: "Mohamed", lastName: "Dach", age: 24, visits: 64, status: "relationship", progress: 58 },
];

const Checkbox = ({
  checked = false,
  indeterminate = false,
  onChange,
}: {
  checked?: boolean;
  indeterminate?: boolean;
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
      onChange={onChange}
      className="h-4 w-4 cursor-pointer rounded text-blue-600 bg-[#EEF0F3] border-none"
    />
  );
};

const RowSelection = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [ranges, setRanges] = useState<Record<string, [number?, number?]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleTextFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleRangeFilter = (key: string, index: 0 | 1, value: string) => {
    setRanges((prev) => {
      const range = prev[key] || [];
      const newRange: [number?, number?] = [...range];
      newRange[index] = value ? Number(value) : undefined;
      return { ...prev, [key]: newRange };
    });
    setCurrentPage(1);
  };

  // Filtering
  let filtered = defaultData.filter((row) => {
    for (const key in filters) {
      const val = String(row[key as keyof PersonData]).toLowerCase();
      if (!val.includes(filters[key].toLowerCase())) return false;
    }
    for (const key in ranges) {
      const [min, max] = ranges[key];
      const value = row[key as keyof PersonData] as number;
      if (min !== undefined && value < min) return false;
      if (max !== undefined && value > max) return false;
    }
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filtered.slice(startIndex, endIndex);

  const columns = [
    { key: "firstName", header: "First Name", type: "text" },
    { key: "lastName", header: "Last Name", type: "text" },
    { key: "age", header: "Age", type: "range" },
    { key: "visits", header: "Visits", type: "range" },
    { key: "status", header: "Status", type: "text" },
    { key: "progress", header: "Profile Progress", type: "range" },
  ] as const;

  // Toggle single row
  const toggleRow = (rowIndex: number) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(rowIndex)) {
        newSet.delete(rowIndex);
      } else {
        newSet.add(rowIndex);
      }
      return newSet;
    });
  };

  // Toggle all rows in current page
  const toggleAll = () => {
    const allSelected = paginatedData.every((_, i) =>
      selectedRows.has(startIndex + i)
    );
    if (allSelected) {
      setSelectedRows((prev) => {
        const newSet = new Set(prev);
        paginatedData.forEach((_, i) => newSet.delete(startIndex + i));
        return newSet;
      });
    } else {
      setSelectedRows((prev) => {
        const newSet = new Set(prev);
        paginatedData.forEach((_, i) => newSet.add(startIndex + i));
        return newSet;
      });
    }
  };

  return (
    <div className="rounded-lg shadow border border-gray-200 bg-white mb-7">
      <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
        Row Selection
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="w-full overflow-x-auto bg-white rounded-xl">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  {/* Selection Column */}
                  <th className="py-3 px-6">
                    <Checkbox
                      onChange={toggleAll}
                      checked={
                        paginatedData.length > 0 &&
                        paginatedData.every((_, i) =>
                          selectedRows.has(startIndex + i)
                        )
                      }
                      indeterminate={
                        paginatedData.some((_, i) =>
                          selectedRows.has(startIndex + i)
                        ) &&
                        !paginatedData.every((_, i) =>
                          selectedRows.has(startIndex + i)
                        )
                      }
                    />
                  </th>

                  {columns.map((col) => (
                    <th key={col.key} className="py-3 px-6 text-left whitespace-nowrap">
                      <div>{col.header}</div>
                      <div className="mt-1">
                        {col.type === "text" && (
                          <input
                            type="text"
                            className="border border-gray-100 rounded px-2 py-1 w-full text-sm"
                            value={filters[col.key] || ""}
                            onChange={(e) =>
                              handleTextFilter(col.key, e.target.value)
                            }
                            placeholder="Search..."
                          />
                        )}
                        {col.type === "range" && (
                          <div className="flex gap-2">
                            <input
                              type="number"
                              className="border border-gray-100 rounded px-2 py-1 w-20 text-sm"
                              value={ranges[col.key]?.[0] ?? ""}
                              onChange={(e) =>
                                handleRangeFilter(col.key, 0, e.target.value)
                              }
                              placeholder="Min"
                            />
                            <input
                              type="number"
                              className="border border-gray-100 rounded px-2 py-1 w-20 text-sm"
                              value={ranges[col.key]?.[1] ?? ""}
                              onChange={(e) =>
                                handleRangeFilter(col.key, 1, e.target.value)
                              }
                              placeholder="Max"
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, i) => {
                  const globalIndex = startIndex + i;
                  return (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-6">
                        <Checkbox
                          checked={selectedRows.has(globalIndex)}
                          onChange={() => toggleRow(globalIndex)}
                        />
                      </td>
                      {columns.map((col) => (
                        <td key={col.key} className="py-3 px-6 whitespace-nowrap">
                          {row[col.key]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center p-6">
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-100 px-5 py-1.5 pr-10 rounded text-sm"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <ul className="flex items-center text-sm">
              <li
                className={`px-3 py-[6px] border border-gray-100 cursor-pointer ${
                  currentPage === 1
                    ? "text-gray-400 bg-gray-100"
                    : "bg-[#f8f9fa] text-[#252f4a]"
                }`}
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              >
                ‹
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <li
                  key={num}
                  className={`px-3 py-[6px] border border-gray-100 cursor-pointer ${
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
                className={`px-3 py-[6px] border border-gray-100 cursor-pointer ${
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
      </div>
    </div>
  );
};

export default RowSelection;
