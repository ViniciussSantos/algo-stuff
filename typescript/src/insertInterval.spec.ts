import { describe, it, expect } from "vitest";
import { majorityElement } from "./majorityElement";
import { insert } from "./insertInterval";

describe("Majority Element", () => {
  it("case 1", () => {
    expect(
      insert(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ),
    ).toStrictEqual([
      [1, 5],
      [6, 9],
    ]);
  });
  it("case 2", () => {
    expect(
      insert(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ),
    ).toStrictEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
