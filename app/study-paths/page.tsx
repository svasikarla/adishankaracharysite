import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2Icon } from "lucide-react"

export const metadata = {
  title: "Study Paths",
  description: "Guided learning journeys for beginners, intermediate, and advanced seekers of Advaita Vedanta"
}

export default function StudyPathsPage() {
  const paths = [
    {
      level: "Beginner",
      duration: "3-6 months",
      description: "Start your journey with foundational concepts and introductory texts",
      color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      steps: [
        "Introduction to Advaita Vedanta philosophy",
        "Biography of Adi Shankaracharya",
        "Basic concepts: Atman, Brahman, Maya",
        "Bhaja Govindam (selected verses)",
        "Tattva Bodha (if available)",
        "Introduction to meditation and self-inquiry"
      ]
    },
    {
      level: "Intermediate",
      duration: "6-12 months",
      description: "Deepen your understanding with systematic study of key texts",
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
      steps: [
        "Complete study of Atma Bodha (68 verses)",
        "Complete study of Bhaja Govindam (31 verses)",
        "Deeper exploration of philosophical concepts",
        "Introduction to Vivekachudamani",
        "Study of Upanishadic quotations",
        "Practice of discrimination (Viveka)"
      ]
    },
    {
      level: "Advanced",
      duration: "12+ months",
      description: "Systematic study of commentaries and advanced philosophical inquiry",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      steps: [
        "Bhagavad Gita with Shankaracharya's commentary",
        "Selected Upanishads with commentaries",
        "Vivekachudamani (complete study)",
        "Brahma Sutra Bhashya (introduction)",
        "Upadesa Sahasri",
        "Advanced meditation and self-inquiry"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Study Paths
        </h1>
        <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9]">
          Guided learning journeys tailored to your level of experience in Advaita Vedanta
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {paths.map((path, idx) => (
          <Card key={idx} className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Badge className={path.color}>{path.level}</Badge>
                <span className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">{path.duration}</span>
              </div>
              <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                {path.level} Path
              </CardTitle>
              <CardDescription className="text-base">{path.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-4">
                Learning Steps
              </h3>
              <div className="space-y-3">
                {path.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#e9e1d3] dark:bg-[#2a241e] flex items-center justify-center text-sm font-semibold text-[#e07c24]">
                        {stepIdx + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-[#5a4a3f] dark:text-[#d9c5a9]">{step}</p>
                    </div>
                    <CheckCircle2Icon className="w-5 h-5 text-[#e07c24] flex-shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border-[#e07c24]/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-4 text-center">
              Recommended Approach
            </h3>
            <div className="space-y-3 text-[#5a4a3f] dark:text-[#d9c5a9]">
              <p>
                <strong className="text-[#8b5d33] dark:text-[#e07c24]">1. Find a Teacher:</strong> Traditional Vedanta is best learned under the guidance of a qualified teacher. Explore our Modern Teachers section for contemporary scholars.
              </p>
              <p>
                <strong className="text-[#8b5d33] dark:text-[#e07c24]">2. Regular Study:</strong> Consistency is key. Set aside dedicated time daily for study, reflection, and meditation.
              </p>
              <p>
                <strong className="text-[#8b5d33] dark:text-[#e07c24]">3. Join a Study Group:</strong> Many organizations like Chinmaya Mission, Arsha Vidya, and Vedanta Society offer structured group study programs.
              </p>
              <p>
                <strong className="text-[#8b5d33] dark:text-[#e07c24]">4. Practice:</strong> Vedanta is not merely intellectual. Integrate the teachings through meditation, self-inquiry (atma-vichara), and ethical living.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
