"use client"

import { useState } from "react"
import { travelLocations } from "@/data/biography"
import { MapPinIcon } from "lucide-react"

// Convert lat/lng to SVG coordinates (India bounding box)
const latLngToXY = (lat: number, lng: number) => {
  // India approximate bounds: lat 8-35, lng 68-97
  const x = ((lng - 68) / (97 - 68)) * 500 + 50
  const y = ((35 - lat) / (35 - 8)) * 600 + 50
  return { x, y }
}

// Simplified India outline path
const indiaPath = "M250,50 L280,45 L310,50 L340,60 L370,80 L390,110 L400,140 L405,170 L400,200 L390,230 L375,260 L360,280 L340,300 L320,315 L300,325 L280,335 L260,340 L240,345 L220,350 L200,355 L180,358 L160,360 L140,358 L125,355 L115,350 L110,340 L108,330 L110,320 L115,310 L125,300 L140,290 L155,280 L165,270 L170,260 L168,250 L160,240 L145,230 L130,225 L115,225 L105,230 L100,240 L98,250 L100,260 L105,270 L110,280 L108,290 L100,295 L90,292 L85,285 L82,275 L85,265 L92,255 L100,245 L105,235 L105,225 L100,215 L92,210 L85,208 L80,210 L78,220 L80,230 L85,240 L90,248 L92,255 L88,260 L80,260 L72,255 L68,245 L70,235 L75,225 L82,218 L90,215 L100,215 L110,218 L120,225 L128,235 L135,250 L140,265 L145,280 L148,295 L150,310 L148,325 L140,335 L125,340 L110,338 L95,330 L82,318 L72,305 L65,290 L60,275 L58,260 L60,245 L65,230 L72,218 L82,210 L95,205 L110,205 L125,210 L138,220 L148,235 L155,250 L160,265 L162,280 L160,295 L155,310 L148,322 L140,332 L130,340 L120,345 L110,348 L100,350 L92,348 L85,343 L80,335 L78,325 L80,315 L85,305 L92,298 L100,295 L110,295 L120,298 L128,305 L135,315 L140,325 L142,335 L140,345 L135,355 L128,362 L120,365 L110,366 L100,365 L92,362 L85,355 L80,345 L78,335 L80,325 L85,318 L92,312 L100,310 L110,312 L120,318 L128,328 L135,340 L140,352 L142,362 L140,370 L135,378 L128,382 L120,384 L110,384 L100,382 L92,378 L85,372 L80,364 L78,355 L80,346 L85,340 L92,336 L100,335 L110,336 L120,340 L128,346 L135,354 L140,362 L142,370 L140,378 L135,384 L128,388 L120,390 L110,390 L100,388 L92,384 L85,378 L80,370 L78,362 L80,354 L85,348 L92,344 L100,343 L110,344 L120,348 L128,354 L135,362 L140,370 L142,378 L142,386 L140,394 L135,400 L128,404 L120,406 L112,406 L105,404 L98,400 L92,394 L88,386 L88,378 L90,370 L95,364 L102,360 L110,359 L118,360 L125,364 L130,370 L133,378 L133,386 L130,394 L125,400 L118,404 L110,406 L102,404 L95,400 L90,394 L88,386 L88,378 L90,372 L95,366 L102,362 L110,361 L118,362 L125,366 L130,372 L133,378 L133,384 L130,390 L125,395 L118,399 L110,401 L102,399 L95,395 L90,390 L88,384 L88,378 L90,374 L95,370 L102,367 L110,366 L118,367 L125,370 L130,374 L133,378 L133,382 L130,386 L125,390 L118,393 L110,395 L102,393 L95,390 L90,386 L88,382 L88,378 L90,376 L95,373 L102,371 L110,371 L118,373 L125,376 L130,380 L133,384 L135,388 L138,392 L143,396 L150,399 L158,400 L166,399 L174,396 L180,392 L185,388 L188,384 L190,380 L190,376 L188,372 L185,368 L180,365 L174,363 L166,362 L158,363 L150,365 L143,368 L138,372 L135,376 L133,380 L133,384 L135,388 L138,392 L143,395 L150,397 L158,398 L166,397 L174,395 L180,392 L185,388 L188,384 L190,380 L192,376 L192,372 L190,368 L185,365 L180,363 L174,362 L166,362 L158,363 L150,365 L143,368 L138,372 L135,376 L133,380 L133,384 L135,388 L138,391 L143,394 L150,396 L158,397 L166,396 L174,394 L180,391 L185,388 L188,384 L190,380 L192,376 L194,372 L194,368 L192,365 L188,362 L183,360 L178,359 L172,359 L166,360 L160,362 L155,365 L150,368 L146,372 L143,376 L142,380 L142,384 L143,388 L146,391 L150,394 L155,396 L160,397 L166,397 L172,396 L178,394 L183,391 L188,388 L192,384 L194,380 L196,376 L198,372 L198,368 L196,365 L192,362 L188,360 L183,359 L178,359 L172,360 L166,362 L160,365 L155,368 L150,372 L146,376 L143,380 L142,384 L143,388 L146,391 L150,394 L155,396 L160,397 L166,397 L172,396 L178,394 L183,391 L188,388 L192,384 L196,380 L198,376 L200,372 L202,368 L202,364 L200,361 L196,359 L192,357 L188,357 L183,358 L178,360 L173,363 L168,366 L163,369 L158,372 L153,375 L148,378 L143,381 L138,384 L135,387 L133,390 L133,393 L135,396 L138,398 L143,400 L148,401 L153,401 L158,400 L163,398 L168,395 L173,392 L178,389 L183,386 L188,383 L192,380 L196,377 L200,374 L202,371 L204,368 L206,365 L206,362 L204,359 L200,357 L196,356 L192,356 L188,357 L183,359 L178,362 L173,365 L168,368 L163,371 L158,374 L153,377 L148,380 L143,383 L138,386 L135,389 L133,392 L133,395 L135,397 L138,399 L143,401 L148,402 L153,402 L158,401 L163,399 L168,396 L173,393 L178,390 L183,387 L188,384 L192,381 L196,378 L200,375 L204,372 L206,369 L208,366 L210,363 L210,360 L208,357 L204,356 L200,355 L196,355 L192,356 L188,358 L183,361 L178,364 L173,367 L168,370 L163,373 L158,376 L153,379 L148,382 L143,385 L138,388 L135,391 L133,394 L133,397 L135,399 L138,401 L143,402 L148,403 L153,403 L158,402 L163,400 L168,397 L173,394 L178,391 L183,388 L188,385 L192,382 L196,379 L200,376 L204,373 L208,370 L210,367 L212,364 L214,361 L214,358 L212,356 L208,354 L204,353 L200,353 L196,354 L192,356 L188,359 L183,362 L178,365 L173,368 L168,371 L163,374 L158,377 L153,380 L148,383 L143,386 L138,389 L135,392 L133,395 L133,398 L135,400 L138,402 L143,403 L148,404 L153,404 L158,403 L163,401 L168,398 L173,395 L178,392 L183,389 L188,386 L192,383 L196,380 L200,377 L204,374 L208,371 L212,368 L214,365 L216,362 L218,359 L218,356 L216,354 L212,352 L208,351 L204,351 L200,352 L196,354 L192,357 L188,360 L183,363 L178,366 L173,369 L168,372 L163,375 L158,378 L153,381 L148,384 L143,387 L138,390 L135,393 L133,396 L133,399 L135,401 L138,403 L143,404 L148,405 L153,405 L158,404 L163,402 L168,399 L173,396 L178,393 L183,390 L188,387 L192,384 L196,381 L200,378 L204,375 L208,372 L212,369 L216,366 L218,363 L220,360 L222,357 L222,354 L220,352 L216,350 L212,349 L208,349 L204,350 L200,352 L196,355 L192,358 L188,361 L183,364 L178,367 L173,370 L168,373 L163,376 L158,379 L153,382 L148,385 L143,388 L138,391 L135,394 L133,397 L133,400 L135,402 L138,404 L143,405 L148,406 L153,406 L158,405 L163,403 L168,400 L173,397 L178,394 L183,391 L188,388 L192,385 L196,382 L200,379 L204,376 L208,373 L212,370 L216,367 L220,364 L222,361 L224,358 L226,355 L226,352 L224,350 L220,348 L216,347 L212,347 L208,348 L204,350 L200,353 L196,356 L192,359 L188,362 L183,365 L178,368 L173,371 L168,374 L163,377 L158,380 L153,383 L148,386 L143,389 L138,392 L135,395 L133,398 L133,401 L135,403 L138,405 L143,406 L148,407 L153,407 L158,406 L163,404 L168,401 L173,398 L178,395 L183,392 L188,389 L192,386 L196,383 L200,380 L204,377 L208,374 L212,371 L216,368 L220,365 L224,362 L226,359 L228,356 L230,353 L230,350 L228,348 L224,346 L220,345 L216,345 L212,346 L208,348 L204,351 L200,354 L196,357 L192,360 L188,363 L183,366 L178,369 L173,372 L168,375 L163,378 L158,381 L153,384 L148,387 L143,390 L138,393 L135,396 L133,399 L133,402 L135,404 L138,406 L143,407 L148,408 L153,408 L158,407 L163,405 L168,402 L173,399 L178,396 L183,393 L188,390 L192,387 L196,384 L200,381 L204,378 L208,375 L212,372 L216,369 L220,366 L224,363 L228,360 L230,357 L232,354 L234,351 L234,348 L232,346 L228,344 L224,343 L220,343 L216,344 L212,346 L208,349 L204,352 L200,355 L196,358 L192,361 L188,364 L183,367 L178,370 L173,373 L168,376 L163,379 L158,382 L153,385 L148,388 L143,391 L138,394 L135,397 L133,400 L133,403 L135,405 L138,407 L143,408 L148,409 L153,409 L158,408 L163,406 L168,403 L173,400 L178,397 L183,394 L188,391 L192,388 L196,385 L200,382 L204,379 L208,376 L212,373 L216,370 L220,367 L224,364 L228,361 L232,358 L234,355 L236,352 L238,349 L238,346 L236,344 L232,342 L228,341 L224,341 L220,342 L216,344 L212,347 L208,350 L204,353 L200,356 L196,359 L192,362 L188,365 L183,368 L178,371 L173,374 L168,377 L163,380 L158,383 L153,386 L148,389 L143,392 L138,395 L135,398 L133,401 L133,404 L135,406 L138,408 L143,409 L148,410 L153,410 L158,409 L163,407 L168,404 L173,401 L178,398 L183,395 L188,392 L192,389 L196,386 L200,383 L204,380 L208,377 L212,374 L216,371 L220,368 L224,365 L228,362 L232,359 L236,356 L238,353 L240,350 L242,347 L242,344 L240,342 L236,340 L232,339 L228,339 L224,340 L220,342 L216,345 L212,348 L208,351 L204,354 L200,357 L196,360 L192,363 L188,366 L183,369 L178,372 L173,375 L168,378 L163,381 L158,384 L153,387 L148,390 L143,393 L138,396 L135,399 L133,402 L133,405 L135,407 L138,409 L143,410 L148,411 L153,411 L158,410 L163,408 L168,405 L173,402 L178,399 L183,396 L188,393 L192,390 L196,387 L200,384 L204,381 L208,378 L212,375 L216,372 L220,369 L224,366 L228,363 L232,360 L236,357 L240,354 L242,351 L244,348 L246,345 L246,342 L244,340 L240,338 L236,337 L232,337 L228,338 L224,340 L220,343 L216,346 L212,349 L208,352 L204,355 L200,358 L196,361 L192,364 L188,367 L183,370 L178,373 L173,376 L168,379 L163,382 L158,385 L153,388 L148,391 L143,394 L138,397 L135,400 L133,403 L133,406 L135,408 L138,410 L143,411 L148,412 L153,412 L158,411 L163,409 L168,406 L173,403 L178,400 L183,397 L188,394 L192,391 L196,388 L200,385 L204,382 L208,379 L212,376 L216,373 L220,370 L224,367 L228,364 L232,361 L236,358 L240,355 L244,352 L246,349 L248,346 L250,343 L250,340 L248,338 L244,336 L240,335 L236,335 L232,336 L228,338 L224,341 L220,344 L216,347 L212,350 L208,353 L204,356 L200,359 L196,362 L192,365 L188,368 L183,371 L178,374 L173,377 L168,380 L163,383 L158,386 L153,389 L148,392 L143,395 L138,398 L135,401 L133,404 L133,407 L135,409 L138,411 L143,412 L148,413 L153,413 L158,412 L163,410 L168,407 L173,404 L178,401 L183,398 L188,395 L192,392 L196,389 L200,386 L204,383 L208,380 L212,377 L216,374 L220,371 L224,368 L228,365 L232,362 L236,359 L240,356 L244,353 L248,350 L250,347 L252,344 L254,341 L254,338 L252,336 L248,334 L244,333 L240,333 L236,334 L232,336 L228,339 L224,342 L220,345 L216,348 L212,351 L208,354 L204,357 L200,360 L196,363 L192,366 L188,369 L183,372 L178,375 L173,378 L168,381 L163,384 L158,387 L153,390 L148,393 L143,396 L138,399 L135,402 L133,405 L133,408 L135,410 L138,412 L143,413 L148,414 L153,414 L158,413 L163,411 L168,408 L173,405 L178,402 L183,399 L188,396 L192,393 L196,390 L200,387 L204,384 L208,381 L212,378 L216,375 L220,372 L224,369 L228,366 L232,363 L236,360 L240,357 L244,354 L248,351 L252,348 L254,345 L256,342 L258,339 L258,336 L256,334 L252,332 L248,331 L244,331 L240,332 L236,334 L232,337 L228,340 L224,343 L220,346 L216,349 L212,352 L208,355 L204,358 L200,361 L196,364 L192,367 L188,370 L183,373 L178,376 L173,379 L168,382 L163,385 L158,388 L153,391 L148,394 L143,397 L138,400 L135,403 L133,406 L133,409 L135,411 L138,413 L143,414 L148,415 L153,415 L158,414 L163,412 L168,409 L173,406 L178,403 L183,400 L188,397 L192,394 L196,391 L200,388 L204,385 L208,382 L212,379 L216,376 L220,373 L224,370 L228,367 L232,364 L236,361 L240,358 L244,355 L248,352 L252,349 L256,346 L258,343 L260,340 L262,337 L262,334 L260,332 L256,330 L252,329 L248,329 L244,330 L240,332 L236,335 L232,338 L228,341 L224,344 L220,347 L216,350 L212,353 L208,356 L204,359 L200,362 L196,365 L192,368 L188,371 L183,374 L178,377 L173,380 L168,383 L163,386 L158,389 L153,392 L148,395 L143,398 L138,401 L135,404 L133,407 L133,410 L135,412 L138,414 L143,415 L148,416 L153,416 L158,415 L163,413 L168,410 L173,407 L178,404 L183,401 L188,398 L192,395 L196,392 L200,389 L204,386 L208,383 L212,380 L216,377 L220,374 L224,371 L228,368 L232,365 L236,362 L240,359 L244,356 L248,353 L252,350 L256,347 L260,344 L262,341 L264,338 L266,335 L266,332 L264,330 L260,328 L256,327 L252,327 L248,328 L244,330 L240,333 L236,336 L232,339 L228,342 L224,345 L220,348 L216,351 L212,354 L208,357 L204,360 L200,363 L196,366 L192,369 L188,372 L183,375 L178,378 L173,381 L168,384 L163,387 L158,390 L153,393 L148,396 L143,399 L138,402 L135,405 L133,408 L133,411 L135,413 L138,415 L143,416 L148,417 L153,417 L158,416 L163,414 L168,411 L173,408 L178,405 L183,402 L188,399 L192,396 L196,393 L200,390 L204,387 L208,384 L212,381 L216,378 L220,375 L224,372 L228,369 L232,366 L236,363 L240,360 L244,357 L248,354 L252,351 L256,348 L260,345 L264,342 L266,339 L268,336 L270,333 L270,330"

export default function TravelsMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
          Travels Across India
        </h2>
        <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">
          Journey spanning over 25,000 kilometers on foot
        </p>
      </div>

      {/* Map Container */}
      <div className="bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#2a241e] dark:to-[#1a1814] rounded-2xl p-6 md:p-8 border-2 border-[#e07c24]/20 shadow-xl">
        {/* SVG Map */}
        <svg
          viewBox="0 0 600 700"
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        >
          {/* India Outline */}
          <path
            d={indiaPath}
            fill="#e9e1d3"
            stroke="#8b5d33"
            strokeWidth="2"
            className="dark:fill-[#1a1814] dark:stroke-[#e07c24]"
            opacity="0.3"
          />

          {/* Travel Routes (connecting lines) */}
          <g opacity="0.3">
            {travelLocations.slice(0, -1).map((location, index) => {
              const nextLocation = travelLocations[index + 1]
              const start = latLngToXY(location.coordinates.lat, location.coordinates.lng)
              const end = latLngToXY(nextLocation.coordinates.lat, nextLocation.coordinates.lng)

              return (
                <line
                  key={`route-${location.id}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#e07c24"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )
            })}
          </g>

          {/* Location Markers */}
          {travelLocations.map((location, index) => {
            const { x, y } = latLngToXY(location.coordinates.lat, location.coordinates.lng)
            const isHovered = hoveredLocation === location.id
            const isFirst = index === 0
            const isLast = index === travelLocations.length - 1

            return (
              <g
                key={location.id}
                transform={`translate(${x}, ${y})`}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                className="cursor-pointer"
              >
                {/* Marker Circle */}
                <circle
                  r={isHovered ? 12 : isFirst || isLast ? 10 : 7}
                  fill={isFirst ? '#10b981' : isLast ? '#ef4444' : '#e07c24'}
                  stroke="white"
                  strokeWidth="2"
                  className="transition-all duration-300"
                  style={{
                    filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' : 'none'
                  }}
                />

                {/* Number */}
                <text
                  textAnchor="middle"
                  dy="0.35em"
                  fill="white"
                  fontSize={isHovered ? "10" : "8"}
                  fontWeight="bold"
                  className="transition-all duration-300 pointer-events-none"
                >
                  {index + 1}
                </text>

                {/* Location Label (on hover) */}
                {isHovered && (
                  <g>
                    <rect
                      x="-60"
                      y="-40"
                      width="120"
                      height="30"
                      rx="4"
                      fill="#1a1814"
                      opacity="0.95"
                    />
                    <text
                      textAnchor="middle"
                      dy="-25"
                      fill="#e07c24"
                      fontSize="10"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {location.name}
                    </text>
                    <text
                      textAnchor="middle"
                      dy="-12"
                      fill="#d9c5a9"
                      fontSize="7"
                      className="pointer-events-none"
                    >
                      {location.state}
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border border-[#e07c24]/20">
            <div className="w-4 h-4 rounded-full bg-[#10b981] border-2 border-white"></div>
            <span className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#10b981]">Start:</strong> Kaladi (Birthplace)
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border border-[#e07c24]/20">
            <div className="w-4 h-4 rounded-full bg-[#e07c24] border-2 border-white"></div>
            <span className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#e07c24]">Journey:</strong> Major stops
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-[#2a241e] border border-[#e07c24]/20">
            <div className="w-4 h-4 rounded-full bg-[#ef4444] border-2 border-white"></div>
            <span className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#ef4444]">End:</strong> Kedarnath (Samadhi)
            </span>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {travelLocations.map((location, index) => {
          const isFirst = index === 0
          const isLast = index === travelLocations.length - 1
          const markerColor = isFirst ? '#10b981' : isLast ? '#ef4444' : '#e07c24'

          return (
            <div
              key={location.id}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                hoveredLocation === location.id
                  ? 'border-[#e07c24] shadow-lg bg-white dark:bg-[#2a241e]'
                  : 'border-[#e07c24]/20 bg-white/60 dark:bg-[#2a241e]/60'
              }`}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-white shadow-md"
                  style={{ backgroundColor: markerColor }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#e07c24] mb-2">
                    <MapPinIcon className="w-3 h-3" />
                    {location.state}
                    {location.visitYear && ` • ${location.visitYear}`}
                  </div>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">
                    <strong>Purpose:</strong> {location.purpose}
                  </p>
                  <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] space-y-1">
                    {location.events.slice(0, 2).map((event, idx) => (
                      <div key={idx} className="flex items-start gap-1">
                        <span className="text-[#e07c24] mt-0.5">•</span>
                        <span>{event}</span>
                      </div>
                    ))}
                    {location.events.length > 2 && (
                      <div className="text-[#e07c24] font-semibold">
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
