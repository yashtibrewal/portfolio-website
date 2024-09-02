
export default function Logo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-slate-200 text-blue-200 fill-none"
      >
        {/* Pentagon */}
        <polygon
          points="100,20 186,75 151,165 49,165 14,75"
          strokeWidth="10"
          strokeDasharray="500"
          strokeDashoffset="500"
          strokeLinecap="round"
          className="animate-draw"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="500"
            to="0"
            dur="3s"
            fill="freeze"
          />
        </polygon>

        {/* Letter Y */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontFamily="Arial, sans-serif"
          fontSize="75"
          className="fill-slate-200 stroke-slate-200"
        >
          Y
        </text>
      </svg>
    </div>
  );
}
