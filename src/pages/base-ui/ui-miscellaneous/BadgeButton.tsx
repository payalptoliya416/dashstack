import React from "react";

interface BadgeButtonProps {
  label: string;
  badge?: string;
  variant?: "blue" | "gray" | "green" | "orange" | "red" | "info";
  type?: "text" | "number" | "dot";
}

const colorVariants = {
  blue: {
    base: "bg-[#ecf5ff] text-[#3e97ff]",
    badge: "bg-[#3e97ff] text-white",
    dot: "bg-[#3e97ff]",
  },
  gray: {
    base: "bg-[#f1f2f3] text-[#505863]",
    badge: "bg-[#505863] text-white",
    dot: "bg-[#505863]",
  },
  green: {
    base: "bg-[#e9f8f0] text-[#25b865]",
    badge: "bg-[#25b865] text-white",
    dot: "bg-[#25b865]",
  },
  orange: {
    base: "bg-[#fcf3e8] text-[#e49e3d]",
    badge: "bg-[#e49e3d] text-white",
    dot: "bg-[#e49e3d]",
  },
  red: {
    base: "bg-[#fbeff1] text-[#d13b4c]",
    badge: "bg-[#d13b4c] text-white",
    dot: "bg-[#d13b4c]",
  },
  info :{
     base: "bg-[#e6f6fc] text-[#02a0e4]",
    badge: "bg-[#02a0e4] text-white",
    dot: "bg-[#02a0e4]",
  }
};

const BadgeButton: React.FC<BadgeButtonProps> = ({
  label,
  badge,
  variant = "blue",
  type = "text",
}) => {
  const styles = colorVariants[variant];

  return (
    <button
      className={`relative flex items-center gap-2 py-2 px-5 rounded-md text-sm font-semibold ${styles.base}`}
    >
      {label}

      {/* Badge types */}
      {type === "text" && badge && (
        <span
          className={`px-1.5 py-0.5 text-xs font-semibold rounded ${styles.badge}`}
        >
          {badge}
        </span>
      )}

      {type === "number" && badge && (
        <span
          className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full ${styles.badge}`}
        >
          {badge}
        </span>
      )}

      {type === "dot" && (
        <span
          className={`absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full ${styles.dot}`}
        />
      )}
    </button>
  );
};

export default BadgeButton;
