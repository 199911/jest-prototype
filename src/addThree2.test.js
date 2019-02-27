let addThree = require('./addThree.js');
let sum = require('./sum.js');

// Moving jest.mock inside describe make it fail
jest.mock('./sum.js');

describe('addThree()', () => {
  const num = 10;
  describe('when mocked nested dependency by minus function', () => {
    beforeEach(() => {
      sum.mockImplementation((a , b) => a - b);
    });

    test('should return a smaller number', () => {
      console.log(addThree(num));
      expect(addThree(num)).toBeLessThan(num);
    });
  });
});

addThree = require('./addThree.js');