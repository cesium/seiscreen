import './App.css';

import DVDLogo from "./DVDLogo";

const svgWidth = window.innerWidth;
const svgHeight = window.innerHeight;

export default function App() {
  return (
    <div className="w-full h-full bg-black overflow-hidden">
      <svg width={svgWidth} height={svgHeight}>
        <DVDLogo width={svgWidth} height={svgHeight}/>
      </svg>
    </div>
  );
}