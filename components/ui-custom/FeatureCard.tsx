import Link from "next/link"
import { ArrowRightIcon, LucideIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    badge: string
    color: string
}

export function FeatureCard({ title, description, icon: Icon, href, badge, color }: FeatureCardProps) {
    return (
        <Link href={href} className="group">
            <Card className="h-full border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                            <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                            {badge}
                        </Badge>
                    </div>
                    <CardTitle className="text-lg text-accent font-serif group-hover:text-primary transition-colors">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                    <p className="text-sm text-foreground/80">{description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                    <Button variant="link" className="text-primary px-0 text-sm">
                        Explore <ArrowRightIcon className="ml-1 w-3 h-3" />
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}
