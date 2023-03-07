const Calculator = require('./calc');

describe('add()', () => {
    test('adds two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 3)).toBe(5);
    });
  
    test('adds a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, -3)).toBe(-1);
    });
  
    test('adds two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });
  
  describe('subtract()', () => {
    test('subtracts two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  
    test('subtracts a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(5, -3)).toBe(8);
    });
  
    test('subtracts two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });
  
  describe('multiply()', () => {
    test('multiplies two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  
    test('multiplies a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(2, -3)).toBe(-6);
    });
  
    test('multiplies two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
  
  describe('divide()', () => {
    test('divides two positive numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, 3)).toBe(2);
    });
  
    test('divides a positive and a negative number', () => {
      const calculator = new Calculator();
      expect(calculator.divide(6, -3)).toBe(-2);
    });
  
    test('divides two negative numbers', () => {
      const calculator = new Calculator();
      expect(calculator.divide(-6, -3)).toBe(2);
    });
  
    test('throws an error when dividing by zero', () => {
      const calculator = new Calculator();
      expect(() => calculator.divide(6, 0)).toThrow('Division by zero');
    });
  });