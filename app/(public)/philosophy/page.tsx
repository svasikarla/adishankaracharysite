"use client"

import { Section } from "@/components/ui-custom/Section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CONCEPTS } from "@/data/concepts"
import { BrainCircuitIcon, LightbulbIcon } from "lucide-react"

export default function PhilosophyPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-background pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                        Tattva
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-accent mb-6">
                        Core Concepts of Advaita
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Advaita Vedanta is built upon a consistent metaphysical framework. Understand these key terms to unlock the meaning of the scriptures.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CONCEPTS.map((concept) => (
                        <Card key={concept.id} className="group hover:border-primary/50 transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                        {concept.sanskritName}
                                    </Badge>
                                    <BrainCircuitIcon className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                                </div>
                                <CardTitle className="text-2xl font-serif text-accent">
                                    {concept.name}
                                </CardTitle>
                                <p className="text-sm font-medium text-muted-foreground mt-1">
                                    {concept.shortDescription}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-foreground/80 leading-relaxed text-sm">
                                    {concept.fullDescription}
                                </p>

                                {concept.keyPoints && concept.keyPoints.length > 0 && (
                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs font-bold text-primary flex items-center gap-1">
                                            <LightbulbIcon className="w-3 h-3" /> Key Points
                                        </p>
                                        <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                                            {concept.keyPoints.slice(0, 3).map((point, idx) => (
                                                <li key={idx} className="line-clamp-1">{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {concept.scripturalReferences && concept.scripturalReferences.length > 0 && (
                                    <div className="bg-secondary/20 rounded-lg p-3 space-y-2 mt-4">
                                        <div className="text-xs">
                                            <span className="font-bold block text-primary/80 mb-1">Reference</span>
                                            <p className="text-foreground/60 italic">"{concept.scripturalReferences[0].quote}"</p>
                                            <p className="text-[10px] text-muted-foreground mt-1">- {concept.scripturalReferences[0].source} {concept.scripturalReferences[0].reference}</p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    )
}
