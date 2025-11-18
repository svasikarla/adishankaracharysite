import { fourMathas, mathaSystemInfo } from "@/data/mathas"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon, MapPinIcon, BookOpenIcon, SparklesIcon, UserIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import IndiaMathasMap from "@/components/IndiaMathasMap"

export const metadata = {
  title: "The Four Mathas",
  description: "Explore the four sacred monasteries established by Adi Shankaracharya in the cardinal directions of India"
}

export default function MathasPage() {
  const directionColors = {
    North: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    South: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    East: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    West: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          The Four Sacred Mathas
        </h1>
        <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed mb-6">
          {mathaSystemInfo.purpose}
        </p>
        <p className="text-md text-[#5a4a3f] dark:text-[#d9c5a9]">
          {mathaSystemInfo.significance}
        </p>
      </div>

      {/* Mahavakyas Overview */}
      <div className="max-w-5xl mx-auto mb-16">
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
              <SparklesIcon className="w-6 h-6" />
              The Four Mahavakyas (Great Sayings)
            </CardTitle>
            <CardDescription>
              Each matha teaches one of the four great declarations of Vedanta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {mathaSystemInfo.mahavakyas.map((mahavakya, index) => (
                <div key={index} className="p-4 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border border-[#e07c24]/10">
                  <p className="font-sanskrit text-xl text-[#e07c24] mb-2">{mahavakya.sanskrit}</p>
                  <p className="text-sm italic text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">{mahavakya.transliteration}</p>
                  <p className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">{mahavakya.meaning}</p>
                  <p className="text-xs text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">{mahavakya.source}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Map */}
      <div className="max-w-5xl mx-auto mb-16">
        <IndiaMathasMap />
      </div>

      {/* Individual Mathas */}
      <div className="space-y-12">
        {fourMathas.map((matha) => (
          <Card key={matha.id} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20 overflow-hidden">
            <div className="md:flex">
              {/* Left: Quick Info */}
              <div className="md:w-1/3 bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] p-8 border-r border-[#e07c24]/20">
                <Badge className={`${directionColors[matha.direction]} mb-4`}>
                  {matha.direction}
                </Badge>
                <h2 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  {matha.name}
                </h2>
                <p className="font-sanskrit text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-6">
                  {matha.sanskrit}
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPinIcon className="w-4 h-4 text-[#e07c24] mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">Location</div>
                        <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">
                          {matha.location.city}, {matha.location.state}
                        </div>
                        <div className="text-xs text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">
                          {matha.location.region}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">Veda</div>
                    <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">{matha.veda}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">First Acharya</div>
                    <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">{matha.firstAcharya}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24]">Presiding Deity</div>
                    <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">{matha.presidingDeity}</div>
                  </div>

                  {matha.website && (
                    <Link
                      href={matha.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#e07c24] hover:underline"
                    >
                      Visit Website <ExternalLinkIcon className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right: Detailed Info */}
              <div className="md:w-2/3 p-8">
                {/* Mahavakya */}
                <div className="mb-6 p-4 bg-[#f7f3e9]/50 dark:bg-[#1a1814]/50 rounded-lg border border-[#e07c24]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpenIcon className="w-4 h-4 text-[#e07c24]" />
                    <span className="text-sm font-semibold text-[#8b5d33] dark:text-[#e07c24]">Mahavakya</span>
                  </div>
                  <p className="font-sanskrit text-lg text-[#e07c24] mb-1">{matha.mahavakya}</p>
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">{matha.mahavahyaMeaning}</p>
                </div>

                {/* Description */}
                <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-6 leading-relaxed">
                  {matha.description}
                </p>

                {/* Historical Background */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                    Historical Background
                  </h3>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                    {matha.historicalBackground}
                  </p>
                </div>

                {/* Significance */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                    Significance
                  </h3>
                  <ul className="space-y-2">
                    {matha.significance.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#e07c24] mt-1">•</span>
                        <span className="text-[#5a4a3f] dark:text-[#d9c5a9]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Current Shankaracharya */}
                {matha.currentShankaracharya && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3 flex items-center gap-2">
                      <UserIcon className="w-5 h-5" />
                      Current Shankaracharya
                    </h3>
                    <div className="p-4 rounded-lg bg-[#f7f3e9] dark:bg-[#1a1814] border border-[#e07c24]/10">
                      <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                        {matha.currentShankaracharya.name}
                      </div>
                      <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-1">
                        {matha.currentShankaracharya.title}
                      </div>
                      <div className="text-xs text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70 mb-2">
                        Period: {matha.currentShankaracharya.period}
                      </div>
                      <div className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] italic">
                        {matha.currentShankaracharya.note}
                      </div>
                      <div className="text-xs text-[#e07c24] mt-2">
                        {matha.lineageCount}th in the lineage from Adi Shankaracharya
                      </div>
                    </div>
                  </div>
                )}

                {/* Unique Features */}
                {matha.uniqueFeatures && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3 flex items-center gap-2">
                      <StarIcon className="w-5 h-5" />
                      Unique Features
                    </h3>
                    <ul className="space-y-2">
                      {matha.uniqueFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#e07c24] mt-1">✦</span>
                          <span className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Current Activities */}
                <div>
                  <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                    Current Activities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {matha.currentActivities.map((activity, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-[#e07c24]/30 text-[#5a4a3f] dark:text-[#d9c5a9]"
                      >
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <Card className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border-[#e07c24]/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
              Living Tradition
            </h3>
            <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-4">
              These four mathas continue to preserve and propagate the teachings of Adi Shankaracharya after more than 1200 years, representing one of the world's oldest continuous spiritual traditions.
            </p>
            <p className="text-sm text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">
              Visit their websites to learn about current programs, teachings, and how to connect with this ancient tradition.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
