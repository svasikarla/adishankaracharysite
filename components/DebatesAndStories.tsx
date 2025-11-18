"use client"

import { useState } from "react"
import { debates, stories } from "@/data/biography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MessageSquareIcon,
  TrophyIcon,
  MapPinIcon,
  BookOpenIcon,
  SparklesIcon,
  HeartIcon,
  LightbulbIcon,
  SmileIcon,
  StarIcon
} from "lucide-react"

// Category icons for stories
const storyCategoryIcons = {
  miracle: SparklesIcon,
  teaching: BookOpenIcon,
  debate: MessageSquareIcon,
  compassion: HeartIcon,
  wisdom: LightbulbIcon,
  devotion: StarIcon
}

const storyCategoryColors = {
  miracle: '#8b5cf6',    // purple
  teaching: '#3b82f6',   // blue
  debate: '#ef4444',     // red
  compassion: '#10b981', // green
  wisdom: '#f59e0b',     // amber
  devotion: '#ec4899'    // pink
}

export function DebatesSection() {
  const [expandedDebate, setExpandedDebate] = useState<string | null>(null)

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
          Famous Philosophical Debates
        </h2>
        <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">
          Establishing Advaita Vedanta through scholarly victory
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {debates.map((debate) => {
          const isExpanded = expandedDebate === debate.id

          return (
            <Card
              key={debate.id}
              className={`border-2 transition-all duration-300 ${
                isExpanded
                  ? 'border-[#e07c24] shadow-xl'
                  : 'border-[#e07c24]/20 shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e07c24] to-[#c06a1f] flex items-center justify-center">
                      <MessageSquareIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                        vs. {debate.opponent}
                      </CardTitle>
                      <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9]">
                        {debate.opponentSchool}
                      </p>
                    </div>
                  </div>
                  <TrophyIcon className="w-6 h-6 text-[#e07c24]" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {debate.year && (
                    <Badge variant="outline" className="text-xs border-[#e07c24]/30 text-[#e07c24]">
                      {debate.year}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs border-[#e07c24]/30 text-[#e07c24] flex items-center gap-1">
                    <MapPinIcon className="w-3 h-3" />
                    {debate.location}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                      Topic Debated:
                    </h4>
                    <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                      {debate.topic}
                    </p>
                  </div>

                  {isExpanded && (
                    <>
                      <div>
                        <h4 className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                          Outcome:
                        </h4>
                        <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                          {debate.outcome}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border-l-4 border-[#e07c24]">
                        <h4 className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                          Significance:
                        </h4>
                        <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                          {debate.significance}
                        </p>
                      </div>

                      {debate.relatedTexts && debate.relatedTexts.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                            Related Texts:
                          </span>
                          {debate.relatedTexts.map((text, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-[#e07c24]/30 text-[#5a4a3f] dark:text-[#d9c5a9]"
                            >
                              {text}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  <Button
                    variant="link"
                    className="text-[#e07c24] px-0 text-sm"
                    onClick={() => setExpandedDebate(isExpanded ? null : debate.id)}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'} →
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export function StoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedStory, setExpandedStory] = useState<string | null>(null)

  const filteredStories = selectedCategory
    ? stories.filter(story => story.category === selectedCategory)
    : stories

  const categories = Array.from(new Set(stories.map(s => s.category)))

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
          Stories & Parables
        </h2>
        <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-6">
          Inspiring tales from the life of Adi Shankaracharya
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
            All Stories ({stories.length})
          </Badge>
          {categories.map(category => {
            const count = stories.filter(s => s.category === category).length
            const Icon = storyCategoryIcons[category as keyof typeof storyCategoryIcons]
            const color = storyCategoryColors[category as keyof typeof storyCategoryColors]

            return (
              <Badge
                key={category}
                className={`cursor-pointer transition-all flex items-center gap-1 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-[#f7f3e9] dark:bg-[#2a241e] text-[#8b5d33] dark:text-[#d9c5a9] border border-[#e07c24]/30'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? color : undefined
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

      <div className="grid grid-cols-1 gap-6">
        {filteredStories.map((story) => {
          const isExpanded = expandedStory === story.id
          const Icon = storyCategoryIcons[story.category as keyof typeof storyCategoryIcons]
          const color = storyCategoryColors[story.category as keyof typeof storyCategoryColors]

          return (
            <Card
              key={story.id}
              className={`border-2 transition-all duration-300 ${
                isExpanded
                  ? 'border-[#e07c24] shadow-xl'
                  : 'border-[#e07c24]/20 shadow-md'
              }`}
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                      {story.title}
                    </CardTitle>
                    <Badge
                      className="mt-2 text-xs text-white"
                      style={{ backgroundColor: color }}
                    >
                      {story.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                    {story.summary}
                  </p>

                  {isExpanded && (
                    <>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                        <h4 className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2 flex items-center gap-2">
                          <BookOpenIcon className="w-4 h-4" />
                          The Full Story
                        </h4>
                        <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm md:text-base leading-relaxed">
                          {story.fullStory}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-[#e07c24]/10 border-l-4 border-[#e07c24]">
                        <h4 className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2 flex items-center gap-2">
                          <SmileIcon className="w-4 h-4" />
                          Moral Lesson
                        </h4>
                        <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm italic">
                          {story.moralLesson}
                        </p>
                      </div>

                      {story.relatedConcepts && story.relatedConcepts.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-semibold text-[#8b5d33] dark:text-[#e07c24]">
                            Related Concepts:
                          </span>
                          {story.relatedConcepts.map((concept, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-[#e07c24]/30 text-[#5a4a3f] dark:text-[#d9c5a9]"
                            >
                              {concept}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  <Button
                    variant="link"
                    className="text-[#e07c24] px-0 text-sm"
                    onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                  >
                    {isExpanded ? 'Show Less' : 'Read Full Story'} →
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
