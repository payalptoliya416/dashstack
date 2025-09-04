import Select, { components } from "react-select";

export const colourOptions: any = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", image: "/images/f1.png" },
  { value: "blue", label: "Blue", color: "#0052CC", image: "/images/f2.png" },
  { value: "purple", label: "Purple", color: "#5243AA", image: "/images/f3.png" },
  { value: "red", label: "Red", color: "#FF5630", image: "/images/f4.png" },
];

const CustomOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-1">
    <img
      src={props.data.image}
      alt={props.data.label}
      className="w-6 h-6 rounded-full mr-2"
    />
    {props.data.label}
    </div>
  </components.Option>
);

const CustomMultiValue = (props: any) => (
  <components.MultiValue {...props}>
    <div className="flex items-center gap-1">
    <img
      src={props.data.image}
      alt={props.data.label}
      className="w-4 h-4 rounded-full mr-1"
    />
    {props.data.label}
    </div>
  </components.MultiValue>
);

function CustomeMultiple() {
  return (
    <Select
      defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      components={{
        Option: CustomOption,
        MultiValue: CustomMultiValue,
      }}
    />
  );
}

export default CustomeMultiple;
