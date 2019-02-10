const addThree = require('./addThree.js');

describe('sum()', () => {
  let num;
  describe('when num is integer', () => {
    beforeEach(() => {
      num = 10;
    });

    test('should return a larger number', () => {
      expect(addThree(num)).toBeGreaterThan(num);
    });
  });
});
