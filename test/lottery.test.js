const loterry = require('../ejercicios/lottery');

describe('minimum dollar amount is obtained', () => {
  test('should print 3 if they receive 125', () => {
    const expected = 3;
    const result = loterry(125);
    expect(expected).toBe(result);
  });
  test('should print 5 if they receive 43', () => {
    const expected = 5;
    const result = loterry(43);
    expect(expected).toBe(result);
  });
  test('should print 3 if they receive 40', () => {
    const expected = 2;
    const result = loterry(40);
    expect(expected).toBe(result);
  });
  test('should print 10000000 if they receive 1000000000', () => {
    const expected = 10000000;
    const result = loterry(1000000000);
    expect(expected).toBe(result);
  });
  test('sends an error that you cannot withdraw money because you are negative', () => {
    const expected = 'You cannot withdraw money if you owe the bank';
    const result = loterry(-5);
    expect(expected).toBe(result);
  });
  test('should print 0 if they receive 0', () => {
    const expected = 0;
    const result = loterry(0);
    expect(expected).toBe(result);
  });
  test('should print error if they receive string', () => {
    const expected = 'It must be a number';
    const result = loterry('string');
    expect(expected).toBe(result);
  });
});
