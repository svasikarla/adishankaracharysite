import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility', () => {
    it('should merge class names correctly', () => {
        expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('should handle conditional classes', () => {
        expect(cn('class1', true && 'class2', false && 'class3')).toBe('class1 class2')
    })

    it('should merge tailwind classes using tailwind-merge', () => {
        expect(cn('p-4 p-2')).toBe('p-2')
        expect(cn('bg-red-500 bg-blue-500')).toBe('bg-blue-500')
    })

    it('should handle array inputs', () => {
        expect(cn(['class1', 'class2'])).toBe('class1 class2')
    })

    it('should handle undefined and null inputs', () => {
        expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2')
    })
})
