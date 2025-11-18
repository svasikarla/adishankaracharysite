"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPinIcon } from "lucide-react"

interface MathaLocation {
  id: string
  name: string
  direction: string
  coordinates: { lat: number; lng: number }
  color: string
}

const mathaLocations: MathaLocation[] = [
  { id: 'sringeri', name: 'Sringeri', direction: 'South', coordinates: { lat: 13.4167, lng: 75.2500 }, color: '#ef4444' },
  { id: 'dwarka', name: 'Dwarka', direction: 'West', coordinates: { lat: 22.2394, lng: 68.9678 }, color: '#22c55e' },
  { id: 'puri', name: 'Puri', direction: 'East', coordinates: { lat: 19.8135, lng: 85.8312 }, color: '#eab308' },
  { id: 'joshimath', name: 'Jyotir Math', direction: 'North', coordinates: { lat: 30.5565, lng: 79.5645 }, color: '#3b82f6' }
]

export default function IndiaMathasMap() {
  const [hoveredMatha, setHoveredMatha] = useState<string | null>(null)

  // Convert lat/lng to SVG coordinates (simplified projection)
  const latLngToXY = (lat: number, lng: number) => {
    // India bounds approximately: lat 8-35, lng 68-97
    const x = ((lng - 68) / (97 - 68)) * 500 + 50
    const y = ((35 - lat) / (35 - 8)) * 600 + 50
    return { x, y }
  }

  return (
    <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-[#e07c24]/20 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6 text-center">
          The Four Mathas Across India
        </h3>

        <div className="relative">
          <svg
            viewBox="0 0 600 700"
            className="w-full h-auto"
            style={{ maxHeight: '600px' }}
          >
            {/* Simplified India outline */}
            <path
              d="M 200 50 L 250 80 L 280 100 L 320 110 L 350 130 L 380 150 L 400 180 L 420 220 L 430 260 L 440 300 L 445 350 L 440 400 L 430 450 L 410 500 L 380 540 L 340 570 L 300 590 L 260 600 L 220 595 L 180 580 L 150 550 L 130 510 L 115 470 L 105 420 L 100 370 L 95 320 L 100 270 L 110 220 L 125 180 L 145 140 L 170 100 L 200 70 Z"
              fill="#f7f3e9"
              stroke="#e07c24"
              strokeWidth="2"
              className="dark:fill-[#1a1814]"
            />

            {/* Matha locations */}
            {mathaLocations.map((matha) => {
              const { x, y } = latLngToXY(matha.coordinates.lat, matha.coordinates.lng)
              const isHovered = hoveredMatha === matha.id

              return (
                <g key={matha.id}>
                  {/* Connecting line to center (symbolic unity) */}
                  <line
                    x1={x}
                    y1={y}
                    x2="300"
                    y2="350"
                    stroke={matha.color}
                    strokeWidth="1"
                    strokeDasharray="4 2"
                    opacity="0.3"
                  />

                  {/* Location marker */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? "12" : "8"}
                    fill={matha.color}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredMatha(matha.id)}
                    onMouseLeave={() => setHoveredMatha(null)}
                    style={{ filter: isHovered ? 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' : 'none' }}
                  />

                  {/* Label */}
                  <text
                    x={x}
                    y={y - (isHovered ? 20 : 15)}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-[#8b5d33] dark:fill-[#e07c24] pointer-events-none"
                    style={{ fontSize: isHovered ? '14px' : '12px' }}
                  >
                    {matha.name}
                  </text>

                  {/* Direction badge */}
                  <text
                    x={x}
                    y={y + (isHovered ? 25 : 20)}
                    textAnchor="middle"
                    className="text-[10px] fill-[#5a4a3f] dark:fill-[#d9c5a9] pointer-events-none"
                  >
                    {matha.direction}
                  </text>
                </g>
              )
            })}

            {/* Center symbol (Om or unity symbol) */}
            <circle
              cx="300"
              cy="350"
              r="6"
              fill="#e07c24"
              opacity="0.6"
            />
            <text
              x="300"
              y="355"
              textAnchor="middle"
              className="text-xs fill-white font-bold"
              style={{ fontSize: '10px' }}
            >
              ॐ
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {mathaLocations.map((matha) => (
            <div
              key={matha.id}
              className="flex items-center gap-2 p-2 rounded-lg bg-[#f7f3e9]/50 dark:bg-[#1a1814]/50 cursor-pointer hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] transition-colors"
              onMouseEnter={() => setHoveredMatha(matha.id)}
              onMouseLeave={() => setHoveredMatha(null)}
            >
              <div
                className="w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: matha.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#8b5d33] dark:text-[#e07c24] truncate">
                  {matha.name}
                </div>
                <div className="text-[10px] text-[#5a4a3f] dark:text-[#d9c5a9]">
                  {matha.direction}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] italic">
            The four mathas form a spiritual quadrangle across India, symbolizing the unity and reach of Advaita Vedanta philosophy
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
