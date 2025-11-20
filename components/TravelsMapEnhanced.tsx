"use client"

import { useState } from "react"
import { travelLocations } from "@/data/biography"
import { MapPinIcon, MountainIcon, WavesIcon, CompassIcon } from "lucide-react"

// Convert lat/lng to SVG coordinates (India bounding box)
// India bounds: lat 6.5-35.5°N, lng 68-97.5°E
const latLngToXY = (lat: number, lng: number) => {
  const x = ((lng - 68) / (97.5 - 68)) * 700 + 100
  const y = ((35.5 - lat) / (35.5 - 6.5)) * 900 + 50
  return { x, y }
}

// More accurate India outline SVG path
// Based on actual geographical coordinates
const indiaOutlinePath = "M 250,50 C 280,45 310,45 340,50 C 370,55 400,70 420,100 C 435,125 445,155 450,185 C 453,210 452,235 448,260 C 445,280 438,300 428,320 C 418,340 405,358 390,375 C 375,390 358,403 340,413 C 322,423 303,430 285,435 C 265,440 245,443 225,444 C 205,445 185,444 170,440 C 155,436 142,429 132,420 C 122,411 115,400 110,388 C 105,375 102,360 102,345 C 102,330 105,315 110,302 C 115,289 122,278 130,268 C 138,258 147,249 157,242 C 167,235 178,230 190,227 C 200,224 210,223 220,224 C 228,225 235,228 241,233 C 247,238 251,245 253,253 C 255,261 255,270 253,278 C 251,286 247,293 241,298 C 235,303 228,306 220,307 C 212,308 204,307 197,304 C 190,301 184,296 180,290 C 176,284 174,277 174,270 C 174,263 176,256 180,250 C 184,244 190,239 197,236 C 204,233 212,232 220,233 C 228,234 235,237 241,242 C 247,247 251,254 253,262 C 255,270 255,279 253,287 C 251,295 247,302 241,307 C 235,312 228,315 220,316 C 210,317 200,315 191,310 C 182,305 175,298 170,289 C 165,280 162,270 161,259 C 160,248 161,237 165,227 C 169,217 175,208 183,201 C 191,194 201,189 212,186 C 223,183 235,182 247,184 C 259,186 270,191 280,198 C 290,205 298,215 304,226 C 310,237 314,249 315,262 C 316,275 315,288 311,300 C 307,312 300,323 291,332 C 282,341 271,348 258,353 C 245,358 231,361 216,361 C 201,361 187,358 174,353 C 161,348 150,341 141,332 C 132,323 125,312 121,300 C 117,288 116,275 117,262 C 118,249 122,237 128,226 C 134,215 142,205 152,198 C 162,191 173,186 185,184 C 197,182 209,183 220,187 C 231,191 241,198 249,207 C 257,216 263,227 267,239 C 271,251 272,264 271,277 C 270,290 266,302 259,313 C 252,324 243,333 232,340 C 221,347 208,352 194,354 C 180,356 166,355 153,351 C 140,347 128,340 118,331 C 108,322 101,311 97,299 C 93,287 92,274 94,261 C 96,248 101,236 109,226 C 117,216 127,208 139,203 C 151,198 164,196 178,197 C 192,198 205,202 217,209 C 229,216 239,226 247,238 C 255,250 260,264 262,279 C 264,294 263,309 259,323 C 255,337 248,350 238,361 C 228,372 216,381 202,387 C 188,393 173,396 157,396 C 141,396 126,393 112,387 C 98,381 86,372 76,361 C 66,350 59,337 55,323 C 51,309 50,294 52,279 C 54,264 59,250 67,238 C 75,226 85,216 97,209 C 109,202 122,198 136,197 C 150,196 163,198 175,203 C 187,208 197,216 205,226 C 213,236 218,248 220,261 C 222,274 221,287 217,299 C 213,311 206,322 196,331 C 186,340 174,347 160,351 C 146,355 132,356 118,354 C 104,352 91,347 80,340 C 69,333 60,324 54,313 C 48,302 44,290 43,277 C 42,264 43,251 47,239 C 51,227 57,216 65,207 C 73,198 83,191 94,187 C 105,183 117,182 129,184 C 141,186 152,191 162,198 C 172,205 180,215 186,226 C 192,237 196,249 197,262 C 198,275 197,288 193,300 C 189,312 182,323 173,332 C 164,341 153,348 140,353 C 127,358 113,361 98,361 C 83,361 69,358 56,353 C 43,348 32,341 23,332 C 14,323 7,312 3,300 C -1,288 -2,275 -1,262 C 0,249 4,237 10,226 C 16,215 24,205 34,198 C 44,191 55,186 67,184 C 79,182 91,183 103,187 C 115,191 126,198 135,207 C 144,216 151,227 156,239 C 161,251 163,264 163,277 L 163,285 C 163,298 160,310 154,321 C 148,332 140,341 129,348 C 118,355 105,359 91,360 C 77,361 64,359 52,354 C 40,349 30,342 22,333 C 14,324 8,313 5,301 C 2,289 1,277 3,265 C 5,253 10,242 17,233 C 24,224 33,217 44,212 C 55,207 67,205 80,206 C 93,207 105,211 116,218 C 127,225 136,234 143,245 C 150,256 155,268 157,281 C 159,294 158,307 154,319 C 150,331 143,342 134,351 C 125,360 114,367 101,371 C 88,375 75,376 61,374 C 47,372 35,367 24,359 C 13,351 5,341 0,329 L 0,320 M 450,200 L 455,215 L 460,230 L 463,245 L 465,260 L 465,275 L 463,290 L 460,305 L 455,320 L 448,335 L 440,348 L 430,360 L 418,371 L 405,380 L 390,388 L 374,394 L 357,398 L 340,400 L 323,400 L 306,398 L 290,394 L 275,388 L 261,380 L 248,371 L 236,360 L 226,348 L 218,335 L 212,320 L 208,305 L 206,290 L 206,275 L 208,260 L 212,245 L 218,230 L 226,217 L 236,206 L 248,197 L 261,190 L 275,185 L 290,182 L 306,181 L 323,182 L 340,185 L 357,190 L 374,197 L 390,206 L 405,217 L 418,230 L 430,245 L 440,260 L 448,275 L 453,290 L 455,305 Z"

