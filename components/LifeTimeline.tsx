"use client"

import { useState } from "react"
import { timeline } from "@/data/biography"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpenIcon,
  GraduationCapIcon,
  MapPinIcon,
  MessageSquareIcon,
  Building2Icon,
  PenToolIcon,
  UserIcon,
  MountainIcon
} from "lucide-react"

const categoryIcons = {
  birth: UserIcon,
  education: GraduationCapIcon,
  travel: MapPinIcon,
  debate: MessageSquareIcon,
  establishment: Building2Icon,
  writing: PenToolIcon,
  teaching: BookOpenIcon,
  samadhi: MountainIcon
}

const categoryColors = {
  birth: '#10b981',    // green
  education: '#3b82f6', // blue
  travel: '#f59e0b',   // amber
  debate: '#ef4444',   // red
  establishment: '#8b5cf6', // purple
  writing: '#06b6d4',  // cyan
  teaching: '#ec4899', // pink
  samadhi: '#6366f1'   // indigo
}

export default function LifeTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  const filteredTimeline = selectedCategory
    ? timeline.filter(event => event.category === selectedCategory)
    : timeline

  const categories = Array.from(new Set(timeline.map(e => e.category)))

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4">
          Life Timeline: 788-820 CE
        </h2>
        <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-6">
          32 transformative years that changed Indian philosophy
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge
            className={`cursor-pointer transition-all ${
              selectedCategory === null
                ? 'bg-[#e07c24] text-white'
                : 'bg-[#f7f3e9] dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#d9c5a9] border border-[#e07c24]/30'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Events ({timeline.length})
          </Badge>
          {categories.map(category => {
            const count = timeline.filter(e => e.category === category).length
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <Badge
                key={category}
                className={`cursor-pointer transition-all flex items-center gap-1 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-[#f7f3e9] dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#d9c5a9] border border-[#e07c24]/30'
                }`}
                style={{
                  backgroundColor: selectedCategory === category
                    ? categoryColors[category as keyof typeof categoryColors]
                    : undefined
                }}
                onClick={() => setSelectedCategory(
                  selectedCategory === category ? null : category
                )}
              >
                <Icon className="w-3 h-3" />
                {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
              </Badge>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e07c24]/30 via-[#e07c24] to-[#e07c24]/30"></div>

        {/* Events */}
        <div className="space-y-8">
          {filteredTimeline.map((event, index) => {
            const Icon = categoryIcons[event.category as keyof typeof categoryIcons]
            const color = categoryColors[event.category as keyof typeof categoryColors]
            const isHovered = hoveredEvent === `${event.year}-${index}`

            return (
              <div
                key={`${event.year}-${index}`}
                className="relative pl-20 md:pl-36 pr-4"
                onMouseEnter={() => setHoveredEvent(`${event.year}-${index}`)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Year marker */}
                <div className="absolute left-0 md:left-12 flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-sm md:text-base font-bold text-[#e07c24]">
                      {event.year}
                    </div>
                    <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">
                      Age {event.age}
                    </div>
                  </div>
                </div>

                {/* Icon circle */}
                <div
                  className={`absolute left-6 md:left-[88px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-[#1a1814] transition-all duration-300 ${
                    isHovered ? 'scale-125 shadow-lg' : 'scale-100'
                  }`}
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Event card */}
                <Card
                  className={`border-2 transition-all duration-300 ${
                    isHovered
                      ? 'border-[#e07c24] shadow-xl -translate-y-1'
                      : 'border-[#e07c24]/20 shadow-md'
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24]">
                        {event.title}
                      </h3>
                      <Badge
                        className="text-xs text-white ml-2 flex-shrink-0"
                        style={{ backgroundColor: color }}
                      >
                        {event.category}
                      </Badge>
                    </div>

                    {event.location && (
                      <div className="flex items-center gap-1 text-sm text-[#e07c24] mb-2">
                        <MapPinIcon className="w-3 h-3" />
                        {event.location}
                      </div>
                    )}

                    <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm md:text-base leading-relaxed mb-3">
                      {event.description}
                    </p>

                    {event.significance && (
                      <div className="mt-3 p-3 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border-l-4 border-[#e07c24]">
                        <p className="text-xs md:text-sm text-[#5a4a3f] dark:text-[#d9c5a9] italic">
                          <strong className="text-[#e07c24]">Significance:</strong> {event.significance}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(category => {
          const count = timeline.filter(e => e.category === category).length
          const Icon = categoryIcons[category as keyof typeof categoryIcons]
          const color = categoryColors[category as keyof typeof categoryColors]

          return (
            <div
              key={category}
              className="p-4 rounded-xl bg-white dark:bg-[#2a241e] border-2 border-[#e07c24]/20 text-center"
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div className="text-2xl font-bold text-[#8b5d33] dark:text-[#e07c24]">
                {count}
              </div>
              <div className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] capitalize">
                {category} Events
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
