import { Section } from "@/components/ui-custom/Section"

export default function CreditsPage() {
    return (
        <div className="min-h-screen">
            <Section className="bg-background pt-24 pb-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-accent mb-6 text-center">
                        Acknowledgments & Gratitude
                    </h1>
                    <p className="text-lg text-foreground/80 leading-relaxed text-center mb-12">
                        This website is a humble effort to share the profound wisdom of Adi Shankaracharya. We are deeply grateful to the following sources and scholars whose tireless work in preserving, translating, and making these sacred teachings accessible has made this platform possible.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-card rounded-xl p-8 border border-primary/20 shadow-sm">
                            <h2 className="text-xl font-serif font-bold text-primary mb-6">Sacred Text Translations</h2>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://shlokam.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors flex items-center gap-2 font-medium">
                                        <span>Shlokam.org</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">Foundational source for Sanskrit texts with accurate transliteration and basic meanings.</p>
                                </li>
                                <li>
                                    <a href="https://sanskritdocuments.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors flex items-center gap-2 font-medium">
                                        <span>Sanskrit Documents</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">Invaluable digital library of Sanskrit texts used for verifying correct spellings and variations.</p>
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Swami Nikhilananda</span>
                                    <p className="text-sm text-muted-foreground mt-1">His English translations of the Upanishads and Atmabodha provided key interpretative insights.</p>
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Swami Chinmayananda</span>
                                    <p className="text-sm text-muted-foreground mt-1">Commentaries on Atma Bodha and Bhaja Govindam served as a primary reference for modern applicability.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-card rounded-xl p-8 border border-primary/20 shadow-sm">
                            <h2 className="text-xl font-serif font-bold text-primary mb-6">Scholarly Resources</h2>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://www.shankaracharya.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors flex items-center gap-2 font-medium">
                                        <span>Shankaracharya.org</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">A comprehensive archive of life history and lists of works.</p>
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Internet Encyclopedia of Philosophy</span>
                                    <p className="text-sm text-muted-foreground mt-1">Academic articles on Advaita Vedanta provided rigorous definitions for the philosophy section.</p>
                                </li>
                                <li>
                                    <span className="text-foreground font-medium">Stanford Encyclopedia of Philosophy</span>
                                    <p className="text-sm text-muted-foreground mt-1">Used for cross-referencing historical dates and philosophical arguments.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-base text-foreground/80 italic mb-8">
                            "We also acknowledge the countless unnamed sages and teachers who have preserved this oral tradition (`Guru-Shishya Parampara`) alive through centuries of change. It is to them that we bow."
                        </p>

                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-primary block mb-1">Disclaimer</strong>
                                This website is an educational resource created for the study and appreciation of Advaita Vedanta philosophy. All Sanskrit verses, translations, and commentaries are compiled from publicly available sources. We encourage readers to consult authentic texts and qualified teachers for proper understanding.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
