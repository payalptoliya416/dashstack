export const LabelCheckbox = ({ item }: { item: { id: string; label: string; color: string } }) => {
  return (
    <div className="flex items-center gap-3 relative xl:px-4 cursor-pointer">
      <input
        type="checkbox"
        id={item.id}
        className={`
          peer w-4 h-4 appearance-none rounded-sm transition duration-150 
          focus:outline-none relative
          checked:after:content-['✓'] checked:after:text-white 
          checked:after:absolute checked:after:text-[12px] 
          checked:after:-top-[2px] checked:after:left-[2px]
        `}
        style={{
          border: `1px solid ${item.color}`,
          backgroundColor: "white",
        }}
        onChange={(e) => {
          e.target.style.backgroundColor = e.target.checked ? item.color : "white";
        }}
      />
      <label
        htmlFor={item.id}
        className="text-sm font-semibold text-[#202224] cursor-pointer"
      >
        {item.label}
      </label>
    </div>
  );
};
