import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeatureCard } from '@/components/ui-custom/FeatureCard'
import { BookIcon } from 'lucide-react'

describe('FeatureCard Component', () => {
    const props = {
        title: 'Test Title',
        description: 'Test Description',
        icon: BookIcon,
        href: '/test-link',
        badge: 'New',
        color: 'from-red-500 to-blue-500'
    }

    it('should render title and description', () => {
        render(<FeatureCard {...props} />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
        expect(screen.getByText('Test Description')).toBeInTheDocument()
    })

    it('should render the badge', () => {
        render(<FeatureCard {...props} />)
        expect(screen.getByText('New')).toBeInTheDocument()
    })

    it('should render a link with correct href', () => {
        render(<FeatureCard {...props} />)
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/test-link')
    })
})
