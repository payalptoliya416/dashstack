export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length && payload[0]?.value !== undefined) {
    const value = payload[0].value;

    return (
      <div
        style={{
          backgroundColor: "#3B82F6",
          color: "#fff",
          padding: "4px 10px",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "13px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {value}%
      </div>
    );
  }

  return null;
};
