import Link from "next/link"
import Image from "next/image"

interface ConceptCardProps {
    name: string
    desc: string
    link: string
}

export function ConceptCard({ name, desc, link }: ConceptCardProps) {
    return (
        <Link href={link}>
            <div className="group flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-background border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card flex items-center justify-center mb-3 border-2 border-primary/30 group-hover:border-primary group-hover:scale-105 transition-all shadow-md overflow-hidden relative">
                    <Image
                        src={`/concept-${name.toLowerCase().split(' ')[0]}.jpg`}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className="text-base md:text-lg font-serif font-bold text-accent mb-1 group-hover:text-primary transition-colors">
                    {name}
                </h3>
                <p className="text-xs text-primary">{desc}</p>
            </div>
        </Link>
    )
}
