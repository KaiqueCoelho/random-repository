const operations = require('./exercise1');

describe ('Sum parameters a and b', () => {
  it ('Sum 4 and 5', () => {
    expect(operations.sum(4, 5)).toBe(9);
  })
  it ('Sum 0 and 0', () => {
    expect(operations.sum(0, 0)).toBe(0);
  })
  it ('Sum 4 and "5"', () => {
    expect(operations.sum(4, '5')).toBe(`parameters must be numbers`);
  })
})