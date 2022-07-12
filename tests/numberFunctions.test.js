const each = require("jest-each").default;
const getLargest = require("../numberFucntions");

describe("numberFucntions", () => {
  test("It is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("It handles normal inputs successfully", () => {
    each([
      [[1, 2, 3], 3],
      [[9, 12, 32], 32],
      [[4, 9, 12], 12],
      // %s -> %s fill in the placeholder, use to show individual tests
    ]).test("%s -> %s", (arr, expected) => {
      expect(getLargest(...arr)).toEqual(expected);
    });
  });
});
