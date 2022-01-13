const dataCenter = require('../ejercicios/dataCenter');

describe('Print the required minimum perimeter in meters. ', () => {
  test('should print 24 if they receive 36', () => {
    const expected = 24;
    const result = dataCenter(36);
    expect(expected).toBe(result);
  });
  test('should print 28 if they receive 13', () => {
    const expected = 28;
    const result = dataCenter(13);
    expect(expected).toBe(result);
  });
  test('should print 4 if they receive 1', () => {
    const expected = 4;
    const result = dataCenter(1);
    expect(expected).toBe(result);
  });
  test('should print 0 if they receive 0', () => {
    const expected = 0;
    const result = dataCenter(0);
    expect(expected).toBe(result);
  });
});
