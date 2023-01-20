import add from "./add";

it("adds 2 numbers together and retuns the sum", function () {
  const x: number = 1;
  const y: number = 2;
  expect(add(x, y)).toBe(3);
});
