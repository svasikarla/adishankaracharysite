import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Biography of Adi Shankaracharya",
  description: "Life, journey, and legacy of Adi Shankaracharya (788-820 CE)"
}

export default function BiographyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Badge className="mb-4 bg-[#e07c24] text-white">788-820 CE</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Adi Shankaracharya
        </h1>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
          One of India's greatest philosophers and spiritual teachers who consolidated the doctrine of Advaita Vedanta
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Early Life
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#5a4a3f] dark:text-[#d9c5a9] space-y-4">
            <p>
              Adi Shankaracharya was born in Kaladi, a village in Kerala, South India, around 788 CE according to modern scholarship (700-750 CE range). Traditional accounts place his birth date much earlier.
            </p>
            <p>
              Born to a Brahmin couple, Shivaguru and Aryamba, Shankaracharya showed extraordinary intelligence from early childhood. According to tradition, he mastered the Vedas by age eight and had composed commentaries by his early teens.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Spiritual Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#5a4a3f] dark:text-[#d9c5a9] space-y-4">
            <p>
              Despite his mother's initial reluctance, Shankaracharya received permission to take sannyasa (renunciation) at a young age. He studied under Guru Govinda Bhagavatpada, who was himself a disciple of Gaudapada, the grand-teacher of Advaita Vedanta.
            </p>
            <p>
              After completing his studies, Shankaracharya traveled throughout India on foot, engaging in philosophical debates, writing commentaries, and establishing the four cardinal mathas (monasteries).
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Major Accomplishments
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#5a4a3f] dark:text-[#d9c5a9]">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Authored definitive commentaries (bhashyas) on Brahma Sutras, principal Upanishads, and Bhagavad Gita</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Established four mathas in the four cardinal directions of India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Systematized and spread Advaita Vedanta philosophy throughout India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Composed original philosophical works and devotional hymns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Defeated opponents in numerous philosophical debates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e07c24] mt-1">•</span>
                <span>Trained four principal disciples who became heads of the mathas</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Legacy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#5a4a3f] dark:text-[#d9c5a9] space-y-4">
            <p>
              Despite his short life of 32 years, Shankaracharya's impact on Indian philosophy and spirituality has been immeasurable. His commentaries remain the authoritative interpretations of Vedantic texts.
            </p>
            <p>
              The four mathas he established continue to function as centers of Vedantic learning and spiritual guidance after more than 1200 years. His teachings have influenced countless spiritual seekers, scholars, and philosophers across centuries.
            </p>
            <p className="italic border-l-4 border-[#e07c24] pl-4">
              According to tradition, Shankaracharya attained samadhi (final liberation) at Kedarnath in the Himalayas around 820 CE.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
