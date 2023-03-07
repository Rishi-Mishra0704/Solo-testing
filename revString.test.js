const reverseString = require('./revString');
test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe('');
    expect(reverseString('12345')).toBe('54321');
  });