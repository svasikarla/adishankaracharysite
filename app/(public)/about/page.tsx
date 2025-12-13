import { Section } from "@/components/ui-custom/Section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-background pt-24 pb-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-6">
                        About This Project
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80">
                        <p className="text-xl leading-relaxed mb-6">
                            The <strong>Wisdom of Adi Shankaracharya</strong> is a digital knowledge base dedicated to the life, works, and philosophy of one of the greatest non-dual philosophers of India.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-accent mt-10 mb-4">Our Mission</h2>
                        <p className="mb-6">
                            In an age of information overload, finding authentic, structured, and accessible resources on Advaita Vedanta can be challenging. This project aims to bridge that gap by offering a curated, design-first experience for seekers at all levels.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li><strong>Preserve</strong> the integrity of the original Sanskrit texts.</li>
                            <li><strong>Simplify</strong> complex philosophical concepts without diluting their essence.</li>
                            <li><strong>Guide</strong> modern seekers through structured study paths.</li>
                        </ul>

                        <h2 className="text-2xl font-serif font-bold text-accent mt-10 mb-4">Editorial Guidelines</h2>
                        <p className="mb-6">
                            This site follows a non-sectarian approach, focusing on the core philosophical teachings of Adi Shankaracharya as generally accepted by the four Mathas and major traditional lineages. Translations are chosen for clarity and fidelity to traditional commentaries.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-accent mt-10 mb-4">Open Source</h2>
                        <p className="mb-8">
                            This is an open educational initiative. We believe that spiritual wisdom should be accessible to all.
                        </p>

                        <div className="flex gap-4 mt-12 pt-8 border-t border-primary/20">
                            <Link href="/contact">
                                <Button>Contact Us</Button>
                            </Link>
                            <Link href="/credits">
                                <Button variant="outline">View Sources & Credits</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
