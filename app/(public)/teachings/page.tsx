"use client"

import { useState } from "react"
import { Section } from "@/components/ui-custom/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TEACHINGS, Teaching } from "@/data/teachings"
import { BookOpenIcon, FilterIcon, SparklesIcon } from "lucide-react"

export default function TeachingsPage() {
    const [filter, setFilter] = useState<'All' | Teaching['category']>('All')

    const categories = ['All', 'Prakarana Granthas', 'Stotras', 'Bhashyas']

    const filteredTeachings = filter === 'All'
        ? TEACHINGS
        : TEACHINGS.filter(t => t.category === filter)

    return (
        <div className="min-h-screen">
            <Section className="bg-background pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                        Bibliotheca
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-accent mb-6">
                        Teachings & Texts
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore the vast literary corpus of Adi Shankaracharya, from introductory texts to profound commentaries and devotional hymns.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 justify-center mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat as any)}
                            className="rounded-full"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeachings.map((teaching) => (
                        <Card key={teaching.id} className="flex flex-col hover:border-primary/40 transition-colors duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary" className="bg-secondary/50 text-xs font-normal">
                                        {teaching.category}
                                    </Badge>
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium border ${teaching.difficulty === 'Beginner' ? 'border-green-200 text-green-700 dark:text-green-400' :
                                            teaching.difficulty === 'Intermediate' ? 'border-yellow-200 text-yellow-700 dark:text-yellow-400' :
                                                'border-red-200 text-red-700 dark:text-red-400'
                                        }`}>
                                        {teaching.difficulty}
                                    </span>
                                </div>
                                <CardTitle className="font-serif text-xl text-accent">
                                    {teaching.title}
                                    <span className="block text-sm font-normal text-muted-foreground font-sanskrit mt-1">
                                        {teaching.sanskritTitle}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    {teaching.description}
                                </p>
                                {teaching.versesCount && (
                                    <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                                        <BookOpenIcon className="w-3 h-3" />
                                        <span>{teaching.versesCount} Verses</span>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="pt-2">
                                <Button variant="ghost" className="w-full justify-between group text-primary hover:text-primary hover:bg-primary/5">
                                    Start Reading
                                    <SparklesIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    )
}
