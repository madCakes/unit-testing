const getLargest = require("../getLargest");

describe("getLargest", () => {
  test("It is a function", () => {
    expect(typeof getLargest).toBe("function");
  });

  describe("It handles normal inputs successfully", () => {
    each([[1, 2, 3], 3][([9, 12, 32], 32)][([4, 9, 12], 12)]).test(
      "",
      (arr, expected) => {
        expect(getLargest(arr).toEqual(expected));
      }
    );
  });
});
