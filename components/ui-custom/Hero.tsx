import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary dark:from-background dark:via-secondary/10 dark:to-background">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors">
                            <SparklesIcon className="w-4 h-4" />
                            Advaita Vedanta Philosophy
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent leading-tight">
                            Discover the <span className="text-primary">Eternal Wisdom</span> of Adi Shankaracharya
                        </h1>

                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Explore 1200 years of profound non-dual teachings, authentic texts, and guided study paths for the modern seeker.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <Link href="/study-paths">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl shadow-lg group text-lg">
                                    Start Study Path
                                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/biography">
                                <Button variant="outline" size="lg" className="border-2 border-primary/20 text-accent hover:border-primary hover:bg-primary/5 px-8 py-6 rounded-xl text-lg">
                                    Discover His Life
                                </Button>
                            </Link>
                        </div>

                        {/* Compact Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10 max-w-lg mx-auto lg:mx-0">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">1200+</div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Years</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">100+</div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Texts</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-primary">4</div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Mathas</div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full max-w-md lg:max-w-xl">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image
                                src="/shankaracharya-meditation.png"
                                alt="Adi Shankaracharya Meditating"
                                width={600}
                                height={600}
                                className="relative rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
