const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2.5 + 1.5 to equal 4", () => {
    expect(sum(2.5, 1.5)).toBeCloseTo(4);
});

test("adds 3 + 5", () => {
    const result = sum(3, 5);
    expect(result).toBeGreaterThan(7);
    expect(result).toBeLessThan(9);
    expect(result).toBeGreaterThanOrEqual(8);
    expect(result).toBeLessThanOrEqual(9);
    expect(result).toBe(8);

});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

test('ноль', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});