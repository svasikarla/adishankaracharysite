import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    variant?: "default" | "alternate"
    container?: boolean
}

export function Section({
    children,
    className,
    variant = "default",
    container = true,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "py-12 md:py-16",
                variant === "alternate"
                    ? "bg-gradient-to-br from-secondary/50 to-background dark:from-secondary/20 dark:to-background"
                    : "bg-background",
                className
            )}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    )
}
