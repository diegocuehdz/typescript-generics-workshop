import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

//When you get two or more generics typescript becomes more carefull and only infers the top type, if you want more depth you extend to tyep type
const returnBothOfWhatIPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

it("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);
  type typeOfResult = typeof result;

  expect(result).toEqual({
    a: "a",
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeOfResult,
      {
        a: string;
        b: number;
      }
    >
  >;
});
