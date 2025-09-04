import CreatableSelect from "react-select/creatable";
import { colourOptions } from "./SelectData";

function Creatable() {
  return <CreatableSelect isClearable options={colourOptions} />;
}

export default Creatable;
