const sum = require('./sum.js');

describe('sum()', () => {
  let a, b;
  describe('when a = 1', () => {
    beforeEach(() => {
      a = 1;
    });

    describe('when b is positive', () => {
      beforeEach(() => {
        b = 1;
      });

      test('should return a larger number', () => {
        expect(sum(a, b)).toBeGreaterThan(a);
      });
    });

    describe('when b is positive', () => {
      beforeEach(() => {
        b = -1;
      });

      test('should return a smaller number', () => {
        expect(sum(a, b)).toBeLessThan(a);
      });
    });
  });
});
