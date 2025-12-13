import { notFound } from "next/navigation"
import Link from "next/link"
import { CONCEPTS } from "@/data/concepts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, BookOpenIcon, ExternalLinkIcon, SparklesIcon } from "lucide-react"
import type { Metadata } from "next"

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return CONCEPTS.map((concept) => ({
    id: concept.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const concept = CONCEPTS.find((c) => c.slug === params.id)

  if (!concept) {
    return {
      title: 'Concept Not Found',
    }
  }

  return {
    title: `${concept.name} - Advaita Vedanta Philosophy`,
    description: concept.shortDescription,
  }
}

export default function ConceptPage({ params }: PageProps) {
  const concept = CONCEPTS.find((c) => c.slug === params.id)

  if (!concept) {
    notFound()
  }

  const relatedConcepts = CONCEPTS.filter((c) =>
    concept.relatedConcepts?.includes(c.id)
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto mb-8">
          <Link href="/philosophy">
            <Button variant="ghost" className="text-[#e07c24] hover:text-[#c06a1f] hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e]">
              <ArrowLeftIcon className="mr-2 w-4 h-4" />
              Back to Philosophy
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="w-8 h-8" />
              <span className="text-lg opacity-90">Core Concept</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              {concept.name}
            </h1>
            <p className="text-2xl md:text-3xl font-serif mb-6 opacity-90">
              {concept.sanskritName}
            </p>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              {concept.shortDescription}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Full Description */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Understanding {concept.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed">
                {concept.fullDescription}
              </p>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                Key Points
              </CardTitle>
              <CardDescription className="text-base">
                Essential aspects of {concept.name} in Advaita Vedanta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {concept.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/10">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e07c24] text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-[#5a4a3f] dark:text-[#d9c5a9] leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scriptural References */}
          {concept.scripturalReferences.length > 0 && (
            <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpenIcon className="w-6 h-6 text-[#e07c24]" />
                  <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                    Scriptural References
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Ancient wisdom from the Upanishads and sacred texts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {concept.scripturalReferences.map((ref, index) => (
                    <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#e07c24] text-white text-sm font-semibold">
                          {ref.source}
                        </span>
                        <span className="text-sm text-[#e07c24] font-medium">
                          {ref.reference}
                        </span>
                      </div>
                      <blockquote className="text-lg md:text-xl font-serif text-[#8b5d33] dark:text-[#e07c24] italic border-l-4 border-[#e07c24] pl-4 py-2">
                        "{ref.quote}"
                      </blockquote>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Academic Sources */}
          {concept.academicSources.length > 0 && (
            <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                  Academic Sources
                </CardTitle>
                <CardDescription className="text-base">
                  Scholarly resources for deeper study
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {concept.academicSources.map((source, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/10 hover:border-[#e07c24] transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                            {source.title}
                          </h3>
                          <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                            {source.author}
                          </p>
                        </div>
                        {source.url && (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0"
                          >
                            <Button size="sm" variant="outline" className="border-[#e07c24] text-[#e07c24] hover:bg-[#e07c24] hover:text-white">
                              <ExternalLinkIcon className="w-4 h-4 mr-2" />
                              Visit
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Concepts */}
          {relatedConcepts.length > 0 && (
            <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24]">
                  Related Concepts
                </CardTitle>
                <CardDescription className="text-base">
                  Explore interconnected philosophical ideas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedConcepts.map((relatedConcept) => (
                    <Link key={relatedConcept.id} href={`/philosophy/${relatedConcept.slug}`}>
                      <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border-2 border-[#e07c24]/20 hover:border-[#e07c24] hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-serif font-bold text-[#8b5d33] dark:text-[#e07c24] group-hover:text-[#e07c24] dark:group-hover:text-[#f7f3e9] transition-colors">
                              {relatedConcept.name}
                            </h3>
                            <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mt-1">
                              {relatedConcept.sanskritName}
                            </p>
                          </div>
                          <SparklesIcon className="w-5 h-5 text-[#e07c24] flex-shrink-0" />
                        </div>
                        <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] line-clamp-2">
                          {relatedConcept.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-center pt-8">
            <Link href="/philosophy">
              <Button className="bg-[#e07c24] hover:bg-[#c06a1f] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Explore More Concepts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
