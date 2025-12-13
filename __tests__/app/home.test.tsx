import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Viewer from '@/app/page'

// Mocking components that might cause issues in jsdom or are too heavy
vi.mock('@/components/ui-custom/Hero', () => ({
    Hero: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('@/components/ui-custom/Section', () => ({
    Section: ({ children, className }: any) => <section className={className}>{children}</section>
}))

vi.mock('next/link', () => {
    return {
        __esModule: true,
        default: ({ href, children }: { href: string; children: React.ReactNode }) => {
            return <a href={href}>{children}</a>
        },
    }
})

vi.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />
}))


describe('Home Page', () => {
    it('should render without crashing', () => {
        const { container } = render(<Viewer />)
        expect(container).toBeInTheDocument()
    })

    it('should render the Hero section', () => {
        render(<Viewer />)
        expect(screen.getByTestId('hero')).toBeInTheDocument()
    })
})
