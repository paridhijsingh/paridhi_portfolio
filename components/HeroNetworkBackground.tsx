"use client";

const NODES = [
  { cx: 12, cy: 18, r: 1.2 },
  { cx: 28, cy: 32, r: 1 },
  { cx: 45, cy: 14, r: 1.4 },
  { cx: 62, cy: 28, r: 1.1 },
  { cx: 78, cy: 16, r: 1.3 },
  { cx: 88, cy: 38, r: 1 },
  { cx: 22, cy: 58, r: 1.2 },
  { cx: 38, cy: 72, r: 1.1 },
  { cx: 55, cy: 52, r: 1.5 },
  { cx: 72, cy: 68, r: 1 },
  { cx: 84, cy: 54, r: 1.2 },
  { cx: 16, cy: 82, r: 1 },
] as const;

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [8, 3],
  [6, 11],
  [11, 7],
  [5, 10],
  [2, 8],
];

export function HeroNetworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-network-drift absolute inset-[-8%] motion-reduce:transform-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full opacity-[0.22]"
        >
          <defs>
            <radialGradient id="network-fade" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
              <stop offset="55%" stopColor="#22D3EE" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#08090D" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="100" height="100" fill="url(#network-fade)" />

          <g
            stroke="rgba(139,92,246,0.18)"
            strokeWidth="0.15"
            fill="none"
            className="hero-network-pulse motion-reduce:opacity-60"
          >
            {EDGES.map(([from, to]) => (
              <line
                key={`${from}-${to}`}
                x1={NODES[from].cx}
                y1={NODES[from].cy}
                x2={NODES[to].cx}
                y2={NODES[to].cy}
              />
            ))}
          </g>

          <g fill="rgba(34,211,238,0.35)">
            {NODES.map((node, index) => (
              <circle
                key={index}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                className="hero-network-node motion-reduce:opacity-50"
                style={{ animationDelay: `${index * 0.35}s` }}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#08090D_78%)]" />
    </div>
  );
}
