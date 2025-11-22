"use client"

import { useState } from "react"
import { travelLocations } from "@/data/biography"
import { MapPinIcon, MountainIcon, WavesIcon, CompassIcon } from "lucide-react"

// Convert lat/lng to SVG coordinates
// India bounds: lat 8-37°N, lng 68-97°E
// Map to viewBox (0 0 800 1000)
const latLngToXY = (lat: number, lng: number) => {
  // India spans roughly: 68-97°E longitude, 8-37°N latitude
  const x = ((lng - 68) / (97 - 68)) * 450 + 150
  const y = ((37 - lat) / (37 - 8)) * 700 + 100
  return { x, y }
}

// Using external SVG file from /public/in.svg
// No need for hardcoded path - the SVG will be loaded as an image
// Coordinate range: x: 150-600, y: 100-800 (based on latLngToXY function)

// State boundaries (properly positioned)
const statePaths = [
  {
    name: "Kerala",
    path: "M 260,720 L 280,750 L 300,775 L 315,790 L 330,795 L 325,785 L 310,765 L 290,740 L 270,715 L 260,695 Z",
    color: "#10b981"
  },
  {
    name: "Karnataka",
    path: "M 290,640 L 330,655 L 370,680 L 390,715 L 380,745 L 350,760 L 310,755 L 280,730 L 270,700 L 280,665 Z",
    color: "#3b82f6"
  },
  {
    name: "Gujarat",
    path: "M 200,380 L 240,365 L 280,375 L 305,400 L 315,435 L 305,470 L 275,490 L 240,485 L 210,465 L 195,430 L 195,405 Z",
    color: "#f59e0b"
  },
  {
    name: "Odisha",
    path: "M 540,550 L 575,565 L 600,595 L 605,630 L 590,660 L 560,670 L 530,660 L 515,630 L 520,595 L 535,565 Z",
    color: "#8b5cf6"
  },
  {
    name: "Uttarakhand",
    path: "M 430,200 L 470,190 L 505,200 L 525,225 L 520,255 L 495,270 L 460,270 L 430,255 L 420,225 Z",
    color: "#ef4444"
  },
]

// Major rivers
const rivers = [
  {
    name: "Ganges",
    path: "M 520,230 Q 480,260 440,285 Q 400,310 360,330 Q 320,350 280,365 Q 250,375 230,385",
    color: "#3b82f6",
    width: 4
  },
  {
    name: "Godavari",
    path: "M 410,580 Q 450,595 490,605 Q 530,615 565,620",
    color: "#0ea5e9",
    width: 3
  },
  {
    name: "Krishna",
    path: "M 370,650 Q 410,660 450,665 Q 490,670 525,672",
    color: "#06b6d4",
    width: 3
  },
]

