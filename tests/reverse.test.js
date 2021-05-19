const reverseString = require('../functions/reverse')

test('takes a string and returns it reversed',() => {
    expect(reverseString('HolyMusic')).toBe('cisuMyloH')
})