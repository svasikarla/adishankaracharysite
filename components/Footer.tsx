import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-primary/10 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-accent">Wisdom of Adi Shankaracharya</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            A comprehensive digital knowledge base dedicated to the timeless non-dual wisdom of Advaita Vedanta.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li><Link href="/biography" className="hover:text-primary transition-colors">Biography</Link></li>
                            <li><Link href="/teachings" className="hover:text-primary transition-colors">Teachings & Texts</Link></li>
                            <li><Link href="/study-paths" className="hover:text-primary transition-colors">Study Paths</Link></li>
                            <li><Link href="/chant-counter" className="hover:text-primary transition-colors">Chant Counter</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Meta */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">About</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About this Project</Link></li>
                            <li><Link href="/credits" className="hover:text-primary transition-colors">Credits & Sources</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center border-t border-primary/10 pt-8">
                    <p className="italic text-lg text-accent mb-4 max-w-2xl mx-auto">
                        "The world is like a dream, empty and insubstantial. Realize this and be free."
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground mt-8">
                        <p>© {new Date().getFullYear()} Wisdom of Adi Shankaracharya. All rights reserved.</p>
                        <div className="flex gap-4 mt-2 md:mt-0">
                            <Link href="/credits" className="hover:text-primary">Disclaimer</Link>
                            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
