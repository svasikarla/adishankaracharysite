"use client"

import { useState } from "react"
import { travelLocations } from "@/data/biography"
import { MapPinIcon, MountainIcon, WavesIcon, CompassIcon } from "lucide-react"

// Convert lat/lng to SVG coordinates
// India bounds: lat 8-37°N, lng 68-97°E
// Map to fit within India outline (x: 150-600, y: 180-760)
const latLngToXY = (lat: number, lng: number) => {
  // Adjust for India's geographical shape (wider north, narrower south)
  const latNorm = (lat - 8) / (37 - 8) // 0 to 1 (south to north)
  const lngNorm = (lng - 68) / (97 - 68) // 0 to 1 (west to east)

  // Map to SVG coordinates with perspective (wider at top/north)
  const mapWidth = 220 + (latNorm * 180) // Narrower south (220), wider north (400)
  const x = 200 + (lngNorm * mapWidth)
  const y = 730 - (latNorm * 530) // Flip Y axis (south=730, north=200)

  return { x, y }
}

// Simplified India outline - triangular peninsula shape
// North broader, tapering to south (Kanyakumari)
const indiaOutlinePath = `
  M 320,240
  C 280,220 240,215 205,225
  C 180,235 165,260 155,295
  C 148,325 145,360 148,395
  C 152,430 160,465 172,495
  Q 185,530 200,560
  Q 218,595 238,625
  Q 260,655 283,680
  Q 308,705 333,725
  Q 358,742 383,752
  Q 408,760 432,760
  Q 455,758 478,748
  Q 500,736 520,718
  Q 538,698 553,673
  Q 566,647 576,617
  Q 584,587 590,555
  Q 594,523 596,490
  Q 597,457 596,424
  Q 594,391 590,360
  Q 584,328 575,300
  Q 564,270 550,245
  Q 534,218 515,200
  Q 495,184 473,177
  Q 450,172 425,175
  Q 400,180 378,192
  Q 358,204 342,220
  L 320,240
  Z
`

// State boundaries (aligned with new map)
const statePaths = [
  { name: "Kerala", path: "M 250,710 L 270,730 L 285,745 L 295,755 L 290,760 L 275,760 L 260,755 L 245,745 L 235,730 L 238,715 Z", color: "#10b981" },
  { name: "Karnataka", path: "M 270,650 L 310,660 L 340,680 L 350,710 L 340,740 L 310,750 L 280,745 L 260,725 L 258,690 Z", color: "#3b82f6" },
  { name: "Gujarat", path: "M 180,380 L 220,370 L 255,390 L 270,420 L 265,450 L 240,470 L 210,465 L 185,445 L 175,415 Z", color: "#f59e0b" },
  { name: "Odisha", path: "M 490,540 L 520,550 L 540,580 L 535,610 L 515,625 L 485,620 L 470,600 L 475,570 Z", color: "#8b5cf6" },
  { name: "Uttarakhand", path: "M 380,220 L 410,210 L 435,225 L 445,250 L 435,275 L 410,285 L 385,280 L 365,260 L 365,235 Z", color: "#ef4444" },
]

// Major rivers (aligned with new map)
const rivers = [
  { name: "Ganges", path: "M 450,250 Q 420,280 380,310 Q 340,340 300,360 Q 270,375 245,385", color: "#3b82f6", width: 3 },
  { name: "Godavari", path: "M 380,580 Q 410,600 440,610 Q 470,620 500,625", color: "#0ea5e9", width: 2 },
  { name: "Krishna", path: "M 320,650 Q 360,660 400,665 Q 440,670 480,673", color: "#06b6d4", width: 2 },
]