// State boundaries (simplified key states)
const statePaths = [
  { name: "Kerala", path: "M 170,850 L 180,870 L 195,885 L 210,895 L 220,900 L 210,915 L 195,920 L 180,918 L 165,910 L 155,895 L 150,875 L 155,860 Z", color: "#10b981" },
  { name: "Karnataka", path: "M 200,790 L 240,800 L 270,820 L 280,850 L 270,880 L 240,890 L 200,885 L 170,870 L 165,840 L 175,810 Z", color: "#3b82f6" },
  { name: "Gujarat", path: "M 180,500 L 220,490 L 255,510 L 270,540 L 265,570 L 240,590 L 210,585 L 185,565 L 175,535 Z", color: "#f59e0b" },
  { name: "Odisha", path: "M 520,630 L 550,640 L 570,670 L 565,700 L 545,715 L 515,710 L 495,690 L 495,660 Z", color: "#8b5cf6" },
  { name: "Uttarakhand", path: "M 390,250 L 420,240 L 445,255 L 455,280 L 445,305 L 420,315 L 395,310 L 375,290 L 375,265 Z", color: "#ef4444" },
]

// Major rivers
const rivers = [
  { name: "Ganges", path: "M 420,270 Q 380,300 350,330 Q 320,360 290,380 Q 260,400 240,410", color: "#3b82f6", width: 3 },
  { name: "Godavari", path: "M 350,650 Q 380,670 410,680 Q 440,690 470,695", color: "#0ea5e9", width: 2 },
  { name: "Krishna", path: "M 300,730 Q 340,740 380,745 Q 420,750 460,750", color: "#06b6d4", width: 2 },
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
