import ExpandingTable from "./ExpandingTable";
import Filtering from "./Filtering";
import PaginationTable from "./PaginationTable";
import RowSelection from "./RowSelection";
import SortingTable from "./SortingTable";

function ReactTable() {
  return (
    <>
      <SortingTable />
      <Filtering />
      <PaginationTable/>
      <RowSelection/>
      <ExpandingTable/>
    </>
  );
}

export default ReactTable;
