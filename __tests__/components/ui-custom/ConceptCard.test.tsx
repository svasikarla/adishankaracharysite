import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ConceptCard } from '@/components/ui-custom/ConceptCard'

describe('ConceptCard Component', () => {
    const props = {
        name: 'Atman',
        desc: 'The inner self',
        link: '/philosophy/atman'
    }

    it('should render name and description', () => {
        render(<ConceptCard {...props} />)
        expect(screen.getByText('Atman')).toBeInTheDocument()
        expect(screen.getByText('The inner self')).toBeInTheDocument()
    })

    it('should render correct image source', () => {
        render(<ConceptCard {...props} />)
        const img = screen.getByRole('img', { name: 'Atman' })
        expect(img).toBeInTheDocument()
        // Next.js Image optimization usually modifies src, but basic check for concept name inclusion
        expect(img.getAttribute('src')).toContain('concept-atman')
    })

    it('should render a link with correct href', () => {
        render(<ConceptCard {...props} />)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/philosophy/atman')
    })
})
