"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2Icon,
  CircleIcon,
  BookOpenIcon,
  ClockIcon,
  TargetIcon,
  SparklesIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "lucide-react"

export default function StudyPathsPage() {
  // Track which path sections are expanded
  const [expandedPaths, setExpandedPaths] = useState<{[key: string]: boolean}>({
    beginner: true,
    intermediate: false,
    advanced: false
  })

  // Track completed steps (stored in component state - in production, use localStorage or backend)
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: boolean}>({})

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }))
  }

  const togglePath = (pathId: string) => {
    setExpandedPaths(prev => ({
      ...prev,
      [pathId]: !prev[pathId]
    }))
  }

  const calculateProgress = (pathId: string, totalSteps: number) => {
    const completed = Object.keys(completedSteps).filter(
      key => key.startsWith(pathId) && completedSteps[key]
    ).length
    return (completed / totalSteps) * 100
  }

  const paths = [
    {
      id: "beginner",
      level: "Beginner",
      duration: "3-6 months",
      description: "Start your journey with foundational concepts and introductory texts",
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      badgeColor: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      icon: SparklesIcon,
      steps: [
        {
          id: "beginner-1",
          title: "Introduction to Advaita Vedanta Philosophy",
          description: "Understand the fundamental principles of non-dualism and the goal of Self-realization",
          duration: "2 weeks",
          resources: [
            { type: "page", title: "Core Concepts", link: "/philosophy" },
            { type: "page", title: "Biography of Shankaracharya", link: "/biography" }
          ]
        },
        {
          id: "beginner-2",
          title: "Life of Adi Shankaracharya",
          description: "Learn about the legendary philosopher's life, travels, and establishment of the four mathas",
          duration: "1 week",
          resources: [
            { type: "page", title: "Biography", link: "/biography" },
            { type: "page", title: "The Four Mathas", link: "/mathas" }
          ]
        },
        {
          id: "beginner-3",
          title: "Basic Concepts: Atman, Brahman, Maya",
          description: "Explore the three foundational concepts of Advaita philosophy",
          duration: "3-4 weeks",
          resources: [
            { type: "page", title: "Atman (Individual Soul)", link: "/philosophy/atman" },
            { type: "page", title: "Brahman (Ultimate Reality)", link: "/philosophy/brahman" },
            { type: "page", title: "Maya (Cosmic Illusion)", link: "/philosophy/maya" }
          ]
        },
        {
          id: "beginner-4",
          title: "Bhaja Govindam (Selected Verses 1-15)",
          description: "Study the opening verses of this devotional hymn that emphasizes spiritual priorities",
          duration: "2-3 weeks",
          resources: [
            { type: "page", title: "Study Bhaja Govindam", link: "/teachings/bhaja-govindam" }
          ]
        },
        {
          id: "beginner-5",
          title: "Introduction to Moksha and Liberation",
          description: "Understand the concept of liberation and freedom from the cycle of birth and death",
          duration: "2 weeks",
          resources: [
            { type: "page", title: "Moksha (Liberation)", link: "/philosophy/moksha" }
          ]
        },
        {
          id: "beginner-6",
          title: "Introduction to Meditation and Self-Inquiry",
          description: "Learn basic techniques for contemplation and turning attention inward",
          duration: "Ongoing practice",
          resources: [
            { type: "page", title: "Modern Teachers for Guidance", link: "/teachers" }
          ]
        }
      ]
    },
    {
      id: "intermediate",
      level: "Intermediate",
      duration: "6-12 months",
      description: "Deepen your understanding with systematic study of key texts",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      badgeColor: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
      icon: BookOpenIcon,
      steps: [
        {
          id: "intermediate-1",
          title: "Complete Study of Atma Bodha (68 verses)",
          description: "Systematic study of Self-Knowledge, covering the five koshas, discrimination, and direct realization",
          duration: "2-3 months",
          resources: [
            { type: "page", title: "Study Atma Bodha", link: "/teachings/atma-bodha" }
          ]
        },
        {
          id: "intermediate-2",
          title: "Complete Study of Bhaja Govindam (31 verses)",
          description: "Study all verses including Dvadasha-manjarika and Charpata Panjarika sections",
          duration: "1-2 months",
          resources: [
            { type: "page", title: "Study Bhaja Govindam", link: "/teachings/bhaja-govindam" }
          ]
        },
        {
          id: "intermediate-3",
          title: "Deep Dive into Philosophical Concepts",
          description: "Master Viveka (discrimination) and Neti Neti (negation) methods",
          duration: "2-3 months",
          resources: [
            { type: "page", title: "Viveka (Discrimination)", link: "/philosophy/viveka" },
            { type: "page", title: "Neti Neti (Not This)", link: "/philosophy/neti-neti" },
            { type: "page", title: "All Concepts", link: "/philosophy" }
          ]
        },
        {
          id: "intermediate-4",
          title: "Study of Upanishadic Quotations",
          description: "Explore the Mahavakyas (Great Sayings) and key Upanishadic teachings",
          duration: "2 months",
          resources: [
            { type: "page", title: "Four Mahavakyas", link: "/mathas" },
            { type: "external", title: "Upanishad Resources", link: "/resources" }
          ]
        },
        {
          id: "intermediate-5",
          title: "Practice of Discrimination (Viveka)",
          description: "Apply discriminative knowledge in daily life - distinguishing real from unreal",
          duration: "Ongoing practice",
          resources: [
            { type: "page", title: "Viveka Philosophy", link: "/philosophy/viveka" }
          ]
        },
        {
          id: "intermediate-6",
          title: "Introduction to Sanskrit Terms and Concepts",
          description: "Build vocabulary of essential Sanskrit philosophical terms",
          duration: "1-2 months",
          resources: [
            { type: "page", title: "Philosophical Concepts", link: "/philosophy" }
          ]
        }
      ]
    },
    {
      id: "advanced",
      level: "Advanced",
      duration: "12+ months",
      description: "Systematic study of commentaries and advanced philosophical inquiry",
      color: "bg-gradient-to-r from-orange-500 to-red-600",
      badgeColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      icon: TargetIcon,
      steps: [
        {
          id: "advanced-1",
          title: "Vivekachudamani (Complete Study)",
          description: "The 'Crest Jewel of Discrimination' - 580 verses on discernment between real and unreal",
          duration: "4-6 months",
          resources: [
            { type: "page", title: "Teachings Overview", link: "/teachings" },
            { type: "external", title: "External Resources", link: "/resources" }
          ]
        },
        {
          id: "advanced-2",
          title: "Bhagavad Gita with Shankaracharya's Commentary",
          description: "Study the Gita through the lens of Advaita Vedanta with Shankara's Bhashya",
          duration: "6-8 months",
          resources: [
            { type: "external", title: "Digital Archives", link: "/resources" },
            { type: "page", title: "Modern Teachers", link: "/teachers" }
          ]
        },
        {
          id: "advanced-3",
          title: "Selected Upanishads with Commentaries",
          description: "In-depth study of principal Upanishads: Isha, Kena, Katha, Mundaka, Mandukya",
          duration: "6-12 months",
          resources: [
            { type: "external", title: "Upanishad Texts", link: "/resources" },
            { type: "page", title: "Teachers for Guidance", link: "/teachers" }
          ]
        },
        {
          id: "advanced-4",
          title: "Brahma Sutra Bhashya (Introduction)",
          description: "Shankaracharya's masterpiece commentary on the fundamental text of Vedanta",
          duration: "12+ months",
          resources: [
            { type: "page", title: "Sacred Texts", link: "/teachings" },
            { type: "external", title: "Academic Resources", link: "/resources" }
          ]
        },
        {
          id: "advanced-5",
          title: "Upadesa Sahasri",
          description: "Thousand Teachings - prose and verse sections on direct instruction for Self-realization",
          duration: "3-4 months",
          resources: [
            { type: "external", title: "Scholarly Resources", link: "/resources" }
          ]
        },
        {
          id: "advanced-6",
          title: "Advanced Meditation and Nididhyasana",
          description: "Deep contemplation and meditative absorption in Self-knowledge",
          duration: "Ongoing practice",
          resources: [
            { type: "page", title: "Find a Teacher", link: "/teachers" }
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f3e9] via-white to-[#e9e1d3] dark:from-[#1a1814] dark:via-[#1a1814] dark:to-[#2a241e]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-[#e07c24] to-[#c06a1f] dark:from-[#e07c24]/90 dark:to-[#c06a1f]/90 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <TargetIcon className="w-10 h-10" />
              <Badge className="bg-white/20 text-white border-white/30">Learning Journeys</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Study Paths
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Structured learning journeys from beginner to advanced, designed to guide you systematically through the wisdom of Advaita Vedanta
            </p>
          </div>
        </div>

        {/* Path Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {paths.map((path) => {
            const progress = calculateProgress(path.id, path.steps.length)
            const isExpanded = expandedPaths[path.id]
            const PathIcon = path.icon

            return (
              <Card key={path.id} className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${path.color} p-3 rounded-xl`}>
                          <PathIcon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className={path.badgeColor}>{path.level}</Badge>
                        <div className="flex items-center gap-2 text-sm text-[#5a4a3f] dark:text-[#d9c5a9]">
                          <ClockIcon className="w-4 h-4" />
                          <span>{path.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24] mb-2">
                        {path.level} Path
                      </CardTitle>
                      <CardDescription className="text-base">
                        {path.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePath(path.id)}
                      className="flex-shrink-0 text-[#e07c24] hover:bg-[#e9e1d3] dark:hover:bg-[#1a1814]"
                    >
                      {isExpanded ? (
                        <ChevronUpIcon className="w-5 h-5" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#5a4a3f] dark:text-[#d9c5a9] font-medium">
                        Your Progress
                      </span>
                      <span className="text-[#e07c24] font-bold">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-[#5a4a3f]/70 dark:text-[#d9c5a9]/70">
                      {Object.keys(completedSteps).filter(key => key.startsWith(path.id) && completedSteps[key]).length} of {path.steps.length} steps completed
                    </p>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="space-y-4 pt-6 border-t border-[#e07c24]/20">
                    <h3 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-2">
                      <BookOpenIcon className="w-5 h-5" />
                      Learning Steps
                    </h3>
                    <div className="space-y-4">
                      {path.steps.map((step, stepIdx) => {
                        const isCompleted = completedSteps[step.id]
                        return (
                          <div
                            key={step.id}
                            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                              isCompleted
                                ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-500/30'
                                : 'bg-gradient-to-r from-[#f7f3e9] to-[#e9e1d3] dark:from-[#1a1814] dark:to-[#2a241e] border-[#e07c24]/20 hover:border-[#e07c24]'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              {/* Step Number/Checkbox */}
                              <button
                                onClick={() => toggleStep(step.id)}
                                className="flex-shrink-0 transition-transform hover:scale-110"
                              >
                                {isCompleted ? (
                                  <CheckCircle2Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                                ) : (
                                  <div className="w-8 h-8 rounded-full bg-white dark:bg-[#2a241e] border-2 border-[#e07c24] flex items-center justify-center">
                                    <span className="text-sm font-bold text-[#e07c24]">{stepIdx + 1}</span>
                                  </div>
                                )}
                              </button>

                              {/* Step Content */}
                              <div className="flex-1 space-y-3">
                                <div>
                                  <h4 className="text-lg font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-1">
                                    {step.title}
                                  </h4>
                                  <p className="text-sm text-[#5a4a3f] dark:text-[#d9c5a9] mb-2">
                                    {step.description}
                                  </p>
                                  <div className="flex items-center gap-2 text-xs text-[#e07c24]">
                                    <ClockIcon className="w-3 h-3" />
                                    <span className="font-medium">{step.duration}</span>
                                  </div>
                                </div>

                                {/* Resources */}
                                {step.resources.length > 0 && (
                                  <div className="space-y-2">
                                    <p className="text-xs font-semibold text-[#5a4a3f] dark:text-[#d9c5a9] uppercase tracking-wide">
                                      Resources:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {step.resources.map((resource, idx) => (
                                        <Link key={idx} href={resource.link}>
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            className="text-xs border-[#e07c24]/30 text-[#e07c24] hover:bg-[#e07c24] hover:text-white hover:border-[#e07c24]"
                                          >
                                            <BookOpenIcon className="w-3 h-3 mr-1" />
                                            {resource.title}
                                          </Button>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {/* Recommended Approach */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-white/90 dark:bg-[#2a241e]/90 border-2 border-[#e07c24]/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-serif text-[#8b5d33] dark:text-[#e07c24] flex items-center gap-3">
                <SparklesIcon className="w-6 h-6" />
                Recommended Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-3 text-lg">1. Find a Teacher</h4>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm leading-relaxed mb-4">
                    Traditional Vedanta is best learned under the guidance of a qualified teacher who can clarify doubts and provide personalized instruction.
                  </p>
                  <Link href="/teachers">
                    <Button size="sm" className="bg-[#e07c24] hover:bg-[#c06a1f] text-white">
                      Explore Teachers
                    </Button>
                  </Link>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-3 text-lg">2. Regular Study</h4>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm leading-relaxed">
                    Consistency is key. Set aside dedicated time daily for study, reflection, and meditation. Even 30 minutes daily is better than irregular longer sessions.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-3 text-lg">3. Join a Study Group</h4>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm leading-relaxed mb-4">
                    Many organizations offer structured group study programs: Chinmaya Mission, Arsha Vidya, Vedanta Society, and others.
                  </p>
                  <Link href="/resources">
                    <Button size="sm" className="bg-[#e07c24] hover:bg-[#c06a1f] text-white">
                      Find Organizations
                    </Button>
                  </Link>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#e9e1d3] to-[#f7f3e9] dark:from-[#1a1814] dark:to-[#2a241e] border border-[#e07c24]/20">
                  <h4 className="font-bold text-[#e07c24] mb-3 text-lg">4. Practice Integration</h4>
                  <p className="text-[#5a4a3f] dark:text-[#d9c5a9] text-sm leading-relaxed">
                    Vedanta is not merely intellectual. Integrate teachings through meditation, self-inquiry (atma-vichara), and ethical living (dharma).
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-[#e07c24]/10 to-[#c06a1f]/10 border-l-4 border-[#e07c24]">
                <p className="text-sm italic text-[#5a4a3f] dark:text-[#d9c5a9]">
                  <strong className="text-[#e07c24]">Note:</strong> These study paths are guidelines. Everyone's journey is unique. Some may progress faster, others slower. The goal is not speed but depth of understanding and realization. Be patient with yourself and enjoy the journey of Self-discovery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
