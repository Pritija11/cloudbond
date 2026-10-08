const nodes = [
  { id: "aws", label: "AWS", sub: "us-east-1", x: 95, y: 105 },
  { id: "azure", label: "AZURE", sub: "west-europe", x: 425, y: 90 },
  { id: "gcp", label: "GCP", sub: "asia-south1", x: 450, y: 280 },
  { id: "onprem", label: "ON-PREM", sub: "primary DC", x: 75, y: 325 },
  { id: "edge", label: "EDGE", sub: "12 PoPs", x: 260, y: 420 },
];

const hub = { x: 260, y: 230 };

export default function NetworkGraphic() {
  return (
    <div className="network-panel">
      <div className="network-panel-topbar">
        <span>
          <span className="live-dot" />
          NETWORK LIVE
        </span>
        <span>LAT 18ms</span>
      </div>

      <svg viewBox="0 0 520 480" width="100%" height="100%" aria-hidden="true">
        {nodes.map((node) => (
          <path
            key={node.id}
            className="network-line"
            d={`M${hub.x},${hub.y} L${node.x},${node.y}`}
          />
        ))}

        {nodes.map((node, index) => (
          <path
            key={`${node.id}-pulse`}
            className="network-line-pulse"
            d={`M${hub.x},${hub.y} L${node.x},${node.y}`}
            style={{ animationDelay: `${index * 0.8}s` }}
          />
        ))}

        <rect
          x={hub.x - 26}
          y={hub.y - 18}
          width={52}
          height={36}
          rx={8}
          fill="var(--accent)"
        />
        <text x={hub.x} y={hub.y + 5} textAnchor="middle" className="network-hub-label">
          CB
        </text>

        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="5" fill="#ffffff" stroke="var(--accent)" strokeWidth="1.6" />
            <circle cx={node.x} cy={node.y} r="1.6" fill="var(--accent)" />
            <text x={node.x} y={node.y - 14} textAnchor="middle" className="network-node-label">
              {node.label}
            </text>
            <text x={node.x} y={node.y + 22} textAnchor="middle" className="network-node-sublabel">
              {node.sub}
            </text>
          </g>
        ))}
      </svg>

      <div className="network-panel-footbar">
        <span>5 REGIONS · 1 NETWORK</span>
        <span>99.99% UPTIME</span>
      </div>
    </div>
  );
}
