const { shuffleArray } = require("./utils");

test("length", () => {
  const shuffled = shuffleArray([1, 3, 4, 5, 6]);
  expect(shuffled).toHaveLength(5);
});

test("contains", () => {
  const expected = [5, 4, 3, 2, 1];
  expect(shuffleArray([1, 2, 3, 4, 5])).toEqual(
    expect.arrayContaining(expected)
  );
});
