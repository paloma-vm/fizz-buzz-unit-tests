const fb = require('../fizzbuzz')

test('Sanity check', () => {
    expect(2+2).toBe(4)
})

test('fizz check', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('buzz check', () => {
    expect(fb.BUZZ).toBe('buzz')
})

test('fizzbuzz check', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('test isFizzy', () => {
    expect(fb.isFizzy(1)).toBe(false)
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
    expect(fb.isFizzy(9)).toBe(true)
})

test('test isBuzzy', () => {
    expect(fb.isBuzzy(1)).toBe(false)
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(4)).toBe(false)
    expect(fb.isBuzzy(10)).toBe(true)
})

test('test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(1)).toBe('')
    expect(fb.fizzyBuzzy(3)).toBe('' + 'fizz')
    expect(fb.fizzyBuzzy(5)).toBe('' + 'buzz')
    expect(fb.fizzyBuzzy(15)).toBe('' + 'fizz' + 'buzz')
    expect(fb.fizzyBuzzy(30)).toBe('' + 'fizz' + 'buzz')
})

test('test fizzBuzz', () => {
    expect(fb.fizzBuzz(1)).toEqual({ count: 1, fizz: 0, buzz: 0, fizzBuzz: 0 })
    expect(fb.fizzBuzz(5)).toEqual({ count: 5, fizz: 1, buzz: 1, fizzBuzz: 0 })
    expect(fb.fizzBuzz(15)).toEqual({ count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 })
    expect(fb.fizzBuzz(30)).toEqual({ count: 30, fizz: 8, buzz: 4, fizzBuzz: 2 })
})

