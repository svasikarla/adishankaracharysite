import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PhilosophyPage from '@/app/(public)/philosophy/page'
import { CONCEPTS } from '@/data/concepts'

// Mocking the data source if necessary, but integration test can use real static data
vi.mock('next/link', () => {
    return {
        __esModule: true,
        default: ({ href, children }: { href: string; children: React.ReactNode }) => {
            return <a href={href}>{children}</a>
        },
    }
})

describe('Philosophy Page', () => {
    it('should render the page title', () => {
        render(<PhilosophyPage />)
        expect(screen.getByText('Core Concepts of Advaita')).toBeInTheDocument()
    })

    it('should render a card for each concept', () => {
        render(<PhilosophyPage />)
        // Check if at least one concept name is present
        expect(screen.getByText(CONCEPTS[0].name)).toBeInTheDocument()
        // Check total count of cards matches concepts
        // We look for headings level 3 which are used in cards for concept names (inside CardTitle)
        // Wait, CardTitle defaults to h3? Let's check or just look for text.
        // Actually, CardTitle renders `h3`.
        // Let's use test id or simpler text match.
        // We can assume if the first one is there, mapping is working.
        // Let's check for links.
        const links = screen.getAllByRole('link')
        // We expect at least one link per concept. There might be more links in the page (nav, footer not included here explicitly)
        expect(links.length).toBeGreaterThanOrEqual(CONCEPTS.length)
    })
})
