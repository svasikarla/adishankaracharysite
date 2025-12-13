"use client"

import { Section } from "@/components/ui-custom/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { STUDY_PATHS } from "@/data/study-paths"
import { ArrowRightIcon, BookOpenIcon, ClockIcon, CompassIcon, MountainIcon, MapIcon } from "lucide-react"
import Link from "next/link"

const Icons = {
    Compass: CompassIcon,
    Book: BookOpenIcon,
    Mountain: MountainIcon
}

export default function StudyPathsPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-background pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                        Sadhana Krama
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-accent mb-6">
                        Guided Study Paths
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        The tradition of Advaita Vedanta implies a structured approach: Shravana (Listening), Manana (Reflection), and Nididhyasana (Contemplation). Choose a path that fits your current stage.
                    </p>
                </div>

                <div className="space-y-12 max-w-5xl mx-auto">
                    {STUDY_PATHS.map((path, index) => {
                        const Icon = Icons[path.iconName] || MapIcon

                        return (
                            <div key={path.id} className="relative">
                                {/* Connection Line */}
                                {index !== STUDY_PATHS.length - 1 && (
                                    <div className="absolute left-[27px] top-[80px] bottom-[-48px] w-[2px] bg-primary/20 hidden md:block"></div>
                                )}

                                <Card className="border-primary/20 overflow-hidden">
                                    <div className="grid md:grid-cols-[250px_1fr] gap-0">
                                        <div className="bg-secondary/10 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-primary/10">
                                            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-4 text-primary shadow-sm z-10 relative">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="font-serif font-bold text-xl text-accent mb-2">{path.title}</h3>
                                            <Badge variant="secondary" className="mb-2">{path.level}</Badge>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <ClockIcon className="w-3 h-3" /> {path.estimatedTime}
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <p className="text-foreground/80 mb-6 text-lg">
                                                {path.description}
                                            </p>

                                            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Modules</h4>
                                            <div className="space-y-4">
                                                {path.modules.map((module, i) => (
                                                    <div key={i} className="flex flex-col sm:flex-row gap-3 sm:items-baseline p-3 rounded-lg hover:bg-secondary/5 transition-colors border border-transparent hover:border-primary/10">
                                                        <div className="flex items-center gap-3">
                                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                                                {i + 1}
                                                            </span>
                                                            <span className="font-medium text-foreground">{module.title}</span>
                                                        </div>
                                                        <span className="hidden sm:inline text-muted-foreground/50 mx-2">-</span>
                                                        <span className="text-sm text-muted-foreground flex-1">{module.description}</span>
                                                        <span className="text-xs text-muted-foreground whitespace-nowrap bg-background px-2 py-1 rounded border">
                                                            {module.duration}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex justify-end">
                                                <Button className="group">
                                                    Start This Path <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}
