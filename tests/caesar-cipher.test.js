const caesar = require('../functions/caesar-cipher')

test('test wrapping z to a', () => {
    expect(caesar('plothole',9)).toBe('yuxcqxun')
})

test('test wrapping z to a, Part 2', () => {
    expect(caesar('dragonballs',30)).toBe('hveksrfeppw')
})

test('case check', () => {
    expect(caesar('Oobleck',12)).toBe('Aanxqow')
})

test('case check, part 2', () => {
    expect(caesar('Bounty Hunter',12)).toBe('Nagzfk Tgzfqd')
})

test('punctuation check', () => {
    expect(caesar('Za Warudo!',6)).toBe('Fg Cgxaju!')
})

test('punctuation check, part 2', () => {
    expect(caesar('Hey! how have you been? Missed you...',37)).toBe('Spj! szh slgp jzf mppy? Xtddpo jzf...')
})