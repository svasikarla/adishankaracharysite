import Link from "next/link"
import { concepts } from "@/data/concepts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, BookOpenIcon } from "lucide-react"

export const metadata = {
  title: "Advaita Vedanta Philosophy",
  description: "Explore fundamental concepts of Advaita Vedanta including Atman, Brahman, Maya, Moksha, and Neti Neti"
}

export default function PhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-6">
          Advaita Vedanta Philosophy
        </h1>
        <p className="text-lg md:text-xl text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed mb-6">
          Explore the fundamental concepts of non-dual Vedanta philosophy as taught by Adi Shankaracharya. Each concept is explained with scriptural references, scholarly sources, and practical understanding.
        </p>
      </div>

      {/* Introduction Card */}
      <div className="max-w-5xl mx-auto mb-12">
        <Card className="bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#2a241e] dark:to-[#1a1814] border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              What is Advaita Vedanta?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[#5a4a3f] dark:text-[#d9c5a9]">
            <p>
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">Advaita</strong> means "non-dual" - the teaching that ultimate reality is one, not two. There is no fundamental distinction between the individual self (Atman) and the universal consciousness (Brahman).
            </p>
            <p>
              Adi Shankaracharya systematized and spread this philosophy through his commentaries on the Upanishads, Brahma Sutras, and Bhagavad Gita. His teachings emphasize that liberation (moksha) comes through knowledge (jnana) - specifically, the direct realization of one's true nature as Brahman.
            </p>
            <p className="italic border-l-4 border-[#e07c24] pl-4">
              "Brahman is real, the world is unreal, and the individual self is non-different from Brahman."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Concepts Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] mb-8 text-center">
          Core Concepts
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {concepts.map((concept) => (
            <Link key={concept.id} href={`/philosophy/${concept.id}`}>
              <Card className="h-full bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] transition-colors">
                        {concept.name}
                      </CardTitle>
                      <p className="font-sanskrit text-lg text-[#5a4a3f] dark:text-[#d9c5a9] mt-1">
                        {concept.sanskritName}
                      </p>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-[#e07c24] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <CardDescription className="text-base">
                    {concept.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] mb-4 line-clamp-3">
                    {concept.fullDescription}
                  </p>

                  {/* Key Points Preview */}
                  <div className="space-y-2 mb-4">
                    {concept.keyPoints.slice(0, 3).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-[#e07c24] mt-0.5">•</span>
                        <span className="text-[#5a4a3f] dark:text-[#d9c5a9] line-clamp-1">{point}</span>
                      </div>
                    ))}
                    {concept.keyPoints.length > 3 && (
                      <div className="text-xs text-[#e07c24] font-semibold">
                        +{concept.keyPoints.length - 3} more points
                      </div>
                    )}
                  </div>

                  {/* Scriptural Reference Preview */}
                  {concept.scripturalReferences.length > 0 && (
                    <div className="pt-4 border-t border-[#e07c24]/10">
                      <div className="flex items-center gap-2 text-xs text-[#e07c24] font-semibold mb-2">
                        <BookOpenIcon className="w-3 h-3" />
                        Scriptural Reference
                      </div>
                      <p className="text-sm italic text-[#5a4a3f] dark:text-[#d9c5a9]">
                        {concept.scripturalReferences[0].source} {concept.scripturalReferences[0].reference}
                      </p>
                    </div>
                  )}

                  <Button
                    variant="link"
                    className="text-[#e07c24] px-0 mt-4 group-hover:underline"
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Academic Sources */}
      <div className="max-w-4xl mx-auto mt-16">
        <Card className="bg-white/80 dark:bg-[#2a241e]/80 border-[#e07c24]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
              Academic Resources
            </CardTitle>
            <CardDescription>
              Scholarly sources for deeper philosophical study
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">• Stanford Encyclopedia of Philosophy:</strong>{" "}
              Comprehensive article on Śaṅkara's philosophy
              <a
                href="https://plato.stanford.edu/entries/shankara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e07c24] hover:underline ml-2"
              >
                Visit →
              </a>
            </div>
            <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">• Internet Encyclopedia of Philosophy:</strong>{" "}
              Detailed coverage of Advaita Vedanta
              <a
                href="https://iep.utm.edu/advaita-vedanta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e07c24] hover:underline ml-2"
              >
                Visit →
              </a>
            </div>
            <div className="text-[#5a4a3f] dark:text-[#d9c5a9]">
              <strong className="text-[#8b5d33] dark:text-[#e07c24]">• PMC Research:</strong>{" "}
              The spiritual philosophy of Advaita: Basic concepts and relevance
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10956581/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e07c24] hover:underline ml-2"
              >
                Visit →
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
