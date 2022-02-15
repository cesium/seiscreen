import SEILogo from "seilogo";

const svgWidth = window.innerWidth;
const svgHeight = window.innerHeight;

export default function App() {
  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <svg width={svgWidth} height={svgHeight}>
        <SEILogo width={svgWidth} height={svgHeight}/>
      </svg>
    </div>
  );
}