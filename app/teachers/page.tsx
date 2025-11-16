import { modernTeachers } from "@/data/teachers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, PlayCircleIcon, GlobeIcon, SmartphoneIcon } from "lucide-react"

export const metadata = {
  title: "Modern Vedanta Teachers",
  description: "Learn from contemporary Vedanta scholars and teachers continuing the tradition of Adi Shankaracharya"
}

export default function TeachersPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'website': return GlobeIcon
      case 'youtube': return PlayCircleIcon
      case 'podcast': return PlayCircleIcon
      case 'app': return SmartphoneIcon
      default: return ExternalLinkIcon
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Modern Vedanta Teachers
        </h1>
        <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
          Learn from contemporary scholars and teachers who continue the tradition of Adi Shankaracharya, making ancient wisdom accessible to modern seekers worldwide.
        </p>
      </div>

      {/* Teachers */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {modernTeachers.map((teacher) => (
          <Card key={teacher.id} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                    {teacher.name}
                  </CardTitle>
                  {teacher.title && (
                    <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">{teacher.title}</p>
                  )}
                  <div className="flex gap-2 flex-wrap">
                    {teacher.lifespan && (
                      <Badge variant="outline" className="border-[#e07c24]/30">
                        {teacher.lifespan}
                      </Badge>
                    )}
                    <Badge className="bg-[#e07c24] text-white">
                      {teacher.tradition}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Description */}
              <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                {teacher.description}
              </p>

              {/* Specialization */}
              <div>
                <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                  Areas of Specialization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.specialization.map((spec, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-[#e07c24]/30 text-[#5a4a3f] dark:text-[#d9c5a9]"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Teaching Style */}
              <div>
                <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                  Teaching Style
                </h3>
                <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">
                  {teacher.teachingStyle}
                </p>
              </div>

              {/* Online Resources */}
              {teacher.onlineResources.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-3">
                    Online Resources
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {teacher.onlineResources.map((resource, idx) => {
                      const Icon = getIcon(resource.type)
                      return (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-3 rounded-lg bg-[#f7f3e9]/50 dark:bg-[#1a1814]/50 border border-[#e07c24]/10 hover:border-[#e07c24] transition-all group"
                        >
                          <Icon className="w-5 h-5 text-[#e07c24] mt-0.5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] text-sm">
                              {resource.name}
                            </div>
                            <p className="text-xs text-[#5a4a3f] dark:text-[#d9c5a9] line-clamp-2">
                              {resource.description}
                            </p>
                          </div>
                          <ExternalLinkIcon className="w-4 h-4 text-[#e07c24] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Legacy */}
              {teacher.legacy && (
                <div className="pt-4 border-t border-[#e07c24]/10">
                  <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                    Legacy
                  </h3>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] italic">
                    {teacher.legacy}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
