import Select, { components } from "react-select";

const options = [
  {
    value: "chocolate",
    label: "Chocolate",
    image: "/images/f1.png",
  },
  {
    value: "strawberry",
    label: "Strawberry",
    image: "/images/f2.png",
  },
  {
    value: "vanilla",
    label: "Vanilla",
    image: "/images/f3.png",
  },
];

const CustomOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex">
    <img
      src={props.data.image}
      alt={props.data.label}
      className="w-6 h-6 rounded-full mr-2"
    />
    {props.data.label}
    </div>
  </components.Option>
);

const CustomSingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex">
    <img
      src={props.data.image}
      alt={props.data.label}
      className="w-6 h-6 rounded-full mr-2"
    />
    {props.data.label}
    </div>
  </components.SingleValue>
);

export default function CustomSingle() {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
    />
  );
}
