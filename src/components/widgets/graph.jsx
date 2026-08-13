export default function SetGraphRectangle({
  children,
  className = "",
  height = "",
  width = "w-full",
  gridSize = "42px",
  noTopBorder = false,
  noBotBorder = false
}) {
  return (
    <div
      className={`
        ${height} ${width}
        bg-[#121111]
        border border-[#F9B4B5]
        ${noTopBorder ? "!border-t-0" : ""}
        ${noBotBorder ? "!border-b-0" : ""}
        ${className}
      `}
      style={{
        backgroundImage: `
          linear-gradient(#F9B4B5 1px, transparent 1px),
          linear-gradient(to right, #F9B4B5 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize} ${gridSize}`,
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}