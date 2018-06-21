const array = require("./array.js");

describe('arrayContaining', () => {
    const expected = [2,3];
    it("[2,3] contains in [1,2,3,4,5]", () => {
        expect(array.myArray()).toEqual(expect.arrayContaining(expected));
    });   
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    it('matches even with an unexpected number 7', () => {
      expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
        expect.arrayContaining(expected),
      );
    });
    it('does not match without an expected number 2', () => {
      expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
        expect.arrayContaining(expected),
      );
    });
});