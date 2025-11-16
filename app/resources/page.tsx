import { digitalArchives, authenticTexts, organizations } from "@/data/resources"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "lucide-react"

export const metadata = {
  title: "Digital Resources & Archives",
  description: "Authentic sources, translations, and digital archives for studying Shankaracharya and Advaita Vedanta"
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Digital Resources & Archives
        </h1>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
          Access authentic texts, translations, and scholarly resources from trusted institutions worldwide
        </p>
      </div>

      {/* Digital Archives */}
      <div className="max-w-5xl mx-auto space-y-12">
        <section>
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
            Digital Archives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {digitalArchives.map((archive) => (
              <Card key={archive.id} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg font-serif text-[#8b5d33] dark:text-[#e07c24]">
                      {archive.name}
                    </CardTitle>
                    <Badge className={archive.accessType === 'free' ? 'bg-green-600' : 'bg-yellow-600'}>
                      {archive.accessType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                    {archive.description}
                  </p>
                  {archive.specialFeatures && (
                    <div className="space-y-1">
                      {archive.specialFeatures.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs">
                          <span className="text-[#e07c24]">✓</span>
                          <span className="text-[#5a4a3f] dark:text-[#d9c5a9]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <a
                    href={archive.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e07c24] hover:underline text-sm font-semibold"
                  >
                    Visit Resource <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Organizations */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
            Organizations & Institutions
          </h2>
          <div className="space-y-6">
            {organizations.map((org) => (
              <Card key={org.id} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                    {org.name}
                  </CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Founded {org.founded}</Badge>
                    <Badge className="bg-[#e07c24] text-white">{org.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">{org.description}</p>
                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#e07c24] hover:underline font-semibold"
                    >
                      Visit Website <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
