import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpenIcon, CheckCircle2Icon, XCircleIcon } from "lucide-react"

export const metadata = {
  title: "Sacred Texts & Teachings",
  description: "Explore the authentic works of Adi Shankaracharya with verse-by-verse study and scholarly commentary"
}

export default function TeachingsPage() {
  const texts = [
    {
      id: "bhaja-govindam",
      title: "Bhaja Govindam",
      sanskrit: "भज गोविन्दम्",
      subtitle: "Moha Mudgara - The Destroyer of Illusion",
      verses: "31 verses",
      description: "Devotional hymn emphasizing the importance of seeking God over mere intellectual pursuits",
      authenticity: "attributed",
      available: true,
      category: "Stotra (Devotional Hymn)"
    },
    {
      id: "atma-bodha",
      title: "Atma Bodha",
      sanskrit: "आत्मबोध",
      subtitle: "Self-Knowledge",
      verses: "68 verses",
      description: "Systematic teaching on the path to Self-realization and knowledge of Atman",
      authenticity: "disputed",
      available: true,
      category: "Prakarana Grantha (Topical Exposition)"
    },
    {
      id: "nirvana-shatkam",
      title: "Nirvana Shatkam",
      sanskrit: "निर्वाण षट्कम्",
      subtitle: "Six Verses on Liberation (Atma Shatkam)",
      verses: "6 verses",
      description: "Powerful hymn of self-realization using Neti Neti (Not this, Not this) to reveal true nature as pure Consciousness-Bliss",
      authenticity: "attributed",
      available: true,
      category: "Stotra (Devotional Hymn)"
    },
    {
      id: "vivekachudamani",
      title: "Vivekachudamani",
      sanskrit: "विवेकचूडामणि",
      subtitle: "Crest Jewel of Discrimination",
      verses: "108 selected verses",
      description: "Comprehensive guide to Advaita Vedanta covering the entire spiritual path from qualification to liberation, organized into 10 thematic sections",
      authenticity: "disputed",
      available: true,
      category: "Prakarana Grantha"
    },
    {
      id: "brahma-sutra-bhashya",
      title: "Brahma Sutra Bhashya",
      sanskrit: "ब्रह्मसूत्रभाष्य",
      subtitle: "Commentary on Brahma Sutras",
      verses: "Commentary",
      description: "Shankaracharya's masterpiece commentary on the fundamental text of Vedanta",
      authenticity: "confirmed",
      available: false,
      category: "Bhashya (Commentary)"
    },
    {
      id: "bhagavad-gita-bhashya",
      title: "Bhagavad Gita Bhashya",
      sanskrit: "भगवद्गीताभाष्य",
      subtitle: "Commentary on Bhagavad Gita",
      verses: "Commentary",
      description: "Earliest extant commentary on the Bhagavad Gita from Advaita perspective",
      authenticity: "confirmed",
      available: false,
      category: "Bhashya"
    },
    {
      id: "upanishad-bhashyas",
      title: "Upanishad Commentaries",
      sanskrit: "उपनिषद् भाष्य",
      subtitle: "10-11 Principal Upanishads",
      verses: "Multiple Commentaries",
      description: "Authoritative commentaries on the principal Upanishads",
      authenticity: "confirmed",
      available: false,
      category: "Bhashya"
    }
  ]

  const getAuthenticityBadge = (auth: string) => {
    switch(auth) {
      case "confirmed":
        return <Badge className="bg-green-600 text-white flex items-center gap-1"><CheckCircle2Icon className="w-3 h-3" /> Confirmed Authentic</Badge>
      case "disputed":
        return <Badge className="bg-yellow-600 text-white">Disputed Authorship</Badge>
      case "attributed":
        return <Badge className="bg-blue-600 text-white">Traditionally Attributed</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Sacred Texts & Teachings
        </h1>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
          Explore the authentic works of Adi Shankaracharya with verse-by-verse study and scholarly commentary
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {texts.map((text) => (
          <Card key={text.id} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                    {text.title}
                  </CardTitle>
                  <p className="font-sanskrit text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">
                    {text.sanskrit}
                  </p>
                  <CardDescription className="text-base">{text.subtitle}</CardDescription>
                </div>
                {text.available ? (
                  <Badge className="bg-[#e07c24] text-white">Available</Badge>
                ) : (
                  <Badge variant="outline" className="border-[#e07c24]/30">Coming Soon</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="border-[#e07c24]/30">{text.category}</Badge>
                <Badge variant="outline" className="border-[#e07c24]/30">{text.verses}</Badge>
                {getAuthenticityBadge(text.authenticity)}
              </div>

              <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">
                {text.description}
              </p>

              {text.available ? (
                <Link href={`/teachings/${text.id}`}>
                  <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white">
                    <BookOpenIcon className="w-4 h-4 mr-2" />
                    Study Text
                  </Button>
                </Link>
              ) : (
                <Button disabled className="bg-gray-400 cursor-not-allowed">
                  <BookOpenIcon className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border-[#e07c24]/20">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-3">
              Authenticity Note
            </h3>
            <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">
              Over 300 texts are attributed to Adi Shankaracharya, but modern scholarship confirms only a handful as genuinely his work.
            </p>
            <p className="text-sm text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">
              We clearly mark the authenticity status of each text based on scholarly consensus.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
