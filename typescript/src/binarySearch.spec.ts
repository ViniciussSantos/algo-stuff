import { describe, expect, it } from "vitest";
import { search } from "./binarySearch";

describe("binary search", () => {
  it("case 1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  });
  it("case 2", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
  });
});
