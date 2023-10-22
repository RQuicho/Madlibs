const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('single-digit number', () => {
    expect(addCommas(1234)).toBe('1,234');
  });
  test('four-digit number', () => {
    expect(addCommas(1234)).toBe('1,234');
  });
  test('large numbers', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });
  test('negative numbers', () => {
    expect(addCommas(-10)).toBe('-10');
    expect(addCommas(-5678)).toBe('-5,678');
  });
});


