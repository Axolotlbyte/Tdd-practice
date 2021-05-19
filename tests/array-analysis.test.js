const analyze = require('../functions/array-analysis')

test('func that takes an array and return avg,min,max,length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });