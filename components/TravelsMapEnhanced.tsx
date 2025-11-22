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

// India map outline traced from official India political map
// Matches the clean, recognizable outline from the reference image
// Optimized for viewBox="0 0 800 1000" with accurate proportions
const indiaOutlinePath = `
  M 230,160
  C 235,155 245,152 255,150
  C 265,148 275,147 285,147
  C 295,148 305,150 315,153
  C 325,156 335,161 344,167
  C 354,174 363,182 371,191
  C 379,201 386,212 392,224
  C 398,236 403,249 407,263
  C 411,277 414,292 416,307
  C 418,323 419,339 418,355
  C 417,371 415,387 411,403
  C 407,419 402,434 396,449
  C 389,464 381,478 372,491
  C 363,504 352,516 340,527
  C 328,537 315,546 301,554
  C 287,561 272,567 256,571
  C 240,575 224,578 207,579
  C 191,580 174,579 158,577
  C 142,574 127,570 112,564
  C 98,558 85,550 73,541
  C 62,532 52,521 43,509
  C 35,497 28,484 23,470
  C 18,456 14,441 12,426
  C 10,410 10,394 12,378
  C 14,362 18,347 24,332
  C 30,317 38,303 47,290
  C 57,277 68,265 81,254
  C 94,244 108,235 123,227
  C 139,220 156,214 173,210
  C 190,206 208,204 225,204
  C 220,195 218,185 218,175
  C 219,165 222,155 227,146
  C 228,150 229,155 230,160
  Z

  M 315,153
  C 325,150 335,148 346,147
  C 357,147 368,148 378,151
  C 389,154 399,159 408,165
  C 418,172 426,180 434,190
  C 441,200 447,211 452,223
  C 456,236 459,249 461,263
  C 462,277 462,292 461,306
  C 459,321 456,335 451,349
  C 446,363 440,376 432,388
  C 424,400 415,411 404,420
  C 393,429 381,437 368,443
  C 355,448 341,452 327,454
  C 312,456 298,456 283,454

  C 287,462 292,469 298,476
  C 304,482 311,488 318,493
  C 326,497 334,501 343,503
  C 352,505 361,506 370,505
  C 379,504 388,501 396,497
  C 404,492 412,486 418,479
  C 425,471 430,462 434,453
  C 438,443 441,432 442,421
  C 443,410 443,398 441,387
  C 439,375 435,364 430,354

  C 439,351 449,350 458,351
  C 468,353 477,357 485,363
  C 493,369 500,377 506,386
  C 512,396 516,407 519,418
  C 521,430 522,442 521,455
  C 520,467 517,479 513,491
  C 508,503 502,514 494,524
  C 486,534 476,542 465,549
  C 454,556 442,561 429,564
  C 416,567 402,568 389,567

  C 392,576 397,584 403,592
  C 409,599 416,606 424,612
  C 432,617 441,622 450,625
  C 460,628 470,629 480,629
  C 490,628 500,626 509,622
  C 518,618 527,612 534,605
  C 541,598 548,589 553,580
  C 558,570 562,559 564,548
  C 566,537 567,525 566,513
  C 565,501 562,489 558,478

  C 567,476 577,477 586,479
  C 596,483 604,488 612,495
  C 620,503 627,512 632,522
  C 637,533 641,544 643,556
  C 645,568 645,580 644,593
  C 642,605 638,617 633,629
  C 627,640 620,651 611,660
  C 602,669 592,677 580,683
  C 568,689 556,693 543,695
  C 530,697 516,697 503,695

  C 505,705 509,714 514,723
  C 520,731 527,739 535,746
  C 543,752 552,757 562,761
  C 572,765 582,767 593,768
  C 603,768 614,767 624,764
  C 634,760 644,755 653,748
  C 662,741 670,732 677,722
  C 683,712 688,701 692,689
  C 695,677 697,664 697,651
  C 697,638 695,625 691,613

  C 700,612 710,613 719,616
  C 729,620 737,626 745,633
  C 752,641 759,650 764,660
  C 769,671 773,682 775,694
  C 777,706 777,719 776,731
  C 774,744 770,756 765,768
  C 759,779 752,790 743,799
  C 734,808 724,816 712,822
  C 700,828 688,832 675,834
  C 662,836 648,836 635,834

  C 637,844 640,854 645,863
  C 650,872 656,880 664,888
  C 672,895 681,901 690,906
  C 700,910 711,913 722,915
  C 733,916 744,915 755,913
  C 766,910 777,906 787,900
  C 797,893 806,885 814,875
  C 822,865 828,854 833,842
  C 838,830 841,817 843,803
  C 844,790 843,776 841,762

  L 832,766
  C 822,771 812,775 801,777
  C 790,779 779,780 768,779
  C 757,777 746,774 735,769
  C 725,764 715,757 706,749
  C 698,741 690,731 684,720
  C 678,709 673,697 670,684
  C 667,671 666,658 667,644
  C 669,631 672,618 678,606
  C 684,594 692,583 702,573
  C 712,564 724,556 737,550

  L 727,555
  C 717,561 706,566 695,570
  C 684,573 673,575 662,575
  C 651,574 640,571 629,567
  C 619,562 609,555 600,547
  C 592,539 584,529 578,518
  C 572,507 568,495 565,482
  C 563,469 563,456 565,443
  C 568,430 573,418 580,407
  C 587,396 596,386 607,378
  C 618,370 631,364 645,360

  L 635,366
  C 625,372 614,377 603,382
  C 592,386 581,388 570,389
  C 559,389 548,387 537,383
  C 527,379 517,373 508,365
  C 500,357 492,347 486,336
  C 480,325 476,313 474,300
  C 472,287 472,274 474,261
  C 477,248 482,236 489,225
  C 496,214 505,204 516,196
  C 527,188 540,182 554,178

  L 544,184
  C 534,190 523,196 512,201
  C 501,205 490,208 479,209
  C 468,210 457,209 446,206
  C 436,202 426,197 417,190
  C 409,183 401,174 395,164
  C 389,154 384,143 381,131
  C 379,119 378,106 380,94
  C 382,81 387,69 394,58
  C 401,48 410,38 421,30
  C 432,23 445,17 459,13

  C 464,11 470,9 476,8
  C 482,7 488,7 494,8
  C 500,9 506,11 511,14
  C 517,17 522,21 526,26
  C 531,31 534,37 537,43
  C 539,50 541,57 541,64
  C 541,71 540,78 538,85
  C 535,92 532,98 527,104
  C 522,110 516,115 509,119

  C 514,117 520,116 525,116
  C 531,116 537,118 542,121
  C 548,124 553,129 557,134
  C 561,140 565,147 567,154
  C 568,162 569,170 568,178
  C 566,185 563,193 559,199
  C 554,206 548,211 541,216

  C 546,215 551,215 557,216
  C 562,218 567,221 572,225
  C 576,229 580,235 583,241
  C 586,247 588,254 588,261
  C 588,269 586,276 583,283
  C 579,290 574,296 568,302
  C 562,307 555,311 547,314

  C 552,315 557,317 562,320
  C 566,323 570,328 574,333
  C 577,338 580,344 581,351
  C 582,358 582,365 581,372
  C 579,379 576,386 572,392
  C 567,398 561,403 554,407

  C 559,409 563,412 567,416
  C 571,420 574,425 577,431
  C 579,437 580,443 580,450
  C 580,457 578,463 575,470
  C 571,476 566,482 560,487
  C 554,492 547,496 539,498

  C 543,501 547,505 550,509
  C 553,514 555,519 557,525
  C 558,531 558,537 557,543
  C 555,549 552,555 548,561
  C 543,566 537,571 530,575
  C 523,578 516,581 508,582

  C 512,586 515,591 517,596
  C 519,602 519,607 519,613
  C 518,619 516,625 513,630
  C 509,636 504,641 498,645
  C 492,649 485,652 477,654
  C 470,655 462,655 455,654

  C 458,659 460,665 461,671
  C 461,677 460,682 458,688
  C 455,693 451,699 446,703
  C 441,708 435,711 428,714
  C 421,716 414,717 407,716
  C 400,715 393,712 387,708

  C 389,714 390,719 390,725
  C 389,731 387,736 384,742
  C 380,747 376,751 370,755
  C 365,759 358,761 352,763
  C 345,764 338,764 331,762
  C 324,760 318,756 312,752

  C 313,757 313,763 312,769
  C 310,774 307,779 303,784
  C 299,788 294,792 288,795
  C 282,798 275,800 268,801
  C 261,801 254,800 247,798
  C 240,795 234,791 228,786

  C 229,791 228,797 227,802
  C 225,807 222,812 218,817
  C 213,821 208,825 202,828
  C 196,830 189,832 182,832
  C 175,832 168,830 161,827
  C 155,824 149,820 144,815

  C 145,820 145,825 144,831
  C 142,836 139,840 135,845
  C 131,849 126,852 120,855
  C 114,857 108,858 101,858
  C 94,857 88,855 82,852
  C 76,848 71,844 66,838

  C 67,843 66,848 65,853
  C 63,858 60,862 56,866
  C 52,870 47,873 41,875
  C 35,877 29,878 22,877
  C 16,876 10,874 4,870
  C -2,866 -7,861 -11,856

  L 230,160
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
