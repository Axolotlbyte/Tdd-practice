const capitalize = require('../functions/capitalize')

test('takes a string and returns it capitalized',() => {
    expect(capitalize('shit')).toBe('SHIT');
});