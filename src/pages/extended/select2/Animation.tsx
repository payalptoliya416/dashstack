import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "./SelectData";

const animatedComponents = makeAnimated();

function Animation() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

export default Animation;
