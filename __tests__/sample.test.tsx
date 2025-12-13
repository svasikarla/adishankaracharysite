import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '@/components/ui/button'

describe('Testing Infrastructure', () => {
    it('should render a button correctly', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeInTheDocument()
    })

    it('should pass basic arithmetic', () => {
        expect(1 + 1).toBe(2)
    })
})
