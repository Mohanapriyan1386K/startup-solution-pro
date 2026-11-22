import { useId, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useBackgroundMotion } from "./BackgroundMotion";
import "./TechBackground.css";

type BackgroundVariant = "code" | "circuit" | "cloud" | "analytics" | "network" |
  "communication" | "security" | "signal" | "horizon" | "workflow" | "stack";

const networkNodes = [
  [90, 130], [240, 80], [345, 210], [180, 330], [65, 445], [350, 470],
  [905, 85], [1080, 165], [855, 300], [1135, 410], [970, 510],
];

function Artwork({ variant }: { variant: BackgroundVariant }) {
  switch (variant) {
    case "code":
      return <>
        <g className="tech-float">
          <rect x="35" y="100" width="260" height="210" rx="16" />
          <path d="M35 140H295M58 120h3m12 0h3m12 0h3M70 175h45m15 0h85M70 195h80m15 0h45M70 215h25m15 0h105M70 255h100m15 0h50" />
          <path className="tech-accent" d="m95 340-35 30 35 30m80-60 35 30-35 30m-40-75-18 90" />
        </g>
        <g className="tech-float tech-delay">
          <path d="m890 120 230 60-70 190-230-60zM845 320l225 62-25 48-225-62M815 395l220 60-25 48-220-60" />
          <path className="tech-flow" d="m890 160 160 42m-170-15 130 35m-140-7 150 40" />
        </g>
      </>;
    case "circuit":
      return <>
        <path d="M0 120h180l60 60h120M0 360h120l80-80h160M1200 80h-150l-80 80h-80M1200 460h-170l-60-60h-80M450 0v80l60 60M770 600v-90l-65-65" />
        <g className="tech-flow tech-accent">
          <path d="M0 120h180l60 60h120M0 360h120l80-80h160M1200 80h-150l-80 80h-80M1200 460h-170l-60-60h-80" />
        </g>
        <g className="tech-float">
          <rect x="895" y="195" width="130" height="130" rx="12" />
          <rect x="922" y="222" width="76" height="76" rx="6" />
          {[0, 1, 2, 3].map((i) => <path key={i} d={`M${918 + i * 28} 175v20m0 130v20M875 ${218 + i * 28}h20m130 0h20`} />)}
          <path className="tech-accent" d="m948 242-15 18 15 18m24-36 15 18-15 18" />
        </g>
        {[ [180, 120], [120, 360], [1050, 80], [1030, 460] ].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" className="tech-node" />)}
      </>;
    case "cloud":
      return <>
        <g className="tech-float">
          <path d="M110 220c-65 0-70-90-10-100 10-75 115-85 145-20 65-10 88 90 18 102H110Z" />
          <path className="tech-flow tech-accent" d="M170 220v100h210M225 220v60h200M0 400h300l65-65h110" />
        </g>
        <g className="tech-float tech-delay">
          {[100, 185, 270].map((y) => <g key={y}>
            <rect x="930" y={y} width="200" height="60" rx="9" />
            <path d={`M953 ${y + 22}h65m-65 16h45M1080 ${y + 22}h25m-25 16h25`} />
            <circle cx="1110" cy={y + 30} r="3" className="tech-node" />
          </g>)}
          <path className="tech-flow" d="M1030 330v90H750M930 215h-90l-70 70H655" />
        </g>
      </>;
    case "analytics":
      return <>
        <path d="M0 510H1200M70 90v420M1130 90v420M0 400H1200M0 290H1200" className="tech-faint" />
        {[90, 145, 200, 255, 880, 935, 990, 1045].map((x, i) => <rect
          key={x} x={x} y={470 - (i % 4) * 55} width="28" height={40 + (i % 4) * 55}
          rx="4" className={`tech-bar tech-delay-${i % 3}`} />)}
        <path d="m0 405 110-55 100 25 110-100 110 25 110-110 115 35 110-85 100 30 130-100 95 15" />
        <path className="tech-flow tech-accent" d="m0 405 110-55 100 25 110-100 110 25 110-110 115 35 110-85 100 30 130-100 95 15" />
      </>;
    case "network":
      return <>
        <path d="m90 130 150-50 105 130-165 120-115 115 285 25-5-260M90 130l90 200 170 140M240 80l-60 250M905 85l175 80-225 135 280 110-165 100-115-210 50-215M1080 165l55 245M970 510l110-345" />
        <path className="tech-flow tech-accent" d="m90 130 150-50 105 130-165 120-115 115m840-360 175 80-225 135 280 110-165 100" />
        {networkNodes.map(([x, y], i) => <g key={x}>
          <circle cx={x} cy={y} r={i % 3 === 0 ? 18 : 10} />
          <circle cx={x} cy={y} r="3" className={`tech-node tech-delay-${i % 3}`} />
        </g>)}
      </>;
    case "communication":
      return <>
        <g className="tech-float"><path d="M40 95h190a15 15 0 0 1 15 15v110a15 15 0 0 1-15 15h-80l-45 30v-30H40a15 15 0 0 1-15-15V110a15 15 0 0 1 15-15Z" />
          <path d="M65 140h135M65 165h110M65 190h70" className="tech-flow" /></g>
        <g className="tech-float tech-delay"><path d="M1000 350h140a15 15 0 0 1 15 15v100a15 15 0 0 1-15 15h-35v30l-45-30h-60a15 15 0 0 1-15-15V365a15 15 0 0 1 15-15Z" />
          {[1030, 1070, 1110].map((x) => <circle key={x} cx={x} cy="415" r="5" className="tech-node" />)}</g>
        <g className="tech-wave">
          <path d="M0 420q60-90 120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0" />
          <path d="M0 450q60-60 120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0" className="tech-faint" />
        </g>
      </>;
    case "security":
      return <>
        <g className="tech-float">
          <path d="m990 80 120 45v115c0 90-65 150-120 185-55-35-120-95-120-185V125Z" />
          <path d="m990 108 94 35v97c0 70-48 122-94 154-46-32-94-84-94-154v-97Z" className="tech-faint" />
          <rect x="950" y="220" width="80" height="65" rx="9" />
          <path d="M965 220v-25a25 25 0 0 1 50 0v25m-25 25v18" className="tech-accent" />
        </g>
        <g className="tech-spin">
          <circle cx="120" cy="340" r="135" strokeDasharray="6 16" />
          <circle cx="120" cy="340" r="100" strokeDasharray="60 20" />
          <path d="M120 205v35m0 200v35M-15 340h35m200 0h35" />
        </g>
      </>;
    case "signal":
      return <>
        <g className="tech-float">
          <circle cx="165" cy="280" r="145" />
          <ellipse cx="165" cy="280" rx="65" ry="145" />
          <ellipse cx="165" cy="280" rx="115" ry="145" />
          <ellipse cx="165" cy="280" rx="145" ry="60" />
          <path d="M20 280h290M165 135v290" />
        </g>
        <g className="tech-signal-rings">
          {[35, 70, 105, 140].map((r, i) => <circle key={r} cx="1050" cy="155" r={r} className={`tech-ring tech-delay-${i % 3}`} />)}
          <path d="m1020 155 65-35-25 70-13-25-27-10 27-8 38-27" className="tech-accent" />
        </g>
        <path className="tech-flow" d="M300 240Q620 0 1030 145M310 305Q700 490 1050 200" />
      </>;
    case "horizon":
      return <>
        <g className="tech-terrain">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M0 ${330 + i * 32}Q300 ${190 + i * 42} 600 ${340 + i * 25}T1200 ${330 + i * 32}`} />)}
          {[100, 280, 460, 640, 820, 1000, 1180].map((x) => <path key={x} d={`M${x} 600 ${600 + (x - 600) * 0.45} 300`} />)}
        </g>
        <path className="tech-flow tech-accent" d="M0 285h220l30-25h160l25 25h310l25-25h170l25 25h235" />
      </>;
    case "workflow":
      return <>
        <path className="tech-flow" d="M0 160h110v210h160v-70h160M1200 380h-180V190H875v75H770" />
        {[ [110, 120], [270, 330], [1020, 340], [875, 150] ].map(([x, y], i) => <g className={`tech-float tech-delay-${i % 3}`} key={x}>
          <rect x={x - 40} y={y - 30} width="80" height="60" rx="10" />
          <path d={`m${x - 16} ${y}-10 0m15 0h25m-20-12 12 12-12 12`} />
        </g>)}
      </>;
    case "stack":
      return <>
        {[ [140, 150], [1050, 290] ].map(([x, y]) => <g className="tech-float" key={x}>
          {[0, 40, 80].map((offset) => <path key={offset} d={`m${x} ${y + offset} 95 45-95 45-95-45Z`} />)}
          <path className="tech-flow" d={`M${x} ${y + 170}v70h180`} />
        </g>)}
      </>;
  }
}

export default function TechBackground({ variant }: { variant: BackgroundVariant }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "80px" });
  const reducedMotion = useReducedMotion();
  const { paused, pageVisible } = useBackgroundMotion();
  const gradientId = `tech-${useId().replace(/:/g, "")}`;

  return (
    <div ref={ref} className={`tech-background tech-background--${variant}`} aria-hidden="true"
      data-running={inView && pageVisible && !paused && !reducedMotion}>
      <div className="tech-background__ambient" />
      <svg className="tech-background__art" viewBox="0 0 1200 600" fill="none" stroke={`url(#${gradientId})`}
        strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        <defs><linearGradient id={gradientId} x1="0" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--tech-primary)" /><stop offset="1" stopColor="var(--tech-secondary)" />
        </linearGradient></defs>
        <Artwork variant={variant} />
      </svg>
      <div className="tech-background__shade" />
    </div>
  );
}