export default function TravelsMapEnhanced() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [showRivers, setShowRivers] = useState(true)
  const [showStates, setShowStates] = useState(true)

  // Calculate curved path between two points (for journey lines)
  const getCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = (start.y + end.y) / 2
    const offsetX = (end.y - start.y) * 0.15
    const offsetY = (start.x - end.x) * 0.15
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

          {/* Ocean background */}
          <rect x="0" y="0" width="800" height="1000" fill="url(#oceanGradient)" />

          {/* Ocean labels */}
          <text x="60" y="500" fill="#0369a1" fontSize="14" fontStyle="italic" opacity="0.5" fontWeight="600">
            Arabian Sea
          </text>

          <text x="650" y="500" fill="#0369a1" fontSize="14" fontStyle="italic" opacity="0.5" fontWeight="600">
            Bay of Bengal
          </text>

          <text x="330" y="920" fill="#0369a1" fontSize="16" fontStyle="italic" opacity="0.5" fontWeight="600">
            Indian Ocean
          </text>

          {/* Himalayas */}
          <g opacity="0.4">
            <path
              d="M 280,130 Q 340,110 400,130 Q 460,150 520,130 Q 580,110 640,130"
              fill="none"
              stroke="#78716c"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 300,150 Q 350,135 400,150 Q 450,165 500,150 Q 550,135 600,150"
              fill="none"
              stroke="#a8a29e"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <text x="360" y="115" fill="#78716c" fontSize="16" fontWeight="bold" opacity="0.7">
              HIMALAYAS
            </text>
          </g>

          {/* State boundaries */}
          {showStates && statePaths.map((state) => (
            <path
              key={state.name}
              d={state.path}
              fill={state.color}
              fillOpacity="0.15"
              stroke={state.color}
              strokeWidth="2"
              strokeOpacity="0.5"
              strokeDasharray="5,3"
            />
          ))}

          {/* India Map from External SVG File */}
          <image
            href="/in.svg"
            x="150"
            y="100"
            width="450"
            height="700"
            preserveAspectRatio="xMidYMid meet"
            opacity="0.9"
            className="dark:opacity-80"
          />

          {/* Major Rivers */}
          {showRivers && rivers.map((river) => (
            <g key={river.name}>
              <path
                d={river.path}
                fill="none"
                stroke={river.color}
                strokeWidth={river.width}
                strokeOpacity="0.7"
                strokeLinecap="round"
              />
              <path
                d={river.path}
                fill="none"
                stroke="#ffffff"
                strokeWidth={river.width * 0.3}
                strokeOpacity="0.4"
                strokeLinecap="round"
                strokeDasharray="10,10"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="20"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Travel Routes */}
          <g filter="url(#glow)">
            {travelLocations.slice(0, -1).map((location, index) => {
              const nextLocation = travelLocations[index + 1]
              const start = latLngToXY(location.coordinates.lat, location.coordinates.lng)
              const end = latLngToXY(nextLocation.coordinates.lat, nextLocation.coordinates.lng)
              const pathD = getCurvedPath(start, end)

              return (
                <g key={`route-${location.id}`}>
                  {/* Shadow layer */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#e07c24"
                    strokeWidth="8"
                    strokeOpacity="0.15"
                  />
                  {/* Main path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#e07c24"
                    strokeWidth="4"
                    strokeOpacity="0.9"
                    strokeLinecap="round"
                  />
                  {/* Animated overlay */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2.5"
                    strokeOpacity="1"
                    strokeDasharray="12,12"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="24"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              )
            })}
          </g>

          {/* Direction Markers */}
          <g opacity="0.5">
            <g transform="translate(750, 750)">
              <circle r="30" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2.5" />
              <text x="0" y="0" textAnchor="middle" dy="0.4em" fill="#10b981" fontSize="14" fontWeight="bold">S</text>
            </g>
            <g transform="translate(750, 500)">
              <circle r="30" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2.5" />
              <text x="0" y="0" textAnchor="middle" dy="0.4em" fill="#8b5cf6" fontSize="14" fontWeight="bold">E</text>
            </g>
            <g transform="translate(50, 420)">
              <circle r="30" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="0" y="0" textAnchor="middle" dy="0.4em" fill="#f59e0b" fontSize="14" fontWeight="bold">W</text>
            </g>
            <g transform="translate(490, 160)">
              <circle r="30" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2.5" />
              <text x="0" y="0" textAnchor="middle" dy="0.4em" fill="#ef4444" fontSize="14" fontWeight="bold">N</text>
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
            if (isFirst) markerColor = '#10b981'
            else if (isLast) markerColor = '#dc2626'
            else if (isMatha) markerColor = '#8b5cf6'

            return (
              <g
                key={location.id}
                transform={`translate(${x}, ${y})`}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                className="cursor-pointer transition-all duration-300"
                filter="url(#dropShadow)"
              >
                {/* Pulse on hover */}
                {isHovered && (
                  <circle r="25" fill={markerColor} fillOpacity="0.3">
                    <animate
                      attributeName="r"
                      from="18"
                      to="30"
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

                {/* Marker */}
                <circle
                  r={isHovered ? 16 : isMatha || isFirst || isLast ? 13 : 10}
                  fill={markerColor}
                  stroke="white"
                  strokeWidth="3.5"
                  className="transition-all duration-300"
                />

                {/* Matha inner dot */}
                {isMatha && <circle r="5" fill="white" opacity="0.9" />}

                {/* Number */}
                <text
                  textAnchor="middle"
                  dy="0.4em"
                  fill="white"
                  fontSize={isHovered ? "13" : "10"}
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {index + 1}
                </text>

                {/* Tooltip */}
                {isHovered && (
                  <g>
                    <rect
                      x="-95"
                      y="-75"
                      width="190"
                      height="60"
                      rx="8"
                      fill="white"
                      stroke={markerColor}
                      strokeWidth="2.5"
                      opacity="0.98"
                      className="dark:fill-[#1a1814]"
                    />
                    <text
                      textAnchor="middle"
                      dy="-52"
                      fill={markerColor}
                      fontSize="14"
                      fontWeight="bold"
                    >
                      {location.name}
                    </text>
                    <text
                      textAnchor="middle"
                      dy="-35"
                      fill="#6b7280"
                      fontSize="10"
                      className="dark:fill-[#d9c5a9]"
                    >
                      {location.state}
                      {location.visitYear && ` • ${location.visitYear}`}
                    </text>
                    <text
                      textAnchor="middle"
                      dy="-20"
                      fill="#374151"
                      fontSize="9"
                      className="dark:fill-[#a8a29e]"
                    >
                      {location.purpose.substring(0, 45)}
                      {location.purpose.length > 45 ? '...' : ''}
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
            <div className="w-6 h-6 rounded-full bg-[#10b981] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#10b981]">Birthplace</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#8b5cf6]/40 shadow">
            <div className="w-6 h-6 rounded-full bg-[#8b5cf6] border-2 border-white shadow flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <span className="text-xs font-semibold text-[#8b5cf6]">Four Mathas</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#e07c24]/40 shadow">
            <div className="w-6 h-6 rounded-full bg-[#e07c24] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#e07c24]">Major Stops</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border-2 border-[#dc2626]/40 shadow">
            <div className="w-6 h-6 rounded-full bg-[#dc2626] border-2 border-white shadow"></div>
            <span className="text-xs font-semibold text-[#dc2626]">Samadhi</span>
          </div>
        </div>

        {/* Geographic Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <WavesIcon className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-sm">Sacred Rivers</h4>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              Ganges, Godavari & Krishna rivers marked the spiritual geography
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-2 mb-2">
              <MountainIcon className="w-5 h-5 text-amber-700" />
              <h4 className="font-semibold text-amber-900 dark:text-amber-300 text-sm">South to Himalayas</h4>
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400">
              From Kerala's coast to Himalayan heights of Kedarnath
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <CompassIcon className="w-5 h-5 text-purple-600" />
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 text-sm">Four Directions</h4>
            </div>
            <p className="text-xs text-purple-700 dark:text-purple-400">
              Strategic mathas in all four cardinal directions of India
            </p>
          </div>
        </div>
      </div>

      {/* Location Details */}
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
                  ? `${borderColor.replace('/20', '').replace('/30', '')} shadow-xl bg-white dark:bg-[#2a241e] scale-[1.02]`
                  : `${borderColor} bg-white/60 dark:bg-[#2a241e]/60 hover:shadow-lg`
              }`}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-white shadow-md relative"
                  style={{ backgroundColor: markerColor }}
                >
                  {isMatha && <div className="w-2.5 h-2.5 rounded-full bg-white absolute"></div>}
                  <span className={isMatha ? "opacity-0" : ""}>{index + 1}</span>
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
