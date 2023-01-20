import findsElementInArray from "./findsElementInArray";

it("returns the element when it exists in the array", function () {
  const inputArray: string[] = ["hello", "goodbye", "horseman"];
  const match: string = "horseman";
  const expected: string = "horseman";

  expect(findsElementInArray(inputArray, match)).toBe(expected);
});

it("throws an error if it doesn't match", function () {
  const inputArray: string[] = ["hi", "hello"];
  const match: string = "horseman"; // doesnt exist in array

  expect(function () {
    findsElementInArray(inputArray, match);
  }).toThrow("could not find");
});
