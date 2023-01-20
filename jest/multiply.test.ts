import multiply from "./multiply";

it("it can multiply two numbers, and return the result", function () {
  const x: number = 2;
  const y: number = 5;
  expect(multiply(x, y)).toBe(10);
});
