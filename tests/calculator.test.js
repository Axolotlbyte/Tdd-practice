const calculator = require('../functions/calculator')

test('A calculator object that adds',() => {
    expect(calculator.sum(2,3)).toBe(5)
})

test('A calculator object that subtracts', () => {
    expect(calculator.subtract(6,9)).toBe(-3)
})

test('A calculator object that multiplies',() => {
    expect(calculator.multiply(3,4)).toBe(12)
})


test('A calculator object that divides',() => {
    expect(calculator.divide(9,3)).toBe(3)
})