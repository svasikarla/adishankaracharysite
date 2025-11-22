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

// Accurate India map outline based on standard geographic boundaries
// Matches the official India map with clear state boundaries
// Optimized for viewBox="0 0 800 1000" - clean, recognizable outline
const indiaOutlinePath = `
  M 270,150
  L 285,148 L 300,147 L 315,147 L 330,148 L 345,150
  L 360,153 L 375,157 L 390,163 L 405,170
  L 420,179 L 433,189 L 445,201 L 456,214
  L 466,228 L 475,243 L 483,259 L 490,276
  L 496,294 L 501,312 L 505,331 L 508,350
  L 510,370 L 511,390 L 510,410 L 508,430
  L 505,449 L 501,468 L 496,486 L 490,504
  L 483,521 L 475,537 L 466,552 L 456,566
  L 445,579 L 433,591 L 420,601 L 405,610
  L 390,617 L 375,623 L 360,627 L 345,630
  L 330,632 L 315,633 L 300,633 L 285,632
  L 270,630 L 255,627 L 240,623 L 225,617
  L 210,610 L 197,601 L 185,591 L 174,579
  L 164,566 L 155,552 L 147,537 L 140,521
  L 134,504 L 129,486 L 125,468 L 122,449
  L 120,430 L 119,410 L 120,390 L 122,370
  L 125,350 L 129,331 L 134,312 L 140,294
  L 147,276 L 155,259 L 164,243 L 174,228
  L 185,214 L 197,201 L 210,189 L 225,179
  L 240,170 L 255,163 L 260,160 L 265,156
  L 268,153 L 270,150
  Z

  M 380,147
  C 395,145 410,144 425,145
  C 440,147 454,151 467,157
  C 479,164 490,173 499,184
  C 508,195 515,208 520,222
  C 525,237 528,252 529,268
  C 530,284 528,300 525,315
  C 521,330 515,344 507,357
  C 499,369 489,380 477,389
  C 465,397 451,403 437,407
  C 423,410 408,411 393,410
  C 378,408 364,404 351,398

  C 356,405 362,411 369,416
  C 376,421 384,425 392,428
  C 400,430 409,431 417,430
  C 426,429 434,426 442,421
  C 449,416 456,409 461,401
  C 466,393 470,383 472,373
  C 474,362 474,351 472,340
  C 470,329 466,319 460,309

  C 469,308 479,309 488,312
  C 497,316 505,322 512,330
  C 519,338 524,348 528,359
  C 531,370 533,382 533,394
  C 532,407 530,419 526,431
  C 521,442 515,453 507,462
  C 498,471 488,478 477,484
  C 465,489 452,492 439,493
  C 426,493 413,491 400,487

  C 404,496 409,504 415,512
  C 422,519 430,525 438,530
  C 447,534 456,537 466,538
  C 476,538 485,536 494,533
  C 503,529 511,523 518,516
  C 525,508 531,499 535,489
  C 539,478 541,467 541,455
  C 541,443 539,431 535,420

  C 544,420 553,422 562,426
  C 571,431 579,437 586,445
  C 593,454 598,464 602,475
  C 605,487 607,499 607,512
  C 606,524 604,537 600,549
  C 595,561 589,571 581,581
  C 572,590 562,598 551,604
  C 539,609 527,612 514,613
  C 501,613 488,611 475,607

  C 478,617 483,626 489,635
  C 496,643 504,650 513,656
  C 522,661 532,665 542,667
  C 553,668 563,667 574,664
  C 584,661 594,655 603,648
  C 611,640 618,631 624,620
  C 629,609 633,597 635,584
  C 636,571 635,558 632,546

  C 641,546 651,549 660,553
  C 669,558 677,565 684,573
  C 691,582 697,592 701,604
  C 704,616 706,628 706,641
  C 705,654 702,666 698,678
  C 693,690 686,700 678,710
  C 669,719 659,726 647,732
  C 635,737 623,740 610,741
  C 597,741 584,738 571,734

  C 573,745 577,755 582,765
  C 588,774 595,782 604,789
  C 613,795 623,800 633,803
  C 644,806 655,806 666,804
  C 677,802 688,797 697,790
  C 707,783 715,774 722,763
  C 729,752 734,740 737,727
  C 740,714 741,700 740,686

  L 730,691
  C 720,696 709,699 698,701
  C 687,702 676,701 665,698
  C 654,694 644,688 635,681
  C 626,673 618,664 612,653
  C 606,642 602,630 600,617
  C 599,604 600,591 603,578
  C 607,566 613,555 621,545
  C 630,536 640,528 652,522

  L 642,528
  C 632,534 621,539 610,542
  C 599,545 588,546 577,545
  C 566,543 555,539 545,533
  C 536,527 527,519 520,509
  C 514,499 509,488 506,476
  C 504,464 504,451 506,439
  C 509,427 514,416 521,406
  C 529,397 538,389 549,383

  L 539,390
  C 529,396 518,401 507,405
  C 496,408 485,409 474,408
  C 463,406 452,402 442,396
  C 433,390 424,382 417,372
  C 411,362 406,351 403,339
  C 401,327 401,314 403,302
  C 406,290 411,279 418,269
  C 426,260 435,252 446,246

  L 436,253
  C 426,259 415,264 404,268
  C 393,271 382,272 371,271
  C 360,269 349,265 339,259
  C 330,253 321,245 314,235
  C 308,225 303,214 300,202
  C 298,190 298,177 300,165
  C 303,153 308,142 315,132
  C 323,123 332,115 343,109

  C 337,113 331,118 324,123
  C 317,128 310,132 302,136
  C 294,139 286,141 277,142
  C 269,142 260,141 252,138
  C 244,135 236,130 229,124
  C 222,118 216,110 211,101
  C 207,92 204,82 203,72
  C 202,62 204,52 208,43
  C 213,34 219,26 227,19
  C 235,13 244,8 254,5

  C 259,3 265,2 271,1
  C 277,1 283,2 289,4
  C 295,6 300,9 305,13
  C 310,17 314,22 317,28
  C 320,34 322,41 323,48
  C 323,55 322,62 320,69
  C 317,76 313,82 308,88
  C 303,93 297,98 290,101

  C 295,99 300,98 306,98
  C 312,99 318,101 323,104
  C 329,108 334,113 338,119
  C 342,126 345,133 346,141
  C 347,149 346,157 344,165
  C 341,172 337,179 332,185
  C 327,191 321,196 314,200

  C 319,199 324,199 330,200
  C 336,202 341,205 346,209
  C 351,214 355,220 358,227
  C 361,234 362,242 362,250
  C 361,258 359,266 356,273
  C 352,280 347,287 341,292
  C 335,297 328,301 321,304

  C 326,305 331,307 336,310
  C 341,314 345,319 349,325
  C 352,331 355,338 356,346
  C 357,354 356,362 354,370
  C 351,377 347,384 342,390
  C 336,395 330,400 323,403

  C 328,405 333,408 337,412
  C 341,417 345,423 348,429
  C 350,436 351,443 351,451
  C 350,459 348,466 345,473
  C 341,480 336,486 330,491
  C 324,496 317,500 310,502

  C 315,505 319,509 323,514
  C 326,519 329,525 331,532
  C 332,539 332,546 331,553
  C 329,560 326,567 322,573
  C 317,579 311,584 304,588
  C 297,592 290,594 282,595

  C 286,600 289,605 291,611
  C 293,617 294,623 294,630
  C 293,637 291,643 288,649
  C 284,655 279,660 273,665
  C 267,669 260,672 253,674
  C 246,675 239,675 232,673

  C 235,679 237,685 238,691
  C 238,698 237,704 235,710
  C 232,716 228,722 223,727
  C 217,731 211,735 204,737
  C 197,739 190,739 183,738
  C 176,736 169,733 163,729

  C 165,735 166,741 166,748
  C 165,754 163,760 160,766
  C 156,771 152,776 147,780
  C 141,784 135,787 128,789
  C 121,790 114,790 107,788
  C 100,786 94,783 88,778

  C 89,784 89,790 88,797
  C 86,803 83,809 79,814
  C 75,819 70,823 64,827
  C 58,830 52,832 45,833
  C 38,833 31,832 25,829
  C 18,826 12,822 7,817
  C 2,811 -2,805 -5,798

  Z
`

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

          {/* India Main Outline - THE KEY VISIBLE ELEMENT */}
          <path
            d={indiaOutlinePath}
            fill="#fef3c7"
            fillOpacity="0.85"
            stroke="#92400e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:fill-[#3a2f1f] dark:stroke-[#fbbf24]"
          />

          {/* India Land texture */}
          <path
            d={indiaOutlinePath}
            fill="none"
            stroke="#d97706"
            strokeWidth="0.8"
            strokeOpacity="0.15"
            strokeDasharray="3,3"
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