export default function TravelsMapEnhanced() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [showRivers, setShowRivers] = useState(true)
  const [showStates, setShowStates] = useState(true)

  // Calculate curved path between two points (for journey lines)
  const getCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = (start.y + end.y) / 2
    const offsetX = (end.y - start.y) * 0.2
    const offsetY = (start.x - end.x) * 0.2
    const controlX = midX + offsetX
    const controlY = midY + offsetY

    return `M ${start.x},${start.y} Q ${controlX},${controlY} ${end.x},${end.y}`
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
          Sacred Journey Across Bharat
        </h2>
        <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-4">
          Over 25,000 kilometers traversed on foot • 788-820 CE
        </p>

        {/* View Controls */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showRivers}
              onChange={(e) => setShowRivers(e.target.checked)}
              className="rounded border-[#e07c24]"
            />
            <span className="text-[#5a4a3f] dark:text-[#d9c5a9]">Show Rivers</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showStates}
              onChange={(e) => setShowStates(e.target.checked)}
              className="rounded border-[#e07c24]"
            />
            <span className="text-[#5a4a3f] dark:text-[#d9c5a9]">Show States</span>
          </label>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f7] dark:from-[#1a2332] dark:to-[#0f1419] rounded-2xl p-6 md:p-8 border-2 border-[#e07c24]/30 shadow-2xl">
        <svg
          viewBox="0 0 800 1000"
          className="w-full h-auto"
          style={{ maxHeight: '800px' }}
        >
          {/* Background - Seas */}
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.1" />
            </linearGradient>

            {/* Glow effect for journey path */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Drop shadow for markers */}
            <filter id="dropShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Ocean areas */}
          <rect x="0" y="0" width="800" height="1000" fill="url(#oceanGradient)" />

          {/* Arabian Sea label */}
          <text x="80" y="600" fill="#0369a1" fontSize="16" fontStyle="italic" opacity="0.6">
            <tspan x="80" dy="0">Arabian</tspan>
            <tspan x="80" dy="18">Sea</tspan>
          </text>
          <WavesIcon x={55} y={570} className="w-5 h-5 text-[#0369a1] opacity-60" />

          {/* Bay of Bengal label */}
          <text x="620" y="600" fill="#0369a1" fontSize="16" fontStyle="italic" opacity="0.6">
            <tspan x="640" dy="0">Bay of</tspan>
            <tspan x="640" dy="18">Bengal</tspan>
          </text>
          <WavesIcon x={620} y={570} className="w-5 h-5 text-[#0369a1] opacity-60" />

          {/* Indian Ocean label */}
          <text x="320" y="950" fill="#0369a1" fontSize="18" fontStyle="italic" opacity="0.6">
            Indian Ocean
          </text>
          <WavesIcon x={290} y={930} className="w-5 h-5 text-[#0369a1] opacity-60" />

          {/* Himalayas indication */}
          <g opacity="0.4">
            <path
              d="M 300,180 Q 350,160 400,180 Q 450,200 500,180 Q 550,160 600,180"
              fill="none"
              stroke="#78716c"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 320,200 Q 360,185 400,200 Q 440,215 480,200 Q 520,185 560,200"
              fill="none"
              stroke="#78716c"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <text x="370" y="165" fill="#78716c" fontSize="14" fontWeight="bold" opacity="0.8">
              HIMALAYAS
            </text>
            <MountainIcon x={345} y={150} className="w-4 h-4 text-[#78716c] opacity-80" />
          </g>

          {/* State boundaries */}
          {showStates && statePaths.map((state) => (
            <path
              key={state.name}
              d={state.path}
              fill={state.color}
              fillOpacity="0.15"
              stroke={state.color}
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeDasharray="4,4"
            />
          ))}

          {/* India Main Outline */}
          <path
            d={indiaOutlinePath}
            fill="#fef3c7"
            fillOpacity="0.9"
            stroke="#92400e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:fill-[#2a2412] dark:stroke-[#fbbf24]"
          />

          {/* India Land texture/pattern */}
          <path
            d={indiaOutlinePath}
            fill="none"
            stroke="#d97706"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            strokeDasharray="2,2"
          />

          {/* Major Rivers */}
          {showRivers && rivers.map((river) => (
            <g key={river.name}>
              <path
                d={river.path}
                fill="none"
                stroke={river.color}
                strokeWidth={river.width}
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
              <path
                d={river.path}
                fill="none"
                stroke="#ffffff"
                strokeWidth={river.width * 0.4}
                strokeOpacity="0.3"
                strokeLinecap="round"
                strokeDasharray="8,8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="16"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Travel Routes (connecting lines with curves) */}
          <g filter="url(#glow)">
            {travelLocations.slice(0, -1).map((location, index) => {
              const nextLocation = travelLocations[index + 1]
              const start = latLngToXY(location.coordinates.lat, location.coordinates.lng)
              const end = latLngToXY(nextLocation.coordinates.lat, nextLocation.coordinates.lng)
              const pathD = getCurvedPath(start, end)

              return (
                <g key={`route-${location.id}`}>
                  {/* Shadow/glow layer */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#e07c24"
                    strokeWidth="6"
                    strokeOpacity="0.2"
                  />
                  {/* Main path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#e07c24"
                    strokeWidth="3"
                    strokeOpacity="0.8"
                    strokeLinecap="round"
                  />
                  {/* Animated dash */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeOpacity="0.9"
                    strokeDasharray="10,10"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="20"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              )
            })}
          </g>

          {/* Direction Markers (Four Cardinal Mathas) */}
          <g opacity="0.6">
            {/* South - Sringeri */}
            <g transform="translate(700, 850)">
              <circle r="25" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
              <text x="0" y="0" textAnchor="middle" dy="0.35em" fill="#10b981" fontSize="12" fontWeight="bold">S</text>
            </g>

            {/* East - Puri */}
            <g transform="translate(720, 650)">
              <circle r="25" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
              <text x="0" y="0" textAnchor="middle" dy="0.35em" fill="#8b5cf6" fontSize="12" fontWeight="bold">E</text>
            </g>

            {/* West - Dwarka */}
            <g transform="translate(80, 500)">
              <circle r="25" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="0" textAnchor="middle" dy="0.35em" fill="#f59e0b" fontSize="12" fontWeight="bold">W</text>
            </g>

            {/* North - Jyotir Math */}
            <g transform="translate(420, 270)">
              <circle r="25" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
              <text x="0" y="0" textAnchor="middle" dy="0.35em" fill="#ef4444" fontSize="12" fontWeight="bold">N</text>
            </g>

            {/* Compass Rose */}
            <g transform="translate(700, 120)">
              <CompassIcon className="w-12 h-12 text-[#92400e] dark:text-[#fbbf24] opacity-70" />
            </g>
          </g>

          {/* Location Markers */}
          {travelLocations.map((location, index) => {
            const { x, y } = latLngToXY(location.coordinates.lat, location.coordinates.lng)
            const isHovered = hoveredLocation === location.id
            const isFirst = index === 0
            const isLast = index === travelLocations.length - 1
            const isMatha = ['sringeri', 'puri', 'dwarka', 'joshimath'].includes(location.id)

            let markerColor = '#e07c24'
            if (isFirst) markerColor = '#10b981' // Green for birthplace
            else if (isLast) markerColor = '#dc2626' // Red for samadhi
            else if (isMatha) markerColor = '#8b5cf6' // Purple for mathas

            return (
              <g
                key={location.id}
                transform={`translate(${x}, ${y})`}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                className="cursor-pointer transition-all duration-300"
                filter="url(#dropShadow)"
              >
                {/* Pulse animation for hovered */}
                {isHovered && (
                  <circle
                    r="20"
                    fill={markerColor}
                    fillOpacity="0.3"
                  >
                    <animate
                      attributeName="r"
                      from="15"
                      to="25"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Marker Circle */}
                <circle
                  r={isHovered ? 14 : isMatha || isFirst || isLast ? 11 : 8}
                  fill={markerColor}
                  stroke="white"
                  strokeWidth="3"
                  className="transition-all duration-300"
                />

                {/* Inner circle for mathas */}
                {isMatha && (
                  <circle
                    r="4"
                    fill="white"
                    opacity="0.9"
                  />
                )}

                {/* Number */}
                <text
                  textAnchor="middle"
                  dy="0.35em"
                  fill="white"
                  fontSize={isHovered ? "11" : "9"}
                  fontWeight="bold"
                  className="transition-all duration-300 pointer-events-none"
                >
                  {index + 1}
                </text>

                {/* Enhanced tooltip on hover */}
                {isHovered && (
                  <g>
                    {/* Tooltip background */}
                    <rect
                      x="-90"
                      y="-70"
                      width="180"
                      height="55"
                      rx="8"
                      fill="white"
                      stroke={markerColor}
                      strokeWidth="2"
                      opacity="0.98"
                      className="dark:fill-[#1a1814]"
                    />

                    {/* Location name */}
                    <text
                      textAnchor="middle"
                      dy="-50"
                      fill={markerColor}
                      fontSize="13"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {location.name}
                    </text>

                    {/* State */}
                    <text
                      textAnchor="middle"
                      dy="-35"
                      fill="#6b7280"
                      fontSize="9"
                      className="pointer-events-none dark:fill-[#d9c5a9]"
                    >
                      {location.state}
                      {location.visitYear && ` • ${location.visitYear}`}
                    </text>

                    {/* Purpose */}
                    <text
                      textAnchor="middle"
                      dy="-20"
                      fill="#374151"
                      fontSize="8"
                      className="pointer-events-none dark:fill-[#a8a29e]"
                      style={{ maxWidth: '160px' }}
                    >
                      {location.purpose.length > 40
                        ? location.purpose.substring(0, 37) + '...'
                        : location.purpose
                      }
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#10b981]/40 shadow">
            <div className="w-5 h-5 rounded-full bg-[#10b981] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#10b981]">
              Birthplace (Kaladi)
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#8b5cf6]/40 shadow">
            <div className="w-5 h-5 rounded-full bg-[#8b5cf6] border-2 border-white shadow flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <span className="text-xs font-semibold text-[#8b5cf6]">
              Four Mathas
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#e07c24]/40 shadow">
            <div className="w-5 h-5 rounded-full bg-[#e07c24] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#e07c24]">
              Major Stops
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#dc2626]/40 shadow">
            <div className="w-5 h-5 rounded-full bg-[#dc2626] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#dc2626]">
              Samadhi (Kedarnath)
            </span>
          </div>
        </div>

        {/* Geographic Info Panel */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <WavesIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-sm">Sacred Rivers</h4>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              Ganges, Godavari & Krishna rivers marked the spiritual geography of his travels
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-2 mb-2">
              <MountainIcon className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h4 className="font-semibold text-amber-900 dark:text-amber-300 text-sm">From South to Himalayas</h4>
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400">
              Journey from Kerala's coastal lands to the Himalayan heights of Kedarnath
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <CompassIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 text-sm">Four Directions</h4>
            </div>
            <p className="text-xs text-purple-700 dark:text-purple-400">
              Strategically established mathas in all four cardinal directions of India
            </p>
          </div>
        </div>
      </div>

      {/* Location Details Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {travelLocations.map((location, index) => {
          const isFirst = index === 0
          const isLast = index === travelLocations.length - 1
          const isMatha = ['sringeri', 'puri', 'dwarka', 'joshimath'].includes(location.id)

          let markerColor = '#e07c24'
          let borderColor = 'border-[#e07c24]/20'
          if (isFirst) {
            markerColor = '#10b981'
            borderColor = 'border-[#10b981]/30'
          } else if (isLast) {
            markerColor = '#dc2626'
            borderColor = 'border-[#dc2626]/30'
          } else if (isMatha) {
            markerColor = '#8b5cf6'
            borderColor = 'border-[#8b5cf6]/30'
          }

          return (
            <div
              key={location.id}
              className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                hoveredLocation === location.id
                  ? `${borderColor.replace('/20', '/80').replace('/30', '')} shadow-xl bg-white dark:bg-[#2a241e] scale-[1.02]`
                  : `${borderColor} bg-white/60 dark:bg-[#2a241e]/60 hover:shadow-lg`
              }`}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-white shadow-md"
                  style={{ backgroundColor: markerColor }}
                >
                  {isMatha && <div className="w-2.5 h-2.5 rounded-full bg-white absolute"></div>}
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs mb-2">
                    <MapPinIcon className="w-3 h-3" style={{ color: markerColor }} />
                    <span style={{ color: markerColor }} className="font-semibold">
                      {location.state}
                    </span>
                    {location.visitYear && (
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        • {location.visitYear} CE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-3 font-medium">
                    {location.purpose}
                  </p>
                  <div className="text-xs text-[#6b7280] dark:text-[#a8a29e] space-y-1.5">
                    {location.events.slice(0, hoveredLocation === location.id ? undefined : 2).map((event, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span style={{ color: markerColor }} className="mt-0.5 font-bold">•</span>
                        <span className="leading-relaxed">{event}</span>
                      </div>
                    ))}
                    {!hoveredLocation && location.events.length > 2 && (
                      <div style={{ color: markerColor }} className="font-semibold pl-4">
                        +{location.events.length - 2} more events
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
