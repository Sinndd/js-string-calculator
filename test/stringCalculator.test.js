import { expect, test, describe } from 'vitest'
import { add } from './stringCalculator.js'

describe('testing the add function', () => {
    test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0)

    })

    test('1 returns 1', () => {
        expect(add('1')).toBe(1)
    })

    test('1,2 returns 3', () => {
        expect(add('1,2')).toBe(3)
    })

    test('1,2\n3 returns 6', () => {
        expect(add('1,2\n3')).toBe(6)
    })

    test('//;\n1;2 returns 3', () => {
        expect(add('//;\n1;2')).toBe(3)
    })

    test('throws on negative numbers', () => {
        expect(() => add('-1,2')).toThrowError(`Negatives not allowed. -1`)
    })
})