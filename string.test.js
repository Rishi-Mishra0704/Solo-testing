const stringLength = require('./string');
test('stringLength throws an error when given an empty string', () => {
    expect(() => stringLength('')).toThrow('String must not be empty');
  });
  
  test('stringLength throws an error when given a string longer than 10 characters', () => {
    expect(() => stringLength('12345678901')).toThrow('String must not be longer than 10 characters');
  });
  
  test('stringLength returns the correct length when given a valid string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('1')).toBe(1);
    expect(stringLength('1234567890')).toBe(10);
  });